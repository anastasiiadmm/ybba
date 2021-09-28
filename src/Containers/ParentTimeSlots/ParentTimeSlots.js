import React, {useEffect, useState, useCallback} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router';
import {Link} from 'react-router-dom';
import {Spinner} from 'react-bootstrap';
import moment from 'moment';

import SidebarContainer from '../../Components/SidebarContainer/SidebarContainer';
import MainTitleBlock from '../MainDashboard/MainTitleBlock/MainTitleBlock';
import {getTimeSlots, lessonsSelector, createLessons, clearLessons} from '../../redux/lessons/lessonsSlice';
import TimeSlot from '../../Components/TimeSlot/TimeSlot';
import FormField from '../../Components/FormField/FormField';
import Modal from '../../Components/Modal/Modal';

import './parentTimeSlots.css'


const MAX_SELECTED_TIME_SLOTS = 1
const DAYS_RANGE = 5


const ParentTimeSlots = () => {

    const now = new Date()

    const dispatch = useDispatch()
    const history = useHistory()

    const [selectedTimeSlots, setSelectedTimeSlots] = useState([])
    const [dateFrom, setDateFrom] = useState(new Date(now.setDate(now.getDate())))
    const [dateTo, setDateTo] = useState(new Date(new Date().setDate(now.getDate() + DAYS_RANGE)))
    const [timeSlotItems, setTimeSlotItems] = useState({})
    const [lessonCreatedModalIsOpen, setLessonCreatedModalIsOpen] = useState(false)

    const {timeSlots, selectedChild, lessonCreated, loading} = useSelector(lessonsSelector)

    const timeSlotOnClick = ({id}) => {
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
    const getGetTimesSlotsData = (from, to, childId) => {
        return {
            from: moment(from).format('DD/MM/YYYY'),
            to: moment(to).format('DD/MM/YYYY'),
            childId: childId
        }
    }
    const dateFromChangeHandler = date => {
        setDateFrom(date[0])
        dispatch(getTimeSlots(
            getGetTimesSlotsData(date[0], dateTo, selectedChild.id)
        ))
    }
    const dateToChangeHandler = date => {
        setDateTo(date[0])
        dispatch(getTimeSlots(
            getGetTimesSlotsData(dateFrom, date[0], selectedChild.id)
        ))
    }
    const modalToggle = () => {
        setLessonCreatedModalIsOpen(!lessonCreatedModalIsOpen)
    }
    const onModalClose = () => {
        history.push('/lessons/')
        dispatch(clearLessons())
    }

    const getNewTimeSlotsItems = useCallback(() => {
        if (!timeSlots) {
            return {}
        }
        const newTimeSlotItems = {}
        timeSlots.forEach(timeSlot => {
            const timeSlotDayDate = timeSlot.day.date
            if (timeSlotDayDate in newTimeSlotItems) {
                const timeSlotArray = newTimeSlotItems[timeSlotDayDate]
                timeSlotArray.push(timeSlot)
                newTimeSlotItems[timeSlotDayDate] = timeSlotArray.sort((a, b) => {
                    return new Date(moment(a.start_time, 'H:m:s')) - new Date(moment(b.start_time, 'H:m:s'))
                })
            } else {
                newTimeSlotItems[timeSlotDayDate] = [timeSlot]
            }
        })

        return newTimeSlotItems
    }, [timeSlots])

    const onCreateLessons = () => {
        const data = {time_slots_ids: selectedTimeSlots, student_id: selectedChild.id}
        dispatch(createLessons(data))
    }

    useEffect(() => {
        if (lessonCreated) {
            modalToggle()
        }
        // eslint-disable-next-line
    }, [lessonCreated])

    useEffect(() => {
        const newTimeSlotItems = getNewTimeSlotsItems()
        setTimeSlotItems(newTimeSlotItems)
    }, [getNewTimeSlotsItems, timeSlots])

    useEffect(() => {
        if (!selectedChild) {
            return history.push('/lessons/')
        }

        dispatch(getTimeSlots(
            getGetTimesSlotsData(dateFrom, dateTo, selectedChild.id)
        ))

        return () => {
            dispatch(clearLessons())
        }
        // eslint-disable-next-line
    }, [])

    return (
        <SidebarContainer>
            <Modal
                width={50}
                isOpen={lessonCreatedModalIsOpen}
                toggle={modalToggle}
                onClose={onModalClose}
            >
                <h5 className='message__title'>Занятие было добавлено</h5>
                <Link className='btn' to='/'>На Главную</Link>
            </Modal>

            <MainTitleBlock
                leftTitle='Занятия'
            />
            <div className='classes'>
                <div className='classes__content'>
                    <h6>Выбор временной ячейки для урока ребёнка</h6>
                    <div className='timeslot' id='timeSlot'>
                        <div className='timeslot__body position-static'>
                            <div className='d-flex justify-content-around flex-wrap'>
                                <FormField
                                    label='От'
                                    type='flatpickr'
                                    configs={{
                                        dateFormat: 'd/m/Y',
                                        enableTime: false,
                                        minDate: now
                                    }}
                                    onChange={dateFromChangeHandler}
                                    className='form__field'
                                    value={dateFrom}
                                />
                                <FormField
                                    label='До'
                                    type='flatpickr'
                                    configs={{
                                        dateFormat: 'd/m/Y',
                                        enableTime: false,
                                        minDate: dateFrom,
                                        maxDate: new Date().setDate(dateFrom.getDate() + 5)
                                    }}
                                    onChange={dateToChangeHandler}
                                    className='form__field'
                                    value={dateTo}
                                />
                            </div>

                            <div className='timeslot__main-wrap'>
                                <div className='timeslot__main'>
                                    {(!loading && (timeSlots && !timeSlots.length)) && (
                                        <h6>Нет свободных логопедов на выделенный период</h6>
                                    )}
                                    {loading && (
                                        <Spinner animation='border' role='status'>
                                            <span className='visually-hidden'>Loading...</span>
                                        </Spinner>
                                    )}
                                    <div className='timeslot__items'>
                                        {timeSlotItems && Object.keys(timeSlotItems).reverse().map(timeSlotItem => {
                                            return (
                                                <div className='timeslot__item'>
                                                    <div className='timeslot__day'>
                                                        {timeSlotItem}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className='timeslot__items timeSlotsBlock'>
                                        {timeSlotItems && Object.keys(timeSlotItems).reverse().map(timeSlotItem => {
                                            return (
                                                <div className='timeslot__item'>
                                                    {timeSlotItems[timeSlotItem].map(timeSlot => {
                                                        return (
                                                            <TimeSlot
                                                                timeSlot={timeSlot}
                                                                onClick={timeSlotOnClick}
                                                                isActive={selectedTimeSlots.indexOf(timeSlot.id) > -1}
                                                            >
                                                                {moment(timeSlot.start_time, 'H:m:s').format('H:mm')} -
                                                                {moment(timeSlot.end_time, 'H:m:s').format('H:mm')}
                                                            </TimeSlot>
                                                        )
                                                    })}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            {/*<div className='timeslot__times timeslot__times_morn'>Утро</div>*/}
                            {/*<div className='timeslot__times timeslot__times_day'>День</div>*/}
                            {/*<div className='timeslot__times timeslot__times_evn'>Вечер</div>*/}

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
        </SidebarContainer>
    );
}

export default ParentTimeSlots;