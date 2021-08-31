import React from 'react';
import {useSelector} from "react-redux";
import Container from "../../Components/Container/Container.js";
import SideBar from "../../Components/SideBar/SideBar.js";
import {userSelector} from "../../redux/user/userSlice.js";
import Balance from "./Balance/Balance.js";
import ChildActivity from "./ChildActivity/ChildActivity.js";
import LessonsInBiba from "./LessonsInBiba/LessonsInBida.js";
import MainTitleBlock from "./MainTitleBlock/MainTitleBlock.js";
import NextLessons from "./NextLessons/NextLessons.js";
import Timetable from "./Timetable/Timetable.js";

const MainDashboard = () => {

    const {user} = useSelector(userSelector)

    return (
        <Container>
            <SideBar/>
            {user && (
                <main className="main">
                    <div className="main__inner">
                        <MainTitleBlock/>
                        <div className="content">
                            <div className="content__inner">
                                <div className="content__row">
                                    <div className="content__col content__col_w60">
                                        <NextLessons/>
                                        <Timetable/>
                                    </div>
                                    <div className="content__col content__col_w40">
                                        <ChildActivity/>
                                        <div className="content__row">
                                            <LessonsInBiba/>
                                            <Balance/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            )}
        </Container>
    );
}

export default MainDashboard;