import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import { IconButton } from '@mui/material';


const UpcomingLessonBlock = (props) => {

    const {
        lesson, toggleModal
    } = props

    const humanize = timestamp => {
        return moment.duration(timestamp, 'millisecond').humanize()
    }

    const now = moment()

    const timeSlot = lesson.time_slot
    const start_time = moment(timeSlot.start_time, 'H:mm')
    const end_time = moment(timeSlot.end_time, 'H:mm')

    const [lessonPassed, setLessonPassed] = useState(now - start_time)
    const [lessonFinishedIn, setLessonFinishedIn] = useState(now - end_time)
    const [text, setText] = useState(null)

    useEffect(() => {
        setInterval(() => {
            const now = moment()
            const newLessonPassed = now - start_time
            const newLessonStartsIn = start_time - now
            const newLessonFinishedIn = now - end_time

            setLessonPassed(newLessonPassed)
            setLessonFinishedIn(newLessonFinishedIn)

            let newText = `Занятие начнется через ${humanize(newLessonStartsIn)}`

            if (newLessonPassed > 0) {
                newText = `Урок идёт ${humanize(newLessonPassed)}`
            }
            if (newLessonFinishedIn > 0) {
                newText = `Урок закончился ${humanize(newLessonFinishedIn)} назад`
            }

            setText(newText)

        }, 1000)
    }, [end_time, start_time])

    return (
        <>
            {text && (
                <div className='info-item info-item_row'>
                    <div className='lesson lesson_near'>
                        <h5 className='lesson__title'>
                            <b>Диагностическоe занятие</b>
                        </h5>
                        <p className='lesson__info'>{text}</p>
                        <span className='lesson__icon lesson__icon_orange'/>
                    </div>
                    {lessonPassed > 0 && lessonFinishedIn < 0 && (
                        lesson && (
                            <Link
                                className='btn info-item__btn'
                                to={`/lessons/${lesson.id}/`}
                            >
                                Открыть занятие
                            </Link>
                        )
                    )}
                    <div>
                        <IconButton onClick={toggleModal}>
                            <ChildCareIcon fontSize='large'/>
                        </IconButton>
                    </div>
                </div>
            )}
        </>
    );
}

UpcomingLessonBlock.propTypes = {
    lesson: PropTypes.shape({
        lesson_type: PropTypes.string,
        time_slot: PropTypes.shape({
            start_time: PropTypes.string,
            end_time: PropTypes.string,
            day: PropTypes.shape({
                date: PropTypes.string
            })
        })
    }).isRequired,
    toggleModal: PropTypes.func
}

export default UpcomingLessonBlock;
