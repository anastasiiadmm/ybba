import React, {useEffect, useState} from 'react';
import moment from "moment";

import SidebarContainer from "../../Components/SidebarContainer/SidebarContainer";
import MainTitleBlock from "../MainDashboard/MainTitleBlock/MainTitleBlock";
import {dashBoardSelector, getLessons} from "../../redux/dashBoard/dashBoardSlice";
import {getNowDate, strDateToMoment} from "../../utils/date/dateUtils";
import {useDispatch, useSelector} from "react-redux";
import {authSelector} from "../../redux/auth/authSlice";
import Button from "../../Components/Button/Button";
import {namesOfDaysOfWorkWeekShort} from "../../constants";
import {addClasses} from "../../utils/addClasses/addClasses";
import {generateDateRange} from "../MainDashboard/Calendar/utils";

const ParentTimeTableSchedule = () => {
    const dispatch = useDispatch()

    const {user} = useSelector(authSelector)

    const {lessons} = useSelector(dashBoardSelector)

    const [nowDate, setNowDate] = useState()
    const [currentDate, setCurrentDate] = useState(moment())
    const [dates, setDates] = useState(null)
    const [activeDate, setActiveDate] = useState(moment())

    useEffect(() => {
        const data = {userId: user.id}
        dispatch(getLessons(data))

        setNowDate(getNowDate())
        setInterval(() => {
            setNowDate(getNowDate())
        }, 1000)
        // eslint-disable-next-line
    }, [])

    const dateOnClick = date => {
        if (date.isSame(currentDate, 'month')) {
            setActiveDate(date)
        }
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

    const getLessonsForDate = date => {
        return lessons?.filter(lesson => {
            return strDateToMoment(lesson.time_slot.day.date)
                .isSame(date, 'date')
        })
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
                            <Button to='/' className="calendar-big__close" />
                            <div className="calendar-big__label">Период</div>
                            <input className="calendar-big__field field" type="text" value="09 Авг - 13 Авг" />
                        </div>
                        <div className="calendar-big__btns">
                            <button type="button" className="calendar-big__prev"
                                    onClick={toPrevMonth}/>

                            <button type="button" className="calendar-big__next"
                                    onClick={toNextMonth}/>
                        </div>
                        <div className="calendar-big__body">
                            <div className="calendar-big__row">
                                <div className="calendar-big__time" />
                                {namesOfDaysOfWorkWeekShort.map((dayOfWeek, idx) => {
                                    return <div key={idx} className="calendar-big__col">{dayOfWeek}</div>
                                })}
                                {dates && dates.map((date, idx) => {
                                    console.log(date)

                                    const lessonsForDay = getLessonsForDate(date)

                                    return (
                                        <span
                                            key={idx}
                                            className={addClasses('datepick__cell', {
                                                'prev': !date.isSame(currentDate, 'month'),
                                                'violet selected': activeDate.isSame(date, 'date'),
                                                'isLesson': !!lessonsForDay?.length
                                            })}
                                            onClick={() => dateOnClick(date)}
                                        >
                                                {date.date()}
                                            </span>
                                    )
                                })}
                            </div>
                            <div className="calendar-big__wrap scroll-block">
                                <div className="calendar-big__row">
                                    <div className="calendar-big__time">07:00</div>
                                    <div className="calendar-big__col"></div>
                                    <div className="calendar-big__col isLesson">
                                        <span className="isLesson__icon violet">Дг</span>
                                        <p className="isLesson__title">Диагностическое занятие</p>
                                        <span className="isLesson__time">07:00</span>
                                    </div>
                                    <div className="calendar-big__col"></div>
                                    <div className="calendar-big__col"></div>
                                    <div className="calendar-big__col isLesson">
                                        <span className="isLesson__icon pink">Дг</span>
                                        <p className="isLesson__title">Диагностическое занятие</p>
                                        <span className="isLesson__time">07:00</span>
                                    </div>
                                </div>
                                <div className="calendar-big__row">
                                    <div className="calendar-big__time">07:30</div>
                                    <div className="calendar-big__col"></div>
                                    <div className="calendar-big__col"></div>
                                    <div className="calendar-big__col"></div>
                                    <div className="calendar-big__col"></div>
                                    <div className="calendar-big__col"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SidebarContainer>
    );
};

export default ParentTimeTableSchedule;