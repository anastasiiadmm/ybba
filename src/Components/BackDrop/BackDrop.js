import PropTypes from 'prop-types';
import React from 'react';
import {addClasses} from 'utils/addClasses/addClasses.js';

import './backdrop.css'


const BackDrop = (props) => {

    const {children, isOpen, toggle} = props

    return <React.Fragment>
        {isOpen && <div
            className={addClasses('modal__overlay', {
                open: isOpen
            })}
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