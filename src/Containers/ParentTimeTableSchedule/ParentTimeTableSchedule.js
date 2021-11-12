import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import moment from 'moment';
import { Russian } from 'assets/vendor/flatpickr/ru';

import SidebarContainer from 'Components/SidebarContainer/SidebarContainer';
import MainTitleBlock from 'Containers/MainDashboard/MainTitleBlock/MainTitleBlock';
import Button from 'Components/Button/Button';
import FormField from 'Components/FormField/FormField';

import { getLessons } from 'redux/dashBoard/dashBoardSlice';
import { getTimeSlotSchedule, lessonsSelector } from 'redux/lessons/lessonsSlice';
import { authSelector } from 'redux/auth/authSlice';

import {
    getNowDate,
    momentToFormatTime,
    momentToStringDate,
    strDateToMoment,
    strTimeToMoment
} from 'utils/date/dateUtils';
import { addClasses } from 'utils/addClasses/addClasses';
import { namesOfDaysOfWeekShort, namesOfMonths } from '../../constants';
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
    const startOfWeek = moment().startOf('isoWeek')
    const endOfWeek = moment().endOf('isoWeek')
    const [startOfCalendar, setStartOfCalendar] = useState(null)
    const [endOfCalendar, setEndOfCalendar] = useState(null)
    const [maxCalendarDate, setMaxCalendarDate] = useState(startOfCalendar.clone().add(DATE_RANGE, 'days').toDate())

    useEffect(() => {
        setStartOfCalendar(startOfWeek.clone().subtract(startOfWeek.day() - 1, 'days'))
        setEndOfCalendar(endOfWeek.clone().subtract(2 - endOfWeek.day(), 'days'))
    }, [])

    useEffect(() => {
        const data = { userId: user.id }
        dispatch(getLessons(data))

        setNowDate(getNowDate())
        setInterval(() => {
            setNowDate(getNowDate())
        }, 1000)
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        dispatch(getTimeSlotSchedule({
            userId: user.id,
            from: momentToStringDate(startOfCalendar),
            to: momentToStringDate(endOfCalendar)
        }))
    }, [dispatch, endOfCalendar, startOfCalendar, user.id])

    useEffect(() => {
        if (timeSlotsSchedule) {
            const copyTimeSlotSchedule = [...timeSlotsSchedule];

            const reducesTimeSlots = copyTimeSlotSchedule?.sort((a, b) => {
                return strDateToMoment(a.day.date) - strDateToMoment(b.day.date)
            }).reduce((timeSlots, timeslot) => {
                const time = timeslot.start_time;
                if (!timeSlots[time]) {
                    timeSlots[time] = [];
                }
                timeSlots[time].push(timeslot);
                return timeSlots;
            }, {});

            setTimeSlots(reducesTimeSlots)

            if (Object.keys(reducesTimeSlots).length) {
                setDates(reducesTimeSlots[Object.keys(reducesTimeSlots)[0]].map(timeSlot => {
                    return timeSlot.day.date
                }))
            }
        }

    }, [timeSlotsSchedule])

    const toNextDay = async () => {
        await setStartOfCalendar(startOfCalendar.clone().add(1, 'day'))
        await setEndOfCalendar(endOfCalendar.clone().add(1, 'day'))
    }
    const toPrevDay = async () => {
        await setStartOfCalendar(startOfCalendar.clone().subtract(1, 'day'))
        await setEndOfCalendar(endOfCalendar.clone().subtract(1, 'day'))
    }

    const datesChangeHandler = async date => {
        await setStartOfCalendar(moment(date[0]))
        await setEndOfCalendar(moment(date[1]))
        await setMaxCalendarDate(moment(date[0]).clone().add(DATE_RANGE - 1, 'days').toDate())
    }

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
                                           maxDate: maxCalendarDate
                                       }}
                            />
                        </div>
                        <div className='calendar-big__btns'>
                            <button type='button' className='calendar-big__prev'
                                    onClick={toPrevDay}
                            />

                            <button type='button' className='calendar-big__next'
                                    onClick={toNextDay}
                            />
                        </div>
                        {timeSlotsScheduleLoading && (
                            <div className='spinner-center'>
                                <Spinner animation='border' role='status'>
                                    <span className='visually-hidden'>Loading...</span>
                                </Spinner>
                            </div>
                        )}
                        <div className='calendar-big__body'>
                            <div className='calendar-big__row'>
                                <div className='calendar-big__time'/>
                                {dates && dates.map(day => {
                                    const momentDate = strDateToMoment(day)
                                    return (
                                        <div className='calendar-big__col'>
                                            {momentDate.date()}{' '}
                                            {namesOfDaysOfWeekShort[momentDate.day()]}
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
                                                {momentToFormatTime(time)}
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
                                                                {momentToFormatTime(timeSlot.start_time)}
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
                    </div>
                </div>
            </div>
        </SidebarContainer>
    );
};

export default ParentTimeTableSchedule;