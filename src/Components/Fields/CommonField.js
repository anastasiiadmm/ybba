import React from 'react';

import PropTypes from 'prop-types';

import { addClasses } from 'utils/addClasses/addClasses.js';
import { resolve } from 'utils/resolve/resolve.js';

const CommonField = (props) => {

    const { id, type, className, name, errors, register, placeholder, disabled, label } = props

    return (
        <>
            <label htmlFor={id} className='form2__label'> {label} < /label>
            <input
                type={type || 'text'}
                className={
                    addClasses(className, {
                        'error': resolve(name, errors, '.')
                    })
                }

                id={id}
                name='first_name' {...register(name)}
                placeholder={placeholder}
                disabled={disabled}
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
    register: PropTypes.object,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string
}

export default CommonField;