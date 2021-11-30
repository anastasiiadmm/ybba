import React, { useState, useEffect } from 'react';

import moment from 'moment';

import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import FormField from 'Components/FormField/FormField';
import Button from 'Components/Button/Button';
import { editUserEmail, updateUserPassword, userSelector } from 'redux/user/userSlice';
import { getCurrentUserData, authSelector } from 'redux/auth/authSlice';
import { childSelector, getCitiesList, getCountriesList } from 'redux/child/childSlice';
import { Russian } from 'assets/vendor/flatpickr/ru';
import { namesOfMonths } from 'constants.js';
import { momentDateToStr } from 'utils/date/dateUtils';


const ParentProfileForm = (props) => {

    const { formData, setFormData, setCountry, setCity } = props

    const initialPasswordData = { 'password': '', 'passwordRepeat': '' }

    const { cities, countries } = useSelector(childSelector)
    const { user } = useSelector(authSelector)
    const { isPasswordUpdated, errors, editEmailErrors, editUserEmailSuccess } = useSelector(userSelector)

    const [emailChanging, setEmailChanging] = useState(false)
    const [passwordChanging, setPasswordChanging] = useState(false)
    const [countriesOptions, setCountriesOptions] = useState([])
    const [citiesOptions, setCitiesOptions] = useState([])
    const [passwordData, setPasswordData] = useState(initialPasswordData)

    const dispatch = useDispatch()

    const isPasswordsEquals = (passwordData.password === passwordData.passwordRepeat) &&
        (passwordData.password && passwordData.passwordRepeat)

    const inputChangeHandler = e => {
        const newData = { ...formData, profile: { ...formData.profile, [e.target.name]: e.target.value } }
        setFormData(newData)
    }
    const birthDateHandler = data => {
        const newDate = momentDateToStr(data.toString())
        const validDate = newDate === 'dd/mm/yyyy' ? '' : momentDateToStr(data.toString())
        const newData = { ...formData, profile: { ...formData.profile, date_of_birth: validDate } }
        setFormData(newData)
    }
    const phoneInputChangeHandler = number => {
        const newData = { ...formData, profile: { ...formData.profile, phone_number: number } }
        setFormData(newData)
    }
    const emailChangeHandler = e => {
        setFormData({ ...formData, email: e.target.value })
    }
    const editEmailChangeHandler = () => {
        setEmailChanging(!emailChanging)
    }
    const editPasswordChangeHandler = () => {
        setPasswordData({ ...passwordData, password: '', passwordRepeat: '' })
        setPasswordChanging(!passwordChanging)
    }
    const passwordInputChangeHandler = e => {
        setPasswordData({ ...passwordData, [e.target.name]: e.target.value })
    }

    const editEmail = async () => {
        await dispatch(editUserEmail(formData))
    }
    const editPassword = async () => {
        const submitData = { data: { password: passwordData.password }, userId: user.id }
        await dispatch(updateUserPassword(submitData))
    }

    useEffect(() => {
        setPasswordChanging(false)
    }, [isPasswordUpdated])

    useEffect(() => {
        if (editUserEmailSuccess) {
            setEmailChanging(false)
            dispatch(getCurrentUserData())
        }
    }, [dispatch, editUserEmailSuccess])

    useEffect(() => {
        if (countries) {
            setCountriesOptions(countries?.map(country => {
                return { value: country.id, label: country.name }
            }))
        }
    }, [countries])

    useEffect(() => {
        if (cities) {
            setCitiesOptions(cities?.map(city => {
                return { value: city.id, label: city.name }
            }))
        }
    }, [cities])

    useEffect(() => {
        dispatch(getCountriesList())
    }, [dispatch])

    useEffect(() => {
        if (formData.profile?.country) {
            dispatch(getCitiesList(formData.profile?.country))
        }
    }, [dispatch, formData.profile?.country])

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
                        errors={errors?.profile}
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
                        errors={errors?.profile}
                    />
                </div>
            </div>
            <div className='form__row form__row_flex'>
                <div className='form__col2'>
                    <FormField
                        configs={{
                            locale: {
                                ...Russian,
                                months: {
                                    ...Russian.months,
                                    longhand: namesOfMonths
                                }
                            },
                            firstDayOfWeek: 2,
                            dateFormat: 'd/m/Y',
                            enableTime: false,
                            maxDate: momentDateToStr(moment())
                        }}
                        label='Дата'
                        type='datepicker'
                        className='form__field'
                        selected={formData.profile.date_of_birth}
                        value={formData.profile.date_of_birth}
                        name='date_of_birth'
                        onChange={birthDateHandler}
                        errors={errors?.profile}
                        isClearable
                    />
                </div>
                <div className='form__col2 form__label'>
                    <FormField
                        label='Мобильный телефон'
                        type='phone'
                        className='form__field'
                        value={formData.profile.phone_number}
                        onChange={phoneInputChangeHandler}
                        errors={errors?.profile}
                    />
                </div>
            </div>
            {countriesOptions && citiesOptions && (
                <div className='form__row form__row_flex'>
                    <div className='form__col2 form__label'>
                        <FormField
                            label='Страна проживания'
                            type='select'
                            name='country'
                            options={countriesOptions}
                            onChange={(event, newValue) => {
                                setCountry(newValue)
                            }}
                            value={formData.profile.country}
                        />
                    </div>
                    {countriesOptions.find(option => option.value === formData.profile.country)?.label === 'Россия' && (
                        <div className='form__col2 form__label'>
                            <FormField
                                label='Город проживания'
                                type='select'
                                name='country'
                                options={citiesOptions}
                                onChange={(event, newValue) => {
                                    setCity(newValue)
                                }}
                                value={formData.profile.city}
                            />
                        </div>
                    )}
                </div>
            )}

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
                            errors={editEmailErrors}
                            name='email'
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
                            <button type='button' className='btn-out form__show-field'
                                    onClick={editPasswordChangeHandler}>Сменить пароль
                            </button>
                        </div>
                    </div>}
                    {passwordChanging && <div className='form__hidden-in'>
                        <div className='dflex'>
                            <div className='form__hidden-col'>
                                <FormField
                                    label='Введите пароль'
                                    type='password'
                                    className='form__field form__field_wfix-passw'
                                    value={passwordData.password}
                                    onChange={passwordInputChangeHandler}
                                    name='password'
                                    errors={errors}
                                />
                            </div>
                            <div className='form__hidden-col'>
                                <FormField
                                    label='Повторите пароль'
                                    type='password'
                                    className='form__field form__field_wfix-passw'
                                    value={passwordData.passwordRepeat}
                                    onChange={passwordInputChangeHandler}
                                    name='passwordRepeat'
                                />
                            </div>
                        </div>
                        {passwordData.passwordRepeat && passwordData.password && !isPasswordsEquals && (
                            <p className='form__error-text'>Пароли не совпадают</p>
                        )}
                        <div>
                            {isPasswordsEquals && <button
                                type='button'
                                className='btn-out'
                                onClick={editPassword}
                            >
                                Сохранить
                            </button>}{' '}
                            <button type='button' className='btn-cancel' onClick={editPasswordChangeHandler}>Отмена
                            </button>
                        </div>
                    </div>}
                </div>
            </div>
        </>
    );
};

ParentProfileForm.propTypes = {
    formData: PropTypes.object,
    setFormData: PropTypes.func
}

export default ParentProfileForm;