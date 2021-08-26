import PropTypes from "prop-types";
import React from 'react';
import './socialMedialLink.css'

const SocialMedialLink = ({onClick, specialClass}) => {

    return (
        <button
            className={`border-0 socialMediaLink form__social ${specialClass}`}
            type='button'
            onClick={() => onClick(specialClass)}
        />
    );
}

SocialMedialLink.propTypes = {
    onClick: PropTypes.func,
    specialClass: PropTypes.string
}

export default React.memo(SocialMedialLink);