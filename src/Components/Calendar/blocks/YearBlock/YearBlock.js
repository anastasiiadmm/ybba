import React from 'react';

import PropTypes from 'prop-types';

import {addClasses} from '../../../../utils/addClasses/addClasses.js';
import {getYearsArray} from '../../calendarUtils.js';
import BlockItem from '../BlockItem/BlockItem.js';

import './yearBlock.css'


const YearBlock = (props) => {

    const {year, setYear} = props

    const today = new Date()
    const toYear = today.getFullYear()
    const fromYear = toYear - 30

    const years = getYearsArray(fromYear, toYear).reverse()

    return (
        <div className='monthBlock'>
            {years.map((yearItem, index) => {
                return <BlockItem
                    classes={addClasses('yearItem', {
                        'yearItemActive': yearItem === year
                    })}
                    onClick={() => setYear && setYear(yearItem)}
                    key={index}
                    width='100% / 4'
                >
                    {yearItem}
                </BlockItem>
            })}
        </div>
    );
}

YearBlock.propTypes = {
    year: PropTypes.number.isRequired,
    setYear: PropTypes.func
}

export default YearBlock;