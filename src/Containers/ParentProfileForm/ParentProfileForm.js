import React, {useState} from 'react';

import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';

import FormField from '../../Components/FormField/FormField';
import Button from '../../Components/Button/Button';
import {editUserEmail, updateUserPassword} from '../../redux/user/userSlice';
import {getCurrentUserData, authSelector} from '../../redux/auth/authSlice';


const ParentProfileForm = (props) => {

    const {formData, setFormData} = props

    const initialPasswordData = {'password': '', 'passwordRepeat': ''}

    const {user} = useSelector(authSelector)

    const [emailChanging, setEmailChanging] = useState(false)
    const [passwordChanging, setPasswordChanging] = useState(false)
    const [passwordData, setPasswordData] = useState(initialPasswordData)

    const isPasswordsEquals = (passwordData.password === passwordData.passwordRepeat) &&
        (passwordData.password && passwordData.passwordRepeat)

    const dispatch = useDispatch()

    const inputChangeHandler = e => {
        const newData = {...formData, profile: {...formData.profile, [e.target.name]: e.target.value}}
        setFormData(newData)
    }
    const birthDateHandler = data => {
        const newData = {...formData, profile: {...formData.profile, date_of_birth: data}}
        setFormData(newData)
    }
    const phoneInputChangeHandler = number => {
        const newData = {...formData, profile: {...formData.profile, phone_number: number}}
        setFormData(newData)
    }
    const emailChangeHandler = e => {
        setFormData({...formData, email: e.target.value})
    }
    const editEmailChangeHandler = () => {
        setEmailChanging(!emailChanging)
    }
    const editPasswordChangeHandler = () => {
        setPasswordData({...passwordData, password: '', passwordRepeat: ''})
        setPasswordChanging(!passwordChanging)
    }
    const passwordInputChangeHandler = e => {
        setPasswordData({...passwordData, [e.target.name]: e.target.value})
    }

    const editEmail = () => {
        dispatch(editUserEmail(formData))
        setEmailChanging(false)
        dispatch(getCurrentUserData())
    }
    const editPassword = () => {
        const submitData = {data: {password: passwordData.password}, userId: user.id}
        dispatch(updateUserPassword(submitData))
        setPasswordChanging(false)
    }

    return (
        <>
            <div className='form__row form__row_flex'>
                <div className='form__col2'>
                    <FormField
                        label='Имя'
                        type='text'
                        className='form__field'
                        value={formData.profile.first_name}
                        name='first_name'
                        onChange={inputChangeHandler}
                    />
                </div>
                <div className='form__col2'>
                    <FormField
                        label='Фамилия'
                        type='text'
                        className='form__field'
                        value={formData.profile.last_name}
                        name='last_name'
                        onChange={inputChangeHandler}
                    />
                </div>
            </div>
            <div className='form__row form__row_flex'>
                <div className='form__col2'>
                    <FormField
                        label='Дата'
                        showMaskOnHover={true}
                        showMaskOnFocus={true}
                        mask='dd/mm/yyyy'
                        type='datepicker'
                        className='form__field'
                        value={formData.profile.date_of_birth}
                        name='date_of_birth'
                        onChange={birthDateHandler}
                    />
                </div>
                <div className='form__col2'>
                    <FormField
                        label='Мобильный телефон'
                        type='phone'
                        className='form__field'
                        value={formData.profile.phone_number}
                        onChange={phoneInputChangeHandler}
                    />
                </div>
            </div>
            <div className='form__row form__row_flex'>
                <div className='form__col2 is-hidden'>
                    <label htmlFor='email' className='form__label'>Email</label>
                    {!emailChanging && <div className='form__visible-block'>
                        <div className='form__visible-in'>
                            <div className='form__text'>{formData.email}</div>
                            <Button
                                type='button'
                                className='btn-out form__show-field'
                                onClick={editEmailChangeHandler}
                            >Сменить email</Button>
                        </div>
                    </div>}
                    {emailChanging && <div className='form__hidden-in'>
                        <FormField
                            type='email'
                            className='form__field form__field_wfix-big'
                            value={formData.email}
                            onChange={emailChangeHandler}
                            pattern='^(.+)@(.+)\.(.+)$'
                        />
                        <div>
                            <Button
                                type='button'
                                className='btn-out'
                                onClick={editEmail}
                            >
                                Сохранить
                            </Button>{' '}
                            <Button
                                type='button'
                                className='btn-cancel'
                                onClick={editEmailChangeHandler}
                            >
                                Отмена
                            </Button>
                        </div>
                    </div>}
                </div>
            </div>
            <div className='form__row form__row_flex'>
                <div className='form__col2 is-hidden'>
                    <label htmlFor='passw' className='form__label'>Пароль</label>
                    {!passwordChanging && <div className='form__visible-block'>
                        <div className='form__visible-in'>
                            <div className='form__text'>**********</div>
                            <button type='button' className='btn-out form__show-field' onClick={editPasswordChangeHandler}>Сменить пароль</button>
                        </div>
                    </div>}
                    {passwordChanging && <div className='form__hidden-in'>
                        <div className='dflex'>
                            <div className='form__hidden-col'>
                                <label htmlFor='passw' className='form__label'>Введите пароль</label>
                                <div className='btn-eye__wrap'>
                                    <FormField
                                        type='password'
                                        className='form__field form__field_wfix-passw'
                                        value={passwordData.password}
                                        onChange={passwordInputChangeHandler}
                                        name='password'
                                    />
                                </div>
                            </div>
                            <div className='form__hidden-col'>
                                <label htmlFor='passw2' className='form__label'>Повторите пароль</label>
                                <div className='btn-eye__wrap'>
                                    <FormField
                                        type='password'
                                        className='form__field form__field_wfix-passw'
                                        value={passwordData.passwordRepeat}
                                        onChange={passwordInputChangeHandler}
                                        name='passwordRepeat'
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            {isPasswordsEquals && <button
                                type='button'
                                className='btn-out'
                                onClick={editPassword}
                            >
                                Сохранить
                            </button>}{' '}
                            <button type='button' className='btn-cancel' onClick={editPasswordChangeHandler}>Отмена</button>
                        </div>
                    </div>}
                </div>
            </div>
        </>
    );
}

ParentProfileForm.propTypes = {
    formData: PropTypes.object,
    setFormData: PropTypes.func
}

export default ParentProfileForm;