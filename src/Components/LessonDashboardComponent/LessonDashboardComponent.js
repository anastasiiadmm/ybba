import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const LessonDashboardComponent = (props) => {

    const {
        title, description
    } = props

    return (
        <div className='class'>
            <h5 className='class__title'>{title}</h5>
            {description && (
                <p className='class__info'>{description}</p>
            )}
            <div className='class__activity'>
                <Button
                    className='btn btn_outline'
                    to='/lessons/timeSlots/'
                >
                    Записаться
                </Button>
            </div>
            <span className='class__icon class__icon_violet'/>
        </div>
    );
}

LessonDashboardComponent.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
}

export default LessonDashboardComponent;