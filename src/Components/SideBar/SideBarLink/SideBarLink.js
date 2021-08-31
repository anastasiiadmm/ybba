import React from 'react';

import PropTypes from "prop-types";
import {useHistory} from "react-router";
import {Link} from "react-router-dom";

import {addClasses} from "../../../utils/addClasses/addClasses.js";


const SideBarLink = (props) => {

    const {children, to, classes} = props

    const history = useHistory()
    const {pathname} = history.location

    const isActive = pathname === to

    return (
        <li className="main-nav__item">
            <Link
                to={to}
                className={addClasses(`main-nav__link ${classes}`, {
                    'active': isActive
                })}
            >
                {children}
            </Link>
        </li>
    );
}

SideBarLink.propTypes = {
    to: PropTypes.string.isRequired,
    classes: PropTypes.string
}

export default SideBarLink;