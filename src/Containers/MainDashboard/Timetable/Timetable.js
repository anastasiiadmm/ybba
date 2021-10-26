import React, {useState, useEffect, useCallback} from 'react';

import moment from 'moment';
import {useSelector} from 'react-redux';

import {dashBoardSelector} from 'redux/dashBoard/dashBoardSlice.js';
import config from 'config';
import {addClasses} from 'utils/addClasses/addClasses.js';
import {namesOfDaysOfWeekShort} from 'constants.js';


const Timetable = () => {

    const [date, setDate] = useState(moment())
    const [startOfWeek, setStartOfWeek] = useState(null)
    const [endOfWeek, setEndOfWeek] = useState(null)
    const [weekData, setWeekData] = useState(null)

    const {lessons} = useSelector(dashBoardSelector)

    const currentWeekStart = moment().clone().startOf('isoWeek')

    const getDayData = useCallback(day => {
        const lesson = lessons.find(lesson => {
            return lesson.time_slot.day.date === day.format(config.dateFormat)
        })

        return {day, lesson}
    }, [lessons])

    const getWeekData = useCallback(startOfWeek => {
        const days = []
        for (let i = 0; i <= 6; i++) {
            const dayDate = moment(startOfWeek).add(i, 'days')
            days.push(
                getDayData(dayDate)
            )
        }

        return days
    }, [getDayData])

    const setWeek = useCallback(() => {
        const weekStart = date.clone().startOf('isoWeek')
        const weekEnd = date.clone().endOf('isoWeek')

        setWeekData(getWeekData(weekStart))

        setStartOfWeek(weekStart)
        setEndOfWeek(weekEnd)
    }, [date, getWeekData])

    const toNextWeek = () => {
        setDate(endOfWeek.add(1, 'days'))
    }
    const toPrevWeek = () => {
        setDate(startOfWeek.subtract(1, 'days'))
    }

    useEffect(() => {
        if (lessons) {
            setWeek()
        }
    }, [date, setWeek, lessons])

    return (
        <div className='info-item'>
            <h5 className='info-item__title'>Расписание на неделю</h5>
            <div className='calendar info-item__calendar' id='calendarWeek'>
                <div className='calendar__inner-wrap w-100'>
                    <div className='calendar__inner'>
                        {weekData && weekData.map((weekDayData, index) => {
                            const weekDayName = namesOfDaysOfWeekShort[index]
                            let dateFormat = 'DD'

                            if (weekDayData.day.month() !== currentWeekStart.month()) {
                                dateFormat = 'DD/MM'
                            }

                            if (weekDayData.day.year() !== currentWeekStart.year()) {
                                dateFormat = 'DD/MM/YYYY'
                            }

                            return (
                                <div className='calendar__item'>
                                    <div className='calendar__day'>
                                        {weekDayName}
                                    </div>
                                    <div className={addClasses('calendar__date', {
                                        'fs-6': true
                                    })}>
                                        {weekDayData.day.format(dateFormat)}
                                    </div>
                                    <button
                                        type='button'
                                        className={addClasses('calendar__btn', {
                                            'calendar__btn_pink active': !!weekDayData.lesson,
                                        })}
                                        disabled={!weekDayData.lesson}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            {/*<a href="#" className="btn btn_outline info-item__btn">Расписание</a>*/}
        </div>
    );
}

export default Timetable;