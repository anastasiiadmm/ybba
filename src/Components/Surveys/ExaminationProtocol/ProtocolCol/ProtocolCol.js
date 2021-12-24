import React from 'react';

const ProtocolCol = (props) => {

    const {
        children
    } = props

    return (
        <div className='protocol__col'>
            {children}
        </div>
    );
}

export default ProtocolCol;