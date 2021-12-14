import React from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { addClasses } from 'utils/addClasses/addClasses.js';

import 'Components/LessonDashboardComponent/lessonDashboardComponent.css'


const LessonDashboardComponent = (props) => {

    const {
        title, description, lessonId, active, lessonNumber
    } = props

    return (
        <div className={addClasses('class', {
            'inactive': !active
        })}>
            <h5 className='class__title'>{title}</h5>
            {description && (
                <p className='class__info'>{description}</p>
            )}
            <div className='class__activity'>
                <Link
                    className={addClasses('btn btn_outline', {
                        'disable_btn': !active
                    })}
                    to={`/lessons/${lessonId}/timeSlots/`}
                >
                    Записаться
                </Link>
            </div>
            <span
                className={addClasses('class__icon', {
                    'class__icon_violet': lessonNumber % 2 === 1,
                    'class__icon_pink': lessonNumber % 2 === 0,
                })}
            />
        </div>
    );
}

LessonDashboardComponent.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    lessonId: PropTypes.string.isRequired,
    active: PropTypes.bool,
    lessonNumber: PropTypes.number
}

export default LessonDashboardComponent;