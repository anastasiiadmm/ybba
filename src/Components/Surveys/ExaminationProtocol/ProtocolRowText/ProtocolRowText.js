import React from 'react';

const ProtocolRowText = (props) => {

    const {
        children
    } = props

    return (
        <div className='protocol__row protocol__row_flex'>
            {children}
        </div>
    );
}

export default ProtocolRowText;