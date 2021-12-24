import React from 'react';

const ProtocolTextTest = (props) => {

    const {
        children
    } = props

    return (
        <p className='protocol__text-test'>
            {children}
        </p>
    );
}

export default ProtocolTextTest;