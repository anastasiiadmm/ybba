import React, { useState, useEffect, useContext } from 'react';

import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import FormField from 'Components/FormField/FormField';
import Modal from 'Components/Modal/Modal';
import Button from 'Components/Button/Button';
import {
    getSpecialists,
    childSelector,
    clearChildState,
    getChild,
    addSpecialistsForChild,
    deleteChildSpecialist,
    updateChildSpecialist
} from 'redux/child/childSlice.js';
import { ChildProfileContext } from 'context/ChildProfileContext/ChildProfileContext.js';
import StagesLinks from 'Containers/ChildProfile/StagesLinks/StagesLinks';
import Actions from 'Containers/ChildProfile/Actions/Actions';


const ChildProfileStageTwo = () => {

    const {
        childId,
        stage
    } = useContext(ChildProfileContext)

    const initSpecialistData = {
        specialist: '',
        place_of_training: '',
        conclusion: '',
        results: '',
        reason_change_specialist: '',
        reason_change_specialist_text: '',
        speciality: ''
    }

    const [isChildHaveTherapist, setIsParentHaveTherapist] = useState(false);
    const [childSpecialists, setChildSpecialists] = useState([])
    const [isAddTherapistModalOpen, setIsAddTherapistModalOpen] = useState(false);
    const [specialistsOptions, setSpecialistsOptions] = useState(null);
    const [indexOfActiveSpecialist, setIndexOfActiveSpecialist] = useState(null);

    const { specialists, child } = useSelector(childSelector)

    const dispatch = useDispatch()
    const history = useHistory()

    const activeSpecialist = childSpecialists.at(indexOfActiveSpecialist)

    const selectChangeHandler = ({ value }) => {
        const newChildSpecialists = [...childSpecialists]
        if (indexOfActiveSpecialist >= 0) {
            newChildSpecialists[indexOfActiveSpecialist] = {
                ...newChildSpecialists[indexOfActiveSpecialist],
                specialist: value
            }
        } else {
            newChildSpecialists.at(indexOfActiveSpecialist).specialist = value
        }
        setChildSpecialists(newChildSpecialists)
    }
    const inputChangeHandler = e => {
        const newChildSpecialists = [...childSpecialists]
        newChildSpecialists.at(indexOfActiveSpecialist)[e.target.name] = e.target.value
        setChildSpecialists(newChildSpecialists)
    }
    const reasonChangeHandler = reason => {
        const newChildSpecialists = [...childSpecialists]
        if (indexOfActiveSpecialist >= 0) {
            newChildSpecialists[indexOfActiveSpecialist] = {
                ...newChildSpecialists[indexOfActiveSpecialist],
                reason_change_specialist: reason,
                reason_change_specialist_text: ''
            }
        } else {
            newChildSpecialists.at(indexOfActiveSpecialist).reason_change_specialist = reason
            newChildSpecialists.at(indexOfActiveSpecialist).reason_change_specialist_text = ''
        }
        setChildSpecialists(newChildSpecialists)
    }

    const toggleTherapistModal = async () => {
        await setIsAddTherapistModalOpen(!isAddTherapistModalOpen)
        if (!isAddTherapistModalOpen) {
            await setChildSpecialists([...childSpecialists, initSpecialistData])
        }
    }
    const openAddSpecialistModal = async () => {
        await toggleTherapistModal()
        setIndexOfActiveSpecialist(-1)
    }
    const openEditSpecialistModal = async index => {
        await setIsAddTherapistModalOpen(true)
        setIndexOfActiveSpecialist(index)
    }
    const onTherapistModalClose = async () => {
        if (!activeSpecialist?.id) {
            const oldChildSpecialists = [...childSpecialists]
            oldChildSpecialists.pop()
            await setChildSpecialists(oldChildSpecialists)
        }
    }
    const workWithSpecialist = async () => {
        const specialist = { ...activeSpecialist }
        if (specialist.reason_change_specialist !== 'other') {
            delete specialist.reason_change_specialist_text
        }
        if (activeSpecialist?.id) {
            await dispatch(updateChildSpecialist({
                specialistId: activeSpecialist.id,
                specialist: specialist
            }))
        } else {
            await dispatch(addSpecialistsForChild({
                childId: childId,
                specialists: specialist
            }))
        }
        await dispatch(getChild(childId))
        await setIsAddTherapistModalOpen(false)
    }
    const deleteSpecialist = async id => {
        await dispatch(deleteChildSpecialist({ specialistId: id }))
        await dispatch(getChild(childId))
    }

    const addSpecialists = async () => {
        history.push(`/child-profile/${childId}/${parseInt(stage) + 1}`)
    }

    const isMainSpecialistDataFilled = (
        activeSpecialist?.specialist &&
        activeSpecialist?.place_of_training &&
        activeSpecialist?.conclusion &&
        activeSpecialist?.results &&
        activeSpecialist?.reason_change_specialist &&
        activeSpecialist?.speciality
    )

    const canGoToNextStage = (
        !isChildHaveTherapist || (
            isChildHaveTherapist && childSpecialists.length
        )
    )

    useEffect(() => {
        dispatch(clearChildState())
        // eslint-disable-next-line
    }, [isAddTherapistModalOpen])

    useEffect(() => {
        if (specialists) {
            setSpecialistsOptions(Object.keys(specialists.specialist).map(specialist => {
                return { value: specialist, label: specialists.specialist[specialist] }
            }))
        }
    }, [specialists])

    useEffect(() => {
        if (child && specialists) {
            setChildSpecialists([...child.specialists])
            if (child.specialists.length) {
                setIsParentHaveTherapist(true)
            }
        }
        // eslint-disable-next-line
    }, [child])

    useEffect(() => {
        dispatch(clearChildState())
        dispatch(getSpecialists())
        dispatch(getChild(childId))
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <Modal
                toggle={toggleTherapistModal}
                onClose={onTherapistModalClose}
                isOpen={isAddTherapistModalOpen}
                width={90}
            >
                {activeSpecialist && specialists && (
                    <div className='modal__gray-bg' style={{ height: 'calc(100% + 38px)' }}>
                        <div className='form  scroll-block' style={{ height: '100%ur' }}>
                            <form action='#'>
                                <h5 className='form__title-spec'>Добавить специалиста</h5>
                                <div className='form__body-spec'>
                                    <div className='form__main-spec'>
                                        <div className='form__row-spec'>
                                            {specialistsOptions && (
                                                <FormField
                                                    type='select'
                                                    label='С каким специалистом занимались?'
                                                    options={specialistsOptions}
                                                    onChange={(event, newValue) => {
                                                        selectChangeHandler(newValue)
                                                    }}
                                                    value={activeSpecialist?.specialist}
                                                />
                                            )}
                                        </div>
                                        <div className='other-spec-info'>
                                            <div className='form__row-spec dflex'>
                                                <div className='form__col'>
                                                    <FormField
                                                        type='text'
                                                        label='Специальность'
                                                        className='form__field'
                                                        value={activeSpecialist.speciality}
                                                        onChange={inputChangeHandler}
                                                        name='speciality'
                                                    />
                                                </div>
                                                <div className='form__col'>
                                                    <FormField
                                                        type='text'
                                                        label='Где занимались? (Учреждение, школа, центр)'
                                                        className='form__field'
                                                        value={activeSpecialist.place_of_training}
                                                        onChange={inputChangeHandler}
                                                        name='place_of_training'
                                                    />
                                                </div>
                                            </div>
                                            <div className='form__row-spec'>
                                                <FormField
                                                    type='textarea'
                                                    label='Какое заключение/диагноз поставил специалист?'
                                                    className='form__field'
                                                    value={activeSpecialist.conclusion}
                                                    onChange={inputChangeHandler}
                                                    name='conclusion'
                                                />
                                            </div>
                                            <div className='form__row-spec'>
                                                <FormField
                                                    type='textarea'
                                                    label='Какие были результаты? (Плюсы, минусы, чего лично вам не хватило в работе)'
                                                    className='form__field'
                                                    value={activeSpecialist.results}
                                                    onChange={inputChangeHandler}
                                                    name='results'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='form__add-spec'>
                                        <div className='form__row-spec'>
                                            <span className='form__label'>Какие были результаты? (Плюсы, минусы, чего лично вам не хватило в работе)</span>
                                            <ul className='form__list-result'>
                                                {Object.entries(specialists.reason_change_specialist).map(([key, value], index) => {
                                                    return (
                                                        <li>
                                                            <FormField
                                                                label={value}
                                                                id={`childProfileReason${index}`}
                                                                type='radio'
                                                                checked={activeSpecialist.reason_change_specialist === key}
                                                                onChange={() => reasonChangeHandler(key)}
                                                            />
                                                            {key === 'other' && (
                                                                <FormField
                                                                    type='text'
                                                                    className='field'
                                                                    name='reason_change_specialist_text'
                                                                    onChange={inputChangeHandler}
                                                                    value={activeSpecialist.reason_change_specialist_text}
                                                                    disabled={!(activeSpecialist.reason_change_specialist === 'other')}
                                                                />
                                                            )}
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    className='btn'
                                    type='button'
                                    disabled={!isMainSpecialistDataFilled}
                                    onClick={workWithSpecialist}
                                >
                                    Сохранить
                                </Button>
                            </form>
                        </div>
                    </div>
                )}
            </Modal>
            <form onSubmit={addSpecialists}>
                <div className='profile-child'>
                    <StagesLinks/>
                    <div className='profile-child__survey'>
                        <p className='profile-child__descr'>
                            Был ли у вас опыт работы с другими специалистами?
                        </p>
                        <ul className='profile-child__practice'>
                            <li>
                                <FormField
                                    type='radio'
                                    label='Да'
                                    id='practiceYes'
                                    checked={isChildHaveTherapist}
                                    onChange={() => setIsParentHaveTherapist(true)}
                                />
                            </li>
                            <li>
                                <FormField
                                    type='radio'
                                    label='Нет'
                                    id='practiceNo'
                                    checked={!isChildHaveTherapist}
                                    onChange={() => setIsParentHaveTherapist(false)}
                                />
                            </li>
                        </ul>
                        {isChildHaveTherapist && (
                            <div>
                                <p className='profile-child__spec-descr'>Специалисты</p>
                                <div className='profile-child__spec-info'>
                                    {childSpecialists.map((childSpecialist, index) => {
                                        return (
                                            <div className='profile-child__spec-item'>
                                                <span
                                                    className='profile-child__spec-title'
                                                >
                                                    {specialists.specialist[childSpecialist.specialist]}
                                                </span>
                                                <button
                                                    type='button'
                                                    className='btn-out'
                                                    onClick={() => openEditSpecialistModal(index)}
                                                >
                                                    Редактировать
                                                </button>
                                                <button
                                                    type='button'
                                                    className='btn-cancel'
                                                    onClick={() => deleteSpecialist(childSpecialist.id)}
                                                >
                                                    Удалить
                                                </button>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className='profile-child__spec-info'/>
                                <Button
                                    className='btn'
                                    type='button'
                                    onClick={openAddSpecialistModal}
                                >
                                    Добавить специалиста
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
                <Actions
                    isNextButtonActive={canGoToNextStage}
                    to={`/child-profile/${childId}/${parseInt(stage) - 1}`}
                />
            </form>
        </>
    );
}

export default ChildProfileStageTwo;