import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
<<<<<<< HEAD

import FormField from '../../Components/FormField/FormField.js';
import { allRussianWardsAndHyphen } from 'regex/patterns/html.js';
import FormRow from '../../Components/FormRow/FormRow';
import {
  childSelector,
  getCountriesList,
  getCitiesList,
} from 'redux/child/childSlice.js';
=======
import moment from 'moment';

import FormField from 'Components/FormField/FormField.js';
import { allRussianWardsAndHyphen } from 'regex/patterns/html.js';
import { childSelector, getCountriesList, getCitiesList } from 'redux/child/childSlice.js';
>>>>>>> development
import config from 'config.js';
import { Russian } from 'assets/vendor/flatpickr/ru';
import { namesOfMonths } from 'constants.js';
import { momentDateToStr } from 'utils/date/dateUtils';

const ChildrenForm = (props) => {
<<<<<<< HEAD
  const { childrenData, setChildrenData, setCountry, setCity } = props;

  const { cities, countries } = useSelector(childSelector);

  const dispatch = useDispatch();

  const [countriesOptions, setCountriesOptions] = useState([]);
  const [citiesOptions, setCitiesOptions] = useState([]);

  const setToLocalStorage = (data) => {
    localStorage.setItem(
      config.registrationChildLocalStorageName,
      JSON.stringify(data)
    );
  };
  const inputChangeHandler = (e) => {
    const newChildrenData = {
      ...childrenData,
      [e.target.name]: e.target.value,
    };
    setChildrenData(newChildrenData);
    setToLocalStorage(newChildrenData);
  };
  const ageChangeHandler = (data) => {
    const validDate = data === 'dd/mm/yyyy' ? '' : data;
    const newChildrenData = {
      ...childrenData,
      date_of_birth: validDate,
      country: '1a4979ca-c051-4161-8469-879e2d05a298',
    };
    setChildrenData(newChildrenData);
    setToLocalStorage(newChildrenData);
  };

  useEffect(() => {
    dispatch(getCountriesList());
  }, []);

  useEffect(() => {
    if (childrenData.country) {
      dispatch(getCitiesList(childrenData.country));
    }
  }, [childrenData.country]);

  useEffect(() => {
    if (countries) {
      setCountriesOptions(
        countries.map((country) => {
          return { value: country.id, label: country.name };
        })
      );
    }
  }, [countries]);

  useEffect(() => {
    if (cities) {
      setCitiesOptions(
        cities.map((city) => {
          return { value: city.id, label: city.name };
        })
      );
    }
  }, [cities]);

  return (
    <>
      <h4 className="form__title">Основная информация ребенка</h4>
      <div className="form__row">
        <FormField
          label="Имя"
          type="text"
          name="first_name"
          className="form__field"
          pattern={allRussianWardsAndHyphen}
          required
          maxLength="50"
          tooltipTitle="Имя"
          tooltipText="Максимум 50 символов (только кириллица в обоих регистрах и пробел). Специальные символы запрещены, кроме дефиса (“-”)."
          onChange={inputChangeHandler}
          value={childrenData.first_name}
        />
      </div>
      <div className="form__row">
        <FormField
          label="Фамилия"
          type="text"
          className="form__field"
          name="last_name"
          pattern={allRussianWardsAndHyphen}
          required
          maxLength="50"
          tooltipTitle="Фамилия"
          tooltipText="Максимум 50 символов (только кириллица в обоих регистрах и пробел). Специальные символы запрещены, кроме дефиса (“-”)."
          onChange={inputChangeHandler}
          value={childrenData.last_name}
        />
      </div>
      <div className="form__row">
        <FormField
          showMaskOnHover={true}
          showMaskOnFocus={true}
          label="Дата рождения"
          type="datepicker"
          className="form__field"
          name="date_of_birth"
          mask="dd/mm/yyyy"
          required
          value={childrenData.date_of_birth}
          onChange={ageChangeHandler}
        />
      </div>
      {countriesOptions && citiesOptions && (
        <>
          <FormRow>
            <FormField
              label="Страна проживания"
              type="select"
              className="w-100"
              name="country"
              options={countriesOptions}
              onChange={setCountry}
              value={childrenData.country}
            />
          </FormRow>
          {countriesOptions.find(
            (option) => option.value === childrenData.country
          )?.label === 'Россия' && (
            <FormRow>
              <FormField
                label="Город проживания"
                type="select"
                className="w-100"
                name="country"
                options={citiesOptions}
                onChange={setCity}
                value={childrenData.city}
              />
            </FormRow>
          )}
        </>
      )}
    </>
  );
};
=======

    const {
        childrenData, setChildrenData, setCountry, setCity
    } = props

    const { cities, countries } = useSelector(childSelector)

    const dispatch = useDispatch()

    const [countriesOptions, setCountriesOptions] = useState([])
    const [citiesOptions, setCitiesOptions] = useState([])

    const setToLocalStorage = (data) => {
        localStorage.setItem(config.registrationChildLocalStorageName, JSON.stringify(data))
    }
    const inputChangeHandler = e => {
        const newChildrenData = { ...childrenData, [e.target.name]: e.target.value }
        setChildrenData(newChildrenData)
        setToLocalStorage(newChildrenData)
    }
    const ageChangeHandler = data => {
        const newDate = momentDateToStr(data.toString())
        const validDate = newDate === 'dd/mm/yyyy' ? '' : momentDateToStr(data.toString())
        const newChildrenData = { ...childrenData, date_of_birth: validDate }
        setChildrenData(newChildrenData)
        setToLocalStorage(newChildrenData)
    }

    useEffect(() => {
        dispatch(getCountriesList())
    }, [dispatch])

    useEffect(() => {
        if (childrenData.country) {
            dispatch(getCitiesList(childrenData.country))
        }
    }, [childrenData.country, dispatch])

    useEffect(() => {
        if (countries) {
            setCountriesOptions(countries.map(country => {
                return { value: country.id, label: country.name }
            }))
        }
    }, [countries])

    useEffect(() => {
        if (cities) {
            setCitiesOptions(cities.map(city => {
                return { value: city.id, label: city.name }
            }))
        }
    }, [cities])

    return <>
        <h4 className='form__title'>Основная информация ребенка</h4>
        <div className='form__row'>
            <FormField
                label='Имя'
                type='text'
                name='first_name'
                className='form__field'
                pattern={allRussianWardsAndHyphen}
                required
                maxLength='50'
                tooltipTitle='Имя'
                tooltipText='Максимум 50 символов (только кириллица в обоих регистрах и пробел). Специальные символы запрещены, кроме дефиса (“-”).'
                onChange={inputChangeHandler}
                value={childrenData.first_name}
            />
        </div>
        <div className='form__row'>
            <FormField
                label='Фамилия'
                type='text'
                className='form__field'
                name='last_name'
                pattern={allRussianWardsAndHyphen}
                required
                maxLength='50'
                tooltipTitle='Фамилия'
                tooltipText='Максимум 50 символов (только кириллица в обоих регистрах и пробел). Специальные символы запрещены, кроме дефиса (“-”).'
                onChange={inputChangeHandler}
                value={childrenData.last_name}
            />
        </div>
        <div className='form__row'>
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
                label='Дата рождения'
                type='datepicker'
                className='form__field'
                name='date_of_birth'
                mask='dd/mm/yyyy'
                required
                value={childrenData.date_of_birth}
                onChange={ageChangeHandler}
                isClearable
            />
        </div>
        {countriesOptions && citiesOptions && (
            <div className='form__row form__row_flex'>
                <div className='form__col2 form__label'>
                    <FormField
                        label='Страна проживания'
                        type='select'
                        className='w-100'
                        name='country'
                        options={countriesOptions}
                        onChange={(event, newValue) => {
                            setCountry(newValue.value)
                        }}
                        value={childrenData.country}
                    />
                </div>
                {countriesOptions.find(option => option.value === childrenData.country)?.label === 'Россия' && (
                    <div className='form__col2 form__label'>
                        <FormField
                            label='Город проживания'
                            type='select'
                            className='w-100'
                            name='country'
                            options={citiesOptions}
                            onChange={(event, newValue) => {
                                setCity(newValue)
                            }}
                            value={childrenData.city}
                        />
                    </div>
                )}
            </div>
        )}
    </>;
}
>>>>>>> development

ChildrenForm.propTypes = {
  childrenData: PropTypes.object.isRequired,
  setChildrenData: PropTypes.func.isRequired,
  setCity: PropTypes.func,
  setCountry: PropTypes.func,
};

export default ChildrenForm;
