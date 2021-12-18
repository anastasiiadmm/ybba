import React from 'react';

const ProtocolSubtitle = (props) => {

    const {
        children
    } = props

    return (
        <p className='protocol__title-block'>
            {children}
        </p>
    );
}

export default ProtocolSubtitle;