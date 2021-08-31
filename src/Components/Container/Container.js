import PropTypes from "prop-types";
import React from 'react';

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