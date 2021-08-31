import React from 'react';

import PropTypes from 'prop-types';
import {useHistory} from 'react-router';

import FormField from '../../../Components/FormField/FormField.js';
import SocialMediaBlock from '../../../Components/SocialMediaBlock/SocialMediaBlock.js';
import config from '../../../config.js';
import RegistrationBaseBlock from '../RegistrationBaseBlock/RegistrationBaseBlock.js';


const ParentRegistration = (props) => {

    const {registrationData, setRegistrationData, currentStage} = props

    const history = useHistory()

    const isRegistrationDataValid = () => (
        registrationData.first_name &&
        registrationData.last_name &&
        registrationData.email &&
        registrationData.password &&
        registrationData.password_repeat && (
            registrationData.password_repeat === registrationData.password
        )
    )
    const setToLocalStorage = (registrationData) => {
        localStorage.setItem(config.registrationParentLocalStorageName, JSON.stringify(registrationData))
    }
    const inputChangeHandler = async e => {
        const newRegistrationData = {...registrationData, [e.target.name]: e.target.value}
        setRegistrationData(newRegistrationData)
        setToLocalStorage(newRegistrationData)
    }
    const onSubmit = e => {
        e.preventDefault()
        const nextStage = currentStage + 1
        history.push(`/registration/${nextStage}/`)
    }

    return (
        <RegistrationBaseBlock
            onSubmit={onSubmit}
        >
            <h4 className='form__title'>Зарегистрируйтесь</h4>
            <div className='form__row'>
                <p className='form__text'>Через соцсеть</p>
                <SocialMediaBlock/>
            </div>
            <div className='form__row'>
                <FormField
                    type='text'
                    className='form__field'
                    label='Имя'
                    name='first_name'
                    required
                    maxLength='50'
                    pattern='^[а-яА-Я\s-]+$'
                    tooltipTitle='Имя'
                    value={registrationData.first_name}
                    tooltipText='Максимум 50 символов (только кириллица в обоих регистрах и пробел). Специальные символы запрещены, кроме дефиса (“-”).'
                    onChange={inputChangeHandler}
                />
            </div>
            <div className='form__row'>
                <FormField
                    type='text'
                    className='form__field'
                    label='Фамилия'
                    name='last_name'
                    required
                    maxLength='50'
                    pattern='^[а-яА-Я\s-]+$'
                    tooltipTitle='Фамилия'
                    value={registrationData.last_name}
                    tooltipText='Максимум 50 символов (только кириллица в обоих регистрах и пробел). Специальные символы запрещены, кроме дефиса (“-”).'
                    onChange={inputChangeHandler}
                />
            </div>
            <div className='form__row'>
                <FormField
                    type='email'
                    className='form__field'
                    label='Email'
                    name='email'
                    required
                    maxLength='320'
                    pattern='^(.+)@(.+)\.(.+)$'
                    tooltipTitle='Email'
                    value={registrationData.email}
                    tooltipText='Должен содержать символ @).'
                    onChange={inputChangeHandler}
                />
            </div>
            <div className='form__row'>
                <FormField
                    type='password'
                    className='form__field passw-first'
                    label='Пароль'
                    name='password'
                    required
                    maxLength='320'
                    patten='^[A-Za-z\d@$!%*#?&]{5,}$'
                    tooltipTitle='Пароль'
                    tooltipText='В поле пароля можно вводить латиницу, цифры и символы.'
                    value={registrationData.password}
                    helpText='Пароль должен содержать не менее 5 символов'
                    onChange={inputChangeHandler}
                />
            </div>
            <div className='form__row'>
                <FormField
                    type='password'
                    className='form__field passw-repeat'
                    label='Повтор пароля'
                    name='password_repeat'
                    required
                    maxLength='320'
                    patten='^[A-Za-z\d@$!%*#?&]{5,}$'
                    value={registrationData.password_repeat}
                    helpText='Пароли должны совпадать'
                    onChange={inputChangeHandler}
                />
            </div>
            <div className='form__row form__row_pd'>
                <button
                    type='submit'
                    className='btn'
                    disabled={!isRegistrationDataValid()}
                >
                    Зарегистрироваться
                </button>
            </div>
        </RegistrationBaseBlock>
    );
}

ParentRegistration.propTypes = {
    registrationData: PropTypes.object.isRequired,
    setRegistrationData: PropTypes.func.isRequired,
    currentStage: PropTypes.number
}

export default ParentRegistration;