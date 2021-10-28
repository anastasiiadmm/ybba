import React from 'react';


const FormRow = (props) => {

    const {
        children
    } = props

    return (
        <div className='form__row'>
            {children}
        </div>
    );
}

export default FormRow;
