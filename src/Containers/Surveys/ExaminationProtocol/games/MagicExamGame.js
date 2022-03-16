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
          <ProtocolPlaceholderTitle>{t('Игра «Экзамен по магии»')}</ProtocolPlaceholderTitle>
          <ProtocolBlockTitle>{t('Фонематическое восприятие')}</ProtocolBlockTitle>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('Мишка-Миска (Ш — С)')}
                name='game_magic_exam.bear_bowl'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('Рак-Лак (Р — Л)')}
                name='game_magic_exam.cancer_varnish'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('Коса-Коза (С — З)')}
                name='game_magic_exam.scythe_goat'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('Уточка-Удочка (Т — Д)')}
                name='game_magic_exam.duck_fishing_rod'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('Бочка-Почка (Б — П)')}
                name='game_magic_exam.barrel_kidney'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('Сабля-Цапля (С — Ц)')}
                name='game_magic_exam.saber_heron'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          {isLessonFinished && (
              <>
                <ProtocolResultTitle>{t('Варианты заключения')}</ProtocolResultTitle>
                <ProtocolRow>
                  <ProtocolDescriptionSubtitle>{t('Уровень сформированности фонетико-фонологической компетенции')}</ProtocolDescriptionSubtitle>
                  <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Уровень сформированности фонетико-фонологической компетенции соответствует возрастной норме')}
                          value='уровень сформированности фонетико-фонологической компетенции соответствует возрастной норме'
                          name='game_magic_exam.level_of_formation_of_phonetic_phonological_competence'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Уровень сформированности фонетико-фонологической компетенции не соответствует возрастной норме')}
                          value='уровень сформированности фонетико-фонологической компетенции не соответствует возрастной норме'
                          name='game_magic_exam.level_of_formation_of_phonetic_phonological_competence'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                  </ProtocolResultBlock>
                  <ProtocolDescriptionSubtitle>{t('Состояние фонематического восприятия')}</ProtocolDescriptionSubtitle>
                  <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Фонематическое восприятие сформировано')}
                          value='фонематическое восприятие сформировано'
                          name='game_magic_exam.state_of_phonemic_perception'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Фонематическое восприятие не сформировано')}
                          value='фонематическое восприятие не сформировано'
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
                          label={t('Наблюдаются трудности различения глухих и звонких согласных')}
                          name='game_magic_exam.there_are_difficulties_in_distinguishing'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('Нарушено различение твердых и мягких согласных')}
                          name='game_magic_exam.distinction_between_hard_and_soft_consonants'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('Нарушено различение аффрикат и входящих в их состав звуков')}
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
                label={t('Комментарий')}
                name='game_magic_exam.expert_comment'
                placeholder={t('Комментарий специалиста')}
                errors={errors}
                register={register}
                disabled={disabled}
            />
          </ProtocolRow>
        </ProtocolBlock>
        <ProtocolBlock>
          <ProtocolBlockSubTitle>{t('Звуковой анализ и синтез')}</ProtocolBlockSubTitle>
          <ProtocolBox>
            <ProtocolBoxTitle>{t('Синтез')}</ProtocolBoxTitle>
            <ProtocolRow>
              <ProtocolFormField
                  type='text'
                  label={t('Н — О — С — нос')}
                  name='game_magic_exam.nose'
                  register={register}
                  errors={errors}
                  disabled={disabled}
              />
            </ProtocolRow>
            <ProtocolRow>
              <ProtocolFormField
                  type='text'
                  label={t('М — А — К — мак')}
                  name='game_magic_exam.poppy'
                  register={register}
                  errors={errors}
                  disabled={disabled}
              />
            </ProtocolRow>
            <ProtocolRow>
              <ProtocolFormField
                  type='text'
                  label={t('М — У — Х — А — муха')}
                  name='game_magic_exam.fly'
                  register={register}
                  errors={errors}
                  disabled={disabled}
              />
            </ProtocolRow>
            <ProtocolRow>
              <ProtocolFormField
                  type='text'
                  label={t('К — О — Ш — К — И — кошки')}
                  name='game_magic_exam.cats'
                  register={register}
                  errors={errors}
                  disabled={disabled}
              />
            </ProtocolRow>
          </ProtocolBox>
          <ProtocolBox>
            <ProtocolBoxTitle>{t('Анализ')}</ProtocolBoxTitle>
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
                <ProtocolResultTitle>{t('Варианты заключения')}</ProtocolResultTitle>
                <ProtocolRow>
                  <ProtocolDescriptionSubtitle>{t('Фонематический слух')}</ProtocolDescriptionSubtitle>
                  <ProtocolResultWrapper>
                    <ProtocolFormField
                        type='radio'
                        label={t('Сформирован')}
                        value='сформирован'
                        name='game_magic_exam.phonemic_hearing'
                        control={control}
                        errors={errors}
                        disabled={isConclusionDisabled || disabled}
                    />
                  </ProtocolResultWrapper>
                  <ProtocolResultWrapper>
                    <ProtocolFormField
                        type='radio'
                        label={t('Не сформирован')}
                        value='не сформирован'
                        name='game_magic_exam.phonemic_hearing'
                        control={control}
                        errors={errors}
                        disabled={isConclusionDisabled || disabled}
                    />
                  </ProtocolResultWrapper>
                  <ProtocolDescriptionSubtitle>{t('Навыки фонологического (звукового) анализа и синтеза')}</ProtocolDescriptionSubtitle>
                  <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Не сформированы')}
                          value='не сформированы'
                          name='game_magic_exam.phonological_sound_analysis_and_synthesis_skills'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Находятся на самой начальной стадии формирования. Ребенку доступен анализ звукового ряда, состоящего из')}
                          value='находятся на самой начальной стадии формирования. Ребенку доступен анализ звукового ряда, состоящего из'
                          name='game_magic_exam.phonological_sound_analysis_and_synthesis_skills'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Находятся в активной стадии формирования; ребенку доступен анализ слов типа')}
                          value='находятся в активной стадии формирования; ребенку доступен анализ слов типа'
                          name='game_magic_exam.phonological_sound_analysis_and_synthesis_skills'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Сформированы соответственно возрасту')}
                          value='сформированы соответственно возрасту'
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
                label={t('Комментарий')}
                name='game_magic_exam.phonemic_hearing_expert_comment'
                placeholder={t('Комментарий специалиста')}
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
