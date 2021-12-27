import React from 'react';

const ProtocolDescriptionMain = (props) => {

    const {
        children
    } = props

    return (
        <h3 className='protocol__descr-main'>
            {children}
        </h3>
    );
}

export default ProtocolDescriptionMain;