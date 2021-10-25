import React, {useEffect} from 'react';

import {useSelector, useDispatch} from 'react-redux';

import SidebarContainer from '../../Components/SidebarContainer/SidebarContainer';
import MainTitleBlock from '../MainDashboard/MainTitleBlock/MainTitleBlock';
import ParentProfileData from '../ParentProfileData/ParentProfileData';
import {authSelector} from '../../redux/auth/authSlice';
import {clearUserState} from '../../redux/user/userSlice';
import {Link} from 'react-router-dom';


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
                            <Link
                                className='btn'
                                to='/profile/edit/'
                            >
                                Редактировать
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </SidebarContainer>
    );
}

export default ParentProfile;