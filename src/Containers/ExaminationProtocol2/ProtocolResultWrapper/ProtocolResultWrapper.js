import React from 'react';

const ProtocolResultWrapper = (props) => {

    const {
        children
    } = props

    return (
        <div className='protocol__lbl-wrap'>
            {children}
        </div>
    );
}

export default ProtocolResultWrapper;