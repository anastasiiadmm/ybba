import React from 'react';
import PropTypes from 'prop-types';

const ProtocolMain = (props) => {

    const {
        children, submitHandler, onSubmit
    } = props

    return (
        <div className='protocol'>
            <form onSubmit={submitHandler(onSubmit)}>
                {children}
            </form>
        </div>
    );
}

ProtocolMain.propTypes = {
    submitHandler: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default ProtocolMain;