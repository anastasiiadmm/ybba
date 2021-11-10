import React, {useEffect, useState} from 'react';
import moment from "moment";

import SidebarContainer from "../../Components/SidebarContainer/SidebarContainer";
import MainTitleBlock from "../MainDashboard/MainTitleBlock/MainTitleBlock";
import {dashBoardSelector, getLessons} from "../../redux/dashBoard/dashBoardSlice";
import {getNowDate, strDateToMoment, strTimeToMoment} from "../../utils/date/dateUtils";
import {useDispatch, useSelector} from "react-redux";
import {authSelector} from "../../redux/auth/authSlice";
import Button from "../../Components/Button/Button";
import {getTimeSlotSchedule, lessonsSelector} from "../../redux/lessons/lessonsSlice";
import {addClasses} from "../../utils/addClasses/addClasses";
import {namesOfDaysOfWeekShort, namesOfMonths} from "../../constants";
import {lessonTypesAbbrMapping, lessonTypesMapping} from "../../mappings/lessons";
import FormField from "../../Components/FormField/FormField";
import {Russian} from "../../assets/vendor/flatpickr/ru";
import {Spinner} from "react-bootstrap";

const ParentTimeTableSchedule = () => {
    const dispatch = useDispatch()

    const {user} = useSelector(authSelector)

    const {lessons} = useSelector(dashBoardSelector)

    const {timeSlotsSchedule, timeSlotsScheduleLoading} = useSelector(lessonsSelector)

    const [nowDate, setNowDate] = useState()
    const [dates, setDates] = useState(null)
    const currentDate = moment()
    const [timeSlots, setTimeSlots] = useState(null)
    const startOfWeek = currentDate.clone().startOf('week')
    const endOfWeek = currentDate.clone().endOf('week')
    const [startOfCalendar, setStartOfCalendar] = useState(startOfWeek.clone().subtract(startOfWeek.day() - 1, 'days'))
    const [endOfCalendar, setEndOfCalendar] = useState(endOfWeek.clone().subtract(2 - endOfWeek.day(), 'days'))

    useEffect(() => {
        const data = {userId: user.id}
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
            from: moment(startOfCalendar).format("DD/MM/YYYY"),
            to: moment(endOfCalendar).format("DD/MM/YYYY")
        }))
    }, [endOfCalendar])

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

    const toNextWeek = async () => {
        await setStartOfCalendar(startOfCalendar.clone().add(1, 'day'))
        await setEndOfCalendar(endOfCalendar.clone().add(1, 'day'))
    }
    const toPrevWeek = async () => {
        await setStartOfCalendar(startOfCalendar.clone().subtract(1, 'day'))
        await setEndOfCalendar(endOfCalendar.clone().subtract(1, 'day'))
    }

    // const getLessonsForDate = date => {
    //     return lessons?.filter(lesson => {
    //         return strDateToMoment(lesson.time_slot.day.date)
    //             .isSame(date, 'date')
    //     })
    // }

    const datesChangeHandler = date => {
        setStartOfCalendar(moment(date[0]).toDate())
        setEndOfCalendar(moment(date[1]).toDate())
    }

    return (
        <SidebarContainer>
            <MainTitleBlock
                leftTitle='Расписание на неделю'
                rightTitle={nowDate}
            />
            <div className="content">
                <div className="content__inner">
                    <div className="calendar-big content__body">
                        <div className="calendar-big__top">
                            <Button to='/' className="calendar-big__close"/>
                            <div className="calendar-big__label">Период</div>
                            <FormField className="calendar-big__field field"
                               value={[moment(startOfCalendar).toDate(), moment(endOfCalendar).toDate()]}
                               onChange={datesChangeHandler}
                               type='flatpickr'
                               configs={{
                                   mode: "range",
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
                                   minDate: moment(startOfCalendar).toDate(),
                                   maxDate: moment(startOfCalendar, "DD-MM-YYYY").add(4, 'day').toDate()
                               }}
                            />
                        </div>
                        <div className="calendar-big__btns">
                            <button type="button" className="calendar-big__prev"
                                    onClick={toPrevWeek}
                            />

                            <button type="button" className="calendar-big__next"
                                    onClick={toNextWeek}
                            />
                        </div>
                        {timeSlotsScheduleLoading && (
                            <div className="spinner-center">
                                <Spinner animation='border' role='status'>
                                    <span className='visually-hidden'>Loading...</span>
                                </Spinner>
                            </div>
                        )}
                        <div className="calendar-big__body">
                            <div className="calendar-big__row">
                                <div className="calendar-big__time"/>
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
                            <div className="calendar-big__wrap scroll-block">
                                {timeSlots && Object.entries(timeSlots).sort((a, b) => {
                                    return strTimeToMoment(a) - strTimeToMoment(b)
                                }).map(([time, timeSlotsArray]) => {
                                    return (
                                        <div className='calendar-big__row'>
                                            <div className="calendar-big__time">
                                                {moment(time, 'H:m:s').format('H:mm')}
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
                                                                                <span className="isLesson__icon violet">
                                                                                    {`${lessonTypesAbbrMapping[lesson.lesson_type]}`}
                                                                                </span>
                                                                                <p className="isLesson__title"
                                                                                   key={lesson.id}>
                                                                                    {`${lessonTypesMapping[lesson.lesson_type]} занятие`}
                                                                                </p>
                                                                            </>
                                                                        )
                                                                    })}
                                                                    <span className="isLesson__time">
                                                                {moment(timeSlot.start_time, 'H:m:s').format('H:mm')}
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