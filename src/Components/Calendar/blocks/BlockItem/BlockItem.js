import React from 'react';

import PropTypes from 'prop-types';

import 'Components/Calendar/blocks/BlockItem/blockItem.css'


const BlockItem = props => {

    const {children, classes, onClick, width} = props

    return (
        <div
            className='blockItem'
            onClick={onClick}
            style={{width: `calc(${width ? width : '100%'})`}}
        >
            <p className={classes}>{children}</p>
        </div>
    );
}

BlockItem.propTypes = {
    classes: PropTypes.string,
    onClick: PropTypes.func,
    width: PropTypes.string
}

export default BlockItem;