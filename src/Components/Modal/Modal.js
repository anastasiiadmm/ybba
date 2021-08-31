import React from 'react';

import PropTypes from "prop-types";

import BackDrop from "../BackDrop/BackDrop.js";
import './modal.css'


const Modal = (props) => {

    const {children, toggle, isOpen, width} = props

    return (
        <BackDrop isOpen={isOpen} toggle={toggle}>
            <div
                className='modalBody'
                style={{width: `${width}%`}}
                onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </BackDrop>
    );
}

Modal.propTypes = {
    toggle: PropTypes.func,
    isOpen: PropTypes.bool,
    width: PropTypes.number
}

export default Modal;