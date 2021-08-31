import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {userSelector} from "../../../redux/user/userSlice.js";
import {getNowDate, getTimesDay} from "../../../utils/date/dateUtils.js";

const MainTitleBlock = () => {

    const [nowDate, setNowDate] = useState()
    const {user} = useSelector(userSelector)

    const partOfDay = getTimesDay()

    useEffect(() => {
        setNowDate(getNowDate())
        const interval = setInterval(() => {
            setNowDate(getNowDate())
        }, 1000)
        // return clearInterval(interval)
    }, [])

    return (
        <div className="main__title-block">
            <h1 className="main__title">{user.profile.first_name} {user.profile.last_name}, <span className="times-day">{partOfDay}</span></h1>
            <div className="main__date">{nowDate}</div>
        </div>
    );
}

export default MainTitleBlock;