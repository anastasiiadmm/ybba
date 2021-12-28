import React from 'react';

const FormBlock = (props) => {

    const {
        children, className
    } = props

    return (
        <div className={`${className} form2__block`}>
            {children}
        </div>
    );
}

export default FormBlock;