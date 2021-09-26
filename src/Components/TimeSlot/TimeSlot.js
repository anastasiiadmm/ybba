import React from 'react';

import PropTypes from 'prop-types';

import Button from '../Button/Button';
import {addClasses} from '../../utils/addClasses/addClasses';


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
            class={addClasses('', {
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