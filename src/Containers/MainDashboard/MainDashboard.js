import React, {useState, useEffect} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';

import Balance from './Balance/Balance.js';
import ChildActivity from './ChildActivity/ChildActivity.js';
import LessonsInBiba from './LessonsInBiba/LessonsInBida.js';
import MainTitleBlock from './MainTitleBlock/MainTitleBlock.js';
import NextLessons from './NextLessons/NextLessons.js';
import Timetable from './Timetable/Timetable.js';
import SidebarContainer from '../../Components/SidebarContainer/SidebarContainer';
import {getTimesDay, getNowDate, strDateToMoment} from '../../utils/date/dateUtils';
import {authSelector} from '../../redux/auth/authSlice';
import UpcomingLessonBlock from './UpcomingLessonBlock/UpcomingLessonBlock';
import {getLessons, dashBoardSelector} from '../../redux/dashBoard/dashBoardSlice';
import {lessonStatuses} from '../../constants';


const MainDashboard = () => {

    const {user} = useSelector(authSelector)
    const {lessons} = useSelector(dashBoardSelector)

    const [nowDate, setNowDate] = useState()
    const [closesLesson, setClosesLesson] = useState(null)

    const dispatch = useDispatch()

    const partOfDay = getTimesDay()

    useEffect(() => {
        if (lessons) {
            const now = moment()
            const lesson = lessons.filter(function (lesson) {
                return (
                    strDateToMoment(lesson.time_slot.day.date) - now < 0 &&
                    lesson.status === lessonStatuses.new
                );
            })
            setClosesLesson(lesson[0])
        }
    }, [lessons])

    useEffect(() => {
        const data = {userId: user.id}
        dispatch(getLessons(data))

        setNowDate(getNowDate())
        setInterval(() => {
            setNowDate(getNowDate())
        }, 1000)
        // eslint-disable-next-line
    }, [])

    return (
        <SidebarContainer>
            {user && (
                <div className='main__inner'>
                    <MainTitleBlock
                        leftTitle={`${user?.profile?.first_name} ${user?.profile?.last_name}`}
                        middleTitle={partOfDay}
                        rightTitle={nowDate}
                    />
                    <div className='content'>
                        <div className='content__inner'>

                            <div className='content__row'>
                                <div className='content__col'>
                                    {closesLesson && (
                                        <UpcomingLessonBlock
                                            lesson={closesLesson}
                                        />
                                    )}
                                </div>
                            </div>

                            <div className='content__row'>
                                <div className='content__col content__col_w60'>
                                    <NextLessons/>
                                    <Timetable/>
                                </div>
                                <div className='content__col content__col_w40'>
                                    <ChildActivity/>
                                    <div className='content__row'>
                                        <LessonsInBiba/>
                                        <Balance/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </SidebarContainer>
    );
}

export default MainDashboard;