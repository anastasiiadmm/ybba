import React, {useState} from 'react';

import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import FormField from '../../../Components/FormField/FormField';


const RegistrationBaseBlock = props => {

    const {children, onSubmit, policy, policyChangeHandler} = props

    return (
        <div className='all-page'>
            <div className='form__wrap'>
                <div className='form form_narrow'>
                    <form onSubmit={onSubmit}>
                        {children}
                        <p className='form__link-wrap'>
                            Уже есть аккаунт?{' '}
                            <NavLink className='form__link' to='/login/'>Войти</NavLink>
                        </p>
                        <p className='form__agreement'>
                            <FormField
                                type='checkbox'
                                id='policy-checkbox'
                                onChange={policyChangeHandler}
                                value={policy}
                            />
                            Регистрируясь в сервисе, принимаю условия <NavLink to='#'>соглашения</NavLink>{' '}
                            и <NavLink to='/policy'>политики конфидециальности</NavLink>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

RegistrationBaseBlock.propTypes = {
    onSubmit: PropTypes.func,
    policy: PropTypes.bool,
    policyChangeHandler: PropTypes.func
}

export default RegistrationBaseBlock;