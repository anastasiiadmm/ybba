import React from 'react';

import PropTypes from 'prop-types';

import {strDateToMoment, strTimeToMoment} from 'utils/date/dateUtils.js';
import {namesOfDaysOfWeek} from 'constants.js';


const LessonItem = (props) => {

    const {
        lesson
    } = props

    const time_slot = lesson.time_slot
    const start_time = strTimeToMoment(time_slot.start_time).format('H:mm')
    const day = strDateToMoment(time_slot.day.date)
    const dayOfWeek = namesOfDaysOfWeek[day.day() - 1]

    return (
        <div className='lesson'>
            <h5 className='lesson__title'>Диагностическоe занятие</h5>
            <p className='lesson__info'>{dayOfWeek} {day.date()}-го в {start_time}.</p>
            <span className='lesson__icon lesson__icon_violet'/>
        </div>
    );
}

LessonItem.propTypes = {
    lesson: PropTypes.shape({
        time_slot: PropTypes.shape({
            start_time: PropTypes.string,
            end_time: PropTypes.string,
            day: PropTypes.shape({
                date: PropTypes.string
            })
        })
    }).isRequired
}

export default LessonItem;