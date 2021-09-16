import React, {useState, useEffect} from 'react';

import {useSelector, useDispatch} from 'react-redux';

import MainTitleBlock from '../MainDashboard/MainTitleBlock/MainTitleBlock';
import SidebarContainer from '../../Components/SidebarContainer/SidebarContainer';
import ParentProfileForm from '../ParentProfileForm/ParentProfileForm';
import {updateUserData, userSelector, clearUserState} from '../../redux/user/userSlice';
import Button from '../../Components/Button/Button';
import {useHistory} from 'react-router';
import {authSelector, getCurrentUserData, refreshToken} from '../../redux/auth/authSlice';


const ParentProfileEdit = () => {

    const {loading, success} = useSelector(userSelector)
    const {user} = useSelector(authSelector)

    const initialFormData = {
        email: user?.email,
        profile: {
            first_name: user?.profile?.first_name || '',
            last_name: user?.profile?.last_name || '',
            date_of_birth: user?.profile?.date_of_birth || '',
            phone_number: user?.profile.phone_number || ''
        }
    }

    const [formData, setFormData] = useState(initialFormData)

    const history = useHistory()
    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()
        const submitData = {data: formData, userId: user.id}
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
                                />

                                <Button onClick={() => {
                                    dispatch(refreshToken())
                                }}
                                        type='button'
                                >
                                    Refresh token test
                                </Button>

                            </div>
                            <div className='content__bottom'>
                                <Button to='/profile/' className='btn btn_light'>Отмена</Button>
                                <Button type='submit' className='btn'>Сохранить</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </SidebarContainer>
    );
}

export default ParentProfileEdit;