import React from 'react';

import PropTypes from 'prop-types';

import FormField from '../../Components/FormField/FormField.js';
import config from '../../config.js';
import {allRussianWardsAndHyphen} from '../../regex/patterns/html';


const ChildrenForm = (props) => {

    const {
        childrenData, setChildrenData
    } = props

    const setToLocalStorage = (data) => {
        localStorage.setItem(config.registrationChildLocalStorageName, JSON.stringify(data))
    }
    const inputChangeHandler = e => {
        const newChildrenData = {...childrenData, [e.target.name]: e.target.value}
        setChildrenData(newChildrenData)
        setToLocalStorage(newChildrenData)
    }
    const ageChangeHandler = data => {
        const validDate = data === 'dd/mm/yyyy' ? '' : data
        const newChildrenData = {...childrenData, date_of_birth: validDate}
        setChildrenData(newChildrenData)
        setToLocalStorage(newChildrenData)
    }

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
                showMaskOnHover={true}
                showMaskOnFocus={true}
                label='Дата рождения'
                type='datepicker'
                className='form__field'
                name='date_of_birth'
                mask='dd/mm/yyyy'
                required
                value={childrenData.date_of_birth}
                onChange={ageChangeHandler}
            />
        </div>
        {/*<div className="form__row">*/}
        {/*    <label className="form__label">Возраст</label>*/}
        {/*    <select id="ageSelect" className="form__select select">*/}
        {/*        <option data-placeholder="true"></option>*/}
        {/*        <option value="4">4 года</option>*/}
        {/*        <option value="5">5 лет</option>*/}
        {/*        <option value="6">6 лет</option>*/}
        {/*        <option value="7">7 лет</option>*/}
        {/*        <option value="8">8 лет</option>*/}
        {/*        <option value="9">9 лет</option>*/}
        {/*        <option value="10">10 лет</option>*/}
        {/*        <option value="11">11 лет</option>*/}
        {/*        <option value="11">12 лет</option>*/}
        {/*    </select>*/}
        {/*</div>*/}
        {/*<div className="form__row">*/}
        {/*    <FormField*/}
        {/*        label='Страна проживания'*/}
        {/*        type='text'*/}
        {/*        className='form__field'*/}
        {/*        name='country'*/}
        {/*        required*/}
        {/*        maxLength='50'*/}
        {/*        onChange={inputChangeHandler}*/}
        {/*        value={childrenData.country}*/}
        {/*    />*/}
        {/*</div>*/}
        {/*<div className="form__row">*/}
        {/*    <FormField*/}
        {/*        label='Город проживания'*/}
        {/*        type='text'*/}
        {/*        className='form__field'*/}
        {/*        name='city'*/}
        {/*        required*/}
        {/*        maxLength='50'*/}
        {/*        onChange={inputChangeHandler}*/}
        {/*        value={childrenData.city}*/}
        {/*    />*/}
        {/*</div>*/}
    </>;
}

ChildrenForm.propTypes = {
    childrenData: PropTypes.object.isRequired,
    setChildrenData: PropTypes.func.isRequired
}

export default ChildrenForm;