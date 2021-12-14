import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment'

import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ChildProfileContext } from 'context/ChildProfileContext/ChildProfileContext.js';
import ChildrenForm from 'Containers/ChildrenForm/ChildrenForm';
import StagesLinks from 'Containers/ChildProfile/StagesLinks/StagesLinks';
import { clearChildState, getChild, childSelector, updateChild } from 'redux/child/childSlice.js';
import Actions from 'Containers/ChildProfile/Actions/Actions';
import { momentDateToStr, strDateToMoment } from 'utils/date/dateUtils';
import { childProfileSchema } from 'utils/checkFormVaid/checkFormValid';


const ChildProfileStageOne = () => {

    const {
        childId,
        stage
    } = useContext(ChildProfileContext);

    const dispatch = useDispatch()
    const history = useHistory()

    const { child, updateChildSuccess } = useSelector(childSelector)

    const [childrenData, setChildrenData] = useState(null)

    const { register, handleSubmit, watch, formState: { errors }, setValue, control } = useForm({
        resolver: yupResolver(childProfileSchema),
        defaultValues: childrenData
    })

    const country = watch('country')

    const setCountry = data => {
        setChildrenData({ ...childrenData, country: data })
    }

    const setCity = data => {
        setChildrenData({ ...childrenData, city: data.value })
    }

    const updateUser = async (data) => {
        data.date_of_birth = momentDateToStr(moment(data.date_of_birth))

        await dispatch(updateChild({
            childId: childId,
            childData: {
                ...childrenData,
                ...data
            }
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

    useEffect(() => {
        if (childrenData) {
            setValue('date_of_birth', strDateToMoment(childrenData.date_of_birth).toDate())
            setValue('first_name', childrenData.first_name)
            setValue('last_name', childrenData.last_name)
            setValue('country', childrenData.country)
            setValue('city', childrenData.city)
        }
    }, [childrenData, setValue])

    return (
        <>
            <form onSubmit={handleSubmit(updateUser)}>
                <div className='profile-child'>
                    <StagesLinks/>
                    <div className='profile-child__survey'>
                        <div className='form form_inner'>
                            {childrenData && (
                                <ChildrenForm
                                    country={country}
                                    register={register}
                                    errors={errors}
                                    childrenData={childrenData}
                                    control={control}
                                    setChildrenData={setChildrenData}
                                    setCountry={setCountry}
                                    setCity={setCity}
                                    watch={watch}
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