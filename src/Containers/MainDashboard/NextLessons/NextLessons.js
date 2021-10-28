import React, {useState, useEffect} from 'react';

import {useSelector} from 'react-redux';
import {Spinner} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import {dashBoardSelector} from 'redux/dashBoard/dashBoardSlice.js';
import LessonItem from 'Containers/MainDashboard/NextLessons/LessonItem/LessonItem';
import {lessonStatuses} from 'constants.js';


const NextLessons = () => {

    const {lessons, loading} = useSelector(dashBoardSelector)

    const [newLessons, setNewLessons] = useState(null)

    useEffect(() => {
        if (lessons) {
            setNewLessons(lessons.filter(lesson => lesson.status === lessonStatuses.new))
        }
    }, [lessons])

    return (
        <div className='info-item info-item_high'>
            <h5 className='info-item__title'>
                <b>Следующие занятия</b>
            </h5>
            {newLessons && newLessons.map(lesson => {
                return (
                    <LessonItem
                        lesson={lesson}
                    />
                )
            })}
            {loading && (
                <Spinner animation='border' variant='primary'>
                    <span className='visually-hidden'>Loading...</span>
                </Spinner>
            )}
            {(lessons && !lessons.length && !loading) && (
                <>
                    <p className='info-item__text'>В ближайшем времени занятий нет.</p>
                    <Link
                        className='btn info-item__btn'
                        to='/by-lesson/'
                    >
                        Купить занятие
                    </Link>
                </>
            )}
        </div>
    );
};

export default NextLessons;