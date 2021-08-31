import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {NavLink} from "react-router-dom";

import Button from "../../Components/Button/Button.js";
import Container from "../../Components/Container/Container.js";
import FormField from "../../Components/FormField/FormField";
import SocialMediaBlock from "../../Components/SocialMediaBlock/SocialMediaBlock";
import {clearUserState, loginUser, userSelector} from "../../redux/user/userSlice";


const Login = () => {
    const loginDataInit = {
        email: '',
        password: ''
    }

    const [loginData, setLoginData] = useState(loginDataInit)

    const {loading, errors, user, success} = useSelector(userSelector)

    const dispatch = useDispatch()
    const history = useHistory()

    const inputChangeHandler = e => setLoginData({...loginData, [e.target.name]: e.target.value})
    const submitChangeHandler = e => {
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
    }, [])

    useEffect(() => {
        pushToMainPage()
    }, [user, success])

    return (
        <Container>
            <div className="form__wrap">
                <div className="form form_narrow">
                    <form onSubmit={submitChangeHandler}>
                        <h4 className="form__title">Войти</h4>
                        <div className="form__row">
                            <p className="form__text">Через соцсеть</p>
                            <SocialMediaBlock/>
                        </div>
                        <div className="form__row">
                            <FormField
                                label='Email'
                                type="email"
                                className={`form__field ${errors && 'error'}`}
                                required
                                pattern="^(.+)@(.+)\.(.+)$"
                                name='email'
                                onChange={inputChangeHandler}
                                value={loginData.email}
                            />
                        </div>
                        <div className="form__row">
                            <FormField
                                label='Пароль'
                                type='password'
                                className={`form__field passw-first ${errors && 'error'}`}
                                required
                                name='password'
                                onChange={inputChangeHandler}
                                value={loginData.password}
                            />
                        </div>
                        {errors && <p className="form__error-text">{errors}</p>}
                        <div className="form__row form__row_pd">
                            <Button
                                type="submit"
                                className="btn"
                                disabled={(!loginData.email || !loginData.password)}
                                loading={loading}
                            >
                                Войти
                            </Button>
                        </div>
                        <p className="form__link-wrap">
                            Забыли пароль?{' '}
                            <NavLink className="form__link" to='/reset-password/'>Восстановить пароль</NavLink>
                        </p>
                        <p className="form__link-wrap">
                            Нет аккаунта?{' '}
                            <NavLink className="form__link" to='/registration/1/'>Зарегистрироваться</NavLink>
                        </p>
                    </form>
                </div>
            </div>
        </Container>
    );
}

export default React.memo(Login);