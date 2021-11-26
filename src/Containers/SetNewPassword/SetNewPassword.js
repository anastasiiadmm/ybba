import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { Button } from '@mui/material';
import Container from 'Components/Container/Container';
import FormField from 'Components/FormField/FormField';
import { resetUserPassword, authSelector } from 'redux/auth/authSlice.js';
import { Link } from 'react-router-dom';

import 'Containers/SetNewPassword/SetNewPassword.css'


const SetNewPassword = props => {

    const initialState = {
        password: '',
        passwordRepeat: ''
    }

    const [data, setData] = useState(initialState)
    const { loading, success, errors, commonError } = useSelector(authSelector)
    const dispatch = useDispatch()
    const history = useHistory()

    const { token } = props.match.params

    const inputChangeHandler = e => setData({ ...data, [e.target.name]: e.target.value })
    const onSubmit = e => {
        e.preventDefault()
        dispatch(resetUserPassword({ password: data.password, token }))
    }

    const isFormValid = (data.passwordRepeat && data.password) && (data.password === data.passwordRepeat)

    useEffect(() => {
        if (success) {
            history.push('/login/')
        }
        // eslint-disable-next-line
    }, [success])

    return (
        <Container>
            <div className='form2'>
                <form onSubmit={onSubmit}>
                    <div className='form2__inner'>
                        <Button component={Link} to='/login/' type='button' className='btn-close form2__btn-close' />
                        <h4 className='form2__title'>Восстановление пароля</h4>

                        <div className='form2__row'>
                            <FormField
                                type='password'
                                className='form2__field'
                                label='Новый пароль'
                                required
                                name='password'
                                onChange={inputChangeHandler}
                                errors={errors}
                            />
                            {commonError && <p className='form2__error'>{commonError}</p>}
                        </div>

                        <div className='form2__row'>
                            <FormField
                                type='password'
                                className='form2__field'
                                label='Подтвердите пароль'
                                required
                                name='passwordRepeat'
                                onChange={inputChangeHandler}
                                errors={errors}
                            />
                            {!isFormValid ? <p className='form2__error'>Пароли не совпадают</p> :
                                commonError && <p className='form2__error'>{commonError}</p>}
                        </div>

                        <div className='form2__row'>
                            <Button
                                className='btn2'
                                type='submit'
                                disabled={!isFormValid}
                                loading={loading}
                            >
                                Сохранить
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </Container>
    );
}

export default SetNewPassword;