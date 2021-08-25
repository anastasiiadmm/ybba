import React from 'react';
import PropTypes from "prop-types";

const SocialMedialLink = ({onClick, specialClass}) => {

    return (
        <button
            className={`border-0 form__social ${specialClass}`}
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