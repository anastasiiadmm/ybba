import React, { useState, useEffect } from 'react';


import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import FormField from 'Components/FormField/FormField';
import { updateUserPassword, userSelector } from 'redux/user/userSlice';
import { authSelector } from 'redux/auth/authSlice';
import { childSelector, getCitiesList, getCountriesList } from 'redux/child/childSlice';
import Field from 'Components/Field/Field';
import { allRussianWardsAndHyphen } from 'regex/patterns/html';

const ParentProfileForm = (props) => {
  const { formData, setFormData, setCountry, setCity } = props;

    const { formData, errors, control, register, country } = props
    const initialPasswordData = { 'password': '', 'passwordRepeat': '' }

    const { cities, countries } = useSelector(childSelector)
    const { user } = useSelector(authSelector)
    const { isPasswordUpdated } = useSelector(userSelector)

    const getCountryName = id => countries?.find(country => country.id === id)?.name

  const [passwordChanging, setPasswordChanging] = useState(false);
  const [countriesOptions, setCountriesOptions] = useState([]);
  const [citiesOptions, setCitiesOptions] = useState([]);
  const [passwordData, setPasswordData] = useState(initialPasswordData);

  const dispatch = useDispatch();

  const isPasswordsEquals =
    passwordData.password === passwordData.passwordRepeat &&
    passwordData.password &&
    passwordData.passwordRepeat;

    const editPasswordChangeHandler = () => {
        setPasswordData({ ...passwordData, password: '', passwordRepeat: '' })
        setPasswordChanging(!passwordChanging)
    }
    const passwordInputChangeHandler = e => {
        setPasswordData({ ...passwordData, [e.target.name]: e.target.value })
    }

  const editPassword = async () => {
    const submitData = {
      data: { password: passwordData.password },
      userId: user.id,
    };
    await dispatch(updateUserPassword(submitData));
  };

  useEffect(() => {
    setPasswordChanging(false);
  }, [isPasswordUpdated]);

    useEffect(() => {
        if (countries) {
            setCountriesOptions(countries?.map(country => {
                return { id: country.id, label: country.name }
            }))
        }
    }, [countries])

    useEffect(() => {
        if (cities) {
            setCitiesOptions(cities?.map(city => {
                return { id: city.id, label: city.name }
            }))
        }
    }, [cities])

  useEffect(() => {
    if (formData.profile?.country) {
      dispatch(getCitiesList(formData.profile?.country));
    }
  }, [dispatch, formData.profile?.country]);

    useEffect(() => {
        if (country && countriesOptions.find(c => c.id === country)?.label === 'Россия') {
            dispatch(getCitiesList(country))
        }
    }, [countriesOptions, country, dispatch])

    return (
        <>
            <div className='form__row form__row_flex'>
                <div className='form__col2'>
                    <Field
                        id='parentProfileFirstName'
                        control={control}
                        register={register}
                        label='Имя'
                        type='text'
                        className='form__field'
                        name='profile.first_name'
                        errors={errors}
                        classNameLabel='form__label'
                        pattern={allRussianWardsAndHyphen}
                        required
                        maxLength='50'
                        tooltipTitle='Имя'
                        tooltipText='Максимум 50 символов (только кириллица в обоих регистрах и пробел). Специальные символы запрещены, кроме дефиса (“-”).'
                    />
                </div>
                <div className='form__col2'>
                    <Field
                        id='parentProfileLastName'
                        control={control}
                        register={register}
                        label='Фамилия'
                        type='text'
                        className='form__field'
                        name='profile.last_name'
                        errors={errors}
                        classNameLabel='form__label'
                    />
                </div>
            </div>
            <div className='form__row form__row_flex'>
                <div className='form__col2'>
                    <Field
                        id='parentProfileDate'
                        label='Дата рождения'
                        type='date'
                        className='form__field'
                        name='profile.date_of_birth'
                        required
                        control={control}
                        register={register}
                        mask='dd/mm/yyyy'
                        errors={errors}
                        isClearable
                        classNameLabel='form__label'
                    />
                </div>
                <div className='form__col2 form__label'>
                    <Field
                        id='parentProfilePhone'
                        label='Мобильный телефон'
                        type='phone'
                        className='form__field'
                        name='profile.phone_number'
                        errors={errors}
                        control={control}
                        register={register}
                    />
                </div>
            </div>
            {countriesOptions && citiesOptions && (
                <div className='form__row form__row_flex'>
                    <div className='form__col2 form__label'>
                        {countriesOptions.length && (
                            <Field
                                label='Страна проживания'
                                errors={errors}
                                type='select'
                                className='select form__field'
                                name='profile.country'
                                id='parentProfileCountry'
                                options={countriesOptions}
                                register={register}
                                control={control}
                                classNameLabel='form__label'
                            />
                        )}
                    </div>
                    {getCountryName(country) === 'Россия' && citiesOptions.length && (
                        <div className='form__col2 form__label'>
                            <Field
                                label='Город проживания'
                                type='select'
                                errors={errors}
                                className='select form__field'
                                name='profile.city'
                                id='parentProfileCity'
                                options={citiesOptions}
                                register={register}
                                control={control}
                                classNameLabel='form__label'
                            />
                        </div>
                    )}
                </div>
            )}

            <div className='form__row form__row_flex'>
                <div className='form__col2 is-hidden'>
                    <label htmlFor='email' className='form__label'>Email</label>
                    <div className='form__visible-block'>
                        <div className='form__visible-in'>
                            <div className='form__text'>{formData?.email}</div>
                        </div>
                    </div>
                </div>
              </div>
              {passwordData.passwordRepeat &&
                passwordData.password &&
                !isPasswordsEquals && (
                  <p className="form__error-text">Пароли не совпадают</p>
                )}
              <div>
                {isPasswordsEquals && (
                  <button
                    type="button"
                    className="btn-out"
                    onClick={editPassword}
                  >
                    Сохранить
                  </button>
                )}{' '}
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={editPasswordChangeHandler}
                >
                  Отмена
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

ParentProfileForm.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func,
};

export default ParentProfileForm;
