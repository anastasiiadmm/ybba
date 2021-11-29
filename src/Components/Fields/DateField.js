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

    const { id, name, control, errors, className, label } = props

    return (
        <>
            <label htmlFor={id} className='form2__label'>{label}</label>
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
                                            id={id}
                                        />
                                    }
                                }
                            />
                        </LocalizationProvider>
                    )
                }}
            />
            <div className='form2__error'> {resolve(name, errors, '.')?.message} < /div>
        </>
    );
}

DateField.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    control: PropTypes.object,
    errors: PropTypes.object,
    className: PropTypes.string,
    label: PropTypes.string
}

export default DateField;