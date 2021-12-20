import React from 'react';

const SpeechCardBlockTitle = (props) => {

    const {
        children
    } = props

    return (
        <h3 className='speech-card-form__title-block'>
            {children}
        </h3>
    );
}

export default SpeechCardBlockTitle;