import React from 'react';

const SpeechCardTitle = (props) => {

    const {
        children
    } = props

    return (
        <h1 className='speech-card-form__title'>
            {children}
        </h1>
    );
}

export default SpeechCardTitle;