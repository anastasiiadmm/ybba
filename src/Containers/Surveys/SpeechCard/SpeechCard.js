import React, { useEffect, useState, useRef } from 'react';
import SpeechCardMain from 'Components/Surveys/SpeechCard/SpeechCardMain/SpeechCardMain.js';
import PropTypes from 'prop-types';
import SpeechCardFormBlock from 'Components/Surveys/SpeechCard/SpeechCardFormBlock/SpeechCardFormBlock.js';
import SpeechCardBlock from 'Components/Surveys/SpeechCard/SpeechCardBlock/SpeechCardBlock.js';
import SpeechCardTitle from 'Components/Surveys/SpeechCard/SpeechCardTitle/SpeechCardTitle.js';
import SpeechCardRow from 'Components/Surveys/SpeechCard/SpeechCardRow/SpeechCardRow.js';
import SpeechCardFormField from 'Components/Surveys/SpeechCard/SpeechCardFormField/SpeechCardFormField.js';
import { useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import SpeechCardBlockTitle from 'Components/Surveys/SpeechCard/SpeechCardSubtitle/SpeechCardBlockTitle.js';
import SpeechCardSubBlock from 'Components/Surveys/SpeechCard/SpeechCardSubBlock/SpeechCardSubBlock.js';
import SpeechCardSubBlockTitle from 'Components/Surveys/SpeechCard/SpeechCardSubBlockTitle/SpeechCardSubBlockTitle.js';
import SpeechCardFormLine from 'Components/Surveys/SpeechCard/SpeechCardFormLine/SpeechCardFormLine.js';
import SurveySubmitButton from 'Components/Surveys/Common/SurveySubmitButton.js';
import { updateSpeechCard } from 'redux/surveys/surveysSlice.js';
import { useDispatch } from 'react-redux';
import { speechCardSchema } from 'Containers/Surveys/SpeechCard/yupSchema.js';
import { speechCardStatuses } from 'constants.js';
import SpeechCardView from 'Containers/Surveys/SpeechCardView/SpeechCardView.js';
import { useHistory } from 'react-router';

const SpeechCard = (props) => {

    const {
        speechCard, lesson, onSubmit
    } = props

    const { register, control, handleSubmit } = useForm({
        resolver: yupResolver(speechCardSchema),
        defaultValues: {
            ...speechCard,
            lesson: lesson.id,
        }
    })

    const dispatch = useDispatch()
    const history = useHistory()
    const data = useWatch({ control })
    let timer = null
    const isCardClosed = speechCard.status === speechCardStatuses.closed

    const [isSpeechCardFinished, setIsSpeechCardFinished] = useState(false)
    const topBlock = useRef()

    const onFinishSpeechCard = () => {
        setIsSpeechCardFinished(true)
        topBlock.current.scrollIntoView({ behavior: 'smooth' })
    }

    const onFinishViewSpeechCard = () => {
        history.push('/')
    }

    useEffect(() => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            dispatch(updateSpeechCard({
                speechCardId: speechCard.id,
                speechCardData: data
            }))
        }, 1000)
        return () => clearTimeout(timer)
    }, [data])

    return (
        <SpeechCardMain
            submitHandler={handleSubmit}
            onSubmit={onSubmit}
        >
            <div ref={topBlock} />
            {isSpeechCardFinished && (<>
                <SpeechCardView
                    speechCard={data}
                />
                <SurveySubmitButton
                    type='button'
                    onClick={onFinishViewSpeechCard}
                >
                    Вернутся на главную страницу
                </SurveySubmitButton>
            </>)}
            {!isSpeechCardFinished && (<>
                <SpeechCardFormBlock>
                    <SpeechCardBlock>
                        <SpeechCardTitle>Речевая карта</SpeechCardTitle>
                        {/*<p className='speech-card-form__date'>Дата заполнения: 12 мая 2016</p>*/}
                        <SpeechCardRow>
                            <SpeechCardFormField
                                type='text'
                                label='Фамилия, имя ребенка'
                                register={register}
                                name='child_full_name'
                                disabled={isCardClosed}
                            />
                        </SpeechCardRow>
                        <SpeechCardRow>
                            <SpeechCardFormField
                                type='text'
                                label='Дата рождения/Возраст'
                                name='child_date_of_birth'
                                register={register}
                                disabled={isCardClosed}
                            />
                        </SpeechCardRow>
                        <SpeechCardRow>
                            <SpeechCardFormField
                                type='textarea'
                                label='Родители (законные представители)'
                                name='parent'
                                register={register}
                                disabled={isCardClosed}
                            />
                        </SpeechCardRow>
                        <SpeechCardRow>
                            <SpeechCardFormField
                                type='textarea'
                                label='Основные жалобы родителей'
                                name='main_complaints_from_parents'
                                register={register}
                                disabled={isCardClosed}
                            />
                        </SpeechCardRow>
                        <SpeechCardRow>
                            <SpeechCardFormField
                                type='textarea'
                                label='С какой целью обратились к логопеду'
                                name='for_what_purpose_did_you_turn_to_a_speech_therapist'
                                register={register}
                                disabled={isCardClosed}
                            />
                        </SpeechCardRow>
                    </SpeechCardBlock>
                    <SpeechCardBlock>
                        <SpeechCardBlockTitle>1. Краткие сведения из анамнеза</SpeechCardBlockTitle>
                        <SpeechCardSubBlock>
                            <SpeechCardSubBlockTitle>1.1. Раннее/позднее физическое развитие</SpeechCardSubBlockTitle>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='text'
                                    label='Сел в:'
                                    name='sat_in'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='text'
                                    label='Пополз на четвереньках в:'
                                    name='crawled_on_all_fours_into'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='text'
                                    label='Пошел в:'
                                    name='went_to'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='text'
                                    label='Научился прыгать на двух ногах в:'
                                    name='learned_to_jump_on_two_legs_in'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='Травмы/инфекции до, во время и/или после родов:'
                                    name='injury_infection_before_during_and_or_after_childbirth'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                        </SpeechCardSubBlock>
                        <SpeechCardSubBlock>
                            <SpeechCardSubBlockTitle>1.2. Раннее/позднее речевое развитие</SpeechCardSubBlockTitle>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='text'
                                    label='Лепет в:'
                                    name='babbling_in'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='text'
                                    label='Первые слова в:'
                                    name='first_words_in'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='text'
                                    label='Первые короткие фразы в:'
                                    name='first_short_phrases_in'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                        </SpeechCardSubBlock>
                        <SpeechCardSubBlock>
                            <SpeechCardSubBlockTitle>1.3. Речевая среда, в которой воспитывается
                                ребенок</SpeechCardSubBlockTitle>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    name='speech_environment'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                        </SpeechCardSubBlock>
                        <SpeechCardSubBlock>
                            <SpeechCardSubBlockTitle>1.4. Неврологический статус и состояние сенсорно-перцептивных
                                органов
                                и систем (зрение, слух, осязание и др.). Эпилептиформная
                                активность</SpeechCardSubBlockTitle>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    name='neurological_status'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='text'
                                    label='Особенности зрительной системы'
                                    name='vision'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='text'
                                    label='Особенности слуховой системы'
                                    name='hearing'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='text'
                                    label='Пищевое поведение'
                                    name='eating_behavior'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                        </SpeechCardSubBlock>
                        <SpeechCardSubBlock>
                            <SpeechCardSubBlockTitle>
                                1.5. Сведения о настоящих и перенесенных операциях, травмах заболеваниях
                            </SpeechCardSubBlockTitle>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    name='present_and_past_diseases'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                        </SpeechCardSubBlock>
                        <SpeechCardSubBlock>
                            <SpeechCardSubBlockTitle>1.6. Медикаментозное лечение</SpeechCardSubBlockTitle>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    name='drug_treatment'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                        </SpeechCardSubBlock>
                        <SpeechCardSubBlock>
                            <SpeechCardSubBlockTitle>1.7. Эмоционально-психологический уровень</SpeechCardSubBlockTitle>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    name='emotional_and_psychological_level'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='text'
                                    label='Эмоциональный фон во время занятия'
                                    name='emotional_background_during_class'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='text'
                                    label='Мотивация и интерес'
                                    name='motivation_and_interest'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='text'
                                    label='Эмоциональный отклик на эмоцию взрослого'
                                    name='emotional_response_to_adult_emotion'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='text'
                                    label='Мимические проявления'
                                    name='mimic_manifestations'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='text'
                                    label='Базовые эмоции, которые проявлял во время занятия'
                                    name='basic_emotions_that_it_exhibits'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                        </SpeechCardSubBlock>
                    </SpeechCardBlock>
                    <SpeechCardBlock>
                        <SpeechCardTitle>2. Сформированность представлений об окружающем мире</SpeechCardTitle>
                        <SpeechCardRow>
                            <SpeechCardFormField
                                type='textarea'
                                name='formation_of_ideas_about_world_around'
                                register={register}
                                disabled={isCardClosed}
                            />
                        </SpeechCardRow>
                        <SpeechCardRow>
                            <SpeechCardFormField
                                type='text'
                                label='В пространственно-временной ситуации'
                                name='in_a_time_space_situation'
                                register={register}
                                disabled={isCardClosed}
                            />
                        </SpeechCardRow>
                    </SpeechCardBlock>
                    <SpeechCardBlock>
                        <SpeechCardTitle>3. Образ «Я»</SpeechCardTitle>
                        <SpeechCardRow>
                            <SpeechCardFormField
                                type='text'
                                label='Образ «Я»'
                                name='image_i'
                                register={register}
                                disabled={isCardClosed}
                            />
                        </SpeechCardRow>
                        <SpeechCardRow>
                            <SpeechCardFormField
                                type='text'
                                label='Соматогнозис'
                                name='somatognosis'
                                register={register}
                                disabled={isCardClosed}
                            />
                        </SpeechCardRow>
                    </SpeechCardBlock>
                    <SpeechCardBlock>
                        <SpeechCardBlockTitle>4. Речеязыковая компетенция</SpeechCardBlockTitle>
                        <SpeechCardSubBlock>
                            <SpeechCardSubBlockTitle>4.1. Уровень понимания речи</SpeechCardSubBlockTitle>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='text'
                                    name='speech_comprehension_level'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                        </SpeechCardSubBlock>
                        <SpeechCardSubBlock>
                            <SpeechCardSubBlockTitle>4.2. Уровень сформированности лексикона</SpeechCardSubBlockTitle>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='text'
                                    name='level_of_vocabulary_formation'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='text'
                                    label='Активный семантический компонент'
                                    name='active_semantic_component_active_vocabulary'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='Объем словаря'
                                    name='volume_vocabulary'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='Системная организация словаря (ассоциативные связи)'
                                    name='system_organization_of_dictionary_associative_links'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                        </SpeechCardSubBlock>
                        <SpeechCardSubBlock>
                            <SpeechCardSubBlockTitle>
                                4.3. Уровень сформированности грамматической компетенции
                            </SpeechCardSubBlockTitle>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='text'
                                    name='level_of_grammatical_competence_formation'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='Словоизменительные навыки и умения'
                                    name='inflectional_skills_and_abilities_part_one'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='Словообразовательные навыки и умения'
                                    name='word_building_skills_and_abilities'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='Синтаксические навыки и умения'
                                    name='syntactic_skills_and_abilities'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                        </SpeechCardSubBlock>
                        <SpeechCardSubBlock>
                            <SpeechCardSubBlockTitle>
                                4.4. Уровень сформированности фонетико-фонологической компетенции
                            </SpeechCardSubBlockTitle>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    name='level_of_formation_of_phonetic_phonological_competence'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='Состояние фонематического восприятия'
                                    name='state_of_phonemic_perception'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='Состояние фонематического слуха'
                                    name='state_of_phonemic_hearing'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='Сформированность навыков звукового анализа и синтеза'
                                    name='formation_of_the_skills_of_sound_analysis_and_synthesis'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='Слоговая структура слова'
                                    name='syllabic_structure_of_a_word'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='Звукопроизносительная сторона речи'
                                    name='sound_articulating_side_of_speech'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='Просодическая сторона речи'
                                    name='prosodic_side_of_speech_game_on_the_farm_part_three'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='text'
                                    label='Голос'
                                    name='voice'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='text'
                                    label='Плавность'
                                    name='smoothness'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='text'
                                    label='Темп'
                                    name='pace'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='text'
                                    label='Речь'
                                    name='speech_game_on_the_farm_part_three'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='text'
                                    label='Дыхание'
                                    name='breath_game_on_the_farm_part_three'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='text'
                                    label='Ритм'
                                    name='rhythm_game_on_the_farm_part_three'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='text'
                                    label='Сила выдоха'
                                    name='exhalation_force'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='text'
                                    label='Дифференцированность вдоха/выдоха и возможность управления'
                                    name='inspiratory_expiratory_differentiation'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                        </SpeechCardSubBlock>
                    </SpeechCardBlock>
                    <SpeechCardBlock>
                        <SpeechCardTitle>
                            5. Понимание и самостоятельное продуцирование/репродуцирование текста повествовательного
                            характера в соответствии с предложенным сюжетом (рассказ/пересказ)
                        </SpeechCardTitle>
                        <SpeechCardRow>
                            <SpeechCardFormField
                                type='textarea'
                                label='Понимание текста'
                                name='understanding_the_text_game_how_the_mouse_could_not_sleep'
                                register={register}
                                disabled={isCardClosed}
                            />
                        </SpeechCardRow>
                        <SpeechCardRow>
                            <SpeechCardFormField
                                type='textarea'
                                label='Продуцирование текста'
                                name='text_production'
                                register={register}
                                disabled={isCardClosed}
                            />
                        </SpeechCardRow>
                        <SpeechCardRow>
                            <SpeechCardFormField
                                type='textarea'
                                label='Репродуцирование текста'
                                name='reproduction_of_text_game_how_the_mouse_could_not_sleep'
                                register={register}
                                disabled={isCardClosed}
                            />
                        </SpeechCardRow>
                    </SpeechCardBlock>
                    <SpeechCardBlock>
                        <SpeechCardBlockTitle>6. Состояние речевого аппарата</SpeechCardBlockTitle>
                        <SpeechCardSubBlock>
                            <SpeechCardSubBlockTitle>6.1. Строение артикуляционного аппарата</SpeechCardSubBlockTitle>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    name='articulation_apparatus_structure_game_how_the_mouse_could'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                        </SpeechCardSubBlock>
                        <SpeechCardSubBlock>
                            <SpeechCardSubBlockTitle>6.2. Состояние артикуляционного аппарата</SpeechCardSubBlockTitle>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    name='articulation_apparatus_structure'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='text'
                                    label='Оральный праксис'
                                    name='oral_praxis'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='text'
                                    label='Артикуляционный праксис'
                                    name='articulatory_praxis'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                        </SpeechCardSubBlock>
                    </SpeechCardBlock>
                    <SpeechCardBlock>
                        <SpeechCardBlockTitle>7. Двигательное развитие</SpeechCardBlockTitle>
                        <SpeechCardSubBlock>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='Основные двигательные навыки и состояние координаторной сферы'
                                    name='basic_motor_skills_and_state_of_coordinating_sphere'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='Постуральный контроль спокойного состояния'
                                    name='postural_control_of_calm_state'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='text'
                                    label='Билатеральная моторная координация'
                                    name='bilateral_motor_coordination'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='text'
                                    label='Ведущее ухо'
                                    name='leading_ear'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='text'
                                    label='Ведущая рука'
                                    name='leading_hand'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='text'
                                    label='Ведущий глаз'
                                    name='leading_eye'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='text'
                                    label='Ведущая нога'
                                    name='leading_leg'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='Сформированность моторной имитации'
                                    name='formation_of_motor_imitation'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                        </SpeechCardSubBlock>
                        <SpeechCardSubBlock>
                            <SpeechCardSubBlockTitle>7.1. Моторные функции кистей и пальцев
                                рук</SpeechCardSubBlockTitle>
                            <SpeechCardFormField
                                type='textarea'
                                name='motor_functions_of_hands_and_fingers'
                                register={register}
                                disabled={isCardClosed}
                            />
                        </SpeechCardSubBlock>
                    </SpeechCardBlock>
                    <SpeechCardBlock>
                        <SpeechCardBlockTitle>8. Психологическая база речи</SpeechCardBlockTitle>
                        <SpeechCardSubBlock>
                            <SpeechCardSubBlockTitle>8.1. Вербальная память</SpeechCardSubBlockTitle>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    name='verbal_memory'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                        </SpeechCardSubBlock>
                        <SpeechCardSubBlock>
                            <SpeechCardSubBlockTitle>8.2. Мышление (вербальный и невербальный
                                интеллект)</SpeechCardSubBlockTitle>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    name='thinking_verbal_and_non_verbal_intelligence'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                        </SpeechCardSubBlock>
                        <SpeechCardSubBlock>
                            <SpeechCardSubBlockTitle>8.3. Симультанное зрительное восприятие</SpeechCardSubBlockTitle>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    name='simultaneous_visual_perception'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                        </SpeechCardSubBlock>
                        <SpeechCardSubBlock>
                            <SpeechCardSubBlockTitle>8.4. Внимание</SpeechCardSubBlockTitle>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    name='attention'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                        </SpeechCardSubBlock>
                    </SpeechCardBlock>
                </SpeechCardFormBlock>
                <SpeechCardFormLine/>
                <SpeechCardFormBlock>
                    <SpeechCardTitle>Логопедическое заключение</SpeechCardTitle>
                    <SpeechCardRow>
                        <SpeechCardFormField
                            type='textarea'
                            name='logopedic_conclusion'
                            register={register}
                            disabled={isCardClosed}
                        />
                    </SpeechCardRow>
                    <SpeechCardTitle>Рекомендации</SpeechCardTitle>
                    <SpeechCardRow>
                        <SpeechCardFormField
                            type='textarea'
                            name='recommendation'
                            register={register}
                            disabled={isCardClosed}
                        />
                    </SpeechCardRow>
                </SpeechCardFormBlock>
                {!isCardClosed && (<>
                    <SpeechCardFormLine/>
                    <SpeechCardFormBlock>
                        <SurveySubmitButton
                            type='button'
                            onClick={onFinishSpeechCard}
                        >
                            Завершить заполнение
                        </SurveySubmitButton>
                    </SpeechCardFormBlock>
                </>)}
            </>)}
        </SpeechCardMain>
    );
};

SpeechCard.propTypes = {
    speechCard: PropTypes.object.isRequired,
    lesson: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

export default SpeechCard;