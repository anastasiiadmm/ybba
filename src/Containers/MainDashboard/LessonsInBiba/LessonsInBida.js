import React, {useEffect, useState} from 'react';

import {useSelector} from 'react-redux';

import {dashBoardSelector} from 'redux/dashBoard/dashBoardSlice.js';
import {lessonStatuses} from 'constants.js';


const LessonsInBiba = () => {

    const [finishedLessons, setFinishedLessons] = useState(null)

    const {lessons} = useSelector(dashBoardSelector)

    useEffect(() => {
        if (lessons) {
            setFinishedLessons(
                lessons.filter(lesson => lesson.status === lessonStatuses.finished)
            )
        }
    }, [lessons])

    return (
        <div className='content__col content__col_w50'>
            <div className='info-item info-item_md'>
                <h5 className='info-item__title'>Занятий в Бибе</h5>
                {finishedLessons && <div className='info-item__count-lesson'>{finishedLessons.length}</div>}
            </div>
        </div>
    );
}

export default LessonsInBiba;