import React from 'react';

const ProtocolBlock = (props) => {
    
    const {
        children
    } = props
    
    return (
        <div className='protocol__block'>
            {children}
        </div>
    );
}

export default ProtocolBlock;