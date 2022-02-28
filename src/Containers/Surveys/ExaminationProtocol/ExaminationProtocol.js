import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import PropTypes from 'prop-types';
import { useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { updateProtocol } from 'redux/surveys/surveysSlice.js';
import { examinationProtocolSchema } from 'Containers/Surveys/ExaminationProtocol/yupSchema.js';
import { examinationProtocolStatuses, lessonStatuses } from 'constants.js';
import { momentDateToHuman, strDateToMoment } from 'utils/date/dateUtils';
import { authSelector } from 'redux/auth/authSlice';

import ProtocolBlock from 'Components/Surveys/ExaminationProtocol/ProtocolBlock/ProtocolBlock';
import ProtocolMain from 'Components/Surveys/ExaminationProtocol/ProtocolMain/ProtocolMain.js';
import ProtocolRow from 'Components/Surveys/ExaminationProtocol/ProtocolRow/ProtocolRow.js';
import ProtocolFormField from 'Components/Surveys/ExaminationProtocol/ProtocolFormField/ProtocolFormField.js';
import ProtocolTitle from 'Components/Surveys/ExaminationProtocol/ProtocolTitle/ProtocolTitle.js';
import ProtocolBlockTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBlockTitle/ProtocolBlockTitle.js';
import ProtocolResultTitle from 'Components/Surveys/ExaminationProtocol/ProtocolResultTitle/ProtocolResultTitle.js';
import ProtocolDescriptionSubtitle
    from 'Components/Surveys/ExaminationProtocol/ProtocolResultTitle/ProtocolResultTitle.js';
import ProtocolResultBlock from 'Components/Surveys/ExaminationProtocol/ProtocolResultBlock/ProtocolResultBlock.js';
import ProtocolResultWrapper
    from 'Components/Surveys/ExaminationProtocol/ProtocolResultWrapper/ProtocolResultWrapper.js';
import ProtocolPlaceholderTitle
    from 'Components/Surveys/ExaminationProtocol/ProtocolPlaceholderTitle/ProtocolPlaceholderTitle.js';
import SurveySubmitButton from 'Components/Surveys/Common/SurveySubmitButton.js';
import Questionnaire from 'Containers/Surveys/Questionnaire/Questionnaire.js';
import PicturesForFish from 'Containers/Surveys/ExaminationProtocol/games/PicturesForFish.js';
import GiraffeGame from 'Containers/Surveys/ExaminationProtocol/games/GiraffeGame';
import PuzzleGame from 'Containers/Surveys/ExaminationProtocol/games/PuzzleGame';
import AntLambadaGame from 'Containers/Surveys/ExaminationProtocol/games/AntLambadaGame';
import AntBattleGame from 'Containers/Surveys/ExaminationProtocol/games/AntBattleGame';
import MagicExamGame from 'Containers/Surveys/ExaminationProtocol/games/MagicExamGame';
import CapriciousPrincessGame from 'Containers/Surveys/ExaminationProtocol/games/CapriciousPrincessGame';
import HowTheMouseCouldNotSleep from 'Containers/Surveys/ExaminationProtocol/games/HowTheMouseCouldNotSleep';
import OnTheFarmGame from 'Containers/Surveys/ExaminationProtocol/games/OnTheFarmGame';
import OnTheFarmPartTwoGame from 'Containers/Surveys/ExaminationProtocol/games/OnTheFarmPartTwoGame';
import OnTheFarmPartThree from 'Containers/Surveys/ExaminationProtocol/games/OnTheFarmPartThree';
import ProtocolBlockSubTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBlockSubTitle/ProtocolBlockSubTitle';

import 'Containers/Surveys/ExaminationProtocol/examinationProtocol.css'


const ExaminationProtocol = (props) => {

    const {
        protocol, lesson, onSubmit, isClosed
    } = props

    const { t } = useTranslation();

    const dispatch = useDispatch()

    const { user } = useSelector(authSelector)

    const { register, formState: { errors }, control, handleSubmit, trigger } = useForm({
        resolver: yupResolver(examinationProtocolSchema),
        defaultValues: {
            ...protocol,
            lesson: lesson.id
        }
    })
    const data = useWatch({ control })
    let timer = null
    const isLessonFinished = lesson.status === lessonStatuses.finished || user.role === 'admin'
    const isConclusionDisabled = lesson.status !== lessonStatuses.finished
    const isProtocolClosed = protocol.status === examinationProtocolStatuses.closed || isClosed

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

    const onProtocolFormSubmit = async () => {
        const isFormValid = await trigger()
        onSubmit(data, isFormValid)
    }

    return (
        <ProtocolMain
            submitHandler={handleSubmit}
        >
            <ProtocolBlock>
                <ProtocolRow>
                    <p className='protocol__person'>{protocol.child.first_name} {protocol.child.last_name}</p>
                    <p className='protocol__person-descr'>{momentDateToHuman(strDateToMoment(protocol.child_date_of_birth))}</p>
                    <p className='protocol__person'>{t('parent')} {protocol.parent.first_name} {protocol.parent.last_name}</p>
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='textarea'
                        label={t('what_are_your_complaints')}
                        placeholder={t('parent_response')}
                        name='what_are_your_complaints'
                        register={register}
                        errors={errors}
                        disabled={isProtocolClosed}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='textarea'
                        label={t('why_visit_a_speech_pathologist')}
                        placeholder={t('parent_response')}
                        name='for_what_purpose_did_you_turn_to_a_speech_therapist'
                        register={register}
                        errors={errors}
                        disabled={isProtocolClosed}
                    />
                </ProtocolRow>
            </ProtocolBlock>
            <ProtocolBlock>
                <ProtocolTitle>{t('speech_and_language_competence')}</ProtocolTitle>
                <ProtocolBlockTitle>{t('ideas_about_the_environment')}</ProtocolBlockTitle>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('what_is_your_name')}
                        placeholder={t('child_answer')}
                        name='what_is_your_name'
                        register={register}
                        errors={errors}
                        disabled={isProtocolClosed}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('how_old_are_you')}
                        placeholder={t('child_answer')}
                        name='how_old_are_you'
                        register={register}
                        errors={errors}
                        disabled={isProtocolClosed}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('how_is_your_mother_name_your_dad')}
                        placeholder={t('child_answer')}
                        name='what_is_your_moms_name_your_daddy'
                        register={register}
                        errors={errors}
                        disabled={isProtocolClosed}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('where_do_you_live')}
                        placeholder={t('child_answer')}
                        name='where_do_you_live'
                        register={register}
                        errors={errors}
                        disabled={isProtocolClosed}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('what_season_is_it_now')}
                        placeholder={t('child_answer')}
                        name='what_time_of_year_is_it'
                        register={register}
                        errors={errors}
                        disabled={isProtocolClosed}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('what_did_you_do_yesterday')}
                        placeholder={t('child_answer')}
                        name='what_did_you_do_yesterday'
                        register={register}
                        errors={errors}
                        disabled={isProtocolClosed}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('what_toys_do_you_have')}
                        placeholder={t('child_answer')}
                        name='what_toys_do_you_have'
                        register={register}
                        errors={errors}
                        disabled={isProtocolClosed}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('what_animals_do_you_know')}
                        placeholder={t('child_answer')}
                        name='what_kind_of_animals_do_you_know'
                        register={register}
                        errors={errors}
                        disabled={isProtocolClosed}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='textarea'
                        label={t('comment')}
                        placeholder={t('expert_comment')}
                        name='general_ideas_about_the_world_around_comment'
                        register={register}
                        errors={errors}
                        disabled={isProtocolClosed}
                    />
                </ProtocolRow>
                {isLessonFinished && (
                    <>
                        <ProtocolResultTitle>{t('conclusion_options')}</ProtocolResultTitle>
                        <ProtocolRow>
                            <ProtocolDescriptionSubtitle>{t('formation_of_ideas_about_the_world_around')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('the_stock_of_knowledge_about_the_world_is_extremely_low')}
                                        name='stock_of_knowledge_about_the_world_around'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || isProtocolClosed}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('the_stock_of_knowledge_about_the_world_is_norm')}
                                        name='stock_of_knowledge_about_the_world_around'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || isProtocolClosed}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('the_stock_of_knowledge_about_the_surrounding_world_corresponds_to_the_age')}
                                        name='stock_of_knowledge_about_the_world_around'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || isProtocolClosed}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                        </ProtocolRow>
                        <ProtocolRow>
                            <ProtocolDescriptionSubtitle>{t('in_a_space_time_situation')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('oriented')}
                                        name='in_a_time_space_situation'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || isProtocolClosed}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('not_oriented')}
                                        name='in_a_time_space_situation'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || isProtocolClosed}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                        </ProtocolRow>
                        <ProtocolRow>
                            <ProtocolDescriptionSubtitle>{t('the_child_knows')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('yes_he_knows')}
                                        name='knows_how_old_time_of_year_what_time_of_day_it_is'
                                        register={register}
                                        value={true}
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || isProtocolClosed}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('no_do_not_know')}
                                        name='knows_how_old_time_of_year_what_time_of_day_it_is'
                                        value={false}
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || isProtocolClosed}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                        </ProtocolRow>
                        <ProtocolRow>
                            <ProtocolDescriptionSubtitle>{t('image_i')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('formed')}
                                        name='image_i'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || isProtocolClosed}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('not_formed')}
                                        name='image_i'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || isProtocolClosed}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                        </ProtocolRow>
                        <ProtocolRow>
                            <ProtocolDescriptionSubtitle>{t('the_child_knows_his_name_where_he_lives')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultWrapper>
                                <ProtocolResultBlock>
                                    <ProtocolResultWrapper>
                                        <ProtocolFormField
                                            type='radio'
                                            label={t('yes_he_knows')}
                                            name='knows_his_name_the_name_of_his_parents_where_he_lives'
                                            control={control}
                                            value={true}
                                            errors={errors}
                                            disabled={isConclusionDisabled || isProtocolClosed}
                                        />
                                    </ProtocolResultWrapper>
                                    <ProtocolResultWrapper>
                                        <ProtocolFormField
                                            type='radio'
                                            label={t('no_do_not_know')}
                                            name='knows_his_name_the_name_of_his_parents_where_he_lives'
                                            control={control}
                                            value={false}
                                            errors={errors}
                                            disabled={isConclusionDisabled || isProtocolClosed}
                                        />
                                    </ProtocolResultWrapper>
                                </ProtocolResultBlock>
                            </ProtocolResultWrapper>
                        </ProtocolRow>
                        <ProtocolRow>
                            <ProtocolDescriptionSubtitle>{t('somatognosis_the_concept_of_own_body')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultWrapper>
                                <ProtocolResultBlock>
                                    <ProtocolResultWrapper>
                                        <ProtocolFormField
                                            type='radio'
                                            label={t('formed')}
                                            name='somatognosis_understanding_your_own_body'
                                            control={control}
                                            errors={errors}
                                            disabled={isConclusionDisabled || isProtocolClosed}
                                        />
                                    </ProtocolResultWrapper>
                                    <ProtocolResultWrapper>
                                        <ProtocolFormField
                                            type='radio'
                                            label={t('not_formed')}
                                            name='somatognosis_understanding_your_own_body'
                                            control={control}
                                            errors={errors}
                                            disabled={isConclusionDisabled || isProtocolClosed}
                                        />
                                    </ProtocolResultWrapper>
                                </ProtocolResultBlock>
                            </ProtocolResultWrapper>
                        </ProtocolRow>
                    </>
                )}
                <ProtocolRow>
                    <ProtocolDescriptionSubtitle>{t('child_contact')}</ProtocolDescriptionSubtitle>
                    <ProtocolResultWrapper>
                        <ProtocolResultBlock>
                            <ProtocolResultWrapper>
                                <ProtocolFormField
                                    type='radio'
                                    label={t('set')}
                                    name='contact_with_the_child'
                                    control={control}
                                    value={true}
                                    errors={errors}
                                    disabled={isProtocolClosed}
                                />
                            </ProtocolResultWrapper>
                            <ProtocolResultWrapper>
                                <ProtocolFormField
                                    type='radio'
                                    label={t('not_installed')}
                                    name='contact_with_the_child'
                                    control={control}
                                    value={false}
                                    errors={errors}
                                    disabled={isProtocolClosed}
                                />
                            </ProtocolResultWrapper>
                        </ProtocolResultBlock>
                    </ProtocolResultWrapper>
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='textarea'
                        label={t('comment')}
                        placeholder={t('expert_comment')}
                        name='formation_of_ideas_about_the_world_around_comment'
                        register={register}
                        errors={errors}
                        disabled={isProtocolClosed}
                    />
                </ProtocolRow>
            </ProtocolBlock>
            <ProtocolBlock>
                <ProtocolTitle>{t('bilateral_motor_coordination')}</ProtocolTitle>
                <ProtocolPlaceholderTitle>— {t('take_an_imaginary_phone_in_your_hand_and_put_it_to_your_ear')}</ProtocolPlaceholderTitle>
                <ProtocolRow>
                    <ProtocolDescriptionSubtitle>{t('leading_ear')}</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label={t('right')}
                                name='leading_ear_phone'
                                control={control}
                                value={t('right_ear')}
                                errors={errors}
                                disabled={isProtocolClosed}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label={t('left')}
                                name='leading_ear_phone'
                                control={control}
                                value={t('left_ear')}
                                errors={errors}
                                disabled={isProtocolClosed}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolDescriptionSubtitle>{t('leading_hand')}</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label={t('right')}
                                name='leading_hand_phone'
                                control={control}
                                value={t('right_hand')}
                                errors={errors}
                                disabled={isProtocolClosed}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label={t('left')}
                                name='leading_hand_phone'
                                control={control}
                                value={t('left_hand')}
                                errors={errors}
                                disabled={isProtocolClosed}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                </ProtocolRow>
                <ProtocolPlaceholderTitle>— {t('look_through_an_imaginary_spyglass')}</ProtocolPlaceholderTitle>
                <ProtocolRow>
                    <ProtocolDescriptionSubtitle>{t('leading_hand')}</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label={t('right')}
                                name='leading_hand_spyglass'
                                control={control}
                                value={t('right_hand')}
                                errors={errors}
                                disabled={isProtocolClosed}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label={t('left')}
                                name='leading_hand_spyglass'
                                control={control}
                                value={t('left_hand')}
                                errors={errors}
                                disabled={isProtocolClosed}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolDescriptionSubtitle>{t('leading_eye')}</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label={t('right')}
                                name='leading_eye_spyglass'
                                control={control}
                                value={t('right_eye')}
                                errors={errors}
                                disabled={isProtocolClosed}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label={t('left')}
                                name='leading_eye_spyglass'
                                control={control}
                                value={t('left_eye')}
                                errors={errors}
                                disabled={isProtocolClosed}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                </ProtocolRow>
                <ProtocolPlaceholderTitle>{t('kick_an_imaginary_ball')}</ProtocolPlaceholderTitle>
                <ProtocolRow>
                    <ProtocolDescriptionSubtitle>{t('leading_leg')}</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label={t('right')}
                                name='leading_leg_ball'
                                control={control}
                                value='правая нога'
                                errors={errors}
                                disabled={isProtocolClosed}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label={t('left')}
                                name='leading_leg_ball'
                                control={control}
                                value='левая нога'
                                errors={errors}
                                disabled={isProtocolClosed}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                </ProtocolRow>
                {isLessonFinished && (
                    <>
                        <ProtocolResultTitle>{t('conclusion_options')}</ProtocolResultTitle>
                        <ProtocolRow>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('left_handedall_4_indicators_are_the_same')}
                                        name='conclusion_options'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || isProtocolClosed}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('right_handedall_4_indicators_are_the_same')}
                                        name='conclusion_options'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || isProtocolClosed}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('imbalance_of_interhemispheric_connections')}
                                        name='conclusion_options'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || isProtocolClosed}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                        </ProtocolRow>
                    </>
                )}
            </ProtocolBlock>
            <PicturesForFish
                register={register}
                errors={errors}
                control={control}
                isConclusionDisabled={isConclusionDisabled}
                disabled={isProtocolClosed}
                isLessonFinished={isLessonFinished}
            />
            <GiraffeGame
                register={register}
                errors={errors}
                control={control}
                isConclusionDisabled={isConclusionDisabled}
                disabled={isProtocolClosed}
                isLessonFinished={isLessonFinished}
            />
            <PuzzleGame
                register={register}
                errors={errors}
                control={control}
                isConclusionDisabled={isConclusionDisabled}
                disabled={isProtocolClosed}
                isLessonFinished={isLessonFinished}
            />
            <AntLambadaGame
                register={register}
                errors={errors}
                control={control}
                isConclusionDisabled={isConclusionDisabled}
                disabled={isProtocolClosed}
                isLessonFinished={isLessonFinished}
            />
            <AntBattleGame
                register={register}
                errors={errors}
                control={control}
                isConclusionDisabled={isConclusionDisabled}
                disabled={isProtocolClosed}
            />
            <MagicExamGame
                register={register}
                errors={errors}
                control={control}
                isConclusionDisabled={isConclusionDisabled}
                disabled={isProtocolClosed}
                isLessonFinished={isLessonFinished}
            />
            <CapriciousPrincessGame
                register={register}
                errors={errors}
                control={control}
                isConclusionDisabled={isConclusionDisabled}
                disabled={isProtocolClosed}
                isLessonFinished={isLessonFinished}
            />
            <HowTheMouseCouldNotSleep
                register={register}
                errors={errors}
                control={control}
                isConclusionDisabled={isConclusionDisabled}
                disabled={isProtocolClosed}
                isLessonFinished={isLessonFinished}
            />
            <OnTheFarmGame
                register={register}
                errors={errors}
                control={control}
                isConclusionDisabled={isConclusionDisabled}
                disabled={isProtocolClosed}
                isLessonFinished={isLessonFinished}
            />
            <OnTheFarmPartTwoGame
                register={register}
                errors={errors}
                control={control}
                isConclusionDisabled={isConclusionDisabled}
                disabled={isProtocolClosed}
                isLessonFinished={isLessonFinished}
            />
            <OnTheFarmPartThree
                register={register}
                errors={errors}
                control={control}
                isConclusionDisabled={isConclusionDisabled}
                disabled={isProtocolClosed}
                isLessonFinished={isLessonFinished}
            />
            <ProtocolBlock>
                <ProtocolBlockTitle>{t('additional_information')}</ProtocolBlockTitle>
                <ProtocolBlockSubTitle>{t('development_data')}</ProtocolBlockSubTitle>
                <ProtocolBlockSubTitle>{t('early_late_physical_development')}</ProtocolBlockSubTitle>
                <Questionnaire
                    register={register}
                    errors={errors}
                    disabled={isProtocolClosed}
                    isConclusionDisabled={isConclusionDisabled}
                />
            </ProtocolBlock>
            <ProtocolBlock>
                <ProtocolBlockTitle>{t('logopedic_conclusion')}</ProtocolBlockTitle>
                <ProtocolRow>
                    <ProtocolFormField
                        type='textarea'
                        name='speech_therapy_conclusion'
                        register={register}
                        errors={errors}
                        classNameLabel='protocol__result-lbl'
                        disabled={isProtocolClosed}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='textarea'
                        label={t('dynamic_conclusion_5_lessons')}
                        name='dynamic_conclusion'
                        register={register}
                        errors={errors}
                        classNameLabel='protocol__result-lbl'
                        disabled={isProtocolClosed}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='textarea'
                        label={t('final_conclusion_10_lessons')}
                        name='final_conclusion'
                        register={register}
                        errors={errors}
                        classNameLabel='protocol__result-lbl'
                        disabled={isProtocolClosed}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <p className='protocol__finish-title'>{t('speech_therapist')}</p>
                    <ProtocolDescriptionSubtitle>{t('date_of_birth')} {protocol.child_date_of_birth}</ProtocolDescriptionSubtitle>
                    <p className='protocol__info'>{t('parent')} {protocol.parent.first_name} {protocol.parent.last_name}</p>
                </ProtocolRow>
            </ProtocolBlock>
            {protocol.status !== examinationProtocolStatuses.closed && (
                <ProtocolBlock>
                    <ProtocolRow>
                        <SurveySubmitButton
                            type='submit'
                            id='finish-protocol'
                            onClick={onProtocolFormSubmit}
                        >
                            {t('complete_the_protocol')}
                        </SurveySubmitButton>
                    </ProtocolRow>
                </ProtocolBlock>
            )}
        </ProtocolMain>
    );
}

ExaminationProtocol.propTypes = {
    protocol: PropTypes.object.isRequired,
    lesson: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    isClosed: PropTypes.bool,
}

export default ExaminationProtocol;