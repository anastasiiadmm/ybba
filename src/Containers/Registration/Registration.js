import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router";
import config from "../../config.js";
import {RegistrationContext} from "../../context/RegistrationContext/RegistrationContext.js";
import {isLogin} from "../../utils/user.js";
import ChildRegistration from "./ChildRegistration/ChildRegistration.js";
import ParentRegistration from "./ParentRegistration/ParentRegistration.js";

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

    const [parentRegistrationData, setParentRegistrationData] = useState(parentRegistrationDataInit)
    const [childrenData, setChildrenData] = useState(childrenDataInit)

    const registrationStages = {
        '1': <ParentRegistration
            registrationData={parentRegistrationData}
            setRegistrationData={setParentRegistrationData}
            currentStage={parseInt(stage)}
        />,
        '2': <ChildRegistration
            currentStage={parseInt(stage)}
            setChildrenData={setChildrenData}
        />
    }

    useEffect(() => {
        if (isLogin()) {
            history.push('/')
        }
    }, [])

    const registrationComponent = registrationStages[stage]

    const contextData = {
        parent: parentRegistrationData,
        children: childrenData
    }

    return (
        <RegistrationContext.Provider value={contextData}>
            <div style={{height: '100vh'}}>
                {registrationComponent}
            </div>
        </RegistrationContext.Provider>
    );
}

export default React.memo(Registration);