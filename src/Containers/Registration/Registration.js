import React, {useEffect, useState} from 'react';

import {useHistory} from 'react-router';
import {useDispatch} from 'react-redux';

import Container from 'Components/Container/Container.js';
import config from 'config.js';
import {RegistrationContext} from 'context/RegistrationContext/RegistrationContext.js';
import {isLogin} from 'utils/user.js';
import ChildRegistration from 'Containers/Registration/ChildRegistration/ChildRegistration.js';
import ParentRegistration from 'Containers/Registration/ParentRegistration/ParentRegistration.js';


const Registration = props => {
    const parentDataFromLocalStorage = JSON.parse(localStorage.getItem(config.registrationParentLocalStorageName))
    const childDataFromLocalStorage = JSON.parse(localStorage.getItem(config.registrationChildLocalStorageName))

    const parentRegistrationDataInit = !parentDataFromLocalStorage ? {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_repeat: '',
    } : parentDataFromLocalStorage
    const childrenDataInit = !childDataFromLocalStorage ? {
        first_name: '',
        last_name: '',
        date_of_birth: '',
        country: '',
        city: '',
    } : childDataFromLocalStorage

    const {stage} = props.match.params

    const history = useHistory()
    const dispatch = useDispatch()

    const [parentRegistrationData, setParentRegistrationData] = useState(parentRegistrationDataInit)
    const [childrenData, setChildrenData] = useState(childrenDataInit)

    const setCounty = async data => {
        await setChildrenData({...childrenData, country: data.value})
    }
    const setCity = data => {
        setChildrenData({...childrenData, city: data.value})
    }

    const registrationStages = {
        '1': <ParentRegistration
            registrationData={parentRegistrationData}
            setRegistrationData={setParentRegistrationData}
            currentStage={parseInt(stage)}
        />,
        '2': <ChildRegistration
            currentStage={parseInt(stage)}
            setChildrenData={setChildrenData}
            setCountry={setCounty}
            setCity={setCity}
        />
    }

    useEffect(() => {
        if (isLogin()) {
            history.push('/')
        }
        // eslint-disable-next-line
    }, [])

    const registrationComponent = registrationStages[stage]

    const contextData = {
        parent: parentRegistrationData,
        children: childrenData
    }

    return (
        <RegistrationContext.Provider value={contextData}>
            <Container>
                {registrationComponent}
            </Container>
        </RegistrationContext.Provider>
    );
}

export default React.memo(Registration);