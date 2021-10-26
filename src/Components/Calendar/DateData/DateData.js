import React from 'react';

import PropTypes from 'prop-types';

import {addClasses} from 'utils/addClasses/addClasses.js';


const DateData = (props) => {

    const {
        stages, dateData, currentStage, setCurrentStage
    } = props

    return (
            <h3>
                {Object.keys(stages).map((stage, index) => {
                    const datePart = dateData[stage]
                    const dot = index < Object.keys(stages).length - 1 ? '.' : ''

                    const classes = addClasses('dateBlockItem', {
                        'dateBlockItemActive': stages[stage] === currentStage
                    })
                    return <React.Fragment key={index}>
                                    <span
                                        className={classes}
                                        onClick={() => setCurrentStage && setCurrentStage(stages[stage])}
                                    >{datePart}</span>{dot}
                    </React.Fragment>
                })}
            </h3>
    );
}

DateData.propTypes = {
    stages: PropTypes.object.isRequired,
    dateData: PropTypes.object.isRequired,
    currentStage: PropTypes.string.isRequired,
    setCurrentStage: PropTypes.func
}

export default DateData;