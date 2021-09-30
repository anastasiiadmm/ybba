import React from 'react';

import PropTypes from 'prop-types';

import Button from '../Button/Button';
import {addClasses} from '../../utils/addClasses/addClasses';

import './timeSlot.css';


const TimeSlot = (props) => {

    const {
        children, onClick, isActive, timeSlot
    } = props

    const timeSlotOnClick = () => {
        onClick(timeSlot)
    }

    return (
        <Button
            type='button'
            onClick={timeSlotOnClick}
            className={addClasses('timeSlot', {
                'active': isActive
            })}
        >
            {children}
        </Button>
    );
}

TimeSlot.propTypes = {
    onClick: PropTypes.func,
    isActive: PropTypes.bool,
    timeSlot: PropTypes.object
}

export default TimeSlot;