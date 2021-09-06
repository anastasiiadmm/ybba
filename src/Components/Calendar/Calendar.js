import React, {useEffect, useState} from 'react';

import moment from 'moment';
import PropTypes from 'prop-types';

import DateBlock from './blocks/DateBlock/DateBlock.js';
import MonthBlock from './blocks/MonthBlock/MonthBlock.js';
import YearBlock from './blocks/YearBlock/YearBlock.js';
import DateData from './DateData/DateData.js';

import './calendar.css'


const Calendar = (props) => {

    const {onChange, value} = props

    const today = new Date()
    const stages = {
        date: 'date',
        month: 'month',
        year: 'year'
    }

    const formatDate = date => String(date).padStart(2, '0');
    const formatMonth = month => String(month + 1).padStart(2, '0')
    const formatYear = year => String(year)

    const generateCalendarData = date => {
        return {
            date: formatDate(date.getDate()),
            month: formatMonth(date.getMonth()),
            year: formatYear(date.getFullYear())
        }
    }

    const [dateData, setDateData] = useState(generateCalendarData(today))
    const [currentStage, setCurrentStage] = useState(stages.date)

    const formatDateFormat = data => {
        const date = new Date(
            parseInt(data.year),
            parseInt(data.month)-1,
            parseInt(data.date)
        )

        return moment(date).format('DD.MM.YYYY')
    }
    const setDate = number => {
        const newData = {...dateData, date: formatDate(number)}
        setDateData(newData)
        onChange(formatDateFormat(newData))
    }
    const setMonth = month => {
        const monthDaysCount = new Date(parseInt(dateData.year), month+1, 0).getDate()
        const newData = {...dateData, month: formatMonth(month)}
        if (newData.date > monthDaysCount) {
            newData.date = monthDaysCount
        }
        setDateData(newData)
        onChange(formatDateFormat(newData))
    }
    const setYear = year => {
        const newData = {...dateData, year: formatYear(year)}
        setDateData(newData)
        onChange(formatDateFormat(newData))
    }

    useEffect(() => {
        let data = formatDateFormat(dateData)
        if (value) {
            const date = moment(value, 'DD.MM.YYYY').toDate()
            const newDateData = generateCalendarData(date)
            data = formatDateFormat(newDateData)
            setDateData(newDateData)
        }
        onChange(data)
        // eslint-disable-next-line
    }, [])

    const stageComponents = {
        [stages.date]: <DateBlock
            date={parseInt(dateData.date)}
            month={parseInt(dateData.month)}
            year={parseInt(dateData.year)}
            setDate={setDate}
        />,
        [stages.month]: <MonthBlock
            month={parseInt(dateData.month)}
            setMonth={setMonth}
        />,
        [stages.year]: <YearBlock
            year={parseInt(dateData.year)}
            setYear={setYear}
        />
    }
    const currentStageComponent = stageComponents[currentStage]

    return (
        <div className='calendarBlock'>
            <div className='dateBlock'>
                <DateData
                    stages={stages}
                    dateData={dateData}
                    currentStage={currentStage}
                    setCurrentStage={setCurrentStage}
                />
            </div>
            <div className='calendarBody'>
                {currentStageComponent}
            </div>
        </div>
    );
}

Calendar.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string
}

export default Calendar;