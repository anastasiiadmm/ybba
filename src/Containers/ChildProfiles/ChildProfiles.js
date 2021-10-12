import React, {useEffect, useState} from 'react';
import SidebarContainer from '../../Components/SidebarContainer/SidebarContainer';
import MainTitleBlock from '../MainDashboard/MainTitleBlock/MainTitleBlock';
import Content from '../../Components/Content/Content';
import ChildProfileCard from './ChildProfileCard/ChildProfileCard';
import {useSelector} from 'react-redux';
import {authSelector} from '../../redux/auth/authSlice';
import ChildProfileNotification from './ChildProfileNotification/ChildProfileNotification';
import Modal from '../../Components/Modal/Modal';

const ChildProfiles = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const {user} = useSelector(authSelector)

    const [childWithoutAdditionalData, setChildWithoutAdditionalData] = useState(null)

    const toggleProfileModal = () => {
        setModalIsOpen(!modalIsOpen)
    }

    useEffect(() => {
        if (user) {
            const children = user.profile.children
            for (let i = 0; i <= children.length; i++) {
                if (!children[i].additional_information) {
                    setChildWithoutAdditionalData(children[i])
                    break
                }
            }
        }
    }, [user])

    return (
        <SidebarContainer>
            <Modal
                isOpen={modalIsOpen}
                toggle={toggleProfileModal}
                width={40}
            >
                <div className="profile-card modal__gray-bg">
                    <h5 className="profile-card__title">Профиль ребенка - Мария Рождественская </h5>
                    <div className="profile-card__item">
                        <p className="profile-card__item-title">Основная информация ребенка</p>
                        <div className="profile-card__main-options">
                            <dl>
                                <dt>Имя</dt>
                                <dd>Мария</dd>
                            </dl>
                            <dl>
                                <dt>Фамилия</dt>
                                <dd>Рождественская</dd>
                            </dl>
                            <dl>
                                <dt>Дата рождения</dt>
                                <dd>17/09/2014</dd>
                            </dl>
                            <dl>
                                <dt>Страна проживания</dt>
                                <dd>Российская Федерация</dd>
                            </dl>
                            <dl>
                                <dt>Город проживания</dt>
                                <dd>Москва</dd>
                            </dl>
                        </div>
                    </div>
                    <div className="profile-card__item">
                        <p className="profile-card__item-title">С чем вам помочь?</p>
                        <p>Не говорит или мало говорит</p>
                        <p>Не выговаривает отдельные звуки</p>
                        <p><span>Другое:</span> Не выговаривает отдельные звуки</p>
                    </div>
                    <div className="profile-card__item">
                        <p className="profile-card__item-title">Был ли у вас опыт работы с другими специалистами?</p>
                        <p>Да</p>
                        <p><span>С каким специалистом занимались?</span> Логопед-дефектолог</p>
                        <p><span>Учреждение, школа, центр:</span> Школа №2</p>
                        <p><span>Какое заключение/диагноз поставил специалист?</span> Вот вам яркий пример современных
                            тенденций -
                            социально-экономическое развитие, а также свежий взгляд на привычные вещи - безусловно
                            открывает новые
                            горизонты для кластеризации усилий. Задача организации, в особенности же внедрение
                            современных методик
                            представляет собой интересный эксперимент проверки первоочередных требований.</p>
                        <p><span>Какие были результаты? (Плюсы, минусы, чего лично вам не хватило в работе) </span> Вот
                            вам яркий
                            пример
                            современных тенденций -
                            социально-экономическое развитие, а также свежий взгляд на привычные вещи - безусловно
                            открывает новые
                            горизонты
                            для кластеризации усилий. Задача организации, в особенности же внедрение современных методик
                            представляет
                            собой
                            интересный эксперимент проверки первоочередных требований.</p>
                        <p><span>Почему решили поменять специалиста?</span> Мы продолжаем </p>
                    </div>
                </div>
            </Modal>
            <MainTitleBlock
                leftTitle="Профиль ребёнка"
            />
            <Content>
                <div className="content__row-main">
                    <div className="content__row-main-inner">
                        <div className="content__row">
                            <div className="content__col">
                                {childWithoutAdditionalData && (
                                    <ChildProfileNotification child={childWithoutAdditionalData}/>
                                )}
                            </div>
                        </div>
                        <div className="content__row">
                            <div className="content__col content__col_w50">
                                {user?.profile && user?.profile?.children.map(child => {
                                    return (
                                        <ChildProfileCard
                                            child={child}
                                            openProfileCallback={toggleProfileModal}
                                        />
                                    )
                                })}
                            </div>
                            {/*<div className="content__col content__col_w50">*/}
                            {/*    <div className="info-item info-item_dotted info-item_h100">*/}
                            {/*        <div className="child-add">*/}
                            {/*            <p className="child-add__text">Добавить еще одного ребенка</p>*/}
                            {/*            <a href="#" className="btn-add">+</a>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </Content>
        </SidebarContainer>
    );
}

export default ChildProfiles;
