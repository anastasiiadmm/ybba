import React from 'react';

const SpeechCardSubBlockTitle = (props) => {

    const {
        children
    } = props

    return (
        <p className='speech-card-form__title-box'>
            {children}
        </p>
    );
}

export default SpeechCardSubBlockTitle;