import React, { useEffect, useCallback, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup'

import { registrationSchema } from 'Containers/Registration/yupSchema.js';
import Field from 'Components/Field/Field.js';
import { getCountriesList, childSelector, getCitiesList } from 'redux/child/childSlice.js';

const Registration = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        watch,
        setValue
    } = useForm({
        resolver: yupResolver(registrationSchema)
    })
    const country = watch('country')
    const { countries, cities } = useSelector(childSelector)

    const [countiesOptions, setCountriesOptions] = useState([])
    const [citiesOptions, setCitiesOptions] = useState([])

    const dispatch = useDispatch()

    const queryParams = new URLSearchParams(useLocation().search)

    const handleRegistrationFormSubmit = (data) => {
        console.log(1234, data)
    }
    const setDefaultValues = useCallback(() => {
        setValue('parent.email', queryParams.get('email'))
        setValue('child.date_of_birth', new Date())
    }, [setValue])

    useEffect(() => {
        setDefaultValues()
    }, [setDefaultValues])

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

    console.log(errors)

    return (
        <div className='all-page2'>
            <div className='form2'>
                <div className='form2__inner'>
                    <button type='button' className='btn-close form2__btn-close'/>
                    <h4 className='form2__title'>Регистрация</h4>
                    <form onSubmit={handleSubmit(handleRegistrationFormSubmit)}>
                        <div className='form2__row'>
                            <Field
                                id='first_name'
                                label='Ваше имя'
                                register={register}
                                name='parent.profile.first_name'
                                errors={errors}
                                className='form2__field'
                            />
                        </div>
                        <div className='form2__row'>
                            <Field
                                id='last_name'
                                label='Ваша фамилия'
                                register={register}
                                name='parent.profile.last_name'
                                errors={errors}
                                className='form2__field'
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