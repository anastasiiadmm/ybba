import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { userRoles } from 'constants.js';
import Logout from 'Containers/Logout/Logout.js';
import { checkUserRole } from 'utils/user.js';
import Logo from 'Components/Logo/Logo.js';
import SideBarLink from 'Components/SideBar/SideBarLink/SideBarLink.js';
import Button from 'Components/Button/Button.js';
import Modal from 'Components/Modal/Modal';

import { getNotificationsList, notificationsSelector } from 'redux/notifications/notificationsSlice';

import 'Components/SideBar/sidebar.css'

const SideBar = () => {
    
    const dispatch = useDispatch()
    
    const { notificationsList } = useSelector(notificationsSelector)
    
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const toggleProfileModal = async () => {
        await setModalIsOpen(!modalIsOpen)
    }

    useEffect(() => {
        dispatch(getNotificationsList())
    }, [dispatch])

    return (
        <>
            <div className='sidebar h-100 position-fixed'>
                <header className='header'>
                    <Logo/>
                    <Button onClick={toggleProfileModal} className='header__notice' data-modal='notifications'>
                        <span>2</span>
                    </Button>
                </header>
                <nav className='main-nav'>
                    <ul className='main-nav__list'>
                        <SideBarLink to='/' classes='main-nav__link_home'>
                            Главная
                        </SideBarLink>
                        {checkUserRole(userRoles.parent) && (
                            <SideBarLink to='/lessons/' classes='main-nav__link main-nav__link_classes'>
                                Занятия
                            </SideBarLink>
                        )}
                        {checkUserRole(userRoles.parent) && (
                            <SideBarLink to='/profile/' classes='main-nav__link_lk'>
                                Личный кабинет
                            </SideBarLink>
                        )}
                        {checkUserRole(userRoles.parent) && (
                            <SideBarLink to='/child-profile/' classes='main-nav__link_profile'>
                                Профиль ребёнка
                            </SideBarLink>
                        )}
                        {/*{checkUserRole(userRoles.parent) && (*/}
                        {/*    <SideBarLink to='/payments/' classes='main-nav__link_payment'>*/}
                        {/*        Управление платежами*/}
                        {/*    </SideBarLink>*/}
                        {/*)}*/}
                        {/*<SideBarLink to='/settings/' classes='main-nav__link_setting'>*/}
                        {/*    Настройки*/}
                        {/*</SideBarLink>*/}
                        <SideBarLink to='/video-test/' classes='main-nav__link_test'>
                            Тест видеосвязи
                        </SideBarLink>
                    </ul>
                    <Logout/>
                </nav>
            </div>

            <Modal
                toggle={toggleProfileModal}
                isOpen={modalIsOpen}
                width={60}
            >
                <div className='notifications'>
                    <div className='notifications__add'>
                        <div className='notifications__sound'>
                            <label className='switch notifications__switch'>
                                <input type='checkbox' className='switch__input'/>
                                <span className='switch__slider' />
                            </label>
                            <div className='switch__descr'>Звук</div>
                        </div>
                        <a href='#' className='notifications__amount'>Уведомления <span>{notificationsList ? notificationsList.length : '0'}</span></a>
                    </div>
                    <div className='notifications__main'>
                        <div className='notifications__top'>
                            <h5 className='notifications__title'>Уведомления</h5>
                            <button className='notifications__clear' type='button'>очистить все</button>
                        </div>
                        <div className='notifications__body'>
                            {notificationsList && notificationsList.map(notification => {
                               return (
                                   <div className='notifications__item notifications__item_viewed'>
                                       <div className='notice'>
                                           <h5 className='notice__title'>{notification.title}</h5>
                                           <p className='notice__info'>{notification.body}</p>
                                           <span className='notice__icon notice__icon_lesson'>{notification.image}</span>
                                           <div className='notice__time'>1 мин назад</div>
                                       </div>
                                   </div>
                               )
                            })}
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default SideBar;