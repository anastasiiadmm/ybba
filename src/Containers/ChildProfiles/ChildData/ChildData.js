import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { childSelector, getSpecialists } from 'redux/child/childSlice.js';


function ChildData(props) {

    const {
        childProfile
    } = props


    const dispatch = useDispatch()

    const { specialists } = useSelector(childSelector)

    const mapping = {
        child_does_not_speak_or_speaks_poorly: 'Ребёнок не говорит или плохо говорит',
        put_the_sound_p: 'Поставить звук Р',
        put_the_sound_l: 'Поставить звук Л',
        put_sizzling: 'Поставить шипящие',
        put_other_sounds: 'Поставить другие звуки',
        speech_therapy_massage_required: 'Требуется логопедический массаж',
        stuttering_correction: 'Коррекция заикания',
        speech_development_delay_correction: 'Коррекция задержки речевого развития (ЗРР)',
        correction_of_mental_retardation: 'Коррекция задержки психического развития (ЗПР)',
        help_other_text: 'Другое'
    }

    useEffect(() => {
        dispatch(getSpecialists())
    }, [dispatch])

    return (
        <div className='profile-card modal__gray-bg h-100'>
            <h5 className='profile-card__title'>Профиль ребенка
                - {childProfile.first_name} {childProfile.last_name} </h5>
            <div className='profile-card__item'>
                <p className='profile-card__item-title'>Основная информация ребенка</p>
                <div className='profile-card__main-options'>
                    <dl>
                        <dt>Имя</dt>
                        <dd>{childProfile.first_name}</dd>
                    </dl>
                    <dl>
                        <dt>Фамилия</dt>
                        <dd>{childProfile.last_name}</dd>
                    </dl>
                    <dl>
                        <dt>Дата рождения</dt>
                        <dd>{childProfile.date_of_birth}</dd>
                    </dl>
                    <dl>
                        <dt>Страна проживания</dt>
                        <dd>{childProfile?.country?.name || 'Страна проживания не указана'}</dd>
                    </dl>

                    {childProfile?.country?.name === 'Россия' && (
                        <dl>
                            <dt>Город проживания</dt>
                            <dd>{childProfile?.country?.name ? childProfile?.city?.name : 'Город проживания не указан'}</dd>
                        </dl>
                    )}
                </div>
            </div>
            {childProfile.additional_information && specialists && (
                <>
                    <div className='profile-card__item'>
                        <p className='profile-card__item-title'>С чем вам помочь?</p>
                        {Object.keys(mapping).map(key => {
                            if (childProfile.additional_information[key]) {
                                if (key === 'help_other_text' && childProfile.additional_information[key]) {
                                    return <p>
                                        <span>Другое:</span>
                                        {childProfile.additional_information[key]}
                                    </p>
                                } else if (childProfile.additional_information[key]) {
                                    return <p>
                                        {mapping[key]}
                                    </p>
                                }
                            }
                        })}
                    </div>
                    <div className='profile-card__item'>
                        <p className='profile-card__item-title'>Был ли у вас опыт работы с другими специалистами?</p>
                        <p>{childProfile.specialists.length ? 'Да' : 'Нет'}</p>
                        {!!childProfile.specialists.length && (
                            childProfile.specialists.map((specialist, index) => {
                                return (
                                    <>
                                        <p><span>С каким специалистом занимались?</span>{
                                            specialists.specialist[specialist.specialist]
                                        }</p>
                                        <p>
                                            <span>Учреждение, школа, центр:</span>
                                            {specialist.place_of_training}
                                        </p>
                                        <p>
                                            <span>Какое заключение/диагноз поставил специалист?</span>
                                            {specialist.conclusion}
                                        </p>
                                        <p>
                                            <span>Какие были результаты? (Плюсы, минусы, чего лично вам не хватило в работе) </span>
                                            {specialist.results}
                                        </p>
                                        <p>
                                            <span>Почему решили поменять специалиста?</span>
                                            {specialists.reason_change_specialist[specialist.reason_change_specialist] === 'Другое' ?
                                                specialist.reason_change_specialist_text :
                                                specialists.reason_change_specialist[specialist.reason_change_specialist]
                                            }
                                        </p>
                                    </>
                                )
                            })
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

ChildData.propTypes = {
    childProfile: PropTypes.object
}

export default ChildData;
