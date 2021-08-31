import React from 'react';

import PropTypes from "prop-types";

import {addClasses} from "../../../../utils/addClasses/addClasses.js";
import BlockItem from "../BlockItem/BlockItem.js";
import './monthBlock.css'


const MonthBlock = (props) => {

    const {month, setMonth} = props

    const monthes = [
        'январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь',
        'декабрь'
    ]

    return (
        <div className='monthBlock'>
            {monthes.map((monthItem, index) => {
                return <BlockItem
                    classes={addClasses('monthItem', {
                        'monthItemActive': index+1 === month
                    })}
                    onClick={() => setMonth && setMonth(index)}
                    key={index}
                    width='100% / 3'
                >
                    {monthItem}
                </BlockItem>
            })}
        </div>
    );
}

MonthBlock.propTypes = {
    month: PropTypes.number.isRequired,
    setMonth: PropTypes.func
}

export default MonthBlock;