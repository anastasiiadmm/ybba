import React from 'react';
import { Controller } from 'react-hook-form';
import { Autocomplete } from '@mui/material';
import { addClasses } from 'utils/addClasses/addClasses.js';
import { resolve } from 'utils/resolve/resolve.js';

const SelectField = (props) => {

    const { label, name, control, options, className, errors, id } = props

    return (
        <>
            <label htmlFor={id} className='form2__label'>{label}</label>
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
                                        id={id}
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
            <div className='form2__error'> {resolve(name, errors, '.')?.message} < /div>
        </>
    );
}

export default SelectField;