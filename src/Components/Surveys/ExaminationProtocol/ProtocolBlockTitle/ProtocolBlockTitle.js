import React from 'react';

const ProtocolBlockTitle = (props) => {

    const {
        children
    } = props

    return (
        <p className='protocol__title-block'>
            {children}
        </p>
    );
}

export default ProtocolBlockTitle;