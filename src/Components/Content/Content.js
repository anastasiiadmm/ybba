import React from 'react';

const Content = (props) => {

    const {
        children
    } = props

    return (
        <div className='content'>
            <div className='content__inner'>
                {children}
            </div>
        </div>
    );
}

export default Content;