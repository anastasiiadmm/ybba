import React from 'react';

import { DesktopDatePicker } from '@mui/lab';
import { Autocomplete } from '@mui/material';
import { Controller } from 'react-hook-form'
import PropTypes from 'prop-types';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import ruLocale from 'date-fns/locale/ru';

import { addClasses } from 'utils/addClasses/addClasses.js';

const isValidDate = (d) => d instanceof Date && !isNaN(d)

function resolve(path, obj, separator = '.') {
    var properties = Array.isArray(path) ? path : path.split(separator)
    return properties.reduce((prev, curr) => prev && prev[curr], obj)
}

export const Field = (props) => {

    const {
        id, register, className, errors, label, placeholder, disabled, type, name, control, options
    } = props

    let field = null

    field = < >
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
    </>

    if (type === 'date') {
        field = <>
            <label htmlFor='country' className='form2__label'>{label}</label>
            <Controller
                name={name}
                control={control}
                render={(
                    { field }
                ) => {
                    return (
                        <LocalizationProvider
                            dateAdapter={AdapterDateFns}
                            locale={ruLocale}
                        >
                            <DesktopDatePicker
                                mask='__.__.____'
                                value={field.value}
                                onChange={
                                    (newValue) => field.onChange(isValidDate(newValue) ? newValue : null)}
                                renderInput={
                                    (params) => {
                                        return <input
                                            {...params.inputProps}
                                            ref={params.inputRef}
                                            placeholder='_ _ _'
                                            className={addClasses(className, {
                                                'error': resolve(name, errors, '.')
                                            })}
                                            id='country'
                                        />
                                    }
                                }
                            />
                        </LocalizationProvider>
                    )
                }}
            />
        </>
    }

    if (type === 'select') {
        field = <>
            <label htmlFor='country' className='form2__label'>{label}</label>
            <Controller
                name={name}
                control={control}
                render={(
                    { field: { onChange, value } }
                ) => {
                    return <Autocomplete
                        name={name}
                        autoComplete='no'
                        onChange={(_, { id }) => {
                            onChange(id)
                        }}
                        options={options}
                        renderInput={(params) => {
                            params.inputProps.autoComplete = 'new-password';
                            return (
                                <div ref={params.InputProps.ref}>
                                    <input
                                        value={options?.filter(option => option.value === value)}
                                        type='text'
                                        {...params.inputProps}
                                        className={addClasses(className, {
                                            'error': resolve(name, errors, '.')
                                        })}
                                    />
                                </div>
                            )
                        }}
                    />
                }}
            />
        </>
    }

    return (
        <>
            {field}
            <div className='form2__error'> {resolve(name, errors, '.')?.message} < /div>
        </>
    )
}

Field.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    register: PropTypes.func,
    className: PropTypes.string,
    errors: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.any,
    type: PropTypes.string,
    control: PropTypes.object,
    configs: PropTypes.any,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    }))
}

export default Field;