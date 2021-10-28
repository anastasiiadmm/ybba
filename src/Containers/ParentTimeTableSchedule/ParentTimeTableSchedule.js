import React, {useEffect, useState} from 'react';
import moment from "moment";

import SidebarContainer from "../../Components/SidebarContainer/SidebarContainer";
import MainTitleBlock from "../MainDashboard/MainTitleBlock/MainTitleBlock";
import {dashBoardSelector, getLessons} from "../../redux/dashBoard/dashBoardSlice";
import {getNowDate, strDateToMoment} from "../../utils/date/dateUtils";
import {useDispatch, useSelector} from "react-redux";
import {authSelector} from "../../redux/auth/authSlice";
import Button from "../../Components/Button/Button";
import {generateDateRange} from "../MainDashboard/Calendar/utils";

const ParentTimeTableSchedule = () => {
    const dispatch = useDispatch()

    const {user} = useSelector(authSelector)

    const {lessons} = useSelector(dashBoardSelector)

    const [nowDate, setNowDate] = useState()
    const [currentDate, setCurrentDate] = useState(moment())
    const [dates, setDates] = useState(null)
    const [activeDate, setActiveDate] = useState(moment())

    const startOfWeek = currentDate.clone().startOf('week')
    const endOfWeek = currentDate.clone().endOf('week')
    const startOfCalendar = startOfWeek.clone().subtract(startOfWeek.day() - 1, 'days')
    const endOfCalendar = endOfWeek.clone().subtract(2 - endOfWeek.day(), 'days')

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
                            <input className="calendar-big__field field" type="text"
                                   value={`${startOfCalendar.format("DD MMM")} - ${endOfCalendar.format("DD MMM")}`}
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
                                <div className="calendar-big__time" />
                                {dates && dates.map((date, idx) => {
                                    return (
                                        <div className="calendar-big__col" key={idx}>
                                            {date.format('DD, ddd')}
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="calendar-big__wrap scroll-block">
                                <div className="calendar-big__row">
                                    <div className="calendar-big__time">07:00</div>
                                    <div className="calendar-big__col" />
                                    <div className="calendar-big__col isLesson">
                                        <span className="isLesson__icon violet">Дг</span>
                                        <p className="isLesson__title">Диагностическое занятие</p>
                                        <span className="isLesson__time">07:00</span>
                                    </div>
                                    <div className="calendar-big__col" />
                                    <div className="calendar-big__col" />
                                    <div className="calendar-big__col isLesson">
                                        <span className="isLesson__icon pink">Дг</span>
                                        <p className="isLesson__title">Диагностическое занятие</p>
                                        <span className="isLesson__time">07:00</span>
                                    </div>
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