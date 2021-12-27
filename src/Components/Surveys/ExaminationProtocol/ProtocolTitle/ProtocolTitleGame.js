import React from 'react';

const ProtocolTitleGame = (props) => {

    const {
        children
    } = props

    return (
        <p className='protocol__title-game'>
            {children}
        </p>
    );
}

export default ProtocolTitleGame;