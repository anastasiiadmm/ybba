import React from 'react';

import PropTypes from 'prop-types';
import Flatpickr from 'react-flatpickr';
import PhoneInput from 'react-phone-input-2';
import { Autocomplete } from '@mui/material';

import { validationMessagesMapping } from 'mappings/validationErrors.js'
import { addClasses } from 'utils/addClasses/addClasses.js';

import 'Components/FormField/formField.css'

const FormField = props => {
    const {
        type,
        onChange,
        className,
        name,
        required,
        label,
        value,
        pattern,
        id,
        maxLength,
        tooltipTitle,
        tooltipText,
        helpText,
        readOnly,
        errors,
        disabled,
        options,
        configs,
        checked,
        placeholder,
    } = props

    const adult = (el) => {
        if (el.value === value)
            return true;
    }

    const toolTip = <>
        {(tooltipTitle || tooltipText) && <>
            <div className='form__inp-info form__inp-info_left'>
                {tooltipTitle && <b className='form__info-title'>{tooltipTitle}</b>}
                {tooltipText && tooltipText}
            </div>
        </>}
    </>

    let fieldErrors = null
    if (errors && typeof errors === 'object' && name in errors) {
        fieldErrors = errors[name]
    }

    const Errors = <>
        {fieldErrors && fieldErrors.map(error => {
            return (
                <div className='fieldErrorText'>
                    {validationMessagesMapping[error]}
                </div>
            )
        })}
    </>

    let field = <>
        <label className='form__label'>
            {label}
            <input
                type={type}
                className={addClasses(className, {
                    'error': fieldErrors?.length
                })}
                required={required}
                name={name}
                onChange={onChange}
                value={value}
                pattern={pattern}
                id={id}
                maxLength={maxLength}
                readOnly={readOnly}
                disabled={disabled}
            />
            {Errors}
            {helpText && <div className='form__passw-info'>{helpText}</div>}
            {toolTip}
        </label>
    </>

    if (type === 'checkbox') {
        field = <>
            <input
                id={id}
                className='check'
                type='checkbox'
                onChange={onChange}
                checked={!!value}
                name={name}
            />
            <label htmlFor={id}>
                {label}
            </label>
        </>
    }

    if (type === 'radio') {
        field = <>
            <input
                className='radio'
                id={id}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                checked={checked}
            />
            <label htmlFor={id}>
                {label}
            </label>
        </>
    }

    if (type === 'datepicker') {
        field = <>
            <Flatpickr
                data-enable-time
                value={value}
                onChange={onChange}
                options={configs}
                render={({ defaultValue, value, ...props }, ref) => {
                    return <>
                        <label className='form__label'>
                            {label}
                            <input
                                {...props}
                                ref={ref}
                                type={type}
                                className={addClasses(className, {
                                    'error': fieldErrors?.length
                                })}
                                required={required}
                                name={name}
                                onChange={onChange}
                                value={value}
                                pattern={pattern}
                                id={id}
                                maxLength={maxLength}
                                readOnly={readOnly}
                                disabled={disabled}
                            />
                            {Errors}
                            {helpText && <div className='form__passw-info'>{helpText}</div>}
                            {toolTip}
                        </label>
                    </>
                }}
            />
        </>
    }

    if (type === 'phone') {
        field = <>
            <PhoneInput
                inputClass={className}
                country={'ru'}
                value={value}
                onChange={onChange}
                specialLabel={label}
            />
            {Errors}
        </>
    }

    if (type === 'email') {
        field = <>
            <label className='form2__label'>{label}</label>
            <input
                type={type}
                className={addClasses(className, {
                    'error': fieldErrors?.length
                })}
                placeholder={placeholder}
                required={required}
                name={name}
                onChange={onChange}
                value={value}
                pattern={pattern}
                id={id}
                maxLength={maxLength}
                readOnly={readOnly}
                disabled={disabled}
            />

            {Errors}
            {helpText && <div className='form__passw-info'>{helpText}</div>}
            {toolTip}
        </>
    }

    if (type === 'password') {
        field = <>

            <label className='form2__label'>{label}</label>

            <input
                type={type}
                className={addClasses(className, {
                    'error': fieldErrors?.length
                })}
                required={required}
                name={name}
                onChange={onChange}
                value={value}
                pattern={pattern}
                id={id}
                maxLength={maxLength}
                readOnly={readOnly}
                disabled={disabled}
            />

            {Errors}
            {helpText && <div className='form__passw-info'>{helpText}</div>}
            {toolTip}

        </>
    }

    if (type === 'select') {
        field = <>
            <label className='w-100 form__label'>{label}</label>
            <Autocomplete
                className={className}
                sx={{
                    '& input': {
                        padding: '12px',
                        borderRadius: '10px',
                        outline: 'none',
                        border: '1px solid #A3B3CC'
                    },
                }}
                value={options?.filter(adult).map(res => res.label)}
                name={name}
                autoComplete='no'
                onChange={onChange}
                options={options}
                renderInput={(params) => {
                    params.inputProps.autoComplete = 'new-password';
                    return (
                        <div ref={params.InputProps.ref}>
                            <input autoComplete='no'
                                   type='text' {...params.inputProps} name={name}
                            />
                        </div>
                    )
                }}
            />
        </>
    }

    if (type === 'flatpickr') {
        field = <>
            <Flatpickr
                data-enable-time
                value={value}
                onChange={onChange}
                options={configs}
                render={({ defaultValue, value, ...props }, ref) => {
                    return <>
                        <label className='form__label'>
                            {label}
                            <input
                                {...props}
                                ref={ref}
                                type={type}
                                className={addClasses(className, {
                                    'error': fieldErrors?.length
                                })}
                                required={required}
                                name={name}
                                onChange={onChange}
                                value={value}
                                pattern={pattern}
                                id={id}
                                maxLength={maxLength}
                                readOnly={readOnly}
                                disabled={disabled}
                            />
                            {Errors}
                            {helpText && <div className='form__passw-info'>{helpText}</div>}
                            {toolTip}
                        </label>
                    </>
                }}
            />
        </>
    }

    if (type === 'checkbox') {
        field = <>
            <input
                className='check'
                id={id}
                type={type}
                checked={!!value}
                onChange={onChange}
            />
            <label
                htmlFor={id}
            >
                {label}
            </label>
        </>
    }

    if (type === 'textarea') {
        field = <>
            <label className='form__label'>
                {label}
                <textarea
                    className={addClasses(className, {
                        'error': fieldErrors?.length
                    })}
                    required={required}
                    name={name}
                    onChange={onChange}
                    value={value}
                    id={id}
                    maxLength={maxLength}
                    readOnly={readOnly}
                    disabled={disabled}
                />
                {Errors}
                {helpText && <div className='form__passw-info'>{helpText}</div>}
                {toolTip}
            </label>
        </>
    }

    return field;
}

FormField.propTypes = {
    type: PropTypes.oneOf([
        'email',
        'checkbox',
        'radio',
        'datepicker',
        'phone',
        'select',
        'flatpickr',
        'textarea'
    ]).isRequired,
    onChange: PropTypes.func,
    className: PropTypes.string,
    name: PropTypes.string,
    required: PropTypes.bool,
    label: PropTypes.string,
    value: PropTypes.any,
    pattern: PropTypes.string,
    id: PropTypes.string,
    maxLength: PropTypes.string,
    tooltipTitle: PropTypes.string,
    tooltipText: PropTypes.string,
    helpText: PropTypes.string,
    onClick: PropTypes.func,
    readOnly: PropTypes.bool,
    errors: PropTypes.any,
    disabled: PropTypes.bool,
    mask: PropTypes.string,
    showMaskOnFocus: PropTypes.bool,
    showMaskOnHover: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string
    })),
    configs: PropTypes.any,
    checked: PropTypes.bool,
}

export default React.memo(FormField);