import React from 'react';

import PropTypes from 'prop-types';
import { addClasses } from 'utils/addClasses/addClasses.js';

const Field = (props) => {

    const {
        id,
        onChange,
        value,
        register,
        className,
        errors,
        label,
        placeholder,
        disabled,
        type,
        name,
    } = props

    let field

    field = < >
        <label htmlFor={id} className='form2__label'> {label} < /label>
        <input
            type={type || 'text'}
            className={
                addClasses(className, {
                    'error': errors[name]
                })
            }
            id={id}
            name='first_name' {...register(name)}
            placeholder={placeholder}
            disabled={disabled}
            onChange={onChange}
            value={value}
        />
        <div className='form2__error'> {errors[name]?.message} < /div>
    </>
    return field
}

Field.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    register: PropTypes.func,
    className: PropTypes.string,
    errors: PropTypes.object,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.any,
    type: PropTypes.string,
    control: PropTypes.object,
    configs: PropTypes.any
}

export default Field;