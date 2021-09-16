import React, {useEffect} from 'react';

import {useSelector, useDispatch} from 'react-redux';

import SidebarContainer from '../../Components/SidebarContainer/SidebarContainer';
import MainTitleBlock from '../MainDashboard/MainTitleBlock/MainTitleBlock';
import ParentProfileData from '../ParentProfileData/ParentProfileData';
import Button from '../../Components/Button/Button';
import {authSelector} from '../../redux/auth/authSlice';
import {clearUserState} from '../../redux/user/userSlice';


const ParentProfile = () => {

    const {user} = useSelector(authSelector)
    const dispatch = useDispatch()

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
                        <div className='cabinet'>

                            <div className='cabinet__content'>
                                <h4 className='cabinet__title'>Основная информация</h4>
                            </div>

                            <ParentProfileData user={user}/>

                        </div>
                        <div className='content__bottom'>
                            <Button className='btn' to='/profile/edit/'>Редактировать</Button>
                        </div>
                    </div>
                </div>
            </div>
        </SidebarContainer>
    );
}

export default ParentProfile;