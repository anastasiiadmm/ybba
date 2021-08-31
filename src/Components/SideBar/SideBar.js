import React from 'react';
import Logout from "../../Containers/Logout/Logout.js";
import Logo from "../Logo/Logo.js";
import SideBarLink from "./SideBarLink/SideBarLink.js";

const SideBar = () => {
    return (
        <div className="sidebar h-100">
            <header className="header">
                <Logo/>
                <button className="header__notice" data-modal="notifications">
                    <span>2</span>
                </button>
            </header>
            <nav className="main-nav">
                <ul className="main-nav__list">
                    <SideBarLink to='/' classes='main-nav__link_home'>
                        Главная
                    </SideBarLink>
                    <SideBarLink to='/home-work/' classes='main-nav__link_hw'>
                        Домашнее задание
                    </SideBarLink>
                    <SideBarLink to='/profile/' classes='main-nav__link_lk'>
                        Личный кабинет
                    </SideBarLink>
                    <SideBarLink to='/child-profile/' classes='main-nav__link_profile'>
                        Профиль ребёнка
                    </SideBarLink>
                    <SideBarLink to='/payments/' classes='main-nav__link_payment'>
                        Управление платежами
                    </SideBarLink>
                    <SideBarLink to='/settings/' classes='main-nav__link_setting'>
                        Настройки
                    </SideBarLink>
                    <SideBarLink to='/video-test/' classes='main-nav__link_test'>
                        Тест видеосвязи
                    </SideBarLink>
                </ul>
                <Logout/>
            </nav>
        </div>
    );
}

export default SideBar;