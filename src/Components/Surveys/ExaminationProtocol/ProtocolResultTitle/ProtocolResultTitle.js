import React from 'react';

const ProtocolDescriptionSubtitle = (props) => {

    const {
        children
    } = props

    return (
        <div className='protocol__descr'>
            {children}
        </div>
    );
}

export default ProtocolDescriptionSubtitle;