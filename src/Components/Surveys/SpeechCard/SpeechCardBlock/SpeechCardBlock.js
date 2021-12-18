import React from 'react';

const SpeechCardBlock = (props) => {

    const {
        children
    } = props

    return (
        <div className='speech-card-form__block'>
            {children}
        </div>
    );
}

export default SpeechCardBlock;