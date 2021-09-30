import React from 'react';

import PropTypes from 'prop-types';

import BackDrop from '../BackDrop/BackDrop.js';

import './modal.css'


const Modal = (props) => {

    const {
        children, toggle, isOpen, width, onClose
    } = props

    const closeModal = () => {
        onClose()
        toggle()
    }

    return (
        <BackDrop isOpen={isOpen} toggle={closeModal}>
            <div
                className='modalBody'
                style={{width: `${width}%`}}
                onClick={e => e.stopPropagation()}
            >
                <button
                    type='button'
                    className='modal__close modalClose'
                    onClick={closeModal}
                />
                <div className='message'>
                    {children}
                </div>
            </div>
        </BackDrop>
    );
}

Modal.propTypes = {
    toggle: PropTypes.func,
    isOpen: PropTypes.bool,
    width: PropTypes.number,
    onClose: PropTypes.func
}

export default Modal;