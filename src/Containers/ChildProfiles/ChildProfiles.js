import React, {useEffect, useState} from 'react';
import SidebarContainer from '../../Components/SidebarContainer/SidebarContainer';
import MainTitleBlock from '../MainDashboard/MainTitleBlock/MainTitleBlock';
import Content from '../../Components/Content/Content';
import ChildProfileCard from './ChildProfileCard/ChildProfileCard';
import {useSelector, useDispatch} from 'react-redux';
import {authSelector} from '../../redux/auth/authSlice';
import ChildProfileNotification from './ChildProfileNotification/ChildProfileNotification';
import Modal from '../../Components/Modal/Modal';
import {getChildren, lessonsSelector} from '../../redux/lessons/lessonsSlice';
import ChildData from './ChildData/ChildData';

const ChildProfiles = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [childProfile, setChildProfile] = useState(null)

    const {user} = useSelector(authSelector)
    const {children} = useSelector(lessonsSelector)

    const dispatch = useDispatch()

    const [childWithoutAdditionalData, setChildWithoutAdditionalData] = useState(null)

    const setChildProfileForModal = async child => {
        await setChildProfile(child)
    }
    const toggleProfileModal = async () => {
        await setModalIsOpen(!modalIsOpen)
    }
    const onChildProfileClick = async child => {
        await setChildProfileForModal(child)
        await toggleProfileModal()
    }

    useEffect(() => {
        if (children) {
            for (let i = 0; i < children.length; i++) {
                if (!children[i].additional_information.about_us) {
                    setChildWithoutAdditionalData(children[i])
                    break
                }
            }
        }
    }, [children])

    useEffect(() => {
        dispatch(getChildren(user.id))
    }, [])

    return (
        <SidebarContainer>
            <Modal
                isOpen={modalIsOpen}
                toggle={toggleProfileModal}
                width={40}
            >
                {childProfile && (
                    <ChildData
                        childProfile={childProfile}
                    />
                )}
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
                                {children && children.map(child => {
                                    return (
                                        <ChildProfileCard
                                            child={child}
                                            openProfileCallback={onChildProfileClick}
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
