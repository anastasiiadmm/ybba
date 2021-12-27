import React from 'react';
import PropTypes from 'prop-types';

const SpeechCardMain = (props) => {

    const {
        children, onSubmit, submitHandler
    } = props

    return (
        <div className='speech-card-form overflow-scroll h-100 w-100 customScrollbar'>
            <form
                onSubmit={submitHandler(onSubmit)}
            >
                {children}
            </form>
        </div>
    );
}

SpeechCardMain.propTypes = {
    onSubmit: PropTypes.func,
    submitHandler: PropTypes.func.isRequired
}

export default SpeechCardMain;