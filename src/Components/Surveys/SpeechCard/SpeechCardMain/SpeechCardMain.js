import React from 'react';

const SpeechCardMain = (props) => {

    const {
        children
    } = props

    return (
        <div className='speech-card-form overflow-scroll h-100 customScrollbar'>
            <form>
                {children}
            </form>
        </div>
    );
}

export default SpeechCardMain;