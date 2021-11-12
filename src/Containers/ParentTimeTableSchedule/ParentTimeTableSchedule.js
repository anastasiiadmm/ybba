import React, { useEffect, useState, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import moment from 'moment';
import { Russian } from 'assets/vendor/flatpickr/ru';

import SidebarContainer from 'Components/SidebarContainer/SidebarContainer';
import MainTitleBlock from 'Containers/MainDashboard/MainTitleBlock/MainTitleBlock';
import Button from 'Components/Button/Button';
import FormField from 'Components/FormField/FormField';
import { getTimeSlotSchedule, lessonsSelector, clearTimeSlotsSchedule } from 'redux/lessons/lessonsSlice';
import { authSelector } from 'redux/auth/authSlice';
import {
    getNowDate,
    momentTimeToStr,
    momentDateToStr,
    strDateToMoment,
    strTimeToMoment, getDateRange
} from 'utils/date/dateUtils';
import { addClasses } from 'utils/addClasses/addClasses';
import { namesOfDaysOfWeekShort, namesOfMonths } from 'constants.js';
import { lessonTypesAbbrMapping, lessonTypesMapping } from 'mappings/lessons';

import './ParentTimeTableSchedule.css'

const DATE_RANGE = 5

const ParentTimeTableSchedule = () => {
    const dispatch = useDispatch()

    const { user } = useSelector(authSelector)
    const { timeSlotsSchedule, timeSlotsScheduleLoading } = useSelector(lessonsSelector)

    const [nowDate, setNowDate] = useState()
    const [dates, setDates] = useState(null)
    const [timeSlots, setTimeSlots] = useState(null)
    const [startOfCalendar, setStartOfCalendar] = useState(null)
    const [endOfCalendar, setEndOfCalendar] = useState(null)
    const [maxCalendarDate, setMaxCalendarDate] = useState(null)
    const [minCalendarDate, setMinCalendarDate] = useState(null)

    const setDefaultDatepickerRange = async () => {
        await setMaxCalendarDate(null)
        await setMinCalendarDate(null)
    }

    const setMaxDatepickerRange = async (start, end) => {
        console.log('Asd', !!start, !!end)
        if (!!start && !!end)
            return await setDefaultDatepickerRange()

        await setMaxCalendarDate(start.clone().add(DATE_RANGE, 'day').toDate())
        await setMinCalendarDate(start.clone().subtract(DATE_RANGE, 'day').toDate())
    }

    const setDatePickerData = async (start, end) => {
        if (start)
            await setStartOfCalendar(start)
        if (end)
            await setEndOfCalendar(end)
    }

    const setInitialDatepickerData = useCallback(async () => {
        const startOfWeek = moment().startOf('isoWeek')
        const endOfWeek = moment().endOf('isoWeek').subtract(2, 'day')

        await setDatePickerData(startOfWeek, endOfWeek)
    }, [])

    const clearDatePickerRange = async () => {
        await setStartOfCalendar(null)
        await setEndOfCalendar(null)
    }

    const toNextDay = async () => {
        await setStartOfCalendar(startOfCalendar.clone().add(1, 'day'))
        await setEndOfCalendar(endOfCalendar.clone().add(1, 'day'))
    }
    const toPrevDay = async () => {
        await setStartOfCalendar(startOfCalendar.clone().subtract(1, 'day'))
        await setEndOfCalendar(endOfCalendar.clone().subtract(1, 'day'))
    }

    const datesChangeHandler = async data => {
        const start = data[0] && moment(data[0])
        const end = data[1] && moment(data[1])

        await clearDatePickerRange()
        await setMaxDatepickerRange(start, end)
        await setDatePickerData(start, end)
    }

    const getTimeSlots = useCallback(async () => {
        await dispatch(getTimeSlotSchedule({
            userId: user.id,
            from: momentDateToStr(startOfCalendar),
            to: momentDateToStr(endOfCalendar)
        }))
    }, [dispatch, endOfCalendar, startOfCalendar, user.id])

    const sortTimeSlots = timeSlots => {
        return timeSlots
            .sort((a, b) => strDateToMoment(a.day.date) - strDateToMoment(b.day.date))
            .reduce((timeSlots, timeslot) => {
                const time = timeslot.start_time;
                timeSlots[time] = !timeSlots[time] ? [] : timeSlots[time]
                timeSlots[time].push(timeslot);

                return timeSlots;
            }, {});
    }

    useEffect(() => {
        setInitialDatepickerData()

        setNowDate(getNowDate())
        setInterval(() => {
            setNowDate(getNowDate())
        }, 1000)
    }, [setInitialDatepickerData])

    useEffect(() => {
        if (startOfCalendar && endOfCalendar) {
            dispatch(clearTimeSlotsSchedule())
            getTimeSlots()
            setDates(getDateRange(startOfCalendar, endOfCalendar))
        }
    }, [dispatch, endOfCalendar, getTimeSlots, startOfCalendar])

    useEffect(() => {
        if (timeSlotsSchedule) {
            const sortedTimeSlots = sortTimeSlots([...timeSlotsSchedule])
            setTimeSlots(sortedTimeSlots)
        }
    }, [endOfCalendar, startOfCalendar, timeSlotsSchedule])

    return (
        <SidebarContainer>
            <MainTitleBlock
                leftTitle='Расписание на неделю'
                rightTitle={nowDate}
            />
            <div className='content'>
                <div className='content__inner'>
                    <div className='calendar-big content__body'>
                        <div className='calendar-big__top'>
                            <Button to='/' className='calendar-big__close'/>
                            <div className='calendar-big__label'>Период</div>
                            <FormField className='calendar-big__field field'
                                       value={[moment(startOfCalendar).toDate(), moment(endOfCalendar).toDate()]}
                                       onChange={datesChangeHandler}
                                       type='flatpickr'
                                       configs={{
                                           mode: 'range',
                                           locale: {
                                               ...Russian,
                                               months: {
                                                   ...Russian.months,
                                                   longhand: namesOfMonths
                                               }
                                           },
                                           firstDayOfWeek: 2,
                                           dateFormat: 'd M',
                                           enableTime: false,
                                           maxDate: maxCalendarDate,
                                           minDate: minCalendarDate
                                       }}
                            />
                        </div>
                        <div className='calendar-big__btns'>
                            <button
                                type='button' className='border-0 bg-transparent'
                                onClick={toPrevDay}
                            >
                                <span className='calendar-big__prev'/>
                            </button>

                            <button
                                type='button' className='border-0 bg-transparent'
                                onClick={toNextDay}
                            >
                                <span className='calendar-big__next'/>
                            </button>
                        </div>
                        {timeSlotsScheduleLoading && (
                            <div className='spinner-center'>
                                <Spinner animation='border' role='status'>
                                    <span className='visually-hidden'>Loading...</span>
                                </Spinner>
                            </div>
                        )}
                        {timeSlotsSchedule && (
                            <div className='calendar-big__body'>
                                <div className='calendar-big__row'>
                                    <div className='calendar-big__time'/>
                                    {dates && dates.map(day => {
                                        return (
                                            <div className='calendar-big__col'>
                                                {day.date()}{' '}
                                                {namesOfDaysOfWeekShort[day.day()]}
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className='calendar-big__wrap scroll-block'>
                                    {timeSlots && Object.entries(timeSlots).sort((a, b) => {
                                        return strTimeToMoment(a) - strTimeToMoment(b)
                                    }).map(([time, timeSlotsArray]) => {
                                        return (
                                            <div className='calendar-big__row'>
                                                <div className='calendar-big__time'>
                                                    {momentTimeToStr(time)}
                                                </div>
                                                {timeSlotsArray.map(timeSlot => {
                                                    const lessons = timeSlot.lessons
                                                    return (
                                                        <>
                                                            <div className={addClasses('calendar-big__col', {
                                                                'isLesson': lessons.length,
                                                            })}>
                                                                {!!lessons.length && (
                                                                    <>
                                                                        {lessons.map(lesson => {
                                                                            return (
                                                                                <>
                                                                                <span className='isLesson__icon violet'>
                                                                                    {`${lessonTypesAbbrMapping[lesson.lesson_type]}`}
                                                                                </span>
                                                                                    <p className='isLesson__title'
                                                                                       key={lesson.id}>
                                                                                        {`${lessonTypesMapping[lesson.lesson_type]} занятие`}
                                                                                    </p>
                                                                                </>
                                                                            )
                                                                        })}
                                                                        <span className='isLesson__time'>
                                                                {momentTimeToStr(timeSlot.start_time)}
                                                            </span>
                                                                    </>
                                                                )}
                                                            </div>
                                                        </>
                                                    )
                                                })}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </SidebarContainer>
    );
};

export default ParentTimeTableSchedule;