import React from 'react';

const ProtocolResultTitle = (props) => {
    
    const {
        children
    } = props
    
    return (
        <p className='protocol__result-title'>
            {children}
        </p>
    );
}

export default ProtocolResultTitle;