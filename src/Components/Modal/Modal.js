import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import BackDrop from 'Components/BackDrop/BackDrop.js';
import Button from 'Components/Button/Button.js';
import { addClasses } from 'utils/addClasses/addClasses.js';

import 'Components/Modal/modal.css';


const Modal = (props) => {

    const {
        children, toggle, isOpen, width, height: modalHeight, onClose, className
    } = props

    const closeModal = () => {
        if (onClose) {
            onClose()
        }
        toggle()
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen])

    return (
        <BackDrop isOpen={isOpen} toggle={closeModal}>
            <div
                className={addClasses(`modal d-block top-0 mt-5 p-5`, {
                    [className || '']: true
                })}
                // style={{width: `${width}%`}}
                style={{
                    maxWidth: `${width}%`,
                    top: '72px', height: `${modalHeight || 75}%`,
                    blockSize: 'auto',
                }}
                onClick={e => e.stopPropagation()}
            >
                <div
                    className='modal__body'
                    style={{ height: '100%' }}
                >
                    {children}
                </div>
                <Button
                    type='button'
                    className='modal__close'
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
    className: PropTypes.string,
    height: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
}

export default Modal;