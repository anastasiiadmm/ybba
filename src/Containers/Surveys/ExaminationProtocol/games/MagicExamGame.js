import React from 'react';
import { useTranslation } from 'react-i18next';

import ProtocolBlock from 'Components/Surveys/ExaminationProtocol/ProtocolBlock/ProtocolBlock';
import ProtocolPlaceholderTitle
  from 'Components/Surveys/ExaminationProtocol/ProtocolPlaceholderTitle/ProtocolPlaceholderTitle';
import ProtocolBlockTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBlockTitle/ProtocolBlockTitle';
import ProtocolFormField from 'Components/Surveys/ExaminationProtocol/ProtocolFormField/ProtocolFormField';
import ProtocolRow from 'Components/Surveys/ExaminationProtocol/ProtocolRow/ProtocolRow';
import ProtocolResultTitle from 'Components/Surveys/ExaminationProtocol/ResultTitle/ResultTitle';
import ProtocolDescriptionSubtitle
  from 'Components/Surveys/ExaminationProtocol/ProtocolResultTitle/ProtocolResultTitle';
import ProtocolResultBlock from 'Components/Surveys/ExaminationProtocol/ProtocolResultBlock/ProtocolResultBlock';
import ProtocolResultWrapper from 'Components/Surveys/ExaminationProtocol/ProtocolResultWrapper/ProtocolResultWrapper';
import ProtocolBlockSubTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBlockSubTitle/ProtocolBlockSubTitle';
import ProtocolBox from 'Components/Surveys/ExaminationProtocol/ProtocolBox/ProtocolBox';
import ProtocolBoxTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBoxTitle/ProtocolBoxTitle';


const MagicExamGame = (props) => {

  const {
    register, errors, control, isConclusionDisabled, disabled, isLessonFinished
  } = props

  const { t } = useTranslation();

  return (
      <>
        <ProtocolBlock>
          <ProtocolPlaceholderTitle>{t('game_magic_exam')}</ProtocolPlaceholderTitle>
          <ProtocolBlockTitle>{t('phonemic_perception')}</ProtocolBlockTitle>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('pet_bat')}
                name='game_magic_exam.bear_bowl'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('fat_vet')}
                name='game_magic_exam.cancer_varnish'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('ball_boar')}
                name='game_magic_exam.scythe_goat'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('bag_back')}
                name='game_magic_exam.duck_fishing_rod'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('tiare_deer')}
                name='game_magic_exam.barrel_kidney'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('soup_zoo')}
                name='game_magic_exam.saber_heron'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          {isLessonFinished && (
              <>
                <ProtocolResultTitle>{t('conclusion_options')}</ProtocolResultTitle>
                <ProtocolRow>
                  <ProtocolDescriptionSubtitle>{t('the_level_of_formation_of_phonetic_phonological_competence')}</ProtocolDescriptionSubtitle>
                  <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('the_level_of_formation_of_phonetic_phonological_competence_corresponds_to_the_age_norm')}
                          name='game_magic_exam.level_of_formation_of_phonetic_phonological_competence'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('the_level_of_formation_of_phonetic_phonological_competence_does_not_correspond_to_the_age_norm')}
                          name='game_magic_exam.level_of_formation_of_phonetic_phonological_competence'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                  </ProtocolResultBlock>
                  <ProtocolDescriptionSubtitle>{t('state_of_phonemic_perception')}</ProtocolDescriptionSubtitle>
                  <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('phonemic_perception_is_formed')}
                          name='game_magic_exam.state_of_phonemic_perception'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('phonemic_perception_is_not_formed')}
                          name='game_magic_exam.state_of_phonemic_perception'
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
                          label={t('difficulty_distinguishing_voiceless_and_voiced_consonants')}
                          name='game_magic_exam.there_are_difficulties_in_distinguishing'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('impaired_distinction_between_hard_and_soft_consonants')}
                          name='game_magic_exam.distinction_between_hard_and_soft_consonants'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('impaired_distinction_between_affricates_and_their_constituent_sounds')}
                          name='game_magic_exam.distinction_between_affricates_and_their_constituent'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    {errors.choices13 && <div className='form2__error'> {errors.choices13.message} </div>}
                  </ProtocolResultBlock>
                </ProtocolRow>
              </>
          )}
          <ProtocolRow>
            <ProtocolFormField
                type='textarea'
                label={t('comment')}
                name='game_magic_exam.expert_comment'
                placeholder={t('expert_comment')}
                errors={errors}
                register={register}
                disabled={disabled}
            />
          </ProtocolRow>
        </ProtocolBlock>
        <ProtocolBlock>
          <ProtocolBlockSubTitle>{t('sound_analysis_and_synthesis')}</ProtocolBlockSubTitle>
          <ProtocolBox>
            <ProtocolBoxTitle>{t('synthesis')}</ProtocolBoxTitle>
            <ProtocolRow>
              <ProtocolFormField
                  type='text'
                  label={t('Н – О – С - нос')}
                  name='game_magic_exam.nose'
                  register={register}
                  errors={errors}
                  disabled={disabled}
              />
            </ProtocolRow>
            <ProtocolRow>
              <ProtocolFormField
                  type='text'
                  label={t('М - А – К – мак')}
                  name='game_magic_exam.poppy'
                  register={register}
                  errors={errors}
                  disabled={disabled}
              />
            </ProtocolRow>
            <ProtocolRow>
              <ProtocolFormField
                  type='text'
                  label={t('М – У – Х – А – муха')}
                  name='game_magic_exam.fly'
                  register={register}
                  errors={errors}
                  disabled={disabled}
              />
            </ProtocolRow>
            <ProtocolRow>
              <ProtocolFormField
                  type='text'
                  label={t('К – О – Ш – К – И - кошки')}
                  name='game_magic_exam.cats'
                  register={register}
                  errors={errors}
                  disabled={disabled}
              />
            </ProtocolRow>
          </ProtocolBox>
          <ProtocolBox>
            <ProtocolBoxTitle>{t('analysis')}</ProtocolBoxTitle>
            <ProtocolRow>
              <ProtocolFormField
                  type='text'
                  label={t('Какой первый звук в словах «мак» и «муха»?')}
                  name='game_magic_exam.what_is_first_sound_in_words_poppy_and_fly'
                  register={register}
                  errors={errors}
                  disabled={disabled}
              />
            </ProtocolRow>
            <ProtocolRow>
              <ProtocolFormField
                  type='text'
                  label={t('Какой первый звук в слове «нос»?')}
                  name='game_magic_exam.what_is_first_sound_in_word_nose'
                  register={register}
                  errors={errors}
                  disabled={disabled}
              />
            </ProtocolRow>
            <ProtocolRow>
              <ProtocolFormField
                  type='text'
                  label={t('Какой последний звук в словах «кошка» и «муха»?')}
                  name='game_magic_exam.what_is_last_sound_in_words_cat_and_fly'
                  register={register}
                  errors={errors}
                  disabled={disabled}
              />
            </ProtocolRow>
            <ProtocolRow>
              <ProtocolFormField
                  type='text'
                  label={t('Какой последний звук в слове «мак»?')}
                  name='game_magic_exam.what_is_last_sound_in_word_poppy'
                  register={register}
                  errors={errors}
                  disabled={disabled}
              />
            </ProtocolRow>
            <ProtocolRow>
              <ProtocolFormField
                  type='text'
                  label={t('Какой общий звук в словах «кошки» и «нос»?')}
                  name='game_magic_exam.what_is_common_sound_in_words_of_a_cat_and_anose'
                  register={register}
                  errors={errors}
                  disabled={disabled}
              />
            </ProtocolRow>
            <ProtocolRow>
              <ProtocolFormField
                  type='text'
                  label={t('В каком из слов нет звука О: нос, кошки, мак?')}
                  name='game_magic_exam.in_which_of_words_there_is_no_sound_about_nose_of_cat_poppy'
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
                  <ProtocolDescriptionSubtitle>{t('phonemic_awareness')}</ProtocolDescriptionSubtitle>
                  <ProtocolResultWrapper>
                    <ProtocolFormField
                        type='radio'
                        label={t('formed')}
                        name='game_magic_exam.phonemic_hearing'
                        control={control}
                        errors={errors}
                        disabled={isConclusionDisabled || disabled}
                    />
                  </ProtocolResultWrapper>
                  <ProtocolResultWrapper>
                    <ProtocolFormField
                        type='radio'
                        label={t('not_formed')}
                        name='game_magic_exam.phonemic_hearing'
                        control={control}
                        errors={errors}
                        disabled={isConclusionDisabled || disabled}
                    />
                  </ProtocolResultWrapper>
                  <ProtocolDescriptionSubtitle>{t('phonological_sound_analysis_and_synthesis_skills')}</ProtocolDescriptionSubtitle>
                  <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('not_formed')}
                          name='game_magic_exam.phonological_sound_analysis_and_synthesis_skills'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('are_in_the_very_early_stages_of_development_the_child_can_analyze_the_sound_range_consisting_of')}
                          name='game_magic_exam.phonological_sound_analysis_and_synthesis_skills'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('are_in_the_active_stage_of_formation_the_child_can_analyze_words_like')}
                          name='game_magic_exam.phonological_sound_analysis_and_synthesis_skills'
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
                name='game_magic_exam.phonemic_hearing_expert_comment'
                placeholder={t('expert_comment')}
                errors={errors}
                register={register}
                disabled={disabled}
            />
          </ProtocolRow>
        </ProtocolBlock>
      </>
  )
};

export default MagicExamGame;
