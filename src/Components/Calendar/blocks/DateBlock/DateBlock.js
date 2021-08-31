import React from 'react';

import PropTypes from "prop-types";

import {addClasses} from "../../../../utils/addClasses/addClasses.js";
import {getDaysArray} from "../../calendarUtils.js";
import BlockItem from "../BlockItem/BlockItem.js";

import './dateBlock.css'


const DateBlock = (props) => {

    const {month, year, date, setDate} = props
    const dates = getDaysArray(month, year)

    return (
        <div className='blockDate'>
            {dates.map(dateItem => {
                return <BlockItem
                    classes={addClasses('dateItemDate', {
                        'dateItemDateActive': date === dateItem
                    })}
                    key={dateItem}
                    onClick={() => setDate(dateItem)}
                    width='100% / 7'
                >
                    {dateItem}
                </BlockItem>
            })}
        </div>
    );
}

DateBlock.propTypes = {
    month: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    date: PropTypes.number.isRequired,
    setDate: PropTypes.func
}

export default DateBlock;