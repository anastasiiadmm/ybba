import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';

import SidebarContainer from 'Components/SidebarContainer/SidebarContainer';
import MainTitleBlock from 'Containers/MainDashboard/MainTitleBlock/MainTitleBlock';
import FormField from 'Components/FormField/FormField';
import {
    getChildren,
    lessonsSelector,
    setSelectedChild,
    getLessons,
    clearLessons,
} from 'redux/lessons/lessonsSlice.js';
import LessonDashboardComponent from 'Components/LessonDashboardComponent/LessonDashboardComponent';
import { authSelector } from 'redux/auth/authSlice.js';
import { lessonStatuses } from 'constants.js';
import { lessonTypesMapping } from 'mappings/lessons.js';


const Lessons = () => {

    const { user } = useSelector(authSelector)
    const { children, selectedChild, loading, lessons } = useSelector(lessonsSelector)

    const [childrenOptions, setChildrenOptions] = useState(null)

    const dispatch = useDispatch()

    const onSelectChange = (_, data) => {
        if (data) {
            const selectedChild = children.find(child => child.id === data.value)
            dispatch(setSelectedChild(selectedChild))
        }
    }
    const getLessonsData = async () => {
        await dispatch(clearLessons())
        await dispatch(getChildren(user.id))
    }
    const onChildSelect = async () => {
        const data = {
            childId: selectedChild.id,
            query: { status: lessonStatuses.new }
        }
        await dispatch(getLessons(data))
    }

    useEffect(() => {
        getLessonsData()

        return () => {
            dispatch(clearLessons())
        }
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (selectedChild) {
            onChildSelect()
        }
        // eslint-disable-next-line
    }, [selectedChild])

    useEffect(() => {
        if (children) {
            setChildrenOptions(children.map(child => {
                const full_name = `${child.first_name} ${child.last_name}`
                return { value: child.id, label: full_name }
            }))
        }
    }, [children])

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
                                            value={selectedChild?.id}
                                        />
                                    )}
                                    {loading && (
                                        <Spinner animation='border' variant='primary'>
                                            <span className='visually-hidden'>Loading...</span>
                                        </Spinner>
                                    )}
                                </div>

                                {lessons && lessons.map((lesson) => {
                                    const lessonTitle = `${lessonTypesMapping[lesson.lesson_type]} занятие #${lesson.lesson_number}`
                                    const inactiveLessonDescription = 'Пожалуйста, сначала запишитесь на предыдущую часть диагностического занятия.'
                                    const activeLessonDescription = 'Позволит нам лучше узнать вашего ребенка и разработать план занятий.'
                                    const description = lesson.lesson_can_be_assigned_to_child
                                        ? activeLessonDescription
                                        : inactiveLessonDescription
                                    return (
                                        <div className='classes__items w-100'>
                                            <LessonDashboardComponent
                                                title={lessonTitle}
                                                description={description}
                                                lessonId={lesson.id}
                                                lessonNumber={lesson.lesson_number}
                                                active={lesson.lesson_can_be_assigned_to_child}
                                            />
                                        </div>
                                    )
                                })}
                                {lessons && !lessons.length && (
                                    <div className='w-100'>
                                        <p>Нет уроков для записи</p>
                                    </div>
                                )}
                                {/*{selectedChild && !selectedChild?.allow_create_lesson && (*/}
                                {/*    <h3>Вы не можете добавить больше 2-х диагностических занятий</h3>*/}
                                {/*)}*/}
                                {/*{selectedChild && selectedChild?.is_diagnostic_lesson_completed && (*/}
                                {/*    <h3>Диагностические занятия завершены</h3>*/}
                                {/*)}*/}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </SidebarContainer>
    );
}

export default Lessons;