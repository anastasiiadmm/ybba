import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import moment from 'moment';

import { dashBoardSelector } from 'redux/dashBoard/dashBoardSlice.js';
import LessonItem from 'Containers/MainDashboard/NextLessons/LessonItem/LessonItem';
import { lessonStatuses } from 'constants.js';
import { strDateToMoment } from 'utils/date/dateUtils.js';
import { lessonTypesMapping } from 'mappings/lessons.js';


const NextLessons = () => {

    const { lessons, loading } = useSelector(dashBoardSelector)

    const [nextLessons, setNextLessons] = useState(null)

    useEffect(() => {
        if (lessons) {
            setNextLessons(lessons.filter(lesson => {
                const lessonDayDate = strDateToMoment(lesson.time_slot.day.date)
                return lesson.status === lessonStatuses.pending && lessonDayDate.isSameOrAfter(moment().startOf('day'))
            }))
        }
    }, [lessons])

    return (
        <div className='info-item info-item_high'>
            <h5 className='info-item__title'>
                <b>Следующие занятия</b>
            </h5>
            {nextLessons && nextLessons.map(lesson => {
                const lessonDescription = `${lessonTypesMapping[lesson.lesson_type]} занятие`
                return (
                    <LessonItem
                        lesson={lesson}
                        description={lessonDescription}
                    />
                )
            })}
            {loading && (
                <Spinner animation='border' variant='primary'>
                    <span className='visually-hidden'>Loading...</span>
                </Spinner>
            )}
            {(lessons && !nextLessons?.length && !loading) && (
                <>
                    <p className='info-item__text'>В ближайшем времени занятий нет.</p>
                </>
            )}
        </div>
    );
};

export default NextLessons;