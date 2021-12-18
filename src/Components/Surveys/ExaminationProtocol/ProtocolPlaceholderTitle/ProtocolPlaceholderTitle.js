import React from 'react';

const ProtocolPlaceholderTitle = (props) => {

    const {
        children
    } = props

    return (
        <p className='protocol__test'>
            {children}
        </p>
    );
}

export default ProtocolPlaceholderTitle;