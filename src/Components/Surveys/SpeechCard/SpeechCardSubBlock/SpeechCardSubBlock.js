import React from 'react';

const SpeechCardSubBlock = (props) => {

    const {
        children
    } = props

    return (
        <div className='speech-card-form__box'>
            {children}
        </div>
    );
}

export default SpeechCardSubBlock;