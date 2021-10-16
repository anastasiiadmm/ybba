import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {Spinner} from 'react-bootstrap';

import SidebarContainer from '../../Components/SidebarContainer/SidebarContainer';
import MainTitleBlock from '../MainDashboard/MainTitleBlock/MainTitleBlock';
import FormField from '../../Components/FormField/FormField';
import {getChildren, lessonsSelector, setSelectedChild, clearChildren} from '../../redux/lessons/lessonsSlice';
import LessonDashboardComponent from '../../Components/LessonDashboardComponent/LessonDashboardComponent';
import {authSelector} from '../../redux/auth/authSlice';


const Lessons = () => {

    const {user} = useSelector(authSelector)
    const {children, selectedChild, loading} = useSelector(lessonsSelector)

    const [childrenOptions, setChildrenOptions] = useState(null)

    const onSelectChange = ({value: childId}) => {
        const selectedChild = children.find(child => child.id === childId)
        dispatch(setSelectedChild(selectedChild))
    }

    const dispatch = useDispatch()

    useEffect(() => {
        if (children) {
            setChildrenOptions(children.map(child => {
                const full_name = `${child.first_name} ${child.last_name}`
                return {value: child.id, label: full_name}
            }))
        }
    }, [children])

    useEffect(() => {
        dispatch(clearChildren())
        dispatch(getChildren(user.id))

        return () => {
            dispatch(clearChildren())
        }
        // eslint-disable-next-line
    }, [])

    return (
        <SidebarContainer>
            <MainTitleBlock
                leftTitle='Занятия'
            />
            <div className='content'>
                <div className='content__inner'>
                    <div className='classes'>

                        <div className='classes__title-block'>
                            <h3 className='classes__title'>Доступные занятия</h3>
                        </div>

                        <div className='classes__content'>
                            <div className='classes__row'>
                                <div className='classes__col'>
                                    {childrenOptions && (
                                        <FormField
                                            className='classes__select select'
                                            label='Ребёнок'
                                            type='select'
                                            options={childrenOptions}
                                            onChange={onSelectChange}
                                        />
                                    )}
                                    {loading && (
                                        <Spinner animation='border' variant='primary'>
                                            <span className='visually-hidden'>Loading...</span>
                                        </Spinner>
                                    )}
                                </div>

                                {selectedChild?.allow_create_lesson && (
                                    <div className='classes__items w-100'>
                                        <LessonDashboardComponent
                                            title='Диагностическоe занятие#1'
                                            description='Позволит нам лучше узнать вашего ребенка и разработать план занятий.'
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </SidebarContainer>
    );
}

export default Lessons;