import React from 'react';

const ProtocolColWidth = (props) => {

    const {
        children
    } = props

    return (
        <div className='protocol__col'>
            {children}
        </div>
    );
}

export default ProtocolColWidth;