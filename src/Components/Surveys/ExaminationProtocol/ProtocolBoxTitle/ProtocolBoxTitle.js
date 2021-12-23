import React from 'react';

const ProtocolBoxTitle = (props) => {

    const {
        children
    } = props

    return (
        <p className='protocol__box-title'>
            {children}
        </p>
    );
}

export default ProtocolBoxTitle;