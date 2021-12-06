import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from 'Components/Button/Button';


const ChildProfileCard = (props) => {

    const {
        child, openProfileCallback
    } = props

    const full_name = `${child.first_name} ${child.last_name}`

    const childProfileOnClick = () => {
        openProfileCallback(child)
    }

    return (
        <div className='info-item info-item_h100'>
            <div className='child'>
                <h4 className='child__name'>{full_name}</h4>
                <div className='child__link-item'>
                    <Button
                        type='button'
                        className='child__link child__link_profile'
                        onClick={childProfileOnClick}
                    >
                        Посмотреть профиль
                    </Button>
                </div>
                <div className='child__link-item'>
                    <Link
                        className='child__link child__link_edit'
                        to={`/child-profile/${child.id}/1/`}
                    >
                        Редактировать профиль
                    </Link>
                </div>
                {/*<div className='child__link-item'>*/}
                {/*    <button type='button' className='child__link child__link_card'>Речевая*/}
                {/*        карта*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

ChildProfileCard.propTypes = {
    child: PropTypes.shape({
        id: PropTypes.string,
        first_name: PropTypes.string,
        last_name: PropTypes.string
    }).isRequired,
    openProfileCallback: PropTypes.func
}

export default ChildProfileCard;
