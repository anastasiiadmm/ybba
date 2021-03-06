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
        speechCard, lesson, onSubmit, isClosed
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
    const isCardClosed = speechCard.status === speechCardStatuses.closed || isClosed

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    speechCard={{ ...data, lesson: speechCard.lesson }}
                />
                <SurveySubmitButton
                    type='button'
                    onClick={onFinishViewSpeechCard}
                >
                    ?????????????????? ???? ?????????????? ????????????????
                </SurveySubmitButton>
            </>)}
            {!isSpeechCardFinished && (<>
                <SpeechCardFormBlock>
                    <SpeechCardBlock>
                        <SpeechCardTitle>?????????????? ??????????</SpeechCardTitle>
                        {/*<p className='speech-card-form__date'>???????? ????????????????????: 12 ?????? 2016</p>*/}
                        <SpeechCardRow>
                            <SpeechCardFormField
                                type='textarea'
                                label='??????????????, ?????? ??????????????'
                                register={register}
                                name='child_full_name'
                                disabled={isCardClosed}
                            />
                        </SpeechCardRow>
                        <SpeechCardRow>
                            <SpeechCardFormField
                                type='textarea'
                                label='???????? ????????????????/??????????????'
                                name='child_date_of_birth'
                                register={register}
                                disabled={isCardClosed}
                            />
                        </SpeechCardRow>
                        <SpeechCardRow>
                            <SpeechCardFormField
                                type='textarea'
                                label='???????????????? (???????????????? ??????????????????????????)'
                                name='parent'
                                register={register}
                                disabled={isCardClosed}
                            />
                        </SpeechCardRow>
                        <SpeechCardRow>
                            <SpeechCardFormField
                                type='textarea'
                                label='???????????????? ???????????? ??????????????????'
                                name='main_complaints_from_parents'
                                register={register}
                                disabled={isCardClosed}
                            />
                        </SpeechCardRow>
                        <SpeechCardRow>
                            <SpeechCardFormField
                                type='textarea'
                                label='?? ?????????? ?????????? ???????????????????? ?? ????????????????'
                                name='for_what_purpose_did_you_turn_to_a_speech_therapist'
                                register={register}
                                disabled={isCardClosed}
                            />
                        </SpeechCardRow>
                    </SpeechCardBlock>
                    <SpeechCardBlock>
                        <SpeechCardBlockTitle>1. ?????????????? ???????????????? ???? ????????????????</SpeechCardBlockTitle>
                        <SpeechCardSubBlock>
                            <SpeechCardSubBlockTitle>1.1. ????????????/?????????????? ???????????????????? ????????????????</SpeechCardSubBlockTitle>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='?????? ??:'
                                    name='sat_in'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='???????????? ???? ???????????????????????? ??:'
                                    name='crawled_on_all_fours_into'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='?????????? ??:'
                                    name='went_to'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='???????????????? ?????????????? ???? ???????? ?????????? ??:'
                                    name='learned_to_jump_on_two_legs_in'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='????????????/???????????????? ????, ???? ?????????? ??/?????? ?????????? ??????????:'
                                    name='injury_infection_before_during_and_or_after_childbirth'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                        </SpeechCardSubBlock>
                        <SpeechCardSubBlock>
                            <SpeechCardSubBlockTitle>1.2. ????????????/?????????????? ?????????????? ????????????????</SpeechCardSubBlockTitle>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='?????????? ??:'
                                    name='babbling_in'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='???????????? ?????????? ??:'
                                    name='first_words_in'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='???????????? ???????????????? ?????????? ??:'
                                    name='first_short_phrases_in'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                        </SpeechCardSubBlock>
                        <SpeechCardSubBlock>
                            <SpeechCardSubBlockTitle>1.3. ?????????????? ??????????, ?? ?????????????? ??????????????????????????
                                ??????????????</SpeechCardSubBlockTitle>
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
                            <SpeechCardSubBlockTitle>1.4. ?????????????????????????????? ???????????? ?? ?????????????????? ????????????????-????????????????????????
                                ??????????????
                                ?? ???????????? (????????????, ????????, ???????????????? ?? ????.). ??????????????????????????????
                                ????????????????????</SpeechCardSubBlockTitle>
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
                                    type='textarea'
                                    label='?????????????????????? ???????????????????? ??????????????'
                                    name='vision'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='?????????????????????? ???????????????? ??????????????'
                                    name='hearing'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='?????????????? ??????????????????'
                                    name='eating_behavior'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                        </SpeechCardSubBlock>
                        <SpeechCardSubBlock>
                            <SpeechCardSubBlockTitle>
                                1.5. ???????????????? ?? ?????????????????? ?? ???????????????????????? ??????????????????, ?????????????? ????????????????????????
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
                            <SpeechCardSubBlockTitle>1.6. ?????????????????????????????? ??????????????</SpeechCardSubBlockTitle>
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
                            <SpeechCardSubBlockTitle>1.7. ????????????????????????-?????????????????????????????? ??????????????</SpeechCardSubBlockTitle>
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
                                    type='textarea'
                                    label='?????????????????????????? ?????? ???? ?????????? ??????????????'
                                    name='emotional_background_during_class'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='?????????????????? ?? ??????????????'
                                    name='motivation_and_interest'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='?????????????????????????? ???????????? ???? ???????????? ??????????????????'
                                    name='emotional_response_to_adult_emotion'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='???????????????????? ????????????????????'
                                    name='mimic_manifestations'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='?????????????? ????????????, ?????????????? ???????????????? ???? ?????????? ??????????????'
                                    name='basic_emotions_that_it_exhibits'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                        </SpeechCardSubBlock>
                    </SpeechCardBlock>
                    <SpeechCardBlock>
                        <SpeechCardTitle>2. ???????????????????????????????? ?????????????????????????? ???? ???????????????????? ????????</SpeechCardTitle>
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
                                type='textarea'
                                label='?? ??????????????????????????????-?????????????????? ????????????????'
                                name='in_a_time_space_situation'
                                register={register}
                                disabled={isCardClosed}
                            />
                        </SpeechCardRow>
                    </SpeechCardBlock>
                    <SpeechCardBlock>
                        <SpeechCardTitle>3. ?????????? ??????</SpeechCardTitle>
                        <SpeechCardRow>
                            <SpeechCardFormField
                                type='textarea'
                                label='?????????? ??????'
                                name='image_i'
                                register={register}
                                disabled={isCardClosed}
                            />
                        </SpeechCardRow>
                        <SpeechCardRow>
                            <SpeechCardFormField
                                type='textarea'
                                label='????????????????????????'
                                name='somatognosis'
                                register={register}
                                disabled={isCardClosed}
                            />
                        </SpeechCardRow>
                    </SpeechCardBlock>
                    <SpeechCardBlock>
                        <SpeechCardBlockTitle>4. ???????????????????????? ??????????????????????</SpeechCardBlockTitle>
                        <SpeechCardSubBlock>
                            <SpeechCardSubBlockTitle>4.1. ?????????????? ?????????????????? ????????</SpeechCardSubBlockTitle>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    name='speech_comprehension_level'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                        </SpeechCardSubBlock>
                        <SpeechCardSubBlock>
                            <SpeechCardSubBlockTitle>4.2. ?????????????? ???????????????????????????????? ??????????????????</SpeechCardSubBlockTitle>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    name='level_of_vocabulary_formation'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='???????????????? ?????????????????????????? ??????????????????'
                                    name='active_semantic_component_active_vocabulary'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='?????????? ??????????????'
                                    name='volume_vocabulary'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='?????????????????? ?????????????????????? ?????????????? (?????????????????????????? ??????????)'
                                    name='system_organization_of_dictionary_associative_links'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                        </SpeechCardSubBlock>
                        <SpeechCardSubBlock>
                            <SpeechCardSubBlockTitle>
                                4.3. ?????????????? ???????????????????????????????? ???????????????????????????? ??????????????????????
                            </SpeechCardSubBlockTitle>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    name='level_of_grammatical_competence_formation'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='???????????????????????????????????? ???????????? ?? ????????????'
                                    name='inflectional_skills_and_abilities_part_one'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='???????????????????????????????????????? ???????????? ?? ????????????'
                                    name='word_building_skills_and_abilities'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='???????????????????????????? ???????????? ?? ????????????'
                                    name='syntactic_skills_and_abilities'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                        </SpeechCardSubBlock>
                        <SpeechCardSubBlock>
                            <SpeechCardSubBlockTitle>
                                4.4. ?????????????? ???????????????????????????????? ????????????????-???????????????????????????? ??????????????????????
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
                                    label='?????????????????? ?????????????????????????????? ????????????????????'
                                    name='state_of_phonemic_perception'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='?????????????????? ?????????????????????????????? ??????????'
                                    name='state_of_phonemic_hearing'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='???????????????????????????????? ?????????????? ?????????????????? ?????????????? ?? ??????????????'
                                    name='formation_of_the_skills_of_sound_analysis_and_synthesis'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='???????????????? ?????????????????? ??????????'
                                    name='syllabic_structure_of_a_word'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='?????????????????????????????????????????? ?????????????? ????????'
                                    name='sound_articulating_side_of_speech'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='?????????????????????????? ?????????????? ????????'
                                    name='prosodic_side_of_speech_game_on_the_farm_part_three'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='??????????'
                                    name='voice'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='??????????????????'
                                    name='smoothness'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='????????'
                                    name='pace'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='????????'
                                    name='speech_game_on_the_farm_part_three'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='??????????????'
                                    name='breath_game_on_the_farm_part_three'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='????????'
                                    name='rhythm_game_on_the_farm_part_three'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='???????? ????????????'
                                    name='exhalation_force'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='???????????????????????????????????????? ??????????/???????????? ?? ?????????????????????? ????????????????????'
                                    name='inspiratory_expiratory_differentiation'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                        </SpeechCardSubBlock>
                    </SpeechCardBlock>
                    <SpeechCardBlock>
                        <SpeechCardTitle>
                            5. ?????????????????? ?? ?????????????????????????????? ????????????????????????????/???????????????????????????????? ???????????? ????????????????????????????????????
                            ?????????????????? ?? ???????????????????????? ?? ???????????????????????? ?????????????? (??????????????/????????????????)
                        </SpeechCardTitle>
                        <SpeechCardRow>
                            <SpeechCardFormField
                                type='textarea'
                                label='?????????????????? ????????????'
                                name='understanding_the_text_game_how_the_mouse_could_not_sleep'
                                register={register}
                                disabled={isCardClosed}
                            />
                        </SpeechCardRow>
                        <SpeechCardRow>
                            <SpeechCardFormField
                                type='textarea'
                                label='???????????????????????????? ????????????'
                                name='text_production'
                                register={register}
                                disabled={isCardClosed}
                            />
                        </SpeechCardRow>
                        <SpeechCardRow>
                            <SpeechCardFormField
                                type='textarea'
                                label='???????????????????????????????? ????????????'
                                name='reproduction_of_text_game_how_the_mouse_could_not_sleep'
                                register={register}
                                disabled={isCardClosed}
                            />
                        </SpeechCardRow>
                    </SpeechCardBlock>
                    <SpeechCardBlock>
                        <SpeechCardBlockTitle>6. ?????????????????? ???????????????? ????????????????</SpeechCardBlockTitle>
                        <SpeechCardSubBlock>
                            <SpeechCardSubBlockTitle>6.1. ???????????????? ???????????????????????????????? ????????????????</SpeechCardSubBlockTitle>
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
                            <SpeechCardSubBlockTitle>6.2. ?????????????????? ???????????????????????????????? ????????????????</SpeechCardSubBlockTitle>
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
                                    type='textarea'
                                    label='???????????????? ??????????????'
                                    name='oral_praxis'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='?????????????????????????????? ??????????????'
                                    name='articulatory_praxis'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                        </SpeechCardSubBlock>
                    </SpeechCardBlock>
                    <SpeechCardBlock>
                        <SpeechCardBlockTitle>7. ???????????????????????? ????????????????</SpeechCardBlockTitle>
                        <SpeechCardSubBlock>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='???????????????? ???????????????????????? ???????????? ?? ?????????????????? ???????????????????????????? ??????????'
                                    name='basic_motor_skills_and_state_of_coordinating_sphere'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='???????????????????????? ???????????????? ???????????????????? ??????????????????'
                                    name='postural_control_of_calm_state'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='?????????????????????????? ???????????????? ??????????????????????'
                                    name='bilateral_motor_coordination'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='?????????????? ??????'
                                    name='leading_ear'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='?????????????? ????????'
                                    name='leading_hand'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='?????????????? ????????'
                                    name='leading_eye'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='?????????????? ????????'
                                    name='leading_leg'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                            <SpeechCardRow>
                                <SpeechCardFormField
                                    type='textarea'
                                    label='???????????????????????????????? ???????????????? ????????????????'
                                    name='formation_of_motor_imitation'
                                    register={register}
                                    disabled={isCardClosed}
                                />
                            </SpeechCardRow>
                        </SpeechCardSubBlock>
                        <SpeechCardSubBlock>
                            <SpeechCardSubBlockTitle>7.1. ???????????????? ?????????????? ???????????? ?? ??????????????
                                ??????</SpeechCardSubBlockTitle>
                            <SpeechCardFormField
                                type='textarea'
                                name='motor_functions_of_hands_and_fingers'
                                register={register}
                                disabled={isCardClosed}
                            />
                        </SpeechCardSubBlock>
                    </SpeechCardBlock>
                    <SpeechCardBlock>
                        <SpeechCardBlockTitle>8. ?????????????????????????????? ???????? ????????</SpeechCardBlockTitle>
                        <SpeechCardSubBlock>
                            <SpeechCardSubBlockTitle>8.1. ???????????????????? ????????????</SpeechCardSubBlockTitle>
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
                            <SpeechCardSubBlockTitle>8.2. ???????????????? (???????????????????? ?? ????????????????????????
                                ??????????????????)</SpeechCardSubBlockTitle>
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
                            <SpeechCardSubBlockTitle>8.3. ???????????????????????? ???????????????????? ????????????????????</SpeechCardSubBlockTitle>
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
                            <SpeechCardSubBlockTitle>8.4. ????????????????</SpeechCardSubBlockTitle>
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
                    <SpeechCardTitle>???????????????????????????? ????????????????????</SpeechCardTitle>
                    <SpeechCardRow>
                        <SpeechCardFormField
                            type='textarea'
                            name='logopedic_conclusion'
                            register={register}
                            disabled={isCardClosed}
                        />
                    </SpeechCardRow>
                    <SpeechCardTitle>????????????????????????</SpeechCardTitle>
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
                            ?????????????????? ????????????????????
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
    isClosed: PropTypes.bool,
}

export default SpeechCard;
