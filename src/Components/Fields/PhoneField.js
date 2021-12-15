import React from 'react';

import { Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';

import { resolve } from 'utils/resolve/resolve';


const PhoneField = (props) => {

    const { id, name, control, errors, className, label } = props

    return (
        <>
            <Controller
                name={name}
                control={control}
                render={
                    ({ field: { onChange, value } }) => {
                        return (
                            <PhoneInput
                                id={id}
                                inputClass={className}
                                country={'ru'}
                                value={value}
                                onChange={(data) => {
                                    onChange(data)
                                }}
                                specialLabel={label}
                            />
                        )
                    }}
            />
            <div className='form2__error'> {resolve(name, errors, '.')?.message} < /div>
        </>
    );
};

export default PhoneField;