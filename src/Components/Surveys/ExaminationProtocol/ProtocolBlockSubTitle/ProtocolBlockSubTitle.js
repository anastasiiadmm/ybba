import React from 'react';

const ProtocolBlockSubTitle = (props) => {

    const {
        children
    } = props

    return (
        <p className='protocol__sub2title-block'>
            {children}
        </p>
    );
}

export default ProtocolBlockSubTitle;