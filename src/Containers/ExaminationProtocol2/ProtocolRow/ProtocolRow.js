import React from 'react';

const ProtocolRow = (props) => {

    const {
        children
    } = props

    return (
        <div className='protocol__row'>
            {children}
        </div>
    );
}

export default ProtocolRow;