import React from 'react';

const ProtocolSubBlock = (props) => {

    const {
        children
    } = props

    return (
        <div className='protocol__box'>
            {children}
        </div>
    );
}

export default ProtocolSubBlock;