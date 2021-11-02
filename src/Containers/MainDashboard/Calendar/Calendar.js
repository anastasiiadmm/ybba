import React, { useState, useEffect } from 'react';

import moment from 'moment';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { namesOfDaysOfWeekShort, namesOfMonths, namesOfDaysOfWeek } from 'constants.js';
import { generateDateRange } from 'Containers/MainDashboard/Calendar/utils';
import { addClasses } from 'utils/addClasses/addClasses.js';
import { dashBoardSelector } from 'redux/dashBoard/dashBoardSlice.js';
import { strDateToMoment } from 'utils/date/dateUtils.js';


const Calendar = () => {

    const [currentDate, setCurrentDate] = useState(moment())
    const [dates, setDates] = useState(null)
    const [activeDate, setActiveDate] = useState(moment())
    const [lessonsForDate, setLessonsForDate] = useState([])

    const { lessons } = useSelector(dashBoardSelector)

    const toNextMonth = () => {
        setCurrentDate(
            currentDate.clone().add(1, 'month')
        )
    }
    const toPrevMonth = () => {
        setCurrentDate(
            currentDate.clone().subtract(1, 'month')
        )
    }
    const dateOnClick = date => {
        if (date.isSame(currentDate, 'month')) {
            setActiveDate(date)
        }
    }

    const getLessonsForDate = date => {
        return lessons?.filter(lesson => {
            return lesson?.time_slot && strDateToMoment(lesson.time_slot.day.date)
                .isSame(date, 'date')
        })
    }

    useEffect(() => {
        if (currentDate) {
            const startOfMont = currentDate.clone().startOf('month')
            const endOfMonth = currentDate.clone().endOf('month')
            const startOfCalendar = startOfMont.clone().subtract(startOfMont.day() - 1, 'days')
            const endOfCalendar = endOfMonth.clone().add(7 - endOfMonth.day(), 'days')

            setDates(
                generateDateRange(startOfCalendar.clone(), endOfCalendar.clone())
            )
        }
    }, [currentDate])

    useEffect(() => {
        if (activeDate) {
            setLessonsForDate(
                getLessonsForDate(activeDate)
            )
        }
        // eslint-disable-next-line
    }, [activeDate])

    useEffect(() => {
        if (lessons) {
            setLessonsForDate(
                getLessonsForDate(activeDate)
            )
        }
        // eslint-disable-next-line
    }, [lessons])


    return (
        <div className='info-item'>
            {lessons && (
                <div className='calendar-box'>
                    <div className='calendar-box__datepick'>
                        <div className='datepick'>
                            <div className='datepick__head'>
                                <button
                                    type='button'
                                    className='datepick__btn-prev'
                                    onClick={toPrevMonth}
                                />
                                <div className='datepick__month'>
                                    {namesOfMonths[currentDate.month()]}{' '}
                                    {currentDate.year()}
                                </div>
                                <button
                                    type='button'
                                    className='datepick__btn-next'
                                    onClick={toNextMonth}
                                />
                            </div>
                            <div className="datepick__main">
                                <div className="datepick__days">
                                    <div className="datepick__days-week">
                                        {namesOfDaysOfWeekShort.map((dayOfWeek, idx) => {
                                            return <span key={idx}>{dayOfWeek}</span>
                                        })}
                                    </div>
                                    <div className="datepick__grid">
                                        {dates && dates.map((date, idx) => {

                                            const lessonsForDay = getLessonsForDate(date)

                                            return (
                                                <span
                                                    key={idx}
                                                    className={addClasses('datepick__cell', {
                                                        'prev': !date.isSame(currentDate, 'month'),
                                                        'violet selected': activeDate.isSame(date, 'date'),
                                                        'isLesson': !!lessonsForDay.length
                                                    })}
                                                    onClick={() => dateOnClick(date)}
                                                >
                                                {date.date()}
                                            </span>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {lessons && lessonsForDate?.map((lesson, idx) => {
                        const time_slot = lesson.time_slot
                        const date = strDateToMoment(time_slot.day.date)
                        const start_time = time_slot.start_time
                        return (
                            <div className="calendar-box__info" key={idx}>
                                <div className="calendar-box__date">
                                    <b>{namesOfMonths[date.month()]} {date.date()},</b>
                                    <span>{namesOfDaysOfWeek[date.day() - 1]}</span></div>
                                <div className="calendar-box__lesson">
                                    <div className="calendar-box__lesson-time">{start_time}</div>
                                    <div className="calendar-box__lesson-info violet">
                                        <span className="calendar-box__lesson-duration">45 минут</span>
                                        <Link className='info-item__link' to='/timetable-schedule'>Подробнее</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    );
}

export default Calendar;