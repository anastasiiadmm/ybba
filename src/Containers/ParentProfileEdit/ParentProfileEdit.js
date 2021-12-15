import React, { useState, useEffect } from 'react';
import moment from 'moment';

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';


import MainTitleBlock from 'Containers/MainDashboard/MainTitleBlock/MainTitleBlock';
import SidebarContainer from 'Components/SidebarContainer/SidebarContainer';
import ParentProfileForm from 'Containers/ParentProfileForm/ParentProfileForm';
import { clearUserState } from 'redux/user/userSlice.js';
import Button from 'Components/Button/Button';
import { authSelector, updateUserData } from 'redux/auth/authSlice.js';
import { momentDateToStr, strDateToMoment } from 'utils/date/dateUtils';
import { parentProfileSchema } from 'Containers/ParentProfileForm/yupSchema';


const ParentProfileEdit = () => {

    const { user, success, loading } = useSelector(authSelector)

    const initialFormData = {
        email: user?.email,
        profile: {
            first_name: user?.profile?.first_name || '',
            last_name: user?.profile?.last_name || '',
            date_of_birth: user?.profile?.date_of_birth || '',
            phone_number: user?.profile.phone_number || '',
            country: user?.profile?.country || '',
            city: user?.profile?.city || ''
        }
    }

    const [formData, setFormData] = useState(initialFormData)

    const history = useHistory()
    const dispatch = useDispatch()

    const { register, handleSubmit, watch, formState: { errors }, setValue, control } = useForm({
        resolver: yupResolver(parentProfileSchema),
        defaultValues: formData
    })

    const country = watch('profile.country')
    watch('profile.city')
    console.log(country)

    useEffect(() => {
        if (formData) {
            setValue('profile.date_of_birth', strDateToMoment(formData.profile.date_of_birth).toDate())
            setValue('profile.first_name', formData.profile.first_name)
            setValue('profile.last_name', formData.profile.last_name)
            setValue('profile.phone_number', formData.profile.phone_number)
            setValue('profile.country', formData.profile.country)
            setValue('profile.city', formData.profile.city)
        }
    }, [formData, setValue])

    const onSubmit = data => {
        data.profile.date_of_birth = momentDateToStr(moment(data.profile.date_of_birth))

        const submitData = {
            data,
            userId: user.id
        }

        dispatch(updateUserData(submitData))
    }

    useEffect(() => {
        if (success && !loading) {
            history.push('/profile/')
        }
        // eslint-disable-next-line
    }, [history, loading, success])

    useEffect(() => {
        dispatch(clearUserState())
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (user) {
            setFormData(user)
        }
    }, [user])

    return (
        <SidebarContainer>
            <div className='main__inner'>
                <MainTitleBlock
                    leftTitle='Личный кабинет'
                />
                <div className='content'>
                    <div className='content__inner'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='cabinet'>

                                <ParentProfileForm
                                    control={control}
                                    register={register}
                                    errors={errors}
                                    country={country}
                                    user={user}
                                    formData={formData}
                                />

                            </div>
                            <div className='content__bottom'>
                                <Link
                                    to='/profile/'
                                    className='btn btn_light'
                                >
                                    Отмена
                                </Link>
                                <Button type='submit' className='btn' loading={loading}>Сохранить</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </SidebarContainer>
    );
}

export default ParentProfileEdit;