import React from 'react';
import { useTranslation } from 'react-i18next';

import ProtocolTitleGame from 'Components/Surveys/ExaminationProtocol/ProtocolTitle/ProtocolTitleGame';
import ProtocolBlockTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBlockTitle/ProtocolBlockTitle';
import ProtocolBlockSubTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBlockSubTitle/ProtocolBlockSubTitle';
import ProtocolBlock from 'Components/Surveys/ExaminationProtocol/ProtocolBlock/ProtocolBlock';
import ProtocolBox from 'Components/Surveys/ExaminationProtocol/ProtocolBox/ProtocolBox';
import ProtocolBoxTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBoxTitle/ProtocolBoxTitle';
import ProtocolRow from 'Components/Surveys/ExaminationProtocol/ProtocolRow/ProtocolRow';
import ProtocolFormField from 'Components/Surveys/ExaminationProtocol/ProtocolFormField/ProtocolFormField';
import ProtocolSubtitleThree from 'Components/Surveys/ExaminationProtocol/ProtocolSubtitleThree/ProtocolSubtitleThree';
import ProtocolRowText from 'Components/Surveys/ExaminationProtocol/ProtocolRowText/ProtocolRowText';
import ProtocolColWidth from 'Components/Surveys/ExaminationProtocol/ProtocolColWidth/ProtocolColWidth';
import ProtocolResultTitle from 'Components/Surveys/ExaminationProtocol/ResultTitle/ResultTitle';
import ProtocolDescriptionSubtitle from 'Components/Surveys/ExaminationProtocol/ProtocolResultTitle/ProtocolResultTitle';
import ProtocolResultBlock from 'Components/Surveys/ExaminationProtocol/ProtocolResultBlock/ProtocolResultBlock';
import ProtocolResultWrapper from 'Components/Surveys/ExaminationProtocol/ProtocolResultWrapper/ProtocolResultWrapper';


const OnTheFarmPartTwoGame = (props) => {

    const  {
        register, errors, control, isConclusionDisabled, disabled, isLessonFinished
    } = props

    const { t } = useTranslation();

    return (
        <>
            <ProtocolBlock>
                <ProtocolTitleGame>{t('farm_game_part_2')}</ProtocolTitleGame>
                <ProtocolBlockTitle>{t('survey_of_the_level_of_formation_of_grammatical_competence')}</ProtocolBlockTitle>
                <ProtocolBlockSubTitle>{t('word_formation')}</ProtocolBlockSubTitle>
                <ProtocolBox>
                    <ProtocolBoxTitle>{t('formation_of_diminutive_forms_of_nouns')}</ProtocolBoxTitle>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label={t('house_house')}
                            name='game_on_the_farm_part_two.house'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label={t('bucket_bucket')}
                            name='game_on_the_farm_part_two.bucket'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label={t('tree_tree')}
                            name='game_on_the_farm_part_two.tree'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                </ProtocolBox>
                <ProtocolBlockSubTitle>{t('inflection')}</ProtocolBlockSubTitle>
                <ProtocolSubtitleThree>{t('the_use_of_case_constructions_prepositions')}</ProtocolSubtitleThree>
                <ProtocolRowText>
                    <ProtocolColWidth>
                        <ProtocolFormField
                            type='text'
                            label={t('at_home')}
                            name='game_on_the_farm_part_two.at_home'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolColWidth>
                    <ProtocolColWidth>
                        <ProtocolFormField
                            type='text'
                            label={t('behind_a_tree')}
                            name='game_on_the_farm_part_two.behind_a_tree'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolColWidth>
                </ProtocolRowText>
                <ProtocolRowText>
                    <ProtocolColWidth>
                        <ProtocolFormField
                            type='text'
                            label={t('on_the_roof')}
                            name='game_on_the_farm_part_two.on_the_roof'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolColWidth>
                    <ProtocolColWidth>
                        <ProtocolFormField
                            type='text'
                            label={t('to_the_right_of_the_kennel')}
                            name='game_on_the_farm_part_two.to_the_right_of_the_kennel'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolColWidth>
                </ProtocolRowText>
                <ProtocolRowText>
                    <ProtocolColWidth>
                        <ProtocolFormField
                            type='text'
                            label={t('on_a_branch_above_misha')}
                            name='game_on_the_farm_part_two.on_the_branch_above_misha'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolColWidth>
                    <ProtocolColWidth>
                        <ProtocolFormField
                            type='text'
                            label={t('to_the_left_of_the_tree')}
                            name='game_on_the_farm_part_two.to_the_left_of_the_tree'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolColWidth>
                </ProtocolRowText>
                <ProtocolRowText>
                    <ProtocolColWidth>
                        <ProtocolFormField
                            type='text'
                            label={t('under_the_boot')}
                            name='game_on_the_farm_part_two.under_the_boot'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolColWidth>
                    <ProtocolColWidth>
                        <ProtocolFormField
                            type='text'
                            label={t('peeps_out_from_behind_misha')}
                            name='game_on_the_farm_part_two.peeps_out_from_behind_Misha'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolColWidth>
                </ProtocolRowText>
                <ProtocolRowText>
                    <ProtocolColWidth>
                        <ProtocolFormField
                            type='text'
                            label={t('before_the_trough')}
                            name='game_on_the_farm_part_two.in_front_of_the_trough'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolColWidth>
                    <ProtocolColWidth>
                        <ProtocolFormField
                            type='text'
                            label={t('in_the_hood')}
                            name='game_on_the_farm_part_two.misha_has_a_hood'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolColWidth>
                </ProtocolRowText>
                {isLessonFinished && (
                    <>
                        <ProtocolResultTitle>{t('conclusion_options')}</ProtocolResultTitle>
                        <ProtocolRow>
                            <ProtocolDescriptionSubtitle>{t('the_level_of_formation_of_grammatical_competence')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('corresponds_to_the_age_norm')}
                                        name='game_on_the_farm_part_two.level_of_grammatical_competence_formation'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('below_the_age_limit')}
                                        name='game_on_the_farm_part_two.level_of_grammatical_competence_formation'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('well_below_the_age_limit')}
                                        name='game_on_the_farm_part_two.level_of_grammatical_competence_formation'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                            <ProtocolDescriptionSubtitle>{t('verbal_skills_and_abilities')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('at_the_very_initial_stage_of_formation')}
                                        name='game_on_the_farm_part_two.inflectional_skills_and_abilities_part_one'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('in_the_formative_stage_characteristic_of_the_speech_of_younger_children')}
                                        name='game_on_the_farm_part_two.inflectional_skills_and_abilities_part_one'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('formed_at_the_level_corresponding_to_this_age_group')}
                                        name='game_on_the_farm_part_two.inflectional_skills_and_abilities_part_one'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('word_changing_skills_and_abilities_are_formed')}
                                        name='game_on_the_farm_part_two.inflectional_skills_and_abilities_part_one'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                            <ProtocolDescriptionSubtitle>{t('word_building_skills_and_abilities')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('word_formation_activity_is_not_formed')}
                                        name='game_on_the_farm_part_two.word_building_skills_and_abilities'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('word_formation_activity_is_at_the_very_initial_stage_of_formation')}
                                        name='game_on_the_farm_part_two.word_building_skills_and_abilities'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('word_formation_activity_is_formed_at_a_level_that_allows_communication')}
                                        name='game_on_the_farm_part_two.word_building_skills_and_abilities'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('word_formation_activity_is_formed')}
                                        name='game_on_the_farm_part_two.word_building_skills_and_abilities'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                            <ProtocolDescriptionSubtitle>{t('syntactic_skills_and_abilities')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultWrapper>
                                <ProtocolFormField
                                    type='radio'
                                    label={t('syntactic_skills_are_formed_at_the_most_elementary_level')}
                                    name='game_on_the_farm_part_two.syntax_skills_and_abilities_part_two'
                                    control={control}
                                    errors={errors}
                                    disabled={isConclusionDisabled || disabled}
                                />
                            </ProtocolResultWrapper>
                            <ProtocolResultWrapper>
                                <ProtocolFormField
                                    type='radio'
                                    label={t('syntactic_skills_are_formed_at_the_level_corresponding_to_the_younger_age_group_below_the_age_standard')}
                                    name='game_on_the_farm_part_two.syntax_skills_and_abilities_part_two'
                                    control={control}
                                    errors={errors}
                                    disabled={isConclusionDisabled || disabled}
                                />
                            </ProtocolResultWrapper>
                            <ProtocolResultWrapper>
                                <ProtocolFormField
                                    type='radio'
                                    label={t('syntactic_skills_are_generally_formed_when_constructing_regular_syntactic_constructions')}
                                    name='game_on_the_farm_part_two.syntax_skills_and_abilities_part_two'
                                    control={control}
                                    errors={errors}
                                    disabled={isConclusionDisabled || disabled}
                                />
                            </ProtocolResultWrapper>
                            <ProtocolResultWrapper>
                                <ProtocolFormField
                                    type='radio'
                                    label={t('syntactic_skills_and_abilities_are_formed_in_speech_there_is_a_variety_of_syntactic_constructions')}
                                    name='game_on_the_farm_part_two.syntax_skills_and_abilities_part_two'
                                    control={control}
                                    errors={errors}
                                    disabled={isConclusionDisabled || disabled}
                                />
                            </ProtocolResultWrapper>
                        </ProtocolRow>
                    </>
                )}
                <ProtocolRow>
                    <ProtocolFormField
                        type='textarea'
                        label={t('comment')}
                        name='game_on_the_farm_part_two.expert_comment'
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

export default OnTheFarmPartTwoGame;