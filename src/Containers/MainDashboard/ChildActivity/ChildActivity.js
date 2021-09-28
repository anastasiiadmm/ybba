import React, {useState, useEffect, useCallback} from 'react';

import moment from 'moment';
import {useSelector} from 'react-redux';

import {dashBoardSelector} from '../../../redux/dashBoard/dashBoardSlice';
import {strDateToMoment} from '../../../utils/date/dateUtils';
import {lessonStatuses} from '../../../constants';


const ChildActivity = () => {

    const [finishedLessons, setFinishiedLessons] = useState(null)

    const {lessons} = useSelector(dashBoardSelector)

    const now = moment()

    const setLessons = useCallback(() => {
        if (lessons) {
            const startOfWeek = now.clone().startOf('isoWeek')
            const endOfWeek = now.clone().endOf('isoWeek')

            setFinishiedLessons(
                lessons.filter(lesson => {
                    return (
                        strDateToMoment(lesson.time_slot.day.date).isBetween(startOfWeek, endOfWeek) &&
                        lesson.status === lessonStatuses.finished)
                })
            )
        }
    }, [lessons, now])

    useEffect(() => {
        setLessons()
    }, [lessons, setLessons])

    return (
        <div className='info-item info-item_high'>
            <h5 className='info-item__title'>Активность Ребенка</h5>
            {finishedLessons && finishedLessons.map(() => {
                return (
                    <div className='lesson'>
                        <h5 className='lesson__title'><span>Диагностическоe занятие</span>
                        </h5>
                        <div className='lesson__links'>
                            {/*<a href="#">Речевая карта</a>*/}
                            {/*<a href="#">Домашнее задание</a>*/}
                        </div>
                        <span className='lesson__icon lesson__icon_violet'/>
                    </div>
                )
            })}
            {!finishedLessons?.length && <p className='info-item__text'>Нет активности.</p>}
        </div>
    );
}

export default ChildActivity;