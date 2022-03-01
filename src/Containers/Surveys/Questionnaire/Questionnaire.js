import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import ProtocolBlockSubTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBlockSubTitle/ProtocolBlockSubTitle.js';
import ProtocolSubBlock from 'Components/Surveys/ExaminationProtocol/ProtocolSubBlock/ProtocolSubBlock.js';
import ProtocolPlaceholderTitle from 'Components/Surveys/ExaminationProtocol/ProtocolPlaceholderTitle/ProtocolPlaceholderTitle.js';
import ProtocolFormField from 'Components/Surveys/ExaminationProtocol/ProtocolFormField/ProtocolFormField.js';
import ProtocolRow from 'Components/Surveys/ExaminationProtocol/ProtocolRow/ProtocolRow';



const Questionnaire = (props) => {

    const {
        register, errors, disabled
    } = props

    const commonFieldProps = {
        register, errors, disabled
    }

    const { t } = useTranslation();

    return (
        <>

            <ProtocolSubBlock>
                <ProtocolPlaceholderTitle>
                    {t('— Во сколько ребенок сел самостоятельно? В каком возрасте пополз? Пошел самостоятельно? Были ли какие-либо травмы/инфекции у ребенка до, во время или после родов?')}
                </ProtocolPlaceholderTitle>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('Сел в')}
                        name='additional_information.sat_in'
                        {...commonFieldProps}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('Пополз на четвереньках в')}
                        name='additional_information.crawled_on_all_fours_into'
                        {...commonFieldProps}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('Пошел в')}
                        name='additional_information.went_to'
                        {...commonFieldProps}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('Научился прыгать на двух ногах в')}
                        name='additional_information.learned_to_jump_on_two_legs_in'
                        {...commonFieldProps}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('Травмы/инфекции до, во время и/или после родов')}
                        name='additional_information.injury_infection_before_during_and_or_after_childbirth'
                        {...commonFieldProps}
                        disabled={disabled}
                    />
                </ProtocolRow>
            </ProtocolSubBlock>
            <ProtocolSubBlock>
                <ProtocolBlockSubTitle>{t('Раннее речевое/позднее речевое развитие')}</ProtocolBlockSubTitle>
                <ProtocolPlaceholderTitle>
                    {t('— В каком возрасте появился лепет? Первые слова? Первые короткие фразы?')}
                </ProtocolPlaceholderTitle>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('Лепет в')}
                        name='additional_information.babbling_in'
                        {...commonFieldProps}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('Первые слова в')}
                        name='additional_information.first_words_in'
                        {...commonFieldProps}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('Первые короткие фразы в')}
                        name='additional_information.first_short_phrases_in'
                        {...commonFieldProps}
                        disabled={disabled}
                    />
                </ProtocolRow>
            </ProtocolSubBlock>
            <ProtocolSubBlock>
                <ProtocolBlockSubTitle>{t('Речевая среда')}</ProtocolBlockSubTitle>
                <ProtocolPlaceholderTitle>
                    {t('— На каком языке говорят с ребенком дома? Много ли общаетесь с ребенком? Опишите ваш обычный разговор с ребенком дома и вне дома')}
                </ProtocolPlaceholderTitle>
                <ProtocolFormField
                    type='textarea'
                    name='additional_information.speech_environment'
                    placeholder={t('Ответ родителя')}
                    {...commonFieldProps}
                    disabled={disabled}
                />
            </ProtocolSubBlock>
            <ProtocolSubBlock>
                <ProtocolBlockSubTitle>{t('Настоящие и перенесенные заболевания, травмы, операции')}</ProtocolBlockSubTitle>
                <ProtocolPlaceholderTitle>
                    {t('— Были ли у ребенка серьезные операции, и в каком возрасте? Травмы головы? Заболевания, о которых логопеду стоит знать?')}
                </ProtocolPlaceholderTitle>
                <ProtocolFormField
                    type='textarea'
                    name='additional_information.present_and_past_diseases'
                    placeholder={t('Ответ родителя')}
                    {...commonFieldProps}
                    disabled={disabled}
                />
            </ProtocolSubBlock>
            <ProtocolSubBlock>
                <ProtocolBlockSubTitle>{t('Медикаментозное лечение')}</ProtocolBlockSubTitle>
                <ProtocolPlaceholderTitle>
                    {t('— Проходил/проходит ли медикаментозное лечение? Если да, то какое?')}
                </ProtocolPlaceholderTitle>
                <ProtocolFormField
                    type='textarea'
                    name='additional_information.drug_treatment'
                    placeholder={t('Ответ родителя')}
                    {...commonFieldProps}
                    disabled={disabled}
                />
            </ProtocolSubBlock>
            <ProtocolSubBlock>
                <ProtocolBlockSubTitle>{t('Неврологический статус')}</ProtocolBlockSubTitle>
                <ProtocolPlaceholderTitle>
                    {t('— Ставил ли невролог когда-либо какой-либо диагноз?')}
                </ProtocolPlaceholderTitle>
                <ProtocolFormField
                    type='textarea'
                    name='additional_information.neurological_status'
                    placeholder={t('Ответ родителя')}
                    {...commonFieldProps}
                    disabled={disabled}
                />
            </ProtocolSubBlock>
            <ProtocolSubBlock>
                <ProtocolBlockSubTitle>{t('Зрение')}</ProtocolBlockSubTitle>
                <ProtocolPlaceholderTitle>{t('— Какое зрение у ребенка? Что говорит окулист?')}</ProtocolPlaceholderTitle>
                <ProtocolFormField
                    type='textarea'
                    name='additional_information.vision'
                    placeholder={t('Ответ родителя')}
                    {...commonFieldProps}
                    disabled={disabled}
                />
            </ProtocolSubBlock>
            <ProtocolSubBlock>
                <ProtocolBlockSubTitle>{t('Слух')}</ProtocolBlockSubTitle>
                <ProtocolPlaceholderTitle>{t('— Какой слух у ребенка? Что говорит отоларинголог?')}</ProtocolPlaceholderTitle>
                <ProtocolFormField
                    type='textarea'
                    name='additional_information.hearing'
                    placeholder={t('Ответ родителя')}
                    {...commonFieldProps}
                    disabled={disabled}
                />
            </ProtocolSubBlock>
            <ProtocolSubBlock>
                <ProtocolBlockSubTitle>{t('Пищевое поведение')}</ProtocolBlockSubTitle>
                <ProtocolPlaceholderTitle>
                    {t('— Какой аппетит у ребенка? Он предпочитает твердую или пюреобразную пищу? Имеется ли избирательность в еде?')}
                </ProtocolPlaceholderTitle>
                <ProtocolFormField
                    type='textarea'
                    name='additional_information.eating_behavior'
                    placeholder={t('Ответ родителя')}
                    {...commonFieldProps}
                    disabled={disabled}
                />
            </ProtocolSubBlock>
            <ProtocolSubBlock>
                <ProtocolBlockSubTitle>{t('Эмоционально-психологический уровень')}</ProtocolBlockSubTitle>
                <ProtocolPlaceholderTitle>
                    {t('— Как обычно ведет себя дома в привычной обстановке? Как ведет себя в незнакомой ситуации? Как ведет себя с незнакомыми людьми?')}
                </ProtocolPlaceholderTitle>
                <ProtocolFormField
                    type='textarea'
                    name='additional_information.emotional_and_psychological_level'
                    placeholder={t('Ответ родителя')}
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
