import React from 'react';

const ProtocolResultBlock = (props) => {

    const {
        children
    } = props

    return (
        <div className='protocol__result-item'>
            {children}
        </div>
    );
}

export default ProtocolResultBlock;