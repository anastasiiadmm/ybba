import React from 'react';

import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';


const ChildProfileNotification = (props) => {

    const {
        child
    } = props

    return (
        <div className='info-item info-item_row'>
            <div className='notice notice_warning'>
                <h5 className='notice__title'>Не полностью заполнен профиль ребенка</h5>
                <p className='notice__info'>Пожалуйста заполните профиль ребенка</p>
                <span className='notice__icon notice__icon_warning'/>
            </div>
            <Link
                className='btn info-item__btn'
                to={`/child-profile/${child.id}/1/`}
            >
                Редактировать профиль
            </Link>
        </div>
    );
}

ChildProfileNotification.propTypes = {
    child: PropTypes.shape({
        id: PropTypes.string
    }).isRequired
}

export default ChildProfileNotification;