import React, { useContext, useEffect, useState } from 'react';

import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { ChildProfileContext } from 'context/ChildProfileContext/ChildProfileContext.js';
import ChildrenForm from 'Containers/ChildrenForm/ChildrenForm';
import StagesLinks from 'Containers/ChildProfile/StagesLinks/StagesLinks';
import { clearChildState, getChild, childSelector, updateChild } from 'redux/child/childSlice.js';
import Actions from 'Containers/ChildProfile/Actions/Actions';


const ChildProfileStageOne = () => {

    const {
        childId,
        stage
    } = useContext(ChildProfileContext);

    const [childrenData, setChildrenData] = useState(null)

    const dispatch = useDispatch()
    const history = useHistory()

    const { child, updateChildSuccess } = useSelector(childSelector)

    const setCountry = data => {
        setChildrenData({ ...childrenData, country: data })
    }

    const setCity = data => {
        setChildrenData({ ...childrenData, city: data.value })
    }

    const updateUser = async e => {
        e.preventDefault()

        await dispatch(updateChild({
            childId: childId,
            childData: childrenData
        }))
        await dispatch(clearChildState())
    }

    const conGoToNextPage = (
        childrenData?.first_name &&
        childrenData?.last_name &&
        childrenData?.date_of_birth
    )

    useEffect(() => {
        if (updateChildSuccess) {
            history.push(`/child-profile/${childId}/${parseInt(stage) + 1}`)
        }
    }, [childId, history, stage, updateChildSuccess])

    useEffect(() => {
        if (child) {
            setChildrenData(child)
        }
    }, [child])

    useEffect(() => {
        dispatch(clearChildState())
        dispatch(getChild(childId))
    }, [childId, dispatch])

    return (
        <>
            <form onSubmit={updateUser}>
                <div className='profile-child'>
                    <StagesLinks/>
                    <div className='profile-child__survey'>
                        <div className='form form_inner'>
                            {childrenData && (
                                <ChildrenForm
                                    childrenData={childrenData}
                                    setChildrenData={setChildrenData}
                                    setCountry={setCountry}
                                    setCity={setCity}
                                />
                            )}
                        </div>
                    </div>
                </div>

                <Actions
                    isNextButtonActive={conGoToNextPage}
                />
            </form>
        </>
    );
}

export default ChildProfileStageOne;