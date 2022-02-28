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
                    {t('what_time_did_the_child_sit_up_on_their_own')}
                </ProtocolPlaceholderTitle>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('sat_in')}
                        name='additional_information.sat_in'
                        {...commonFieldProps}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('crawled_on_all_fours_in')}
                        name='additional_information.crawled_on_all_fours_into'
                        {...commonFieldProps}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('went_to')}
                        name='additional_information.went_to'
                        {...commonFieldProps}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('learned_to_jump_on_two_legs_in')}
                        name='additional_information.learned_to_jump_on_two_legs_in'
                        {...commonFieldProps}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('injuries_infections_before_during_and_or_after_childbirth')}
                        name='additional_information.injury_infection_before_during_and_or_after_childbirth'
                        {...commonFieldProps}
                        disabled={disabled}
                    />
                </ProtocolRow>
            </ProtocolSubBlock>
            <ProtocolSubBlock>
                <ProtocolBlockSubTitle>{t('early_speech_late_speech_development')}</ProtocolBlockSubTitle>
                <ProtocolPlaceholderTitle>
                    {t('at_what_age_did_babbling_appear')}
                </ProtocolPlaceholderTitle>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('babble_in')}
                        name='additional_information.babbling_in'
                        {...commonFieldProps}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('first_words_in')}
                        name='additional_information.first_words_in'
                        {...commonFieldProps}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('the_first_short_phrases_in')}
                        name='additional_information.first_short_phrases_in'
                        {...commonFieldProps}
                        disabled={disabled}
                    />
                </ProtocolRow>
            </ProtocolSubBlock>
            <ProtocolSubBlock>
                <ProtocolBlockSubTitle>{t('speech_environment')}</ProtocolBlockSubTitle>
                <ProtocolPlaceholderTitle>
                    {t('what_language_is_spoken_with_the_child_at_home')}
                </ProtocolPlaceholderTitle>
                <ProtocolFormField
                    type='textarea'
                    name='additional_information.speech_environment'
                    placeholder={t('parent_response')}
                    {...commonFieldProps}
                    disabled={disabled}
                />
            </ProtocolSubBlock>
            <ProtocolSubBlock>
                <ProtocolBlockSubTitle>{t('current_and_previous_diseases_injuries_operations')}</ProtocolBlockSubTitle>
                <ProtocolPlaceholderTitle>
                    {t('did_the_child_have_major_operations_and_at_what_age')}
                </ProtocolPlaceholderTitle>
                <ProtocolFormField
                    type='textarea'
                    name='additional_information.present_and_past_diseases'
                    placeholder={t('parent_response')}
                    {...commonFieldProps}
                    disabled={disabled}
                />
            </ProtocolSubBlock>
            <ProtocolSubBlock>
                <ProtocolBlockSubTitle>{t('medical_treatment')}</ProtocolBlockSubTitle>
                <ProtocolPlaceholderTitle>
                    {t('have_you_are_you_on_medication_if_yes_then_what')}
                </ProtocolPlaceholderTitle>
                <ProtocolFormField
                    type='textarea'
                    name='additional_information.drug_treatment'
                    placeholder={t('parent_response')}
                    {...commonFieldProps}
                    disabled={disabled}
                />
            </ProtocolSubBlock>
            <ProtocolSubBlock>
                <ProtocolBlockSubTitle>{t('neurological_status')}</ProtocolBlockSubTitle>
                <ProtocolPlaceholderTitle>
                    {t('has_a_neurologist_ever_made_a_diagnosis')}
                </ProtocolPlaceholderTitle>
                <ProtocolFormField
                    type='textarea'
                    name='additional_information.neurological_status'
                    placeholder={t('parent_response')}
                    {...commonFieldProps}
                    disabled={disabled}
                />
            </ProtocolSubBlock>
            <ProtocolSubBlock>
                <ProtocolBlockSubTitle>{t('vision')}</ProtocolBlockSubTitle>
                <ProtocolPlaceholderTitle>{t('what_is_the_child_vision_what_does_the_optometrist_say')}</ProtocolPlaceholderTitle>
                <ProtocolFormField
                    type='textarea'
                    name='additional_information.vision'
                    placeholder={t('parent_response')}
                    {...commonFieldProps}
                    disabled={disabled}
                />
            </ProtocolSubBlock>
            <ProtocolSubBlock>
                <ProtocolBlockSubTitle>{t('hearing')}</ProtocolBlockSubTitle>
                <ProtocolPlaceholderTitle>{t('what_is_the_child_hearing_what_does_the_otolaryngologist_say')}</ProtocolPlaceholderTitle>
                <ProtocolFormField
                    type='textarea'
                    name='additional_information.hearing'
                    placeholder={t('parent_response')}
                    {...commonFieldProps}
                    disabled={disabled}
                />
            </ProtocolSubBlock>
            <ProtocolSubBlock>
                <ProtocolBlockSubTitle>{t('eating_behavior')}</ProtocolBlockSubTitle>
                <ProtocolPlaceholderTitle>
                    {t('what_is_the_child_appetite')}
                </ProtocolPlaceholderTitle>
                <ProtocolFormField
                    type='textarea'
                    name='additional_information.eating_behavior'
                    placeholder={t('parent_response')}
                    {...commonFieldProps}
                    disabled={disabled}
                />
            </ProtocolSubBlock>
            <ProtocolSubBlock>
                <ProtocolBlockSubTitle>{t('emotional_psychological_level')}</ProtocolBlockSubTitle>
                <ProtocolPlaceholderTitle>
                    {t('how_does_he_usually_behave_at_home_in_a_familiar_environment')}
                </ProtocolPlaceholderTitle>
                <ProtocolFormField
                    type='textarea'
                    name='additional_information.emotional_and_psychological_level'
                    placeholder={t('parent_response')}
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