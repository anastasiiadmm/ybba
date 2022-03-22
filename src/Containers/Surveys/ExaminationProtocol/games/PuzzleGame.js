import React from 'react';
import { useTranslation } from 'react-i18next';


import ProtocolBlock from 'Components/Surveys/ExaminationProtocol/ProtocolBlock/ProtocolBlock';
import ProtocolPlaceholderTitle
  from 'Components/Surveys/ExaminationProtocol/ProtocolPlaceholderTitle/ProtocolPlaceholderTitle';
import ProtocolBlockTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBlockTitle/ProtocolBlockTitle';
import ProtocolRow from 'Components/Surveys/ExaminationProtocol/ProtocolRow/ProtocolRow';
import ProtocolFormField from 'Components/Surveys/ExaminationProtocol/ProtocolFormField/ProtocolFormField';
import ProtocolResultTitle from 'Components/Surveys/ExaminationProtocol/ResultTitle/ResultTitle';
import ProtocolDescriptionSubtitle
  from 'Components/Surveys/ExaminationProtocol/ProtocolResultTitle/ProtocolResultTitle';
import ProtocolResultBlock from 'Components/Surveys/ExaminationProtocol/ProtocolResultBlock/ProtocolResultBlock';
import ProtocolResultWrapper from 'Components/Surveys/ExaminationProtocol/ProtocolResultWrapper/ProtocolResultWrapper';

const PuzzleGame = (props) => {

  const {
    register, errors, control, isConclusionDisabled, disabled, isLessonFinished
  } = props

  const { t } = useTranslation();

  return (
      <>
        <ProtocolBlock>
          <ProtocolPlaceholderTitle>{t('Игра «Пазл»')}</ProtocolPlaceholderTitle>
          <ProtocolBlockTitle>{t('Звукопроизношение')} <span>{t('Звуки В, Вь, Ф, Фь')}</span></ProtocolBlockTitle>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('Волк-Совок-Вилка-Свиток /В, Вь')}
                name='game_puzzle.wolf_scoop_fork_scroll'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('Фасоль-Финики /Ф, Фь')}
                name='game_puzzle.beans_dates'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('Вафли /В - Ф')}
                name='game_puzzle.waffles'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          {isLessonFinished && (
              <>
                <ProtocolRow>
                  <ProtocolDescriptionSubtitle>{t('Варианты заключения')}</ProtocolDescriptionSubtitle>
                  <ProtocolBlockTitle>{t('Губно-зубные')}</ProtocolBlockTitle>
                  <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('Звуки В, Вь произносятся нормативно')}
                          name='game_puzzle.sounds_v_vb_are_pronounced_normatively'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('Звуки Ф, Фь произносятся нормативно')}
                          name='game_puzzle.sounds_f_fb_are_pronounced_normatively'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('Носовой')}
                          name='game_puzzle.nasal'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('Пропуск')}
                          name='game_puzzle.skip'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkboxWithField'
                          label={t('Замена В на')}
                          name='game_puzzle.replacing_with_b'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkboxWithField'
                          label={t('Замена Вь на')}
                          name='game_puzzle.replacing_with_b_soft'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkboxWithField'
                          label={t('Замена Ф на')}
                          name='game_puzzle.replacing_with_f'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkboxWithField'
                          label={t('Замена Фь на')}
                          name='game_puzzle.replacing_with_f_soft'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('Двугубный')}
                          name='game_puzzle.two_lipped'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('Смешение')}
                          name='game_puzzle.mixing'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('Искажение')}
                          name='game_puzzle.distortion'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    {errors.choices5 && <div className='form2__error'> {errors.choices5.message}</div>}
                  </ProtocolResultBlock>
                </ProtocolRow>
              </>
          )}
          <ProtocolRow>
            <ProtocolFormField
                type='textarea'
                label={t('Комментарий')}
                name='game_puzzle.labial_dental_comment'
                placeholder={t('Комментарий специалиста')}
                register={register}
                disabled={disabled}
            />
          </ProtocolRow>
        </ProtocolBlock>
        <ProtocolBlock>
          {isLessonFinished && (
              <>
                <ProtocolBlockTitle>{t('Симультанное зрительное восприятие')}</ProtocolBlockTitle>
                <ProtocolResultTitle>{t('Варианты заключения')}</ProtocolResultTitle>
                <ProtocolRow>
                  <ProtocolDescriptionSubtitle>{t('Восприятие')}</ProtocolDescriptionSubtitle>
                  <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Нарушено')}
                          value='нарушено'
                          name='game_puzzle.perception'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Не нарушено')}
                          value='не нарушено'
                          name='game_puzzle.perception'
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
                          label={t('Восприятие соответствует возрасту')}
                          value='уровень восприятия соответствует возрасту'
                          name='game_puzzle.level_of_perception'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Восприятие не соответствует возрасту')}
                          value='уровень восприятия не соответствует возрасту'
                          name='game_puzzle.level_of_perception'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                  </ProtocolResultBlock>
                </ProtocolRow>
                <ProtocolRow>
                  <ProtocolFormField
                      type='textarea'
                      label={t('Комментарий')}
                      name='game_puzzle.expert_comment'
                      placeholder={t('Комментарий специалиста')}
                      register={register}
                      disabled={disabled}
                  />
                </ProtocolRow>
              </>
          )}
        </ProtocolBlock>
      </>
  );
};

export default PuzzleGame;
