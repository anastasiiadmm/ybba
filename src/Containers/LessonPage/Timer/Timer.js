import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import moment from 'moment'

import { strTimeToMoment, getCurrentTime } from 'utils/date/dateUtils.js';

const Timer = (props) => {

    const {
        startTime, endTime
    } = props

    const startTimeMoment = strTimeToMoment(startTime)
    const endTimeMoment = strTimeToMoment(endTime)

    const [hours, setHours] = useState(null)
    const [minutes, setMinutes] = useState(null)
    const [seconds, setSeconds] = useState(null)

    const checkIfLessonFinished = () => {
        return (
            hours < 0 &&
            minutes < 0 &&
            seconds < 0
        )
    }

    useEffect(() => {
        setInterval(() => {
            const currentTime = getCurrentTime()
            const duration = moment.duration(endTimeMoment.diff(currentTime));
            setHours(parseInt(duration.asHours()))
            setMinutes(parseInt(duration.asMinutes()) % 60)
            setSeconds(parseInt(duration.asSeconds()) % 60)
        }, 1000)
    }, [])

    return (
        <p className='gamef__time'>
            {checkIfLessonFinished() ?
                'Урок окончен' :
                `До конца занятия ${hours}:${minutes}:${seconds}`
            }
        </p>
    );
}

Timer.propTypes = {
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired
}

export default Timer;