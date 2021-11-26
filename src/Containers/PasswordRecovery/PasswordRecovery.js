import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Button } from '@mui/material';
import Container from 'Components/Container/Container';
import { emailPattern } from 'regex/patterns/html.js';
import FormField from 'Components/FormField/FormField';
import { authSelector, resetUserPasswordSendEmail, clearAuthState } from 'redux/auth/authSlice.js';

import 'Containers/PasswordRecovery/PasswordRecovery.css';


const PasswordRecovery = () => {

    const initialState = {
        email: ''
    }

    const [data, setData] = useState(initialState)
    const { loading, success, commonError, errors } = useSelector(authSelector)

    const dispatch = useDispatch()

    const inputChangeHandler = e => setData({ ...data, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()
        dispatch(resetUserPasswordSendEmail(data))
    }

    useEffect(() => {
        dispatch(clearAuthState())
        // eslint-disable-next-line
    }, [])

    const successSend = (
        <div className='form2__inner'>
            <Button component={Link} to='/login/' type='button' className='btn-close form2__btn-close' />
            <h4 className='form2__title'>Восстановление пароля</h4>
            <p className='form2__message'>Руководство по восстановлению пароля отправлено на вашу почту</p>
            <div className='form2__row'>
                <Button component={Link} to='/login/' type='button' className='btn2'>Закрыть</Button>
            </div>
        </div>
    )

    return (
        <Container>
            <div className='form2'>
                {success ? successSend :
                    <form onSubmit={onSubmit}>
                        <div className='form2__inner'>
                            <Button component={Link} to='/login/' type='button' className='btn-close form2__btn-close' />
                            <h4 className='form2__title'>Восстановление пароля</h4>
                            
                            <div className='form2__row'>
                                <FormField
                                    type='email'
                                    className='form2__field'
                                    label='Email, указанный при регистрации'
                                    required
                                    name='email'
                                    pattern={emailPattern}
                                    onChange={inputChangeHandler}
                                    errors={errors}
                                />
                            </div>
                            {commonError && <p className='form__error-text'>{commonError}</p>}
                            <div className='form2__row'>
                                <Button
                                    className='btn2'
                                    type='submit'
                                    loading={loading}
                                >
                                    Сохранить
                                </Button>
                            </div>
                        </div>
                    </form>
                }
            </div>
        </Container>
    );
}

export default PasswordRecovery;