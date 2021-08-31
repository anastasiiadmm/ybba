import React from 'react';

import PropTypes from "prop-types";


const Container = (props) => {

    const {children, className} = props

    return (
        <div
            className={`all-page ${className}`}
             style={{height: '100vh'}}
        >
            {children}
        </div>
    );
}

Container.propTypes = {
    className: PropTypes.string
}

export default Container;