import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

import ProtocolRow from 'Components/Surveys/ExaminationProtocol/ProtocolRow/ProtocolRow.js';
import ProtocolFormField from 'Components/Surveys/ExaminationProtocol/ProtocolFormField/ProtocolFormField.js';
import FormBlock from 'Components/ParentQuestionnaire/FormBlock/FormBlock';
import FormQuTitle from 'Components/ParentQuestionnaire/FormQuTitle/FormQuTitle';

import logo2 from 'assets/img/logo2.svg'


const Questionnaire = (props) => {

    const {
        register, errors, disabled, isConclusionDisabled
    } = props

    const commonFieldProps = {
        register, errors, disabled
    }

    return (
        <>
            <div className='form2__logo'>
                <img src={logo2} alt='бибарыба.ру diagnostika.com' />
            </div>
            <h1 className='form2__title form2__title_qu'>Вопросы о развитии ребенка</h1>
            <p className='form2__descr'>Это позволит более точно описать заключение и рекомендации. На заполнение
                потребуется не
                более 15 минут.
            </p>
            <FormBlock>
                <FormQuTitle>— Во сколько ребенок сел самостоятельно? В каком возрасте пополз? Пошел
                    самостоятельно? Были ли какие-либо травмы/инфекции у ребенка до, во время или после родов?</FormQuTitle>
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
            </FormBlock>
            <FormBlock>
                <h4 className='form2__block-title'>Раннее речевое/позднее речевое развитие</h4>
                <FormQuTitle>— В каком возрасте появился лепет? Первые слова? Первые короткие фразы?</FormQuTitle>
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
            </FormBlock>
            <FormBlock>
                <h4 className='form2__block-title'>Речевая среда</h4>
                <FormQuTitle>— На каком языке говорят с ребенком дома? Много ли общаетесь с ребенком?
                    Опишите ваш
                    обычный
                    разговор с ребенком дома и вне дома</FormQuTitle>
                <ProtocolRow>
                    <ProtocolFormField
                        type='textarea'
                        name='additional_information.speech_environment'
                        placeholder='Ваш ответ'
                        {...commonFieldProps}
                        disabled={disabled}
                    />
                </ProtocolRow>
            </FormBlock>
            <FormBlock>
                <h4 className='form2__block-title'>Настоящие и перенесенные заболевания, травмы, операции</h4>
                <FormQuTitle>— Были ли у ребенка серьезные операции, и в каком возрасте? Травмы головы?
                    Заболевания, о которых логопеду стоит знать?</FormQuTitle>
                <ProtocolRow>
                    <ProtocolFormField
                        type='textarea'
                        name='additional_information.present_and_past_diseases'
                        placeholder='Ваш ответ'
                        {...commonFieldProps}
                        disabled={disabled}
                    />
                </ProtocolRow>
            </FormBlock>
            <FormBlock>
                <h4 className='form2__block-title'>Медикаментозное лечение</h4>
                <FormQuTitle>— Проходил/проходит ли медикаментозное лечение? Если да, то какое?</FormQuTitle>
                <ProtocolRow>
                    <ProtocolFormField
                        type='textarea'
                        name='additional_information.drug_treatment'
                        placeholder='Ваш ответ'
                        {...commonFieldProps}
                        disabled={disabled}
                    />
                </ProtocolRow>
            </FormBlock>
            <FormBlock>
                <h4 className='form2__block-title'>Неврологический статус</h4>
                <FormQuTitle>— Ставил ли невролог когда-либо какой-либо диагноз? Имеется ли у ребенка
                    эпилепсия или другие похожие состояния?</FormQuTitle>
                <ProtocolRow>
                    <ProtocolFormField
                        type='textarea'
                        name='additional_information.neurological_status'
                        placeholder='Ваш ответ'
                        {...commonFieldProps}
                        disabled={disabled}
                    />
                </ProtocolRow>
            </FormBlock>
            <FormBlock>
                <h4 className='form2__block-title'>Зрение</h4>
                <FormQuTitle>— Какое зрение у ребенка? Что говорит окулист?</FormQuTitle>
                <ProtocolRow>
                    <ProtocolFormField
                        type='textarea'
                        name='additional_information.vision'
                        placeholder='Ваш ответ'
                        {...commonFieldProps}
                        disabled={disabled}
                    />
                </ProtocolRow>
            </FormBlock>
            <FormBlock>
                <h4 className='form2__block-title'>Слух</h4>
                <FormQuTitle>— Какой слух у ребенка? Что говорит отоларинголог?</FormQuTitle>
                <ProtocolRow>
                    <ProtocolFormField
                        type='textarea'
                        name='additional_information.hearing'
                        placeholder='Ваш ответ'
                        {...commonFieldProps}
                        disabled={disabled}
                    />
                </ProtocolRow>
            </FormBlock>
            <FormBlock>
                <h4 className='form2__block-title'>Пищевое поведение</h4>
                <FormQuTitle>— Какой аппетит у ребенка? Он предпочитает твердую или пюреобразную пищу?
                    Имеется ли избирательность в еде?</FormQuTitle>
                <ProtocolRow>
                    <ProtocolFormField
                        type='textarea'
                        name='additional_information.eating_behavior'
                        placeholder='Ваш ответ'
                        {...commonFieldProps}
                        disabled={disabled}
                    />
                </ProtocolRow>
            </FormBlock>
            <FormBlock className='last'>
                <h4 className='form2__block-title'>Эмоционально-психологический уровень</h4>
                <FormQuTitle>— Как обычно ведет себя дома в привычной обстановке? Как ведет себя в
                    незнакомой
                    ситуации? Как ведет себя с незнакомыми людьми?</FormQuTitle>
                <ProtocolRow>
                    <ProtocolFormField
                        type='textarea'
                        name='additional_information.emotional_and_psychological_level'
                        placeholder='Ваш ответ'
                        {...commonFieldProps}
                        disabled={disabled}
                    />
                </ProtocolRow>
            </FormBlock>
            <ProtocolRow>
                <Button component={Link} to='/' className='btn2'>Отправить ответы</Button>
            </ProtocolRow>
        </>
    );
}

Questionnaire.propTypes = {
    register: PropTypes.func.isRequired,
    errors: PropTypes.object,
    disabled: PropTypes.bool,
}

export default Questionnaire;