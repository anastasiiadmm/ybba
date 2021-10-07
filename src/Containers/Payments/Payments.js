import React, {useState} from 'react';

import SidebarContainer from '../../Components/SidebarContainer/SidebarContainer';
import Payment from './Payment/Payment';
import Button from '../../Components/Button/Button';
import {addClasses} from '../../utils/addClasses/addClasses';
import Balance from './Balance/Balance';


const Payments = () => {

    const [activeTab, setActiveTab] = useState('payment')

    const tabs = {
        'payment': <Payment/>,
        'balance': <Balance/>
    }

    const activeTabChangeHandler = (activeTab) => {
        return () => {
            setActiveTab(activeTab)
        }
    }

    const tabNames = [
        {label: 'Оплата занятий', name: 'payment'},
        {label: 'Баланс', name: 'balance'},
    ]

    return (
        <SidebarContainer>
            <div className='main__inner'>
                <div className='main__title-block'>
                    <h1 className='main__title'>Управление платежами</h1>
                </div>
                <div className='content'>
                    <div className='content__inner'>
                        <div className='payments content__body'>
                            <div className='tabs'>
                                {tabNames.map(tab => {
                                    return (
                                        <Button
                                            type='button'
                                            className={addClasses('tab', {
                                                'active': activeTab === tab.name
                                            })}
                                            onClick={activeTabChangeHandler(tab.name)}
                                        >
                                            <span>{tab.label}</span>
                                        </Button>
                                    )
                                })}
                            </div>
                            <div className='payments__tabs-content'>
                                {tabs[activeTab]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SidebarContainer>
    );
}

export default Payments;