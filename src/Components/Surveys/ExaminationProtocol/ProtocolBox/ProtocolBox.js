import React from 'react';

const ProtocolBox = (props) => {

    const {
        children
    } = props

    return (
        <div className='protocol__box'>
            {children}
        </div>
    );
}

export default ProtocolBox;