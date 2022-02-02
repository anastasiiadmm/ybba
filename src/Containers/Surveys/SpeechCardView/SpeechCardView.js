import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { strDateToMoment, getHumanizeAge } from 'utils/date/dateUtils.js';
import { domains, dateNameOfMonth, frontUrls } from 'constants.js';
import config from 'config.js';


const SpeechCardView = forwardRef((props, ref) => {

    const {
        speechCard
    } = props

    const currentDate = moment()
    const child_date_of_birth = strDateToMoment(speechCard.child_date_of_birth)
    const time_slot_date = strDateToMoment(speechCard?.lesson?.time_slot?.day?.date)

    return (
        <div style={{ margin: '0 auto' }} id='speech-card-view' ref={ref}>
            <div className='speech-card-doc'>
                <div className='speech-card-doc__head'>
                    <div className='speech-card-doc__contact'>
                        <a href='tel:+7917767980' className='speech-card-doc__phone'>+7 495 234-56-78</a>
                        <a className='speech-card-doc__insta'
                           href='https://www.instagram.com/bibarybaru/'>instagram.com/bibarybaru</a>
                    </div>
                </div>
                <div className='speech-card-doc__content'>
                    <div className='speech-card-doc__card'>
                        <div className='speech-card-doc__card-top'>
                            <h1 className='speech-card-doc__card-title col'>Речевая карта</h1>
                            <span className='speech-card-doc__date col'>
                                Дата заполнения{' '}
                                <b>
                                    {
                                        time_slot_date ?
                                            `${time_slot_date.date()} ${dateNameOfMonth[time_slot_date.month()]} ${time_slot_date.year()}` :
                                            '-'
                                    }
                                </b>
                            </span>
                        </div>
                        <div className='speech-card-doc__card-cols'>
                            <div className='col'>
                                <p>Фамилия, имя ребенка: <b className='block'>{speechCard.child_full_name}</b></p>
                                <p>
                                    Дата рождения/Возраст:
                                    <b className='block'>
                                        {speechCard.child_date_of_birth}
                                        {' / '}
                                        {getHumanizeAge(moment.duration(currentDate.diff(child_date_of_birth)).asYears())}
                                    </b>
                                </p>
                                <p>Родители (законные представители):
                                    <b className='block'>{speechCard.parent}</b>
                                </p>
                            </div>
                            <div className='col'>
                                <p>Основные жалобы родителей:
                                    <b className='block'>{speechCard.main_complaints_from_parents}</b>
                                </p>
                                <p>С какой целью обратились к логопеду:
                                    <b className='block'>{speechCard.for_what_purpose_did_you_turn_to_a_speech_therapist}</b>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='speech-card-doc__reserch'>
                        <h2 className='speech-card-doc__title'>Результат исследования</h2>
                        <div className='count-list'>
                            <div className='count-item speech-card-doc__item'>
                                <h4 className='speech-card-doc__item-title'>Краткие сведения из анамнеза</h4>
                                <div className='count-list'>
                                    <div className='count-item speech-card-doc__sub'>
                                        <p>Раннее/позднее физическое развитие</p>
                                        <p>Сел в <span>{speechCard.sat_in}</span></p>
                                        <p>Пополз на четвереньках
                                            в <span>{speechCard.crawled_on_all_fours_into}</span>
                                        </p>
                                        <p>Пошел в <span>{speechCard.went_to}</span></p>
                                        <p>Научился прыгать на двух ногах
                                            в <span>{speechCard.learned_to_jump_on_two_legs_in}</span></p>
                                        <p>Травмы/инфекции до, во время и/или после
                                            родов <span>{speechCard.injury_infection_before_during_and_or_after_childbirth}</span>
                                        </p>
                                    </div>
                                    <div className='count-item speech-card-doc__sub'>
                                        <p>Раннее/позднее речевое развитие</p>
                                        <p>Лепет в <span>{speechCard.babbling_in}</span></p>
                                        <p>Первые слова в <span>{speechCard.first_words_in}</span></p>
                                        <p>Первые короткие фразы в <span>{speechCard.first_short_phrases_in}</span>
                                        </p>
                                    </div>
                                    <div className='count-item speech-card-doc__sub'>
                                        <p>Речевая среда, в которой воспитывается ребенок: со слов родителя:
                                            <span>{speechCard.speech_environment}</span>
                                        </p>
                                    </div>
                                    <div className='count-item speech-card-doc__sub'>
                                        <p>Неврологический статус и состояние сенсорно-перцептивных органов и систем
                                            (зрение, слух, осязание и
                                            др.). Эпилептиформная
                                            активность <span>{speechCard.neurological_status}</span></p>
                                        <p>Особенности зрительной системы <span>{speechCard.vision}</span></p>
                                        <p>Особенности слуховой системы <span>{speechCard.hearing}</span></p>
                                        <p>Пищевое поведение <span>{speechCard.eating_behavior}</span>
                                        </p>
                                    </div>
                                    <div className='count-item speech-card-doc__sub'>
                                        <p>Сведения о настоящих и перенесенных операциях, травмах,
                                            заболеваниях <span>{speechCard.present_and_past_diseases}</span></p>
                                    </div>
                                    <div className='count-item speech-card-doc__sub'>
                                        <p>
                                            Медикаментозное лечение
                                            <span>{speechCard.drug_treatment}</span>
                                        </p>
                                    </div>
                                    <div className='count-item speech-card-doc__sub'>
                                        <p>
                                            Эмоционально-психологический уровень
                                            <span>{speechCard.emotional_and_psychological_level}</span>
                                        </p>
                                        <p>
                                            Эмоциональный фон во время занятия ровный,
                                            <span>{speechCard.emotional_background_during_class}</span>
                                        </p>
                                        <p>
                                            Мотивация и интерес
                                            <span>{speechCard.motivation_and_interest}</span></p>
                                        <p>
                                            Эмоциональный отклик на эмоцию взрослого
                                            <span>{speechCard.emotional_response_to_adult_emotion}</span></p>
                                        <p>
                                            Мимические проявления
                                            <span>{speechCard.mimic_manifestations}</span>
                                        </p>
                                        <p>
                                            Базовые эмоции, которые проявлял во время занятия:
                                            <span>{speechCard.basic_emotions_that_it_exhibits}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='count-item speech-card-doc__item'>
                                <h4 className='speech-card-doc__item-title'>Сформированность представлений об
                                    окружающем
                                    мире:</h4>
                                <div className='count-list'>
                                    <p>
                                        <span>{speechCard.formation_of_ideas_about_world_around}</span>
                                    </p>
                                    <p>
                                        В пространственно-временной ситуации
                                        <span>{speechCard.in_a_time_space_situation}</span>
                                    </p>
                                </div>
                            </div>
                            <div className='count-item speech-card-doc__item'>
                                <h4 className='speech-card-doc__item-title'>Образ «Я»</h4>
                                <div className='count-list'>
                                    <p>Образ «Я» <span>{speechCard.image_i}</span></p>
                                    <p>Соматогнозис <span>{speechCard.somatognosis}</span></p>
                                </div>
                            </div>
                            <div className='count-item speech-card-doc__item'>
                                <h4 className='speech-card-doc__item-title'>Речеязыковая компетенция </h4>
                                <div className='count-list'>
                                    <div className='count-item speech-card-doc__sub'>
                                        <p>
                                            Уровень понимания речи:
                                            <span>{speechCard.speech_comprehension_level}</span>
                                        </p>
                                    </div>
                                    <div className='count-item speech-card-doc__sub'>
                                        <p>
                                            Уровень сформированности лексикона
                                            <span>{speechCard.level_of_vocabulary_formation}</span>
                                        </p>
                                        <p>
                                            Объем словаря <span>{speechCard.volume_vocabulary}</span>
                                        </p>
                                        <p>
                                            Системная организация словаря (ассоциативные связи)
                                            <span>{speechCard.system_organization_of_dictionary_associative_links}</span>
                                        </p>
                                    </div>
                                    <div className='count-item speech-card-doc__sub'>
                                        <p>
                                            Уровень сформированности грамматической компетенции
                                            <span>{speechCard.level_of_grammatical_competence_formation}</span>
                                        </p>
                                        <p>
                                            Словоизменительные навыки и умения
                                            <span>{speechCard.inflectional_skills_and_abilities_part_one}</span>
                                        </p>
                                        <p>
                                            Словообразовательные навыки и умения
                                            <span>{speechCard.word_building_skills_and_abilities}</span>
                                        </p>
                                        <p>
                                            Синтаксические навыки и умения
                                            <span>{speechCard.syntactic_skills_and_abilities}</span>
                                        </p>
                                    </div>
                                    <div className='count-item speech-card-doc__sub'>
                                        <p>
                                            Уровень сформированности фонетико-фонологической компетенции
                                            <span>{speechCard.level_of_formation_of_phonetic_phonological_competence}</span>
                                        </p>
                                        <p>
                                            Состояние фонематического восприятия:
                                            <span>{speechCard.state_of_phonemic_perception}</span>
                                        </p>
                                        <p>
                                            Сформированность навыков звукового анализа и синтеза
                                            <span>{speechCard.formation_of_the_skills_of_sound_analysis_and_synthesis}</span>
                                        </p>
                                        <p>
                                            Слоговая структура слова в целом
                                            <span>{speechCard.syllabic_structure_of_a_word}</span>
                                        </p>
                                        <div className='speech-card-doc__sub-in'>
                                            <h5>Звукопроизносительная сторона речи:</h5>
                                            <p>
                                                <span>{speechCard.sound_articulating_side_of_speech}</span>
                                            </p>
                                        </div>
                                        <div className='speech-card-doc__sub-in'>
                                            <h5>Просодическая сторона речи:</h5>
                                            <p>Речь <span>{speechCard.speech_game_on_the_farm_part_three}</span></p>
                                            <p>Голос <span>{speechCard.voice}</span></p>
                                            <p>Плавность <span>{speechCard.smoothness}</span></p>
                                            <p>Темп <span>{speechCard.pace}</span></p>
                                            <p>Речь <span>{speechCard.speech_is_carried_out}</span></p>
                                            <p>Дыхание <span>{speechCard.breath}</span></p>
                                            <p>Ритм <span>{speechCard.rhythm}</span></p>
                                            <p>Сила выдоха <span>{speechCard.exhalation_force}</span></p>
                                            <p>
                                                Дифференцированность вдоха/выдоха и возможность управления
                                                <span>{speechCard.inspiratory_expiratory_differentiation}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='count-item speech-card-doc__item'>
                                <h4 className='speech-card-doc__item-title'>Понимание и самостоятельное
                                    продуцирование/репродуцирование текста
                                    повествовательного характера в соответствии с предложенным сюжетом
                                    (рассказ/пересказ)</h4>
                                <div className='count-list'>
                                    <p>Понимание текста: <span>{speechCard.understanding_the_text}</span></p>
                                    <p>Продуцирование текста: <span>{speechCard.text_production}</span></p>
                                    <p>Репродуцирование
                                        текста: <span>{speechCard.reproduction_of_text_game_how_the_mouse_could_not_sleep}</span>
                                    </p>
                                </div>
                            </div>
                            <div className='count-item speech-card-doc__item'>
                                <h4 className='speech-card-doc__item-title'>Состояние речевого аппарата</h4>
                                <div className='count-list'>
                                    <div className='count-item speech-card-doc__sub'>
                                        <p>
                                            Строение артикуляционного аппарата:
                                            <span>{speechCard.articulation_apparatus_structure_game_how_the_mouse_could}</span>
                                        </p>
                                    </div>
                                    <div className='count-item speech-card-doc__sub'>
                                        <p>
                                            Состояние артикуляционного аппарата:
                                            <span>{speechCard.articulation_apparatus_structure}</span>
                                        </p>
                                        <p>
                                            Оральный праксис:
                                            <span>{speechCard.oral_praxis}</span>
                                        </p>
                                        <p>
                                            Артикуляционный праксис
                                            <span>{speechCard.articulatory_praxis}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='count-item speech-card-doc__item'>
                                <h4 className='speech-card-doc__item-title'>Двигательное развитие</h4>
                                <div className='count-list'>
                                    <div className='speech-card-doc__sub-in'>
                                        <h5>Основные двигательные навыки и состояние координаторной сферы</h5>
                                        <p>
                                            Постуральный контроль спокойного состояния:
                                            <span>{speechCard.postural_control_of_calm_state}</span>
                                        </p>
                                        <p>
                                            Билатеральная моторная координация
                                            <span>{speechCard.bilateral_motor_coordination}</span>
                                        </p>
                                        <div className='speech-card-doc__sub-in pl'>
                                            <p>Ведущее ухо <span>{speechCard.leading_ear}</span></p>
                                            <p>Ведущая рука <span>{speechCard.leading_hand}</span></p>
                                            <p>Ведущий глаз <span>{speechCard.leading_eye}</span></p>
                                            <p>Ведущая нога <span>{speechCard.leading_leg}</span></p>
                                        </div>
                                        <p>
                                            Сформированность моторной имитации
                                            <span>{speechCard.formation_of_motor_imitation}</span>
                                        </p>
                                    </div>
                                    <div className='count-item speech-card-doc__sub'>
                                        <p>
                                            Моторные функции кистей и пальцев рук:
                                            <span>{speechCard.motor_functions_of_hands_and_fingers}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='count-item speech-card-doc__item'>
                                <h4 className='speech-card-doc__item-title'>Психологическая база речи</h4>
                                <div className='count-list'>
                                    <div className='count-item speech-card-doc__sub'>
                                        <p>
                                            Вербальная память:
                                            <span>{speechCard.verbal_memory}</span>
                                        </p>
                                    </div>
                                    <div className='count-item speech-card-doc__sub'>
                                        <p>
                                            Мышление (вербальный и невербальный интеллект)
                                            <span>{speechCard.thinking_verbal_and_non_verbal_intelligence}</span>
                                        </p>
                                    </div>
                                    <div className='count-item speech-card-doc__sub'>
                                        <p>
                                            Симультанное зрительное восприятие
                                            <span>{speechCard.simultaneous_visual_perception}</span>
                                        </p>
                                    </div>
                                    <div className='count-item speech-card-doc__sub'>
                                        <p>
                                            Внимание
                                            <span>{speechCard.speech_attention}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='speech-card-doc__card'>
                        <div className='speech-card-doc__card-top'>
                            <h3 className='speech-card-doc__card-title'>Логопедическое заключение</h3>
                        </div>
                        <div className='speech-card-doc__card-body result'>
                            <p>{speechCard.logopedic_conclusion}</p>
                        </div>
                    </div>
                    <div className='speech-card-doc__card'>
                        <div className='speech-card-doc__card-top'>
                            <h3 className='speech-card-doc__card-title'>Рекомендации</h3>
                        </div>
                        <div className='speech-card-doc__card-body'>
                            <p>
                                {speechCard.recommendation}
                            </p>
                        </div>
                    </div>
                    {/*<div className='speech-card-doc__auth'>*/}
                    {/*    <img src={Sign} alt=''/>*/}
                    {/*    <span>Логопед<b>Нечаева Р. Е.</b></span>*/}
                    {/*</div>*/}
                </div>
                <div className='speach-card-doc__bottom'>
                    <div className='speach-card-doc__bottom-in'>
                        <p>Если требуется расшифровка результатов, вы можете записаться на дополнительную бесплатную
                            консультацию со
                            специалистом на 25 минут.</p>
                        <p>Для этого напишите в чат поддержки на сайте{' '}
                            <a href={frontUrls[config.appEnvironment]}>{domains[config.appEnvironment]}</a>,
                            в Whatsapp
                            <a href='tel:+7917767980'>+7 917 76-79-80</a>, или на email <a href='
							mailto:hello@bibaryba.ru'>hello@bibaryba.ru</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
});

SpeechCardView.propTypes = {
    speechCard: PropTypes.object.isRequired
}

export default SpeechCardView;