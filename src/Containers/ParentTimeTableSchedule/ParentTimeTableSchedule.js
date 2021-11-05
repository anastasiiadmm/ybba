import React, {useEffect, useState} from 'react';
import moment from "moment";

import SidebarContainer from "../../Components/SidebarContainer/SidebarContainer";
import MainTitleBlock from "../MainDashboard/MainTitleBlock/MainTitleBlock";
import {dashBoardSelector, getLessons} from "../../redux/dashBoard/dashBoardSlice";
import {getNowDate, strDateToMoment, strTimeToMoment} from "../../utils/date/dateUtils";
import {useDispatch, useSelector} from "react-redux";
import {authSelector} from "../../redux/auth/authSlice";
import Button from "../../Components/Button/Button";
import {generateDateRange} from "../MainDashboard/Calendar/utils";
import {getTimeSlotSchedule, lessonsSelector} from "../../redux/lessons/lessonsSlice";
import {addClasses} from "../../utils/addClasses/addClasses";
import {namesOfDaysOfWeekShort, namesOfMonths} from "../../constants";
import {lessonTypesAbbrMapping, lessonTypesMapping} from "../../mappings/lessons";
import FormField from "../../Components/FormField/FormField";
import {Russian} from "../../assets/vendor/flatpickr/ru";

const ParentTimeTableSchedule = () => {
    const dispatch = useDispatch()

    const {user} = useSelector(authSelector)

    const {lessons} = useSelector(dashBoardSelector)

    const {timeSlotsSchedule} = useSelector(lessonsSelector)

    const [nowDate, setNowDate] = useState()
    const [currentDate, setCurrentDate] = useState(moment())
    const [dates, setDates] = useState(null)
    const [activeDate, setActiveDate] = useState(moment())
    const [timeSlots, setTimeSlots] = useState(null)
    const [datesSlots, setDatesSlots] = useState(null)

    const startOfWeek = currentDate.clone().startOf('week')
    const endOfWeek = currentDate.clone().endOf('week')
    const startOfCalendar = startOfWeek.clone().subtract(startOfWeek.day() - 1, 'days')
    const endOfCalendar = endOfWeek.clone().subtract(2 - endOfWeek.day(), 'days')
    const fromFormatDate = startOfCalendar.format("DD/MM/YYYY")
    const toFormatDate = endOfCalendar.format("DD/MM/YYYY")

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
        const data = {userId: user.id, fromFormatDate, toFormatDate}
        dispatch(getTimeSlotSchedule(data))
    }, [])

    const dateOnClick = date => {
        if (date.isSame(currentDate, 'month')) {
            setActiveDate(date)
        }
    }

    useEffect(() => {
        const reducesTimeSlots = timeSlotsSchedule?.reduce((timeSlots, timeslot) => {
            const time = timeslot.start_time;
            if (!timeSlots[time]) {
                timeSlots[time] = [];
            }
            timeSlots[time].push(timeslot);
            return timeSlots;
        }, {});
        setTimeSlots(reducesTimeSlots)

    }, [timeSlotsSchedule])

    useEffect(() => {
        const reducesDatesSlots = timeSlotsSchedule?.reduce((timeSlots, timeslot) => {
            const date = timeslot.day.date;
            if (!timeSlots[date]) {
                timeSlots[date] = [];
            }
            timeSlots[date].push(timeslot);
            return timeSlots;
        }, {});
        setDatesSlots(reducesDatesSlots)

    }, [timeSlotsSchedule])

    useEffect(() => {
        if (currentDate) {
            setDates(
                generateDateRange(startOfCalendar.clone(), endOfCalendar.clone())
            )
        }
    }, [currentDate])

    const toNextWeek = () => {
        setCurrentDate(
            currentDate.clone().add(1, 'week')
        )
    }
    const toPrevWeek = () => {
        setCurrentDate(
            currentDate.clone().subtract(1, 'week')
        )
    }

    const getLessonsForDate = date => {
        return lessons?.filter(lesson => {
            return strDateToMoment(lesson.time_slot.day.date)
                .isSame(date, 'date')
        })
    }

    // const dateFromChangeHandler = date => {
    //     setDateFrom(date[0])
    //     dispatch(getTimeSlots(
    //         getGetTimesSlotsData(date[0], dateTo, selectedChild.id)
    //     ))
    // }
    // const dateToChangeHandler = date => {
    //     setDateTo(date[0])
    //     dispatch(getTimeSlots(
    //         getGetTimesSlotsData(dateFrom, date[0], selectedChild.id)
    //     ))
    // }

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
                               value={`${startOfCalendar.format("d MMM")} - ${endOfCalendar.format("d MMM")}`}
                               onChange={(str) => console.info(str)}
                               type='flatpickr'
                               data-enable-time
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
                                   minDate: startOfCalendar.format("d MMM"),
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
                        <div className="calendar-big__body">
                            <div className="calendar-big__row">
                                <div className="calendar-big__time"/>
                                {datesSlots && Object.keys(datesSlots).sort((a, b) => {
                                    return strDateToMoment(a) - strDateToMoment(b)
                                }).map(day => {
                                    const momentDate = strDateToMoment(day)
                                    return (
                                        <div className='calendar-big__col'>
                                            {momentDate.date()}{' '}
                                            {namesOfDaysOfWeekShort[momentDate.day()]}
                                        </div>
                                    )
                                })}
                                <div className='d-flex justify-content-around flex-wrap'>
                                    {/*<FormField*/}
                                    {/*    label='От'*/}
                                    {/*    type='flatpickr'*/}
                                    {/*    configs={{*/}
                                    {/*        dateFormat: 'd/m/Y',*/}
                                    {/*        enableTime: false,*/}
                                    {/*        minDate: currentDate*/}
                                    {/*    }}*/}
                                    {/*    // onChange={dateFromChangeHandler}*/}
                                    {/*    className='form__field'*/}
                                    {/*    // value={dateFrom}*/}
                                    {/*/>*/}
                                    {/*<FormField*/}
                                    {/*    label='До'*/}
                                    {/*    type='flatpickr'*/}
                                    {/*    configs={{*/}
                                    {/*        dateFormat: 'd/m/Y',*/}
                                    {/*        enableTime: false,*/}
                                    {/*        // minDate: dateFrom,*/}
                                    {/*        // maxDate: new Date().setDate(dateFrom.getDate() + 5)*/}
                                    {/*    }}*/}
                                    {/*    // onChange={dateToChangeHandler}*/}
                                    {/*    className='form__field'*/}
                                    {/*    // value={dateTo}*/}
                                    {/*/>*/}
                                </div>
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