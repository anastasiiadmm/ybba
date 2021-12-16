import React, { useEffect, useState, useCallback } from 'react';

import { useForm } from 'react-hook-form';
import { useLocation, useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup'
import moment from 'moment'

import { registrationSchema } from 'Containers/Registration/yupSchema.js';
import Field from 'Components/Field/Field.js';
import { getCountriesList, childSelector, getCitiesList, createChild } from 'redux/child/childSlice.js';
import { createUser, userSelector } from 'redux/user/userSlice.js';
import { momentDateToStr } from 'utils/date/dateUtils.js';
import { validationMessagesMapping } from 'mappings/validationErrors.js';
import { getDeviceType } from 'utils/getDeviceType/getDeviceType.js';
import { deviceTypes } from 'constants.js';
import { authSelector } from 'redux/auth/authSlice.js';

import 'Containers/Registration/Registration.css'

const Registration = () => {
    const queryParams = new URLSearchParams(useLocation().search)

    const { register, handleSubmit, formState: { errors }, setError, control, watch, getValues } = useForm({
        resolver: yupResolver(registrationSchema),
        defaultValues: {
            parent: { email: queryParams.get('email') },
            child: { date_of_birth: new Date() }
        }
    })
    const country = watch('child.country')
    const { countries, cities } = useSelector(childSelector)
    const { user, tokens, errors: userCreateErrors } = useSelector(userSelector)
    const { user: authUser } = useSelector(authSelector)
    const { success: registrationSuccess } = useSelector(childSelector)
    const [countiesOptions, setCountriesOptions] = useState([])
    const [citiesOptions, setCitiesOptions] = useState([])
    const dispatch = useDispatch()
    const history = useHistory()

    const handleRegistrationFormSubmit = async ({ parent }) => {
        await dispatch(createUser(parent))
    }

    const pushToMainPage = useCallback(() => {
        if (authUser) {
            history.push('/')
        }
    }, [authUser, history])

    const handleParentCreateErrors = useCallback(errors => {
        Object.keys(errors).forEach(fieldErrorName => {
            const error = { type: 'focus', message: validationMessagesMapping[errors[fieldErrorName][0]] }
            const name = `parent.${fieldErrorName}`
            const options = { shouldFocus: true }

            setError(name, error, options)
        })
    }, [setError])

    useEffect(() => {
        if (userCreateErrors) {
            handleParentCreateErrors(userCreateErrors)
        }
    }, [handleParentCreateErrors, userCreateErrors])

    useEffect(() => {
        if (user) {
            const { child } = getValues()
            child.date_of_birth = momentDateToStr(moment(child.date_of_birth))
            child.parent = user.id
            child.tokens = tokens
            dispatch(createChild(child))
        }
    }, [dispatch, getValues, tokens, user])

    useEffect(() => {
        if (registrationSuccess) {
            const deviceType = getDeviceType()
            if (deviceType !== deviceTypes.desktop) {
                history.push('/registration-success/')
            } else {
                history.push('/login/')
            }
        }
    }, [history, registrationSuccess])

    useEffect(() => {
        dispatch(getCountriesList())
    }, [dispatch])

    useEffect(() => {
        if (countries) {
            setCountriesOptions(countries.map(city => ({ label: city.name, id: city.id })))
        }
    }, [countries])

    useEffect(() => {
        if (cities) {
            setCitiesOptions(cities.map(country => ({ label: country.name, id: country.id })))
        }
    }, [cities])

    useEffect(() => {
        if (country && countiesOptions.find(c => c.id === country)?.label === 'Россия') {
            dispatch(getCitiesList(country))
        }
    }, [countiesOptions, country, dispatch])

    useEffect(() => {
        pushToMainPage()
    }, [pushToMainPage])

    return (
        <div className='all-page2 all-page__registration'>
            <div className='form2 form2__zoom'>
                <div className='form2__inner'>
                    <h4 className='form2__title'>Регистрация</h4>
                    <form onSubmit={handleSubmit(handleRegistrationFormSubmit)}>
                        <div className='form2__row'>
                            <Field
                                id='first_name'
                                label='Ваше имя'
                                register={register}
                                name='parent.first_name'
                                errors={errors}
                                className='form2__field'
                                classNameLabel='form2__label'
                            />
                        </div>
                        <div className='form2__row'>
                            <Field
                                id='last_name'
                                label='Ваша фамилия'
                                register={register}
                                name='parent.last_name'
                                errors={errors}
                                className='form2__field'
                                classNameLabel='form2__label'
                            />
                        </div>
                        <div className='form2__row'>
                            <Field
                                id='email'
                                label='Логин'
                                register={register}
                                name='parent.email'
                                errors={errors}
                                className='form2__field'
                                placeholder='username@gmail.com'
                                disabled
                                classNameLabel='form2__label'
                            />
                        </div>
                        <div className='form2__row'>
                            <Field
                                type='password'
                                id='password'
                                label='Пароль'
                                register={register}
                                name='parent.password'
                                errors={errors}
                                className='form2__field'
                                placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;'
                                classNameLabel='form2__label'
                            />
                        </div>
                        <div className='form2__row'>
                            <Field
                                type='password'
                                id='passwordConfirmation'
                                label='Подтвердите пароль'
                                register={register}
                                name='parent.passwordConfirmation'
                                errors={errors}
                                className='form2__field'
                                placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;'
                                classNameLabel='form2__label'
                            />
                        </div>
                        <hr className='form2__line'/>
                        <h4 className='form2__add-title'>Информация о ребенке</h4>
                        <div className='form2__row'>
                            <Field
                                id='child_first_name'
                                label='Имя'
                                register={register}
                                name='child.first_name'
                                errors={errors}
                                className='form2__field'
                                classNameLabel='form2__label'
                            />
                        </div>
                        <div className='form2__row'>
                            <Field
                                id='child_last_name'
                                label='Фамилия'
                                register={register}
                                name='child.last_name'
                                errors={errors}
                                className='form2__field'
                                classNameLabel='form2__label'
                            />
                        </div>
                        <div className='form2__row'>
                            <Field
                                id='child_date_of_birth_date_input'
                                type='date'
                                errors={errors}
                                control={control}
                                register={register}
                                className='form2__field'
                                name='child.date_of_birth'
                                label='Дата рождения'
                                defaultValue={new Date()}
                                classNameLabel='form2__label'
                            />
                        </div>
                        <div className='form2__row'>
                            <Field
                                id='child_country'
                                label='Страна проживания'
                                name='child.country'
                                type='select'
                                control={control}
                                errors={errors}
                                register={register}
                                options={countiesOptions}
                                className='form2__field'
                                classNameLabel='form2__label'
                            />
                        </div>
                        {!!citiesOptions.length && (
                            <div className='form2__row'>
                                <Field
                                    id='child_city'
                                    label='Город проживания'
                                    name='child.city'
                                    type='select'
                                    control={control}
                                    errors={errors}
                                    register={register}
                                    options={citiesOptions}
                                    className='form2__field'
                                    classNameLabel='form2__label'
                                />
                            </div>
                        )}
                        <div className='form2__row'>
                            <button
                                type='submit'
                                className='btn2'
                            >
                                Зарегистрироваться
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Registration;