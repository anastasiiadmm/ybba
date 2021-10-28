import React, {useEffect, useState} from 'react';

import moment from 'moment';
import PropTypes from 'prop-types';

import {addClasses} from 'utils/addClasses/addClasses.js';


const Timer = (props) => {

    const {
        from, to
    } = props

    const [lessonLeft, setLessonLeft] = useState(new Date() - from)
    const timerFinished = (new Date() - from) >= (to - from)

    useEffect(() => {
        const interval = setInterval(() => {
            if (timerFinished) {
                clearInterval(interval)
                return
            }
            setLessonLeft(() => new Date() - from)
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [from, timerFinished])

    return (
        <div className='game__progress'>
            {!timerFinished && (
                <div className='game__progress-line'>
                    <span
                        className='game__progress-point'
                        style={
                            {
                                width: `${!timerFinished ? lessonLeft / 1000 / ((to - from) / 1000 / 100) : 100}%`
                            }
                        }
                    />
                </div>
            )}
            <div className={addClasses('game__progress-time', {
                'text-center w-100': timerFinished
            })}>
                {!timerFinished ? moment.duration((to - from) - lessonLeft, 'millisecond').humanize() : 'Урок окончен'}
            </div>
        </div>
    );
}

Timer.propTypes = {
    from: PropTypes.object.isRequired,
    to: PropTypes.object.isRequired
}

export default Timer;