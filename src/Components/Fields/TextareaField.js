import React from 'react';
import { addClasses } from 'utils/addClasses/addClasses.js';
import { resolve } from 'utils/resolve/resolve.js';
import PropTypes from 'prop-types';


const TextareaField = (props) => {
    const {
        label, placeholder, name, errors, register, classNameLabel, className
    } = props

    return <>
        <label className={classNameLabel}>{label}</label>
        <textarea
            className={addClasses(className, {
                'error': resolve(name, errors, '.')
            })}
            placeholder={placeholder}
            {...register(name)}
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
    className: PropTypes.string
}

export default TextareaField;