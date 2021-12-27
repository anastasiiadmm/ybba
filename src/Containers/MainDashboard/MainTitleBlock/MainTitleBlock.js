import React from 'react';

import PropTypes from 'prop-types';


const MainTitleBlock = (props) => {

    const {leftTitle, rightTitle} = props

    return (
        <div className='main__title-block'>
            <h1 className='main__title'>{leftTitle}</h1>
            <div className='main__date'>{rightTitle}</div>
        </div>
    );
}

MainTitleBlock.propTypes = {
    leftTitle: PropTypes.string,
    rightTitle: PropTypes.string
}

export default MainTitleBlock;
