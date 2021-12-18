import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProtocolBlock from 'Containers/ExaminationProtocol2/ProtocolBlock/ProtocolBlock.js';
import ProtocolRow from 'Containers/ExaminationProtocol2/ProtocolRow/ProtocolRow.js';
import ProtocolMain from 'Containers/ExaminationProtocol2/ProtocolMain/ProtocolMain.js';
import { strDateToMoment, momentDateToHuman } from 'utils/date/dateUtils.js';
import ProtocolFormField from 'Containers/ExaminationProtocol2/ProtocolFormField/ProtocolFormField.js';
import ProtocolTitle from 'Containers/ExaminationProtocol2/ProtocolTitle/ProtocolTitle.js';
import ProtocolSubtitle from 'Containers/ExaminationProtocol2/ProtocolSubtitle/ProtocolSubtitle.js';
import { useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { examinationProtocolSchema } from 'Containers/ExaminationProtocol2/yupSchema.js';
import ProtocolResultTitle from 'Containers/ExaminationProtocol2/ResultTitle/ResultTitle.js';
import ProtocolResultBlock from 'Containers/ExaminationProtocol2/ProtocolResultBlock/ProtocolResultBlock.js';
import ProtocolDescriptionSubtitle from 'Containers/ExaminationProtocol2/ProtocolResultTitle/ProtocolResultTitle.js';
import ProtocolResultWrapper from 'Containers/ExaminationProtocol2/ProtocolResultWrapper/ProtocolResultWrapper.js';
import { useDispatch } from 'react-redux';
import { updateProtocol } from 'redux/surveys/surveysSlice.js';

const ExaminationProtocol2 = (props) => {

    const {
        protocol, lesson
    } = props

    const dispatch = useDispatch()

    const { register, formState: { errors }, setValue, control, watch, getValues } = useForm({
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

    return (
        <ProtocolMain>
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
                <ProtocolSubtitle>Общие представления об окружающем мире. Понимание ребенком обращенной к нему
                    речи</ProtocolSubtitle>
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
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Запас знаний об окружающем мире ниже возрастной нормы'
                                name='stock_of_knowledge_about_the_world_around'
                                control={control}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Запас знаний об окружающем мире соответствует возрасту'
                                name='stock_of_knowledge_about_the_world_around'
                                control={control}
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
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Не ориентируется'
                                name='in_a_time_space_situation'
                                control={control}
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
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Нет, не знает'
                                name='knows_how_old_time_of_year_what_time_of_day_it_is'
                                value={false}
                                control={control}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                </ProtocolRow>
            </ProtocolBlock>
        </ProtocolMain>
    );
}

ExaminationProtocol2.propTypes = {
    protocol: PropTypes.object.isRequired,
    lesson: PropTypes.object.isRequired,
}

export default ExaminationProtocol2;