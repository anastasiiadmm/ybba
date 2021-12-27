import React from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';


const ChildProfileNotification = (props) => {

    const {
        child
    } = props

    return (
        <div className='info-item info-item_row info-item--separate-block'>
            <div className='notice notice_warning'>
                <h5 className='notice__title'>Пожалуйста, заполните профиль ребёнка полностью</h5>
                <p className='notice__info'>Это нужно для того,  чтобы логопед
                  получила все необходимые данные
                  до открытия записи на ваше первое диагностическое занятие
                </p>
                <span className='notice__icon notice__icon_warning'/>
            </div>
            <Link
                className='btn info-item__btn'
                to={`/child-profile/${child.id}/1/`}
            >
              Заполнить профиль
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
