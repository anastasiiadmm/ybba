import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import Balance from 'Containers/MainDashboard/Balance/Balance.js';
import MainTitleBlock from 'Containers/MainDashboard/MainTitleBlock/MainTitleBlock.js';
import NextLessons from 'Containers/MainDashboard/NextLessons/NextLessons.js';
import SidebarContainer from 'Components/SidebarContainer/SidebarContainer';
import { getTimesDay, getNowDate, strDateToMoment } from 'utils/date/dateUtils.js';
import { authSelector } from 'redux/auth/authSlice.js';
import UpcomingLessonBlock from 'Containers/MainDashboard/UpcomingLessonBlock/UpcomingLessonBlock';
import { getLessons, dashBoardSelector, getTeacherLesson } from 'redux/dashBoard/dashBoardSlice.js';
import { lessonStatuses, userRoles } from 'constants.js';
import Calendar from 'Containers/MainDashboard/Calendar/Calendar';
import { checkUserRole } from 'utils/user.js';
import ChildData from 'Containers/ChildProfiles/ChildData/ChildData.js';
import Modal from 'Components/Modal/Modal.js';


const MainDashboard = () => {

    const { user } = useSelector(authSelector)
    const { lessons, lesson } = useSelector(dashBoardSelector)

    const [nowDate, setNowDate] = useState()
    const [closesLesson, setClosesLesson] = useState(null)
    const [childProfileModalIsOpen, setChildProfileModalIsOpen] = useState(false)

    const dispatch = useDispatch()

    const partOfDay = getTimesDay()

    const toggleChildProfileModal = () => setChildProfileModalIsOpen(!childProfileModalIsOpen)

    useEffect(() => {
        if (lessons) {
            const now = moment()
            const lesson = lessons.filter(function (lesson) {
                const lessonDayDate = strDateToMoment(lesson.time_slot.day.date)
                return (
                    lesson?.time_slot && lessonDayDate - now < 0 &&
                    lesson.status === lessonStatuses.pending && lessonDayDate.isSame(moment().startOf('day'))
                );
            })
            setClosesLesson(lesson[0])
        }
    }, [lessons])

    useEffect(() => {
        if (lesson) {
            setClosesLesson(lesson)
        }
    }, [lesson])

    useEffect(() => {
        const data = {
            userId: user.id,
            query: { status: lessonStatuses.pending }
        }

        if (checkUserRole(userRoles.parent)) {
            dispatch(getLessons(data))
        } else if (checkUserRole(userRoles.therapist)) {
            dispatch(getTeacherLesson())
        }

        setNowDate(getNowDate())
        setInterval(() => {
            setNowDate(getNowDate())
        }, 1000)
        // eslint-disable-next-line
    }, [])

    return (
        <>
            {checkUserRole(userRoles.therapist) && closesLesson && (
                <Modal
                    isOpen={childProfileModalIsOpen}
                    toggle={toggleChildProfileModal}
                    width={40}
                >
                    <ChildData
                        childProfile={closesLesson.student}
                    />
                </Modal>
            )}
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
                                                toggleModal={toggleChildProfileModal}
                                            />
                                        )}
                                    </div>
                                </div>

                                <div className='content__row'>
                                    <div className='content__col content__col_w60'>
                                        {checkUserRole(userRoles.parent) && (
                                            <NextLessons/>
                                        )}
                                    </div>
                                    {checkUserRole(userRoles.parent) && (
                                        <div className='content__col content__col_w40'>
                                            <Balance/>
                                            <Calendar/>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </SidebarContainer>
        </>
    );
}

export default MainDashboard;