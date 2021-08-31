import React from 'react';

import PropTypes from "prop-types";

import './backdrop.css'


const BackDrop = (props) => {

    const {children, isOpen, toggle} = props

    return <React.Fragment>
        {isOpen && <div
            className='backdrop'
            onClick={toggle}
        >
            {children}
        </div>}
    </React.Fragment>
}

BackDrop.propTypes = {
    isOpen: PropTypes.bool,
    toggle: PropTypes.func
}

export default BackDrop;