import React from 'react';
import { addClasses } from 'utils/addClasses/addClasses.js';
import { resolve } from 'utils/resolve/resolve.js';
import PropTypes from 'prop-types';


const TextareaField = (props) => {
    const {
        label,
        placeholder,
        name,
        errors,
        register,
        classNameLabel,
        className,
        disabled,
        onClick,
        onFocus,
    } = props

    return <>
        <label
            className={addClasses(classNameLabel, {
                'disabled': disabled
            })}
        >{label}</label>
        <textarea
            className={addClasses(className, {
                'error': resolve(name, errors, '.'),
                'disabled': disabled
            })}
            placeholder={placeholder}
            {...register(name)}
            disabled={disabled}
            onClick={onClick}
            onFocus={onFocus}
        />
        <div className='form2__error'> {resolve(name, errors, '.')?.message} < /div>
    </>
}

TextareaField.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    errors: PropTypes.object,
    register: PropTypes.func,
    classNameLabel: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onFocus: PropTypes.func,
}

export default TextareaField;