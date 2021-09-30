import React, {useState, useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import Container from '../../Components/Container/Container';
import Button from '../../Components/Button/Button';
import {emailPattern} from '../../regex/patterns/html';
import FormField from '../../Components/FormField/FormField';
import {authSelector, resetUserPasswordSendEmail, clearAuthState} from '../../redux/auth/authSlice';


const PasswordRecovery = () => {

    const initialState = {
        email: 'kadyrpoyraz@gmail.com'
    }

    const [data, setData] = useState(initialState)
    const {loading, success, commonError, errors} = useSelector(authSelector)

    const dispatch = useDispatch()

    const inputChangeHandler = e => setData({...data, [e.target.name]: e.target.value})

    const onSubmit = e => {
        e.preventDefault()
        dispatch(resetUserPasswordSendEmail(data))
    }

    useEffect(() => {
        dispatch(clearAuthState())
        // eslint-disable-next-line
    }, [])

    const successSend = (
        <div className='form form_narrow text-center'>
            <h3>Письмо отправленно на почту {data.email}</h3>
        </div>
    )

    return (
        <Container>
            <div className='form__wrap'>
                {success ? successSend : <div className='form form_narrow'>
                    <form onSubmit={onSubmit}>
                        <h4 className='form__title'>Введите свою почту, и мы вышлем вам ссылку на восстановление
                            доступа</h4>
                        <div className='form__row'>
                            <FormField
                                type='email'
                                className='form__field'
                                label='Email'
                                required
                                name='email'
                                pattern={emailPattern}
                                onChange={inputChangeHandler}
                                errors={errors}
                            />
                        </div>
                        {commonError && <p className='form__error-text'>{commonError}</p>}
                        <div className='form__row form__row_pd'>
                            <Button
                                className='btn'
                                disabled={!data.email}
                                type='submit'
                                loading={loading}
                            >
                                Воccтановить пароль
                            </Button>
                        </div>
                        <p className='form__link-wrap'>
                            <Button to='/login/' className='form__link'>
                                Вернуться на страницу авторизации
                            </Button>
                        </p>
                    </form>
                </div>}
            </div>
        </Container>
    );
}

export default PasswordRecovery;