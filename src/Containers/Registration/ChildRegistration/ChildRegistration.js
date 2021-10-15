import React, {useContext, useEffect, useState} from 'react';

import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router';

import Button from '../../../Components/Button/Button.js';
import Icon from '../../../Components/Icon/Icon.js';
import config from '../../../config.js';
import {RegistrationContext} from '../../../context/RegistrationContext/RegistrationContext.js';
import ChildrenForm from '../../ChildrenForm/ChildrenForm.js';
import RegistrationBaseBlock from '../RegistrationBaseBlock/RegistrationBaseBlock.js';
import {createChild, childSelector, clearChildState, getCountriesList} from '../../../redux/child/childSlice';
import {createUser, userSelector} from '../../../redux/user/userSlice';


const ChildRegistration = (props) => {

    const {
        setChildrenData, currentStage, setCity, setCountry
    } = props

    const history = useHistory()
    const dispatch = useDispatch()

    const {children: childrenData, parent: parentData} = useContext(RegistrationContext)

    const {user, tokens, errors} = useSelector(userSelector)
    const {success, loading} = useSelector(childSelector)
    const [policy, setPolicy] = useState(false)

    const policyChangeHandler = e => {
        setPolicy(e.target.checked)
    }

    const handleBack = () => {
        const previousStage = currentStage - 1
        history.push(`/registration/${previousStage}/`)
    }
    const isRegistrationDataValid = () => (
        childrenData.first_name &&
        childrenData.last_name &&
        childrenData.date_of_birth &&
        policy &&
        childrenData.country
        // childrenData.city
    )
    const onSubmit = async e => {
        e.preventDefault()
        await dispatch(createUser(parentData))
    }


    useEffect(() => {
        dispatch(clearChildState())
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (user) {
            const data = {childrenData, tokens}
            dispatch(createChild(data))
        }
        if (errors) {
            history.push(`/registration/${currentStage - 1}/`)
        }
        // eslint-disable-next-line
    }, [user, errors])

    useEffect(() => {
        if (success) {
            localStorage.removeItem(config.registrationChildLocalStorageName)
            localStorage.removeItem(config.registrationParentLocalStorageName)
            history.push('/login/')
        }
    }, [success])

    return (
        <RegistrationBaseBlock
            onSubmit={onSubmit}
            policy={policy}
            policyChangeHandler={policyChangeHandler}
        >
            <button
                type="button"
                className="form__back border-0 bg-transparent"
                onClick={handleBack}
            >
                <Icon icon="backward1"/>
                Назад
            </button>
            <ChildrenForm
                childrenData={childrenData}
                setChildrenData={setChildrenData}
                setCity={setCity}
                setCountry={setCountry}
            />
            <div className="form__row form__row_pd">
                <Button
                    type="submit"
                    className="btn"
                    disabled={!isRegistrationDataValid()}
                    loading={loading}
                >
                    Зарегистрироваться
                </Button>
            </div>
        </RegistrationBaseBlock>
    );
}

ChildRegistration.propTypes = {
    setChildrenData: PropTypes.func,
    currentStage: PropTypes.number,
    setCity: PropTypes.func,
    setCountry: PropTypes.func
}

export default ChildRegistration;