import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router';

import Container from 'Components/Container/Container';
import FormField from 'Components/FormField/FormField';
import Button from 'Components/Button/Button';
import {resetUserPassword, authSelector} from 'redux/auth/authSlice.js';


const SetNewPassword = props => {

    const initialState = {
        password: '',
        passwordRepeat: ''
    }

    const [data, setData] = useState(initialState)
    const {loading, success, errors, commonError} = useSelector(authSelector)
    const dispatch = useDispatch()
    const history = useHistory()

    const {token} = props.match.params

    const inputChangeHandler = e => setData({...data, [e.target.name]: e.target.value})
    const onSubmit = e => {
        e.preventDefault()
        dispatch(resetUserPassword({password: data.password, token}))
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
            <div className='form__wrap'>
                <div className='form form_narrow'>
                    <form onSubmit={onSubmit}>
                        <h4 className='form__title'>Введите новый пароль</h4>
                        <div className='form__row'>
                            <FormField
                                type='password'
                                className='form__field'
                                label='Новый пароль'
                                required
                                name='password'
                                onChange={inputChangeHandler}
                                errors={errors}
                            />
                        </div>
                        <div className='form__row'>
                            <FormField
                                type='password'
                                className='form__field'
                                label='Повторите пароль'
                                required
                                name='passwordRepeat'
                                onChange={inputChangeHandler}
                                errors={errors}
                            />
                        </div>
                        {commonError && <p className='form__error-text'>{commonError}</p>}
                        <div className='form__row form__row_pd'>
                            <Button
                                className='btn'
                                type='submit'
                                disabled={!isFormValid}
                                loading={loading}
                            >
                                Сбросить пароль
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    );
}

export default SetNewPassword;