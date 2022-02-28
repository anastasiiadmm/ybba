import React from 'react';
import PropTypes from 'prop-types';

import ProtocolBlockSubTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBlockSubTitle/ProtocolBlockSubTitle.js';
import ProtocolSubBlock from 'Components/Surveys/ExaminationProtocol/ProtocolSubBlock/ProtocolSubBlock.js';
import ProtocolPlaceholderTitle from 'Components/Surveys/ExaminationProtocol/ProtocolPlaceholderTitle/ProtocolPlaceholderTitle.js';
import ProtocolFormField from 'Components/Surveys/ExaminationProtocol/ProtocolFormField/ProtocolFormField.js';
import ProtocolRow from 'Components/Surveys/ExaminationProtocol/ProtocolRow/ProtocolRow';


const Questionnaire = (props) => {

    const {
        register, errors, disabled, /*isConclusionDisabled*/
    } = props

    const commonFieldProps = {
        register, errors, disabled
    }

    return (
        <>

            <ProtocolSubBlock>
                <ProtocolPlaceholderTitle>
                    — Во сколько ребенок сел самостоятельно? В каком возрасте пополз? Пошел самостоятельно? Были ли
                    какие-либо
                    травмы/инфекции у ребенка до, во время или после родов?
                </ProtocolPlaceholderTitle>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Сел в:'
                        name='additional_information.sat_in'
                        {...commonFieldProps}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Пополз на четвереньках в:'
                        name='additional_information.crawled_on_all_fours_into'
                        {...commonFieldProps}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Пошел в:'
                        name='additional_information.went_to'
                        {...commonFieldProps}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Научился прыгать на двух ногах в:'
                        name='additional_information.learned_to_jump_on_two_legs_in'
                        {...commonFieldProps}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Травмы/инфекции до, во время и/или после родов:'
                        name='additional_information.injury_infection_before_during_and_or_after_childbirth'
                        {...commonFieldProps}
                        disabled={disabled}
                    />
                </ProtocolRow>
            </ProtocolSubBlock>
            <ProtocolSubBlock>
                <ProtocolBlockSubTitle>Раннее речевое/позднее речевое развитие</ProtocolBlockSubTitle>
                <ProtocolPlaceholderTitle>
                    — В каком возрасте появился лепет? Первые слова? Первые короткие фразы?
                </ProtocolPlaceholderTitle>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Лепет в:'
                        name='additional_information.babbling_in'
                        {...commonFieldProps}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Первые слова в:'
                        name='additional_information.first_words_in'
                        {...commonFieldProps}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Первые короткие фразы в:'
                        name='additional_information.first_short_phrases_in'
                        {...commonFieldProps}
                        disabled={disabled}
                    />
                </ProtocolRow>
            </ProtocolSubBlock>
            <ProtocolSubBlock>
                <ProtocolBlockSubTitle>Речевая среда</ProtocolBlockSubTitle>
                <ProtocolPlaceholderTitle>
                    — На каком языке говорят с ребенком дома? Много ли общаетесь с ребенком? Опишите ваш обычный
                    разговор с ребенком дома и вне дома
                </ProtocolPlaceholderTitle>
                <ProtocolFormField
                    type='textarea'
                    name='additional_information.speech_environment'
                    placeholder='Ответ родителя'
                    {...commonFieldProps}
                    disabled={disabled}
                />
            </ProtocolSubBlock>
            <ProtocolSubBlock>
                <ProtocolBlockSubTitle>Настоящие и перенесенные заболевания, травмы,
                    операции</ProtocolBlockSubTitle>
                <ProtocolPlaceholderTitle>
                    — Были ли у ребенка серьезные операции, и в каком возрасте? Травмы головы? Заболевания, о
                    которых логопеду стоит знать?
                </ProtocolPlaceholderTitle>
                <ProtocolFormField
                    type='textarea'
                    name='additional_information.present_and_past_diseases'
                    placeholder='Ответ родителя'
                    {...commonFieldProps}
                    disabled={disabled}
                />
            </ProtocolSubBlock>
            <ProtocolSubBlock>
                <ProtocolBlockSubTitle>Медикаментозное лечение</ProtocolBlockSubTitle>
                <ProtocolPlaceholderTitle>
                    — Проходил/проходит ли медикаментозное лечение? Если да, то какое?
                </ProtocolPlaceholderTitle>
                <ProtocolFormField
                    type='textarea'
                    name='additional_information.drug_treatment'
                    placeholder='Ответ родителя'
                    {...commonFieldProps}
                    disabled={disabled}
                />
            </ProtocolSubBlock>
            <ProtocolSubBlock>
                <ProtocolBlockSubTitle>Неврологический статус</ProtocolBlockSubTitle>
                <ProtocolPlaceholderTitle>
                    — Ставил ли невролог когда-либо какой-либо диагноз? Имеется ли у ребенка эпилепсия или другие
                    похожие состояния?
                </ProtocolPlaceholderTitle>
                <ProtocolFormField
                    type='textarea'
                    name='additional_information.neurological_status'
                    placeholder='Ответ родителя'
                    {...commonFieldProps}
                    disabled={disabled}
                />
            </ProtocolSubBlock>
            <ProtocolSubBlock>
                <ProtocolBlockSubTitle>Зрение</ProtocolBlockSubTitle>
                <ProtocolPlaceholderTitle>— Какое зрение у ребенка? Что говорит окулист?</ProtocolPlaceholderTitle>
                <ProtocolFormField
                    type='textarea'
                    name='additional_information.vision'
                    placeholder='Ответ родителя'
                    {...commonFieldProps}
                    disabled={disabled}
                />
            </ProtocolSubBlock>
            <ProtocolSubBlock>
                <ProtocolBlockSubTitle>Слух</ProtocolBlockSubTitle>
                <ProtocolPlaceholderTitle>— Какой слух у ребенка? Что говорит
                    отоларинголог?</ProtocolPlaceholderTitle>
                <ProtocolFormField
                    type='textarea'
                    name='additional_information.hearing'
                    placeholder='Ответ родителя'
                    {...commonFieldProps}
                    disabled={disabled}
                />
            </ProtocolSubBlock>
            <ProtocolSubBlock>
                <ProtocolBlockSubTitle>Пищевое поведение</ProtocolBlockSubTitle>
                <ProtocolPlaceholderTitle>
                    — Какой аппетит у ребенка? Он предпочитает твердую или пюреобразную пищу? Имеется ли
                    избирательность в еде?
                </ProtocolPlaceholderTitle>
                <ProtocolFormField
                    type='textarea'
                    name='additional_information.eating_behavior'
                    placeholder='Ответ родителя'
                    {...commonFieldProps}
                    disabled={disabled}
                />
            </ProtocolSubBlock>
            <ProtocolSubBlock>
                <ProtocolBlockSubTitle>Эмоционально-психологический уровень</ProtocolBlockSubTitle>
                <ProtocolPlaceholderTitle>
                    — Как обычно ведет себя дома в привычной обстановке? Как ведет себя в незнакомой ситуации? Как
                    ведет
                    себя с незнакомыми людьми?
                </ProtocolPlaceholderTitle>
                <ProtocolFormField
                    type='textarea'
                    name='additional_information.emotional_and_psychological_level'
                    placeholder='Ответ родителя'
                    {...commonFieldProps}
                    disabled={disabled}
                />
            </ProtocolSubBlock>
        </>
    );
}

Questionnaire.propTypes = {
    register: PropTypes.func.isRequired,
    errors: PropTypes.object,
    disabled: PropTypes.bool,
}

export default Questionnaire;
