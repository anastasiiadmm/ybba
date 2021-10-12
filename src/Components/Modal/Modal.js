import React from 'react';

import PropTypes from 'prop-types';

import BackDrop from '../BackDrop/BackDrop.js';

import './modal.css'
import {addClasses} from '../../utils/addClasses/addClasses';
import Button from '../Button/Button';


const Modal = (props) => {

    const {
        children, toggle, isOpen, width, onClose, className
    } = props

    const closeModal = () => {
        if (onClose) {
            onClose()
        }
        toggle()
    }

    return (
        <BackDrop isOpen={isOpen} toggle={closeModal}>
            <div
                className={addClasses('modal d-block top-0 h-75 mt-5', {
                    [className || '']: true
                })}
                // style={{width: `${width}%`}}
                style={{maxWidth: '738px', top: '72px'}}
                onClick={e => e.stopPropagation()}
            >
                <div className="modal__body">
                    {children}
                </div>
                <Button
                    type="button"
                    className="modal__close"
                    onClick={closeModal}
                />
            </div>
        </BackDrop>
    );
}

Modal.propTypes = {
    toggle: PropTypes.func,
    isOpen: PropTypes.bool,
    width: PropTypes.number,
    onClose: PropTypes.func,
    className: PropTypes.string
}

export default Modal;