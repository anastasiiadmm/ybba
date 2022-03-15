import React from 'react';
import { useTranslation } from 'react-i18next';

import ProtocolPlaceholderTitle
  from 'Components/Surveys/ExaminationProtocol/ProtocolPlaceholderTitle/ProtocolPlaceholderTitle';
import ProtocolBlockTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBlockTitle/ProtocolBlockTitle';
import ProtocolBlock from 'Components/Surveys/ExaminationProtocol/ProtocolBlock/ProtocolBlock';
import ProtocolFormField from 'Components/Surveys/ExaminationProtocol/ProtocolFormField/ProtocolFormField';
import ProtocolRow from 'Components/Surveys/ExaminationProtocol/ProtocolRow/ProtocolRow';
import ProtocolResultTitle from 'Components/Surveys/ExaminationProtocol/ResultTitle/ResultTitle';
import ProtocolResultBlock from 'Components/Surveys/ExaminationProtocol/ProtocolResultBlock/ProtocolResultBlock';
import ProtocolResultWrapper from 'Components/Surveys/ExaminationProtocol/ProtocolResultWrapper/ProtocolResultWrapper';
import ProtocolDescriptionSubtitle
  from 'Components/Surveys/ExaminationProtocol/ProtocolResultTitle/ProtocolResultTitle';


const CapriciousPrincessGame = (props) => {

  const {
    register, errors, control, isConclusionDisabled, disabled, isLessonFinished
  } = props

  const { t } = useTranslation();

  return (
      <>
        <ProtocolBlock>
          <ProtocolPlaceholderTitle>{t('Игра «Капризная принцесса»')}</ProtocolPlaceholderTitle>
          <ProtocolBlockTitle>{t('Слоговая структура')}</ProtocolBlockTitle>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('Стул')}
                name='game_capricious_princess.chair'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('Бантик')}
                name='game_capricious_princess.bow'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('Вертолет')}
                name='game_capricious_princess.helicopter'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('Самолетик (бумажный)')}
                name='game_capricious_princess.paper_airplane'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('Экскаватор')}
                name='game_capricious_princess.excavator'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('Фотоаппарат')}
                name='game_capricious_princess.camera'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          {isLessonFinished && (
              <>
                <ProtocolResultTitle>{t('Варианты заключения')}</ProtocolResultTitle>
                <ProtocolResultBlock>
                  <ProtocolResultWrapper>
                    <ProtocolFormField
                        type='radio'
                        label={t('Слоговая структура слова не нарушена')}
                        name='game_capricious_princess.syllabic_structure_of_a_word'
                        control={control}
                        errors={errors}
                        disabled={isConclusionDisabled || disabled}
                    />
                  </ProtocolResultWrapper>
                  <ProtocolResultWrapper>
                    <ProtocolFormField
                        type='radio'
                        label={t('Слоговая структура нарушена')}
                        name='game_capricious_princess.syllabic_structure_of_a_word'
                        control={control}
                        errors={errors}
                        disabled={isConclusionDisabled || disabled}
                    />
                  </ProtocolResultWrapper>
                </ProtocolResultBlock>
                <ProtocolDescriptionSubtitle>{t('Диспраксичные нарушения')}</ProtocolDescriptionSubtitle>
                <ProtocolResultBlock>
                  <ProtocolResultWrapper>
                    <ProtocolFormField
                        type='checkbox'
                        label={t('Диспраксичные нарушения не наблюдаются')}
                        name='game_capricious_princess.dyspraxic_disturbances_are_not_observed'
                        control={control}
                        errors={errors}
                        disabled={isConclusionDisabled || disabled}
                    />
                  </ProtocolResultWrapper>
                  <ProtocolResultWrapper>
                    <ProtocolFormField
                        type='checkbox'
                        label={t('Пропуски слогов')}
                        name='game_capricious_princess.missing_syllables'
                        control={control}
                        errors={errors}
                        disabled={isConclusionDisabled || disabled}
                    />
                  </ProtocolResultWrapper>
                  <ProtocolResultWrapper>
                    <ProtocolFormField
                        type='checkbox'
                        label={t('Пропуски слогообразующих гласных')}
                        name='game_capricious_princess.missing_syllabic_vowels'
                        control={control}
                        errors={errors}
                        disabled={isConclusionDisabled || disabled}
                    />
                  </ProtocolResultWrapper>
                  <ProtocolResultWrapper>
                    <ProtocolFormField
                        type='checkbox'
                        label={t('Перестановки звуков и/или слогов')}
                        name='game_capricious_princess.permutations_of_sounds_and_or_syllables'
                        control={control}
                        errors={errors}
                        disabled={isConclusionDisabled || disabled}
                    />
                  </ProtocolResultWrapper>
                  <ProtocolResultWrapper>
                    <ProtocolFormField
                        type='checkbox'
                        label={t('Вставки гласных в стечение согласных')}
                        name='game_capricious_princess.insertion_of_vowels_into_consonants'
                        control={control}
                        errors={errors}
                        disabled={isConclusionDisabled || disabled}
                    />
                  </ProtocolResultWrapper>
                  <ProtocolResultWrapper>
                    <ProtocolFormField
                        type='checkbox'
                        label={t('Добавление слогов')}
                        name='game_capricious_princess.adding_syllables'
                        control={control}
                        errors={errors}
                        disabled={isConclusionDisabled || disabled}
                    />
                  </ProtocolResultWrapper>
                  {errors.choices14 && <div className='form2__error'> {errors.choices14.message}</div>}
                </ProtocolResultBlock>
                <ProtocolDescriptionSubtitle>{t('Гностические нарушения')}</ProtocolDescriptionSubtitle>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='checkbox'
                      label={t('Гностические нарушения не наблюдаются')}
                      name='game_capricious_princess.gnostic_disturbances_are_not_observed'
                      control={control}
                      errors={errors}
                      disabled={isConclusionDisabled || disabled}
                  />
                </ProtocolResultWrapper>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='checkbox'
                      label={t('Сокращения стечения согласных')}
                      name='game_capricious_princess.consonant_reduction'
                      control={control}
                      errors={errors}
                      disabled={isConclusionDisabled || disabled}
                  />
                </ProtocolResultWrapper>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='checkbox'
                      label={t('Вставки согласных в слог')}
                      name='game_capricious_princess.inserting_consonants_into_a_syllable'
                      control={control}
                      errors={errors}
                      disabled={isConclusionDisabled || disabled}
                  />
                </ProtocolResultWrapper>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='checkbox'
                      label={t('Антиципации')}
                      name='game_capricious_princess.anticipation'
                      control={control}
                      errors={errors}
                      disabled={isConclusionDisabled || disabled}
                  />
                </ProtocolResultWrapper>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='checkbox'
                      label={t('Уподобление слогов')}
                      name='game_capricious_princess.assimilation_of_syllables'
                      control={control}
                      errors={errors}
                      disabled={isConclusionDisabled || disabled}
                  />
                </ProtocolResultWrapper>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='checkbox'
                      label={t('Добавление слогов')}
                      name='game_capricious_princess.gnotic_violations_addition_of_syllables'
                      control={control}
                      errors={errors}
                      disabled={isConclusionDisabled || disabled}
                  />
                </ProtocolResultWrapper>
                {errors.choices15 && <div className='form2__error'> {errors.choices15.message}</div>}
              </>
          )}
          <ProtocolRow>
            <ProtocolFormField
                type='textarea'
                label={t('Комментарий')}
                name='game_capricious_princess.expert_comment'
                placeholder={t('Комментарий специалиста')}
                errors={errors}
                register={register}
                disabled={disabled}
            />
          </ProtocolRow>
        </ProtocolBlock>
      </>
  );
};

export default CapriciousPrincessGame;
