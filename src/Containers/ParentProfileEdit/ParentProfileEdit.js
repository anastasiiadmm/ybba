import React, {useState, useEffect} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router';

import MainTitleBlock from 'Containers/MainDashboard/MainTitleBlock/MainTitleBlock';
import SidebarContainer from 'Components/SidebarContainer/SidebarContainer';
import ParentProfileForm from 'Containers/ParentProfileForm/ParentProfileForm';
import {updateUserData, userSelector, clearUserState} from 'redux/user/userSlice.js';
import Button from 'Components/Button/Button';
import {authSelector, getCurrentUserData} from 'redux/auth/authSlice.js';


const ParentProfileEdit = () => {

    const {loading, success} = useSelector(userSelector)
    const {user} = useSelector(authSelector)

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

    const setCountry = async data => {
        await setFormData({...formData,
            profile: {
                ...formData.profile,
                country: data.value
            }
        })
    }

    const setCity = data => {
        setFormData({...formData,
            profile: {
                ...formData.profile,
                city: data.value
            }})
    }

    const onSubmit = e => {
        e.preventDefault()
        const submitData = {data: formData, userId: user.id}
        const userProfile = submitData.data.profile
        if (!userProfile.phone_number) {
            delete submitData.data.profile.phone_number
        }
        if (!userProfile.date_of_birth) {
            delete submitData.data.profile.date_of_birth
        }
        dispatch(updateUserData(submitData))
    }

    useEffect(() => {
        if (success && !loading) {
            dispatch(getCurrentUserData())
            history.push('/profile/')
        }
        // eslint-disable-next-line
    }, [history, loading, success])

    useEffect(() => {
        dispatch(clearUserState())
        // eslint-disable-next-line
    }, [])

    return (
        <SidebarContainer>
            <div className='main__inner'>
                <MainTitleBlock
                    leftTitle='Личный кабинет'
                />
                <div className='content'>
                    <div className='content__inner'>
                        <form onSubmit={onSubmit}>
                            <div className='cabinet'>

                                <ParentProfileForm
                                    user={user}
                                    formData={formData}
                                    setFormData={setFormData}
                                    setCountry={setCountry}
                                    setCity={setCity}
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