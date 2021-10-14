import React, {useContext, useEffect, useState} from 'react';
import {ChildProfileContext} from '../../../context/ChildProfileContext/ChildProfileContext';
import ChildrenForm from '../../ChildrenForm/ChildrenForm';
import StagesLinks from '../StagesLinks/StagesLinks';
import {useDispatch, useSelector} from 'react-redux';
import {clearChildState, getChild, childSelector, updateChild} from '../../../redux/child/childSlice';
import Actions from '../Actions/Actions';
import {useHistory} from 'react-router';

const ChildProfileStageOne = (props) => {

    const {
        childId,
        stage
    } = useContext(ChildProfileContext);

    const [childrenData, setChildrenData] = useState(null)

    const dispatch = useDispatch()
    const history = useHistory()

    const {child, updateChildSuccess} = useSelector(childSelector)

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
    }, [updateChildSuccess])

    useEffect(() => {
        if (child) {
            setChildrenData(child)
        }
    }, [child])

    useEffect(() => {
        dispatch(clearChildState())
        dispatch(getChild(childId))
    }, [])

    return (
        <>
            <form onSubmit={updateUser}>
                <div className="profile-child">
                    <StagesLinks/>
                    <div className="profile-child__survey">
                        <div className="form form_inner">
                            {childrenData && (
                                <ChildrenForm
                                    childrenData={childrenData}
                                    setChildrenData={setChildrenData}
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