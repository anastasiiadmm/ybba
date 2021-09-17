import React, {useState, useEffect} from 'react';

import {useSelector} from 'react-redux';

import Balance from './Balance/Balance.js';
import ChildActivity from './ChildActivity/ChildActivity.js';
import LessonsInBiba from './LessonsInBiba/LessonsInBida.js';
import MainTitleBlock from './MainTitleBlock/MainTitleBlock.js';
import NextLessons from './NextLessons/NextLessons.js';
import Timetable from './Timetable/Timetable.js';
import SidebarContainer from '../../Components/SidebarContainer/SidebarContainer';
import {getTimesDay, getNowDate} from '../../utils/date/dateUtils';
import {authSelector} from '../../redux/auth/authSlice';


const MainDashboard = () => {

    const {user} = useSelector(authSelector)

    const [nowDate, setNowDate] = useState()

    const partOfDay = getTimesDay()

    useEffect(() => {
        setNowDate(getNowDate())
        setInterval(() => {
            setNowDate(getNowDate())
        }, 1000)
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