import React from 'react';
import { useTranslation } from 'react-i18next';

import ProtocolBlock from 'Components/Surveys/ExaminationProtocol/ProtocolBlock/ProtocolBlock';
import ProtocolBlockTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBlockTitle/ProtocolBlockTitle';
import ProtocolTitleGame from 'Components/Surveys/ExaminationProtocol/ProtocolTitle/ProtocolTitleGame';
import ProtocolBlockSubTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBlockSubTitle/ProtocolBlockSubTitle';
import ProtocolBox from 'Components/Surveys/ExaminationProtocol/ProtocolBox/ProtocolBox';
import ProtocolBoxTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBoxTitle/ProtocolBoxTitle';
import ProtocolRowText from 'Components/Surveys/ExaminationProtocol/ProtocolRowText/ProtocolRowText';
import ProtocolCol from 'Components/Surveys/ExaminationProtocol/ProtocolCol/ProtocolCol';
import ProtocolFormField from 'Components/Surveys/ExaminationProtocol/ProtocolFormField/ProtocolFormField';
import ProtocolRow from 'Components/Surveys/ExaminationProtocol/ProtocolRow/ProtocolRow';
import ProtocolResultTitle from 'Components/Surveys/ExaminationProtocol/ResultTitle/ResultTitle';
import ProtocolDescriptionSubtitle from 'Components/Surveys/ExaminationProtocol/ProtocolResultTitle/ProtocolResultTitle';
import ProtocolResultBlock from 'Components/Surveys/ExaminationProtocol/ProtocolResultBlock/ProtocolResultBlock';
import ProtocolResultWrapper from 'Components/Surveys/ExaminationProtocol/ProtocolResultWrapper/ProtocolResultWrapper';


const OnTheFarmGame = (props) => {

    const  {
        register, errors, control, isConclusionDisabled, disabled, isLessonFinished
    } = props

    const { t } = useTranslation();

    return (
        <>
            <ProtocolBlock>
                <ProtocolTitleGame>{t('farm_game_part_1')}</ProtocolTitleGame>
                <ProtocolBlockTitle>{t('examination_of_the_level_of_formation_of_the_lexicon')}</ProtocolBlockTitle>
                <ProtocolBlockSubTitle>{t('subject_dictionary')}</ProtocolBlockSubTitle>
                <ProtocolBox>
                    <ProtocolBoxTitle>{t('generalizing_concepts')}</ProtocolBoxTitle>
                    <ProtocolRowText>
                        <ProtocolCol>
                            <ProtocolFormField
                                type='text'
                                label='Босоножки, ботинки, носки, сапоги'
                                name='game_on_the_farm.sandals_boots_socks_boots'
                                register={register}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolCol>
                        <ProtocolCol>
                            <ProtocolFormField
                                type='text'
                                label='Обувь (одежда)'
                                name='game_on_the_farm.shoes_clothes'
                                register={register}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolCol>
                    </ProtocolRowText>
                    <ProtocolRowText>
                        <ProtocolCol>
                            <ProtocolFormField
                                type='text'
                                label={t('Морковь, яблоко, лук, капуста')}
                                name='game_on_the_farm.carrot_apple_onion_cabbage'
                                register={register}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolCol>
                        <ProtocolCol>
                            <ProtocolFormField
                                type='text'
                                label={t('Овощи (фрукты)')}
                                name='game_on_the_farm.vegetables_fruits'
                                register={register}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolCol>
                    </ProtocolRowText>
                    <ProtocolRowText>
                        <ProtocolCol>
                            <ProtocolFormField
                                type='text'
                                label={t('Стол, стул, стакан, диван')}
                                name='game_on_the_farm.table_chair_glass_sofa'
                                register={register}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolCol>
                        <ProtocolCol>
                            <ProtocolFormField
                                type='text'
                                label={t('Мебель (посуда)')}
                                name='game_on_the_farm.furniture_dishes'
                                register={register}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolCol>
                    </ProtocolRowText>
                    <ProtocolRowText>
                        <ProtocolCol>
                            <ProtocolFormField
                                type='text'
                                label={t('Шуба, куртка, пальто, шапка')}
                                name='game_on_the_farm.fur_coat_jacket_coat_hat'
                                register={register}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolCol>
                        <ProtocolCol>
                            <ProtocolFormField
                                type='text'
                                label={t('Одежда (голов. убор)')}
                                name='game_on_the_farm.clothes_headwear'
                                register={register}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolCol>
                    </ProtocolRowText>
                    <ProtocolRowText>
                        <ProtocolCol>
                            <ProtocolFormField
                                type='text'
                                label={t('Кукла, кубики, мишка, троллейбус')}
                                name='game_on_the_farm.doll_cubes_car_trolley'
                                register={register}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolCol>
                        <ProtocolCol>
                            <ProtocolFormField
                                type='text'
                                label={t('Игрушки (транспорт)')}
                                name='game_on_the_farm.toys_transport'
                                register={register}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolCol>
                    </ProtocolRowText>
                </ProtocolBox>
                <ProtocolBox>
                    <ProtocolBoxTitle>{t('baby_animals')}</ProtocolBoxTitle>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label={t('cat_kitten')}
                            name='game_on_the_farm.cat_kitten'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label={t('dog_puppy')}
                            name='game_on_the_farm.dog_puppy'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label={t('cow_calf')}
                            name='game_on_the_farm.cow_calf'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label={t('pig_piglet')}
                            name='game_on_the_farm.pig_piglet'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                </ProtocolBox>
                <ProtocolBlockSubTitle>{t('verb_dictionary')}</ProtocolBlockSubTitle>
                <ProtocolBox>
                    <ProtocolBoxTitle>{t('name_of_actions')}</ProtocolBoxTitle>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label={t('cat_meows')}
                            name='game_on_the_farm.cat_meows'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label={t('dog_barking')}
                            name='game_on_the_farm.dog_barks'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label={t('cow_mooing')}
                            name='game_on_the_farm.cow_hums'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label={t('the_pig_grunts')}
                            name='game_on_the_farm.pig_grunts'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                </ProtocolBox>
                <ProtocolBlockSubTitle>{t('feature_dictionary')}</ProtocolBlockSubTitle>
                <ProtocolBox>
                    <ProtocolBoxTitle>{t('antonym_survey')}</ProtocolBoxTitle>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label={t('low_high_home')}
                            name='game_on_the_farm.low_high_home'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label={t('wide_narrow_belt')}
                            name='game_on_the_farm.wide_narrow_belt'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label={t('heavy_light_bucket_of_water_ball')}
                            name='game_on_the_farm.heavy_light_bucket_of_water_ball'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label={t('clean_dirty_piggy')}
                            name='game_on_the_farm.clean_dirty_pig'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label={t('slow_fast_snail')}
                            name='game_on_the_farm.slow_fast_snail'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label={t('sad_cheerful_puppy')}
                            name='game_on_the_farm.sad_cheerful_puppy'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label={t('dry_wet_grasshopper')}
                            name='game_on_the_farm.dry_wet_grasshopper'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label={t('cold_hot_ice_cream_potatoes')}
                            name='game_on_the_farm.cold_hot_ice_cream_potatoes'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                </ProtocolBox>
                {isLessonFinished && (
                    <>
                        <ProtocolResultTitle>{t('conclusion_options')}</ProtocolResultTitle>
                        <ProtocolRow>
                            <ProtocolDescriptionSubtitle>{t('level_of_speech_understandin')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('null')}
                                        name='game_on_the_farm.speech_comprehension_level'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('situational')}
                                        name='game_on_the_farm.speech_comprehension_level'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('nominative')}
                                        name='game_on_the_farm.speech_comprehension_level'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('predicative')}
                                        name='game_on_the_farm.speech_comprehension_level'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('dissected')}
                                        name='game_on_the_farm.speech_comprehension_level'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkbox'
                                        label={t('the_presence_of_the_phenomenon_of_alienation_of_the_meaning_of_the_word')}
                                        name='game_on_the_farm.presence_of_phenomenon_of_alienation'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                            <ProtocolDescriptionSubtitle>{t('the_level_of_formation_of_the_lexicon')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('corresponds_to_the_age_norm')}
                                        name='game_on_the_farm.level_of_vocabulary_formation'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('not_age_appropriate')}
                                        name='game_on_the_farm.level_of_vocabulary_formation'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                            <ProtocolDescriptionSubtitle>{t('active_semantic_component_active_dictionary')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('violation_of_the_word_actualization_the_choice_of_a_word_from_the_semantic_field_is_violated')}
                                        name='game_on_the_farm.active_semantic_component_active_vocabulary'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('presence_of_neologisms')}
                                        name='game_on_the_farm.active_semantic_component_active_vocabulary'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                            <ProtocolDescriptionSubtitle>{t('subject_relatedness_of_the_word')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('sustainable')}
                                        name='game_on_the_farm.subject_relation_of_a_word'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('unstable')}
                                        name='game_on_the_farm.subject_relation_of_a_word'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                            <ProtocolDescriptionSubtitle>{t('verbal_paraphasias')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('literal')}
                                        name='game_on_the_farm.verbal_paraphasias'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('verbal_a_mixture_of_species_characteristics')}
                                        name='game_on_the_farm.verbal_paraphasias'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('verbal_mixing_signs_part_body')}
                                        name='game_on_the_farm.verbal_paraphasias'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('verbal_replacing_the_name_of_an_object_with_a_contextual_action')}
                                        name='game_on_the_farm.verbal_paraphasias'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('verbal_mixing_by_resemblance')}
                                        name='game_on_the_farm.verbal_paraphasias'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                            <ProtocolDescriptionSubtitle>{t('dictionary_volume')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('limited')}
                                        name='game_on_the_farm.vocabulary_size'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('sharply_limited')}
                                        name='game_on_the_farm.vocabulary_size'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('sufficient_for_full_communication')}
                                        name='game_on_the_farm.vocabulary_size'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('very_few_peripheral_words_even_from_the_most_common_pragmatically_valuable_thematic_groups_for_this_age')}
                                        name='game_on_the_farm.vocabulary_size_part_two'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('the_dictionary_mainly_consists_of_words_denoting_objects')}
                                        name='game_on_the_farm.vocabulary_size_part_two'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                            <ProtocolDescriptionSubtitle>{t('dictionary_system_organization')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('the_system_organization_of_the_dictionary_is_at_the_very_initial_stage_of_formation')}
                                        name='game_on_the_farm.systemic_vocabulary_organization'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('the_organization_of_the_dictionary_is_unsystematic_lacking_motivated_adequate_associations')}
                                        name='game_on_the_farm.systemic_vocabulary_organization'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('the_systemic_organization_of_the_dictionary_is_at_the_level_of_establishing')}
                                        name='game_on_the_farm.systemic_vocabulary_organization'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('the_systemic_organization_of_the_dictionary_is_distinguished_by_a_large_number_and_variety_of_semantic_and_formal_connections')}
                                        name='game_on_the_farm.systemic_vocabulary_organization'
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
                        name='game_on_the_farm.expert_comment'
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

export default OnTheFarmGame;