import React from 'react';

import PropTypes from 'prop-types';

import { addClasses } from 'utils/addClasses/addClasses.js';

import './backdrop.css'


const BackDrop = (props) => {

    const { children, isOpen, toggle } = props

    return <React.Fragment>
        {isOpen && <div
            className={addClasses('modal__overlay', {
                open: isOpen
            })}
            onClick={toggle}
            style={{ overflowY: 'scroll' }}
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