import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { allRussianWardsAndHyphen } from 'regex/patterns/html.js';
import { childSelector, getCountriesList, getCitiesList } from 'redux/child/childSlice.js';
import Field from 'Components/Field/Field';

const ChildrenForm = (props) => {

    const {
        childrenData, country, register, control, errors
    } = props

    const { cities, countries } = useSelector(childSelector)

    const dispatch = useDispatch()

    const [countriesOptions, setCountriesOptions] = useState([])
    const [citiesOptions, setCitiesOptions] = useState([])

    useEffect(() => {
        dispatch(getCountriesList())
    }, [dispatch])

    useEffect(() => {
        if (childrenData?.country) {
            dispatch(getCitiesList(childrenData?.country))
        }
    }, [childrenData?.country, dispatch])

    useEffect(() => {
        if (countries) {
            setCountriesOptions(countries.map(country => {
                return { id: country.id, label: country.name }
            }))
        }
    }, [countries])

    useEffect(() => {
        if (cities) {
            setCitiesOptions(cities.map(city => {
                return { id: city.id, label: city.name }
            }))
        }
    }, [cities])

    useEffect(() => {
        if (country && countriesOptions.find(c => c.id === country)?.label === 'Россия') {
            dispatch(getCitiesList(country))
        }
    }, [countriesOptions, country, dispatch])

    return <>
        <h4 className='form__title'>Основная информация ребенка</h4>
        <div className='form__row'>
            <Field
                id='childProfileFirstName'
                errors={errors}
                label='Имя'
                type='text'
                name='first_name'
                className='form__field'
                pattern={allRussianWardsAndHyphen}
                required
                maxLength='50'
                tooltipTitle='Имя'
                tooltipText='Максимум 50 символов (только кириллица в обоих регистрах и пробел). Специальные символы запрещены, кроме дефиса (“-”).'
                value={childrenData.first_name}
                register={register}
                classNameLabel='form__label'
            />
        </div>
        <div className='form__row'>
            <Field
                label='Фамилия'
                id='childProfileLastName'
                errors={errors}
                type='text'
                className='form__field'
                name='last_name'
                pattern={allRussianWardsAndHyphen}
                required
                maxLength='50'
                tooltipTitle='Фамилия'
                tooltipText='Максимум 50 символов (только кириллица в обоих регистрах и пробел). Специальные символы запрещены, кроме дефиса (“-”).'
                value={childrenData.last_name}
                register={register}
                classNameLabel='form__label'
            />
        </div>
        <div className='form__row'>
            <Field
                id='childProfileDate'
                label='Дата рождения'
                type='date'
                className='form__field'
                name='date_of_birth'
                required
                control={control}
                mask='dd/mm/yyyy'
                errors={errors}
                isClearable
                register={register}
                classNameLabel='form__label'
            />
        </div>
        {countriesOptions && citiesOptions && (
            <div className='form__row form__row_flex'>
                <div className='form__col2 form__label'>
                    {countriesOptions.length && (
                        <Field
                            label='Страна проживания'
                            errors={errors}
                            type='select'
                            className='classes__select select form__field'
                            name='country'
                            id='childProfileCountry'
                            options={countriesOptions}
                            register={register}
                            control={control}
                            classNameLabel='form__label'
                        />
                    )}
                </div>
                {!!citiesOptions.length && (
                    <div className='form__col2 form__label'>
                        <Field
                            label='Город проживания'
                            type='select'
                            errors={errors}
                            className='classes__select select form__field'
                            name='city'
                            id='childProfileCity'
                            options={citiesOptions}
                            register={register}
                            control={control}
                            classNameLabel='form__label'
                        />
                    </div>
                )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

ChildrenForm.propTypes = {
  childrenData: PropTypes.object.isRequired,
  setChildrenData: PropTypes.func.isRequired,
  setCity: PropTypes.func,
  setCountry: PropTypes.func,
};

export default ChildrenForm;