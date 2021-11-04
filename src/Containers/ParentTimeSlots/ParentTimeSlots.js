import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import moment from 'moment';

import SidebarContainer from 'Components/SidebarContainer/SidebarContainer';
import MainTitleBlock from 'Containers/MainDashboard/MainTitleBlock/MainTitleBlock';
import { getTimeSlots, lessonsSelector, createLessons, clearLessons } from 'redux/lessons/lessonsSlice.js';
import TimeSlot from 'Components/TimeSlot/TimeSlot';
import Modal from 'Components/Modal/Modal';
import { strDateToMoment, getCurrentDate } from 'utils/date/dateUtils.js';
import { addClasses } from 'utils/addClasses/addClasses.js';

import 'Containers/ParentTimeSlots/parentTimeSlots.css'

const MAX_SELECTED_TIME_SLOTS = 1
const DAYS_RANGE = 5


const ParentTimeSlots = props => {

    const now = new Date()
    const { lessonId } = props.match.params

    const dispatch = useDispatch()
    const history = useHistory()

    const [selectedTimeSlots, setSelectedTimeSlots] = useState([])
    const [dateFrom, setDateFrom] = useState(new Date(now.setDate(now.getDate())))
    const [dateTo, setDateTo] = useState(new Date(new Date().setDate(now.getDate() + DAYS_RANGE)))
    // const [timeSlotItems, setTimeSlotItems] = useState({})
    const [lessonCreatedModalIsOpen, setLessonCreatedModalIsOpen] = useState(false)

    const { timeSlots, selectedChild, lessonCreated, loading } = useSelector(lessonsSelector)

    const timeSlotsSchedule = timeSlots?.reduce((timeSlots, timeslot) => {
        const date = timeslot.day.date;
        if (!timeSlots[date]) {
            timeSlots[date] = [];
        }
        timeSlots[date].push(timeslot);
        return timeSlots;
    }, {});

    const timeSlotsArray = timeSlotsSchedule && Object.keys(timeSlotsSchedule).reverse().map((date) => {
        return {
            date,
            timeSlot: timeSlotsSchedule[date]
        }
    })

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
    const getGetTimesSlotsData = (from, to, childId) => {
        return {
            from: moment(from).format('DD/MM/YYYY'),
            to: moment(to).format('DD/MM/YYYY'),
            childId: childId
        }
    }
    // const dateFromChangeHandler = date => {
    //     setDateFrom(date[0])
    //     dispatch(getTimeSlots(
    //         getGetTimesSlotsData(date[0], dateTo, selectedChild.id)
    //     ))
    // }
    // const dateToChangeHandler = date => {
    //     setDateTo(date[0])
    //     dispatch(getTimeSlots(
    //         getGetTimesSlotsData(dateFrom, date[0], selectedChild.id)
    //     ))
    // }

    const toNextWeek = () => {

    }

    const toPrevWeek = () => {

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
                leftTitle='Выберите временной слот'
            />
            <div className="content">
                <div className="content__inner">
                    <div className='classes'>
                        <div className='classes__content'>
                            <div className='timeslot' id='timeSlot'>
                                <div className='timeslot__body'>
                                    {/*<div className='d-flex justify-content-around flex-wrap'>*/}
                                    {/*    <FormField*/}
                                    {/*        label='От'*/}
                                    {/*        type='flatpickr'*/}
                                    {/*        configs={{*/}
                                    {/*            dateFormat: 'd/m/Y',*/}
                                    {/*            enableTime: false,*/}
                                    {/*            minDate: now*/}
                                    {/*        }}*/}
                                    {/*        onChange={dateFromChangeHandler}*/}
                                    {/*        className='form__field'*/}
                                    {/*        value={dateFrom}*/}
                                    {/*    />*/}
                                    {/*    <FormField*/}
                                    {/*        label='До'*/}
                                    {/*        type='flatpickr'*/}
                                    {/*        configs={{*/}
                                    {/*            dateFormat: 'd/m/Y',*/}
                                    {/*            enableTime: false,*/}
                                    {/*            minDate: dateFrom,*/}
                                    {/*            maxDate: new Date().setDate(dateFrom.getDate() + 5)*/}
                                    {/*        }}*/}
                                    {/*        onChange={dateToChangeHandler}*/}
                                    {/*        className='form__field'*/}
                                    {/*        value={dateTo}*/}
                                    {/*    />*/}
                                    {/*</div>*/}

                                    <button type="button" id="timeSlotPrev" className="timeslot__prev"
                                            onClick={toPrevWeek}/>
                                    <button type="button" id="timeSlotNext" className="timeslot__next"
                                            onClick={toNextWeek}/>
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
                                                                        {/*{moment(timeSlot.timeSlot.end_time, 'H:m:s').format('H:mm')}*/}
                                                                    </TimeSlot>
                                                                )
                                                            })}
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="timeslot__times timeslot__times_morn">Утро</div>
                                    <div className="timeslot__times timeslot__times_day">День</div>
                                    <div className="timeslot__times timeslot__times_evn">Вечер</div>
                                    <div className="timeslot__times timeslot__times_night">Ночь</div>

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