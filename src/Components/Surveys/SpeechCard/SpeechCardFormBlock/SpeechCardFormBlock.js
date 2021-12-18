import React from 'react';

const SpeechCardFormBlock = (props) => {
    
    const {
        children
    } = props
    
    return (
        <div className='speech-card-form__section'>
            {children}
        </div>
    );
}

export default SpeechCardFormBlock;