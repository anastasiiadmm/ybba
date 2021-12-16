import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'Components/Button/Button';
import FormField from 'Components/FormField/FormField';
import Container from 'Components/Container/Container.js';
import { loginUser, authSelector } from 'redux/auth/authSlice.js';
import { clearUserState, clearUserFromUserState } from 'redux/user/userSlice.js';

import 'Containers/Login/Login.css'


const Login = () => {
    const loginDataInit = {
        email: '',
        password: ''
    }

    const [loginData, setLoginData] = useState(loginDataInit)

    const { loading, commonError, user, success } = useSelector(authSelector)

    const dispatch = useDispatch()
    const history = useHistory()

    const inputChangeHandler = e => setLoginData({ ...loginData, [e.target.name]: e.target.value })

    const submitChangeHandler = (e) => {
        e.preventDefault()
        dispatch(loginUser(loginData))
    }
    const pushToMainPage = () => {
        if (success || user) {
            history.push('/')
        }
    }

    useEffect(() => {
        pushToMainPage()
        dispatch(clearUserState())
        dispatch(clearUserFromUserState())
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        pushToMainPage()
        // eslint-disable-next-line
    }, [user, success])

    return (
        <Container className='auth-page'>
            <div className='form2'>
                <form onSubmit={submitChangeHandler}>
                    <div className='form2__inner'>
                        <div className='form2__title-block'>
                            <h4 className='form2__title'>Авторизация</h4>
                            <p className='form2__subtitle'>Чтобы зарегистрироваться в системе,
                                <a href='https://diagnostika.pro/' className='form2__link'> оплатите</a> занятие
                            </p>
                        </div>
                        <div className='form2__row'>
                            <FormField
                                label='Логин'
                                type='email'
                                className={`form2__field passw-first ${commonError && 'error'}`}
                                pattern='^(.+)@(.+)\.(.+)$'
                                name='email'
                                onChange={inputChangeHandler}
                                value={loginData.email}
                            />
                            {commonError && <p className='form__error-text'>Неверный пароль или email</p>}
                        </div>
                        <div className='form2__row'>
                            <Link className='form2__link form2__link_fpassw' to='/reset-password/'>Не помню пароль</Link>
                            <FormField
                                label='Пароль'
                                type='password'
                                className={`form2__field passw-first ${commonError && 'error'}`}
                                name='password'
                                onChange={inputChangeHandler}
                                value={loginData.password}
                                classNameLabel='form2__label'
                            />
                            {commonError && <p className='form__error-text'>Неверный пароль или email</p>}
                        </div>
                        <div className='form2__row'>
                            <Button
                                type='submit'
                                className='btn2'
                                loading={loading}
                            >
                                Войти
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </Container>
    );
}

export default React.memo(Login);