import React from 'react';

const ProtocolSwitchText = (props) => {

    const {
        children
    } = props

    return (
        <span className='switch2'>
            {children}
        </span>
    );
}

export default ProtocolSwitchText;