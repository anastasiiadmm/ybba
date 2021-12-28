import React from 'react';

const FormQuTitle = (props) => {

    const {
        children
    } = props

    return (
        <p className='form2__qu'>
            {children}
        </p>
    );
}

export default FormQuTitle;