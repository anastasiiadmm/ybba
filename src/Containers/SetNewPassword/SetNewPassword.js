import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '@mui/material';
import Container from 'Components/Container/Container';
import { resetUserPassword, authSelector } from 'redux/auth/authSlice.js';
import { validationResetPasswordSchema } from 'utils/checkFormVaid/checkFormValid';
import Field from 'Components/Field/Field';

import 'Containers/SetNewPassword/SetNewPassword.css'


const SetNewPassword = props => {

    const initialState = {
        password: '',
        passwordRepeat: ''
    }

    const [data, setData] = useState(initialState)
    const { loading, success } = useSelector(authSelector)
    const dispatch = useDispatch()
    const history = useHistory()

    const { token } = props.match.params

    const inputChangeHandler = e => setData({ ...data, [e.target.name]: e.target.value })

    const formOptions = { resolver: yupResolver(validationResetPasswordSchema) }

    const { register: validate, handleSubmit, formState } = useForm(formOptions)
    const { errors } = formState;

    const onSubmit = () => {
        dispatch(resetUserPassword({ password: data.password, token }))
    }

    useEffect(() => {
        if (success) {
            history.push('/login/')
        }
        // eslint-disable-next-line
    }, [success])

    return (
        <Container className='auth-page'>
            <div className='form2'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='form2__inner'>
                        <Button component={Link} to='/login/' type='button' className='btn-close form2__btn-close' />
                        <h4 className='form2__title'>Восстановление пароля</h4>

                        <div className='form2__row'>
                            <Field
                                type='password'
                                className='form2__field'
                                label='Новый пароль'
                                name='password'
                                onChange={inputChangeHandler}
                                errors={errors}
                                id='password'
                                register={validate}
                                classNameLabel='form2__label'
                            />
                        </div>

                        <div className='form2__row'>
                            <Field
                                type='password'
                                className='form2__field'
                                label='Подтвердите пароль'
                                name='passwordRepeat'
                                onChange={inputChangeHandler}
                                errors={errors}
                                id='passwordRepeat'
                                register={validate}
                                classNameLabel='form2__label'
                            />
                        </div>

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
            </div>
        </Container>
    );
}

export default SetNewPassword;
