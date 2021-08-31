import PropTypes from "prop-types";
import React from 'react';
import {Spinner} from "react-bootstrap";
import {Link} from "react-router-dom";

const Button = (props) => {

    const {loading, children, to} = props

    const components = {
        button: <>
            {!loading && <button
                {...props}
            >
                {children}
            </button>}
        </>,
        link: <>
            {!loading && <Link
                {...props}
            >
                {children}
            </Link>}
        </>,
    }

    return (
        <>
            {to ? components.link : components.button}
            {loading && <Spinner animation="border" variant="primary"/>}
        </>
    );
}

Button.propTypes = {
    loading: PropTypes.bool,
    to: PropTypes.string
}

export default Button;