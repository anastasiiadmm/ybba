import React from 'react';

import 'Components/Surveys/Common/common.css'

const SurveySubmitButton = (props) => {

    const {
        children
    } = props

    return (
        <button className='protocol__submit' {...props} >
            {children}
        </button>
    );
}

export default SurveySubmitButton;