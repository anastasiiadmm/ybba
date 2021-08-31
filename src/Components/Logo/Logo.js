import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/img/logo.svg'

const Logo = () => {
    return (
        <Link to='/' className="header__logo">
            <img src={logo} alt="Биба"/>
        </Link>
    );
}

export default React.memo(Logo);