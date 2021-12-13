import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { childSelector, getCountriesList, getCitiesList } from 'redux/child/childSlice.js';


const ParentProfileData = (props) => {

    const { user } = props

    const { cities, countries } = useSelector(childSelector)
    const dispatch = useDispatch()

    const getCountryName = id => countries?.find(country => country.id === id)?.name
    const getCityName = id => cities?.find(city => city.id === id)?.name

    useEffect(() => {
        dispatch(getCountriesList())
        dispatch(getCitiesList(user?.profile?.country))
    }, [dispatch, user])

    return (
        <>
            {user && <div className='cabinet__cols'>
                <div className='cabinet__col'>
                    <dl className='cabinet__info'>
                        <dt>Имя</dt>
                        <dd>{user?.profile?.first_name || 'Имя не указано'}</dd>
                        <dt>Дата рождения</dt>
                        <dd>{user?.profile?.date_of_birth || 'Дата рождения не указана'}</dd>
                        <dt>Страна проживания</dt>
                        <dd>{getCountryName(user?.profile?.country) || 'Страна проживания не указана'}</dd>
                        <dt>Email</dt>
                        <dd>{user.email}</dd>
                    </dl>
                </div>

                <div className='cabinet__col'>
                    <dl className='cabinet__info'>
                        <dt>Фамилия</dt>
                        <dd>{user.profile?.last_name || 'Фамилия не указана'}</dd>
                        <dt>Мобильный телефон</dt>
                        <dd>{user.profile?.phone_number || 'Номер телефона не указан'}</dd>
                        <dt>Город проживания</dt>
                        <dd>{getCityName(user?.profile?.city) || 'Город проживания не указан'}</dd>
                    </dl>
                </div>
            </div>
            }
        </>
    );
}

ParentProfileData.propTypes = {
    user: PropTypes.object.isRequired
}

export default ParentProfileData;