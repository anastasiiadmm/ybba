import React from 'react';

import PropTypes from 'prop-types';
import { Tooltip } from 'bootstrap';

import { addClasses } from 'utils/addClasses/addClasses.js';
import { resolve } from 'utils/resolve/resolve.js';

const CommonField = (props) => {

    const {
        id,
        type,
        className,
        name,
        errors,
        register,
        placeholder,
        disabled,
        label,
        classNameLabel,
        tooltipMessage,
        onClick,
        onFocus,
        pattern,
        onChange,
    } = props

    if (tooltipMessage) {
      const tooltipOptions = { trigger: 'focus' }
      const inputElement = document.getElementById(id)
      inputElement && new Tooltip(inputElement, tooltipOptions)
    }

    return (
        <>
            <label
                htmlFor={id}
                className={addClasses(classNameLabel, {
                    'disabled': disabled
                })}
            >{label}< /label>
            <input
                type={type || 'text'}
                className={
                    addClasses(className, {
                        'error': resolve(name, errors, '.')
                    })
                }
                id={id}
                name='first_name'
                {...register(name)}
                placeholder={placeholder}
                disabled={disabled}
                data-bs-toggle={tooltipMessage && 'tooltip'}
                data-bs-placement={tooltipMessage && 'left'}
                title={tooltipMessage && tooltipMessage}
                onClick={onClick}
                onFocus={onFocus}
                pattern={pattern}
                onChange={onChange}
            />
            <div className='form2__error'> {resolve(name, errors, '.')?.message} < /div>
        </>
    );
}

CommonField.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string,
    errors: PropTypes.object,
    register: PropTypes.func,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    classNameLabel: PropTypes.string,
    tooltipMessage: PropTypes.string,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onChange: PropTypes.func,
    pattern: PropTypes.string,
}

export default CommonField;
