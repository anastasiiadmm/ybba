import React from 'react';

const ProtocolTitle = (props) => {

    const {
        children
    } = props

    return (
        <h3 className='protocol__title'>
            {children}
        </h3>
    );
}

export default ProtocolTitle;