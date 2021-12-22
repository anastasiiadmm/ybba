import React from 'react';

import { Controller } from 'react-hook-form';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import ruLocale from 'date-fns/locale/ru';
import { DesktopDatePicker } from '@mui/lab';
import PropTypes from 'prop-types';

import { addClasses } from 'utils/addClasses/addClasses.js';
import { resolve } from 'utils/resolve/resolve.js';
import { isValidDate } from 'utils/date/dateUtils.js';

const DateField = (props) => {

    const { id, name, control, errors, className, label, classNameLabel, placeholder, onBlur } = props

    return (
        <>
            <label htmlFor={id} className={classNameLabel}>{label}</label>
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
                                date={null}
                                rawValue={null}
                                openPicker={null}
                                mask='__.__.____'
                                value={field.value}
                                onChange={
                                    (newValue) => {
                                        return field.onChange(isValidDate(newValue) ? newValue : null)}
                                }
                                renderInput={
                                    (params) => {
                                        return <input
                                            {...params.inputProps}
                                            ref={params.inputRef}
                                            placeholder={placeholder ? placeholder : '_ _ _'}
                                            className={addClasses(className, {
                                                'error': resolve(name, errors, '.')
                                            })}
                                            id={id}
                                            onBlur={onBlur}
                                        />
                                    }
                                }
                            />
                        </LocalizationProvider>
                    )
                }}
            />
            <div className='form2__error'> {resolve(name, errors, '.')?.message} </div>
        </>
    );
}

DateField.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    control: PropTypes.object,
    errors: PropTypes.object,
    onBlur: PropTypes.func,
    className: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string
}

export default DateField;
