import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ProtocolBlock from 'Components/Surveys/ExaminationProtocol/ProtocolBlock/ProtocolBlock.js';
import { strDateToMoment, momentDateToHuman } from 'utils/date/dateUtils.js';
import { useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { updateProtocol, createSpeechCard } from 'redux/surveys/surveysSlice.js';
import { examinationProtocolSchema } from 'Containers/Surveys/ExaminationProtocol/yupSchema.js';
import ProtocolMain from 'Components/Surveys/ExaminationProtocol/ProtocolMain/ProtocolMain.js';
import ProtocolRow from 'Components/Surveys/ExaminationProtocol/ProtocolRow/ProtocolRow.js';
import ProtocolFormField from 'Components/Surveys/ExaminationProtocol/ProtocolFormField/ProtocolFormField.js';
import ProtocolTitle from 'Components/Surveys/ExaminationProtocol/ProtocolTitle/ProtocolTitle.js';
import ProtocolBlockTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBlockTitle/ProtocolBlockTitle.js';
import ProtocolResultTitle from 'Components/Surveys/ExaminationProtocol/ProtocolResultTitle/ProtocolResultTitle.js';
import ProtocolDescriptionSubtitle from 'Components/Surveys/ExaminationProtocol/ProtocolResultTitle/ProtocolResultTitle.js';
import ProtocolResultBlock from 'Components/Surveys/ExaminationProtocol/ProtocolResultBlock/ProtocolResultBlock.js';
import ProtocolResultWrapper from 'Components/Surveys/ExaminationProtocol/ProtocolResultWrapper/ProtocolResultWrapper.js';
import ProtocolPlaceholderTitle from 'Components/Surveys/ExaminationProtocol/ProtocolPlaceholderTitle/ProtocolPlaceholderTitle.js';

import 'Containers/Surveys/ExaminationProtocol/examinationProtocol.css'
import SurveySubmitButton from 'Components/Surveys/Common/SurveySubmitButton.js';
import Questionnaire from 'Containers/Surveys/Questionnaire/Questionnaire.js';
import PicturesForFish from 'Containers/Surveys/ExaminationProtocol/games/PicturesForFish.js';

const ExaminationProtocol = (props) => {

    const {
        protocol, lesson
    } = props

    const dispatch = useDispatch()

    const { register, formState: { errors }, setValue, control, watch, getValues, handleSubmit } = useForm({
        resolver: yupResolver(examinationProtocolSchema),
        defaultValues: {
            ...protocol,
            lesson: lesson.id
        }
    })
    const data = useWatch({ control })
    let timer = null

    useEffect(() => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            dispatch(updateProtocol({
                protocolId: protocol.id,
                newData: data,
            }))
        }, 1000)
        return () => clearTimeout(timer)
    }, [data])

    const onSubmit = async data => {
        console.log(data)
        // await dispatch(createSpeechCard({
        //     childId: protocol.child.id,
        //     speechCardData: data
        // }))
    }

    return (
        <ProtocolMain
            submitHandler={handleSubmit}
            onSubmit={onSubmit}
        >
            <ProtocolBlock>
                <ProtocolRow>
                    <p className='protocol__person'>{protocol.child.first_name} {protocol.child.last_name}</p>
                    <p className='protocol__person-descr'>{momentDateToHuman(strDateToMoment(protocol.child_date_of_birth))}</p>
                    <p className='protocol__person'>Родитель: {protocol.parent.first_name} {protocol.parent.last_name}</p>
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='textarea'
                        label='Какие у вас жалобы?'
                        placeholder='Ответ родителя'
                        name='what_are_your_complaints'
                        register={register}
                        errors={errors}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='textarea'
                        label='С какой целью вы обратились к логопеду?'
                        placeholder='Ответ родителя'
                        name='for_what_purpose_did_you_turn_to_a_speech_therapist'
                        register={register}
                        errors={errors}
                    />
                </ProtocolRow>
            </ProtocolBlock>
            <ProtocolBlock>
                <ProtocolTitle>Рече-языковая компетенция</ProtocolTitle>
                <ProtocolBlockTitle>Общие представления об окружающем мире. Понимание ребенком обращенной к нему
                    речи</ProtocolBlockTitle>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Как тебя зовут?'
                        placeholder='Ответ ребенка'
                        name='what_is_your_name'
                        register={register}
                        errors={errors}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='number'
                        label='Сколько тебе лет?'
                        placeholder='Ответ ребенка'
                        name='how_old_are_you'
                        register={register}
                        errors={errors}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Как зовут твою маму? Твоего папу?'
                        placeholder='Ответ ребенка'
                        name='what_is_your_moms_name_your_daddy'
                        register={register}
                        errors={errors}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Где ты живешь?'
                        placeholder='Ответ ребенка'
                        name='where_do_you_live'
                        register={register}
                        errors={errors}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Какое сейчас время года? Время суток?'
                        placeholder='Ответ ребенка'
                        name='what_time_of_year_is_it'
                        register={register}
                        errors={errors}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Что ты делал вчера? Что делал утром? Что ты будешь делать завтра?'
                        placeholder='Ответ ребенка'
                        name='what_did_you_do_yesterday'
                        register={register}
                        errors={errors}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Какие у тебя есть игрушки?'
                        placeholder='Ответ ребенка'
                        name='what_toys_do_you_have'
                        register={register}
                        errors={errors}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Каких животных ты знаешь?'
                        placeholder='Ответ ребенка'
                        name='what_kind_of_animals_do_you_know'
                        register={register}
                        errors={errors}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='textarea'
                        label='Комментарий'
                        placeholder='Комментарий специалиста'
                        name='general_ideas_about_the_world_around_comment'
                        register={register}
                        errors={errors}
                    />
                </ProtocolRow>
                <ProtocolResultTitle>Варианты заключения:</ProtocolResultTitle>
                <ProtocolRow>
                    <ProtocolDescriptionSubtitle>Сформированность представлений об окружающем мире. Запас знаний:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Запас знаний об окружающем мире крайне низкий'
                                name='stock_of_knowledge_about_the_world_around'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Запас знаний об окружающем мире ниже возрастной нормы'
                                name='stock_of_knowledge_about_the_world_around'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Запас знаний об окружающем мире соответствует возрасту'
                                name='stock_of_knowledge_about_the_world_around'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolDescriptionSubtitle>В пространственно-временной ситуации:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Ориентируется'
                                name='in_a_time_space_situation'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Не ориентируется'
                                name='in_a_time_space_situation'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolDescriptionSubtitle>Знает сколько ему лет, какое сейчас время года, какое сейчас время суток, что
                        он делал вчера, что делал утром, что он будет делать завтра</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Да, знает'
                                name='knows_how_old_time_of_year_what_time_of_day_it_is'
                                register={register}
                                value={true}
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Нет, не знает'
                                name='knows_how_old_time_of_year_what_time_of_day_it_is'
                                value={false}
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolDescriptionSubtitle>Образ «Я»</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Сформирован'
                                name='image_i'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Не сформирован'
                                name='image_i'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolDescriptionSubtitle>Знает, как его зовут, как зовут его родителей, где он живет</ProtocolDescriptionSubtitle>
                    <ProtocolResultWrapper>
                        <ProtocolResultBlock>
                            <ProtocolResultWrapper>
                                <ProtocolFormField
                                    type='radio'
                                    label='Да, знает'
                                    name='knows_his_name_the_name_of_his_parents_where_he_lives'
                                    control={control}
                                    value={true}
                                    errors={errors}
                                />
                            </ProtocolResultWrapper>
                            <ProtocolResultWrapper>
                                <ProtocolFormField
                                    type='radio'
                                    label='Нет, не знает'
                                    name='knows_his_name_the_name_of_his_parents_where_he_lives'
                                    control={control}
                                    value={false}
                                    errors={errors}
                                />
                            </ProtocolResultWrapper>
                        </ProtocolResultBlock>
                    </ProtocolResultWrapper>
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolDescriptionSubtitle>Соматогнозис: представление о собственном теле</ProtocolDescriptionSubtitle>
                    <ProtocolResultWrapper>
                        <ProtocolResultBlock>
                            <ProtocolResultWrapper>
                                <ProtocolFormField
                                    type='radio'
                                    label='Сформирован'
                                    name='somatognosis_understanding_your_own_body'
                                    control={control}
                                    errors={errors}
                                />
                            </ProtocolResultWrapper>
                            <ProtocolResultWrapper>
                                <ProtocolFormField
                                    type='radio'
                                    label='Не сформирован'
                                    name='somatognosis_understanding_your_own_body'
                                    control={control}
                                    errors={errors}
                                />
                            </ProtocolResultWrapper>
                        </ProtocolResultBlock>
                    </ProtocolResultWrapper>
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolDescriptionSubtitle>Контакт с ребенком:</ProtocolDescriptionSubtitle>
                    <ProtocolResultWrapper>
                        <ProtocolResultBlock>
                            <ProtocolResultWrapper>
                                <ProtocolFormField
                                    type='radio'
                                    label='Установлен'
                                    name='contact_with_the_child'
                                    control={control}
                                    value={true}
                                    errors={errors}
                                />
                            </ProtocolResultWrapper>
                            <ProtocolResultWrapper>
                                <ProtocolFormField
                                    type='radio'
                                    label='Не установлен'
                                    name='contact_with_the_child'
                                    control={control}
                                    value={false}
                                    errors={errors}
                                />
                            </ProtocolResultWrapper>
                        </ProtocolResultBlock>
                    </ProtocolResultWrapper>
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='textarea'
                        label='Комментарий'
                        placeholder='Комментарий специалиста'
                        name='formation_of_ideas_about_the_world_around_comment'
                        register={register}
                        errors={errors}
                    />
                </ProtocolRow>
            </ProtocolBlock>

            <ProtocolBlock>
                <ProtocolTitle>Билатеральная моторная координация</ProtocolTitle>
                <ProtocolPlaceholderTitle>— Возьми воображаемый телефон в руку и приложи к уху</ProtocolPlaceholderTitle>
                <ProtocolRow>
                    <ProtocolDescriptionSubtitle>Ведущее ухо:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Правое'
                                name='leading_ear_phone'
                                control={control}
                                value='правое ухо'
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Левое'
                                name='leading_ear_phone'
                                control={control}
                                value='левое ухо'
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolDescriptionSubtitle>Ведущая рука:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Правая'
                                name='leading_hand_phone'
                                control={control}
                                value='правая рука'
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Левая'
                                name='leading_hand_phone'
                                control={control}
                                value='левая рука'
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolDescriptionSubtitle>Ведущий глаз:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Правый'
                                name='leading_eye_spyglass'
                                control={control}
                                value='правый глаз'
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Левый'
                                name='leading_eye_spyglass'
                                control={control}
                                value='левый глаз'
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                </ProtocolRow>
                <ProtocolPlaceholderTitle>— Ударь ногой по воображаемому мячу</ProtocolPlaceholderTitle>
                <ProtocolRow>
                    <ProtocolDescriptionSubtitle>Ведущая нога:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Правая'
                                name='leading_leg_ball'
                                control={control}
                                value='правая нога'
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Левая'
                                name='leading_leg_ball'
                                control={control}
                                value='левая нога'
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                </ProtocolRow>
                <ProtocolResultTitle>Варианты заключения:</ProtocolResultTitle>
                <ProtocolRow>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Левшество, все 4 показателя совпадают'
                                name='conclusion_options'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Правшество, все 4 показателя совпадают'
                                name='conclusion_options'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Дисбаланс межполушарных связей'
                                name='conclusion_options'
                                control={control}
                                errors={errors}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                </ProtocolRow>
            </ProtocolBlock>
            <PicturesForFish
                register={register}
                errors={errors}
                control={control}
            />
            <Questionnaire
                register={register}
                errors={errors}
            />
            <ProtocolBlock>
                <ProtocolBlockTitle>Логопедическое заключение</ProtocolBlockTitle>
                <ProtocolRow>
                    <ProtocolFormField
                        type='textarea'
                        name='speech_therapy_conclusion'
                        register={register}
                        errors={errors}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='textarea'
                        label='Динамическое заключение (5 занятий)'
                        name='dynamic_conclusion'
                        register={register}
                        errors={errors}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='textarea'
                        label='Итоговое заключение (10 занятий)'
                        name='final_conclusion'
                        register={register}
                        errors={errors}
                    />
                </ProtocolRow>
            </ProtocolBlock>
            <ProtocolBlock>
                <ProtocolRow>
                    <SurveySubmitButton
                        type='submit'
                    >
                        Завершить заполнение протокола
                    </SurveySubmitButton>
                </ProtocolRow>
            </ProtocolBlock>
        </ProtocolMain>
    );
}

ExaminationProtocol.propTypes = {
    protocol: PropTypes.object.isRequired,
    lesson: PropTypes.object.isRequired,
}

export default ExaminationProtocol;