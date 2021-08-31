import PropTypes from "prop-types";
import React, {useContext, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import Button from "../../../Components/Button/Button.js";
import Icon from "../../../Components/Icon/Icon.js";
import config from "../../../config.js";
import {RegistrationContext} from "../../../context/RegistrationContext/RegistrationContext.js";
import {createChild, createUser, loginUser, userSelector} from "../../../redux/user/userSlice.js";
import ChildrenForm from "../../ChildrenForm/ChildrenForm.js";
import RegistrationBaseBlock from "../RegistrationBaseBlock/RegistrationBaseBlock.js";

const ChildRegistration = (props) => {

    const {
        setChildrenData, currentStage
    } = props

    const history = useHistory()
    const dispatch = useDispatch()
    const {children: childrenData, parent: parentData} = useContext(RegistrationContext)
    const {user, loading} = useSelector(userSelector)

    const handleBack = () => {
        const previousStage = currentStage - 1
        history.push(`/registration/${previousStage}/`)
    }
    const isRegistrationDataValid = () => (
        childrenData.first_name &&
        childrenData.last_name &&
        childrenData.date_of_birth
        // childrenData.country &&
        // childrenData.city
    )
    const onSubmit = async e => {
        e.preventDefault()
        localStorage.removeItem(config.registrationChildLocalStorageName)
        localStorage.removeItem(config.registrationParentLocalStorageName)
        await dispatch(createUser(parentData))
        await dispatch(loginUser(parentData))
    }

    useEffect(() => {
        if (user) {
            dispatch(createChild(childrenData))
            history.push('/')
        }
    }, [user])

    return (
        <RegistrationBaseBlock
            onSubmit={onSubmit}
        >
            <button
                type='button'
                className="form__back border-0 bg-transparent"
                onClick={handleBack}
            >
                <Icon icon='backward1'/>
                Назад
            </button>
            <ChildrenForm
                childrenData={childrenData}
                setChildrenData={setChildrenData}
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
    currentStage: PropTypes.number
}

export default ChildRegistration;