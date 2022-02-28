import React from 'react';
import { useTranslation } from 'react-i18next';

import ProtocolBlock from 'Components/Surveys/ExaminationProtocol/ProtocolBlock/ProtocolBlock';
import ProtocolPlaceholderTitle from 'Components/Surveys/ExaminationProtocol/ProtocolPlaceholderTitle/ProtocolPlaceholderTitle';
import ProtocolBlockTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBlockTitle/ProtocolBlockTitle';
import ProtocolRowText from 'Components/Surveys/ExaminationProtocol/ProtocolRowText/ProtocolRowText';
import ProtocolTitleTest from 'Components/Surveys/ExaminationProtocol/ProtocolTitleTest/ProtocolTitleTest';
import ProtocolSwitchText from 'Components/Surveys/ExaminationProtocol/ProtocolSwitchText/ProtocolSwitchText';
import ProtocolTextTest from 'Components/Surveys/ExaminationProtocol/ProtocolTextTest/ProtocolTextTest';
import ProtocolFormField from 'Components/Surveys/ExaminationProtocol/ProtocolFormField/ProtocolFormField';
import ProtocolRow from 'Components/Surveys/ExaminationProtocol/ProtocolRow/ProtocolRow';
import ProtocolResultTitle from 'Components/Surveys/ExaminationProtocol/ResultTitle/ResultTitle';
import ProtocolDescriptionMain from 'Components/Surveys/ExaminationProtocol/ProtocolDescriptionMain/ProtocolDescriptionMain';
import ProtocolDescriptionSubtitle from 'Components/Surveys/ExaminationProtocol/ProtocolResultTitle/ProtocolResultTitle';
import ProtocolResultBlock from 'Components/Surveys/ExaminationProtocol/ProtocolResultBlock/ProtocolResultBlock';
import ProtocolResultWrapper from 'Components/Surveys/ExaminationProtocol/ProtocolResultWrapper/ProtocolResultWrapper';


const HowTheMouseCouldNotSleep = (props) => {

    const  {
        register, errors, control, isConclusionDisabled, disabled, isLessonFinished
    } = props

    const { t } = useTranslation();

    return (
        <>
            <ProtocolBlock>
                <ProtocolPlaceholderTitle>{t('the_game_how_the_mouse_could_not_sleep')}</ProtocolPlaceholderTitle>
                <ProtocolBlockTitle>{t('connected_speech_survey')}</ProtocolBlockTitle>
                <ProtocolPlaceholderTitle>{t('listen_to_the_story_put_the_pictures_in_order')}</ProtocolPlaceholderTitle>
                <ProtocolTextTest>
                    {t('Маленькому мышонку не спалось. Пошел темной ночью он по лесу гулять. Увидел яблочко в траве и съел его. Увидел ягодку и тоже съел. Заметил он в луже белый светящийся круг. Подумал, что это сыр, хотел и его слопать, но ничего не вышло. Не пропадать же добру! Решил накрыть его лопухом — пусть до утра полежит. А утром вместо белого круга обнаружил он в воде большое красное солнышко')}
                </ProtocolTextTest>
                <ProtocolRowText>
                    <ProtocolTitleTest>1) {t('Мышонок в лесу ночью')}</ProtocolTitleTest>
                    <ProtocolSwitchText>
                        <ProtocolFormField
                            type='radio'
                            classNameLabel='switch2__minus'
                            className='switch2__input'
                            value={false}
                            label='-'
                            name='game_how_the_mouse_could_not_sleep.mouse_in_the_yard_at_night'
                            control={control}
                            disabled={disabled}
                        />
                        <ProtocolFormField
                            type='radio'
                            classNameLabel='switch2__plus'
                            className='switch2__input'
                            value={true}
                            label='+'
                            name='game_how_the_mouse_could_not_sleep.mouse_in_the_yard_at_night'
                            control={control}
                            disabled={disabled}
                        />
                    </ProtocolSwitchText>
                </ProtocolRowText>
                <ProtocolRowText>
                    <ProtocolTitleTest>2) {t('the_little_mouse_eats_an_apple_and_a_berry')}</ProtocolTitleTest>
                    <ProtocolSwitchText>
                        <ProtocolFormField
                            type='radio'
                            classNameLabel='switch2__minus'
                            className='switch2__input'
                            value={false}
                            label='-'
                            name='game_how_the_mouse_could_not_sleep.mouse_is_eating_an_apple_and_a_berry'
                            control={control}
                            disabled={disabled}
                        />
                        <ProtocolFormField
                            type='radio'
                            classNameLabel='switch2__plus'
                            className='switch2__input'
                            value={true}
                            label='+'
                            name='game_how_the_mouse_could_not_sleep.mouse_is_eating_an_apple_and_a_berry'
                            control={control}
                            disabled={disabled}
                        />
                    </ProtocolSwitchText>
                </ProtocolRowText>
                <ProtocolRowText>
                    <ProtocolTitleTest>3) {t('the_moon_in_the_reflection_of_water_in_a_puddle')}</ProtocolTitleTest>
                    <ProtocolSwitchText>
                        <ProtocolFormField
                            type='radio'
                            classNameLabel='switch2__minus'
                            className='switch2__input'
                            value={false}
                            label='-'
                            name='game_how_the_mouse_could_not_sleep.moon_in_the_reflection_of_the_water_in_a_puddle'
                            control={control}
                            disabled={disabled}
                        />
                        <ProtocolFormField
                            type='radio'
                            classNameLabel='switch2__plus'
                            className='switch2__input'
                            value={true}
                            label='+'
                            name='game_how_the_mouse_could_not_sleep.moon_in_the_reflection_of_the_water_in_a_puddle'
                            control={control}
                            disabled={disabled}
                        />
                    </ProtocolSwitchText>
                </ProtocolRowText>
                <ProtocolRowText>
                    <ProtocolTitleTest>4) {t('the_little_mouse_covers_the_puddle_with_burdock')}</ProtocolTitleTest>
                    <ProtocolSwitchText>
                        <ProtocolFormField
                            type='radio'
                            classNameLabel='switch2__minus'
                            className='switch2__input'
                            value={false}
                            label='-'
                            name='game_how_the_mouse_could_not_sleep.mouse_covers_the_puddle_with_burdock'
                            control={control}
                            disabled={disabled}
                        />
                        <ProtocolFormField
                            type='radio'
                            classNameLabel='switch2__plus'
                            className='switch2__input'
                            value={true}
                            label='+'
                            name='game_how_the_mouse_could_not_sleep.mouse_covers_the_puddle_with_burdock'
                            control={control}
                            disabled={disabled}
                        />
                    </ProtocolSwitchText>
                </ProtocolRowText>
                <ProtocolRowText>
                    <ProtocolTitleTest>5) {t('the_sun_in_the_reflection_of_water_in_a_puddle')}</ProtocolTitleTest>
                    <ProtocolSwitchText>
                        <ProtocolFormField
                            type='radio'
                            classNameLabel='switch2__minus'
                            className='switch2__input'
                            value={false}
                            label='-'
                            name='game_how_the_mouse_could_not_sleep.sun_in_water_reflection_in_a_puddle'
                            control={control}
                            disabled={disabled}
                        />
                        <ProtocolFormField
                            type='radio'
                            classNameLabel='switch2__plus'
                            className='switch2__input'
                            value={true}
                            label='+'
                            name='game_how_the_mouse_could_not_sleep.sun_in_water_reflection_in_a_puddle'
                            control={control}
                            disabled={disabled}
                        />
                    </ProtocolSwitchText>
                </ProtocolRowText>
                <ProtocolPlaceholderTitle>— {t('now_answer_these_questions')}</ProtocolPlaceholderTitle>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('what_was_the_white_glowing_circle')}
                        name='game_how_the_mouse_could_not_sleep.what_was_the_white_glowing_circle'
                        register={register}
                        errors={errors}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('when_did_the_little_mouse_go_out_for_a_walk')}
                        name='game_how_the_mouse_could_not_sleep.when_did_the_mouse_go_for_a_walk'
                        register={register}
                        errors={errors}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('what_did_the_little_mouse_see_outside')}
                        name='game_how_the_mouse_could_not_sleep.what_did_the_mouse_see_in_the_forest'
                        register={register}
                        errors={errors}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('what_did_the_little_mouse_cover_the_moon_with')}
                        name='game_how_the_mouse_could_not_sleep.what_did_the_mouse_cover_the_moon_with'
                        register={register}
                        errors={errors}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('what_did_the_little_mouse_see_in_the_puddle_in_the_morning')}
                        name='game_how_the_mouse_could_not_sleep.what_did_the_mouse_see_in_the_puddle_in_the_morning'
                        register={register}
                        errors={errors}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('what_did_the_little_mouse_see_the_sun_instead_of_the_moon')}
                        name='game_how_the_mouse_could_not_sleep.why_instead_of_the_moon_the_mouse_found_the_sun'
                        register={register}
                        errors={errors}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolPlaceholderTitle>— {t('retell_the_story_how_you_remember_it')}</ProtocolPlaceholderTitle>
                <ProtocolRow>
                    <ProtocolFormField
                        type='textarea'
                        name='game_how_the_mouse_could_not_sleep.repeat_the_whole_story_as_you_remember'
                        register={register}
                        errors={errors}
                        disabled={disabled}
                    />
                </ProtocolRow>
                {isLessonFinished && (
                    <>
                        <ProtocolResultTitle>{t('conclusion_options')}</ProtocolResultTitle>
                        <ProtocolRow>
                            <ProtocolDescriptionMain>{t('production')}</ProtocolDescriptionMain>
                            <ProtocolDescriptionSubtitle>{t('construction_of_the_statement')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('can_build_his_own_statement_based_on_visual_information_received')}
                                        name='game_how_the_mouse_could_not_sleep.constructing_a_statement'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('cannot_build_his_own_statement_based_on_visual_information_received')}
                                        name='game_how_the_mouse_could_not_sleep.constructing_a_statement'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                            <ProtocolDescriptionSubtitle>{t('story_fit')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('the_story_fits_the_story')}
                                        name='game_how_the_mouse_could_not_sleep.consistency_with_the_plot'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('the_story_does_not_fit_the_story')}
                                        name='game_how_the_mouse_could_not_sleep.consistency_with_the_plot'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                            <ProtocolDescriptionSubtitle>{t('topic')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('disclosed')}
                                        name='game_how_the_mouse_could_not_sleep.topic'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('partially_disclosed')}
                                        value={t('partially_disclosed')}
                                        name='game_how_the_mouse_could_not_sleep.topic'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('not_disclosed')}
                                        value={t('not_disclosed')}
                                        name='game_how_the_mouse_could_not_sleep.topic'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                            <ProtocolDescriptionSubtitle>{t('temporal_logical_sequence_of_events')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('observes')}
                                        name='game_how_the_mouse_could_not_sleep.chronological_event_logic'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('does_not_comply')}
                                        name='game_how_the_mouse_could_not_sleep.chronological_event_logic'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                            <ProtocolDescriptionSubtitle>{t('language_tools')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultWrapper>
                                <ProtocolFormField
                                    type='radio'
                                    label={t('is_fluent_in_linguistic_means_and_adequately_uses_them_when_constructing_a_coherent_text')}
                                    name='game_how_the_mouse_could_not_sleep.language_means'
                                    control={control}
                                    errors={errors}
                                    disabled={isConclusionDisabled || disabled}
                                />
                            </ProtocolResultWrapper>
                            <ProtocolResultWrapper>
                                <ProtocolFormField
                                    type='radio'
                                    label={t('inadequately_uses_linguistic_means_when_constructing_a_coherent_text')}
                                    name='game_how_the_mouse_could_not_sleep.language_means'
                                    control={control}
                                    errors={errors}
                                    disabled={isConclusionDisabled || disabled}
                                />
                            </ProtocolResultWrapper>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkbox'
                                        label={t('phrasal_perseverations')}
                                        name='game_how_the_mouse_could_not_sleep.phrasal_perseverations'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                            <ProtocolDescriptionMain>{t('reproduction')}</ProtocolDescriptionMain>
                            <ProtocolDescriptionSubtitle>{t('the_probability_of_occurrence_of_adverse_events_in_the_reproduction_of_the_text')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkbox'
                                        label={t('retelling_matches_the_original')}
                                        name='game_how_the_mouse_could_not_sleep.retelling_corresponds_to_original'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkbox'
                                        label={t('the_retelling_contains_both_basic_and_additional_information')}
                                        name='game_how_the_mouse_could_not_sleep.retelling_contains_both_basic_and_additional_information'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkbox'
                                        label={t('when_retelling_speech_variability_is_used')}
                                        name='game_how_the_mouse_could_not_sleep.retelling_uses_variability_of_speech'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                {errors.choices16 && <div className='form2__error'> {errors.choices16.message}</div>}
                            </ProtocolResultBlock>
                            <ProtocolDescriptionSubtitle>{t('there_are_some_difficulties_in_reproducing_the_text')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkbox'
                                        label={t('retelling_partially_corresponds_to_the_original')}
                                        name='game_how_the_mouse_could_not_sleep.retelling_partially_corresponds_to_original'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkbox'
                                        label={t('the_summary_contains_only_basic_information')}
                                        name='game_how_the_mouse_could_not_sleep.retelling_contains_only_basic_information'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkbox'
                                        label={t('the_vocabulary_and_syntactic_constructions_of_the_original_are_preserved')}
                                        name='game_how_the_mouse_could_not_sleep.vocabulary_and_syntactic_constructions_of_original'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkbox'
                                        label={t('the_coherence_and_logic_of_the_presentation_is_not_broken')}
                                        name='game_how_the_mouse_could_not_sleep.coherence_and_consistency_of_presentation_is_not_broken'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                {errors.choices17 && <div className='form2__error'> {errors.choices17.message}</div>}
                            </ProtocolResultBlock>
                            <ProtocolDescriptionSubtitle>{t('there_are_significant_difficulties_in_the_reproduction_of_the_text')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkbox'
                                        label={t('retelling_does_not_match_the_original')}
                                        name='game_how_the_mouse_could_not_sleep.retelling_does_not_correspond_to_original'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkbox'
                                        label={t('the_semantic_organization_of_the_text_is_broken')}
                                        name='game_how_the_mouse_could_not_sleep.semantic_organization_of_text_is_broken'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkbox'
                                        label={t('the_coherence_and_logic_of_the_presentation_is_broken')}
                                        name='game_how_the_mouse_could_not_sleep.coherence_and_consistency_of_presentation_is_broken'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkbox'
                                        label={t('significant_difficulties_in_the_language_design_of_the_text')}
                                        name='game_how_the_mouse_could_not_sleep.significant_difficulties_in_language_design_of_text'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                {errors.choices18 && <div className='form2__error'> {errors.choices18.message}</div>}
                            </ProtocolResultBlock>
                            <ProtocolDescriptionMain>{t('understanding')}</ProtocolDescriptionMain>
                            <ProtocolDescriptionSubtitle>{t('content_semantic_meaning_of_the_text')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('identifies')}
                                        name='game_how_the_mouse_could_not_sleep.content_semantic_meaning_of_text'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('does_not_identify')}
                                        name='game_how_the_mouse_could_not_sleep.content_semantic_meaning_of_text'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                            <ProtocolDescriptionSubtitle>{t('understanding')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('understands_only_the_basic_information_of_the_text')}
                                        name='game_how_the_mouse_could_not_sleep.understands_only_basic_information_of_text'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('understanding_of_both_basic_and_additional_information_of_each_semantic_part_of_the_text_is_available')}
                                        name='game_how_the_mouse_could_not_sleep.understands_only_basic_information_of_text'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('understanding_of_the_hidden_meaning_is_available')}
                                        name='game_how_the_mouse_could_not_sleep.understands_only_basic_information_of_text'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                        </ProtocolRow>
                    </>
                )}
                <ProtocolRow>
                    <ProtocolFormField
                        type='textarea'
                        label={t('comment')}
                        name='game_how_the_mouse_could_not_sleep.expert_comment'
                        placeholder={t('expert_comment')}
                        errors={errors}
                        register={register}
                        disabled={disabled}
                    />
                </ProtocolRow>
            </ProtocolBlock>
        </>
    );
};

export default HowTheMouseCouldNotSleep;