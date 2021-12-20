import React from 'react';

const SpeechCardRow = (props) => {

    const {
        children
    } = props

    return (
        <div className='speech-card-form__row'>
            {children}
        </div>
    );
}

export default SpeechCardRow;