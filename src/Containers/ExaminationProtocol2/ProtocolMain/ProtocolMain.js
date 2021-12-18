import React from 'react';

const ProtocolMain = (props) => {

    const {
        children
    } = props

    return (
        <div className='protocol'>
            <form>
                {children}
            </form>
        </div>
    );
}

export default ProtocolMain;