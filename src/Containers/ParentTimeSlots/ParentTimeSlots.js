import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import moment from 'moment';

import SidebarContainer from 'Components/SidebarContainer/SidebarContainer';
import MainTitleBlock from 'Containers/MainDashboard/MainTitleBlock/MainTitleBlock';
import {
    getTimeSlots,
    lessonsSelector,
    createLessons,
    clearLessons, getLesson,
} from 'redux/lessons/lessonsSlice.js';
import TimeSlot from 'Components/TimeSlot/TimeSlot';
import Modal from 'Components/Modal/Modal';
import { strDateToMoment, getCurrentDate, momentDateToStr } from 'utils/date/dateUtils.js';
import { addClasses } from 'utils/addClasses/addClasses.js';

import 'Containers/ParentTimeSlots/parentTimeSlots.css'

const MAX_SELECTED_TIME_SLOTS = 1

const ParentTimeSlots = props => {
    const { lessonId } = props.match.params

    const dispatch = useDispatch()
    const history = useHistory()

    const { timeSlots, selectedChild, lessonCreated, loading, lesson } = useSelector(lessonsSelector)

    const [timeSlotsSchedule, setTimeSlotsSchedule] = useState()
    const [selectedTimeSlots, setSelectedTimeSlots] = useState([])
    const [lessonCreatedModalIsOpen, setLessonCreatedModalIsOpen] = useState(false)

    const currentDate = moment()
    const startOfWeek = currentDate.clone().startOf('week')
    const endOfWeek = currentDate.clone().endOf('week')
    const [dateFrom, setDateFrom] = useState(startOfWeek.clone().subtract(startOfWeek.day() - 1, 'days'))
    const [dateTo, setDateTo] = useState(endOfWeek.clone().subtract(2 - endOfWeek.day(), 'days'))

    useEffect(() => {
        if (timeSlots) {
            const timeSlotsObj = timeSlots?.reduce((timeSlots, timeslot) => {
                const date = timeslot.day.date;
                if (!timeSlots[date]) {
                    timeSlots[date] = [];
                }
                timeSlots[date].push(timeslot);
                return timeSlots;
            }, {});

            setTimeSlotsSchedule(timeSlotsObj)
        }
    }, [timeSlots])

    const timeSlotsArray = timeSlotsSchedule && Object.keys(timeSlotsSchedule).sort((a, b) => {
        return strDateToMoment(a) - strDateToMoment(b)
    }).map((date) => {
        return {
            date,
            timeSlot: timeSlotsSchedule[date]
        }
    })

    const getTimeSlot = id => {
        return timeSlots.find(timeSlot => timeSlot.id === id)
    }

    const timeSlotOnClick = ({ id }) => {
        const index = selectedTimeSlots.indexOf(id)
        if (index !== -1) {
            const array = [...selectedTimeSlots]
            array.splice(index, 1)
            setSelectedTimeSlots(array)
        } else {
            if (selectedTimeSlots.length < MAX_SELECTED_TIME_SLOTS) {
                setSelectedTimeSlots([...selectedTimeSlots, id])
            } else {
                const timeSlots = [...selectedTimeSlots]
                timeSlots.shift()
                setSelectedTimeSlots([...timeSlots, id])
            }
        }
    }

    const toNextDay = async () => {
        await setDateFrom(dateFrom.clone().add(1, 'day'))
        await setDateTo(dateTo.clone().add(1, 'day'))
    }

    const toPrevDay = async () => {
        await setDateFrom(dateFrom.clone().subtract(1, 'day'))
        await setDateTo(dateTo.clone().subtract(1, 'day'))
    }

    const modalToggle = () => {
        setLessonCreatedModalIsOpen(!lessonCreatedModalIsOpen)
    }
    const onModalClose = () => {
        history.push('/lessons/')
        dispatch(clearLessons())
    }

    const onCreateLessons = () => {
        const data = { time_slots_ids: selectedTimeSlots, student_id: selectedChild.id, lesson_id: lessonId }
        dispatch(createLessons(data))
    }

    useEffect(() => {
        if (lessonCreated) {
            modalToggle()
        }
        // eslint-disable-next-line
    }, [lessonCreated])

    useEffect(() => {
        if (!selectedChild) {
            return history.push('/lessons/')
        }

        dispatch(getTimeSlots({
            from: momentDateToStr(dateFrom),
            to: momentDateToStr(dateTo),
            childId: selectedChild.id
        }))

        return () => {
            dispatch(clearLessons())
        }
        // eslint-disable-next-line
    }, [dateTo])

    useEffect(() => {
        dispatch(getLesson(lessonId))
    }, [dispatch, lessonId])

    useEffect(() => {
        console.log(12423143214)
        setLessonCreatedModalIsOpen(true)
    }, [])

    return (
        <SidebarContainer>
            <Modal
                width={50}
                isOpen={lessonCreatedModalIsOpen}
                toggle={modalToggle}
                onClose={onModalClose}
            >
                <div className='text-center'>
                    {timeSlots && selectedTimeSlots.length && lesson && lesson.lesson_number === 1 && (<>
                        <h5 className='message__title'>Диагностическое занятие добавлено</h5>
                        <p className='message__body'>
                            Первая часть диагностического занятия состоится “{getTimeSlot(selectedTimeSlots[0]).day.date} в {getTimeSlot(selectedTimeSlots[0]).start_time}”.
                            Теперь вы можете записаться на вторую часть диагностического занятия.
                        </p>
                        <Link className='btn' to='/lessons/'>Записаться на 2-ю часть</Link>
                    </>)}
                    {lesson && lesson.lesson_number !== 1 && (<>
                        <h5 className='message__title'>Занятие было добавлено</h5>
                        <Link className='btn' to='/'>На Главную</Link>
                    </>)}
                </div>
            </Modal>

            <MainTitleBlock
                leftTitle='Выберите временной слот'
            />
            <div className='content'>
                <div className='content__inner'>
                    <div className='classes'>
                        <div className='classes__content'>
                            <div className='timeslot' id='timeSlot'>
                                <div className='timeslot__body'>
                                    <button type='button' id='timeSlotPrev' className='timeslot__prev'
                                            onClick={toPrevDay}/>
                                    <button type='button' id='timeSlotNext' className='timeslot__next'
                                            onClick={toNextDay}/>
                                    {(!loading && (timeSlots && !timeSlots.length)) && (
                                        <h6>Нет свободных логопедов на выделенный период</h6>
                                    )}
                                    {loading && (
                                        <Spinner animation='border' role='status'>
                                            <span className='visually-hidden'>Loading...</span>
                                        </Spinner>
                                    )}
                                    <div className='timeslot__main-wrap'>
                                        <div className='timeslot__main'>
                                            <div className='timeslot__items'>
                                                {timeSlotsArray && timeSlotsArray.map(timeSlotItem => {
                                                    const date = strDateToMoment(timeSlotItem.date)
                                                    const month = moment(date).format('MMM')
                                                    const dayOfWeek = moment(date).format('ddd')

                                                    return (
                                                        <div className='timeslot__item'>
                                                            <div className={addClasses('timeslot__day', {
                                                                'current': getCurrentDate().isSame(date)
                                                            })}>
                                                                {month} {date.date()},
                                                                <br/>
                                                                {dayOfWeek}
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            <div className='timeslot__items timeSlotsBlock'>
                                                {timeSlotsArray && timeSlotsArray.map(timeSlotItem => {
                                                    return (
                                                        <div className='timeslot__item'>
                                                            {timeSlotItem.timeSlot.sort((a, b) => {
                                                                return a.start_time.localeCompare(b.start_time)
                                                            }).map(timeSlot => {
                                                                return (
                                                                    <TimeSlot
                                                                        timeSlot={timeSlot}
                                                                        onClick={timeSlotOnClick}
                                                                        isActive={selectedTimeSlots.indexOf(timeSlot.id) > -1}
                                                                        allowsToChoice={timeSlot.teachers.length}
                                                                    >
                                                                        {moment(timeSlot.start_time, 'H:m:s').format('H:mm')}
                                                                    </TimeSlot>
                                                                )
                                                            })}
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='timeslot__times timeslot__times_morn'>Утро</div>
                                    <div className='timeslot__times timeslot__times_day'>День</div>
                                    <div className='timeslot__times timeslot__times_evn'>Вечер</div>
                                    <div className='timeslot__times timeslot__times_night'>Ночь</div>

                                </div>

                                <div className='timeslot__col'>
                                    <p>Диагностическое занятие длится 45-55 минут без перерыва</p>
                                    <button
                                        className='btn-sm'
                                        type='button'
                                        disabled={!selectedTimeSlots.length}
                                        onClick={onCreateLessons}
                                    >
                                        Добавить
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SidebarContainer>
    );
}

export default ParentTimeSlots;