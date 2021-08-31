import PropTypes from "prop-types";
import React from 'react';
import {Spinner} from "react-bootstrap";

const Button = (props) => {

    const {loading, children} = props

    return (
        <>
            {!loading && <button
                {...props}
            >
                {children}
            </button>}
            {loading && <Spinner animation="border" variant="primary"/>}
        </>
    );
}

Button.propTypes = {
    loading: PropTypes.bool
}

export default Button;