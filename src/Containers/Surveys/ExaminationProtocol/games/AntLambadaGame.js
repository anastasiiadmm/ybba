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


const AntLambadaGame = (props) => {

  const {
    register, errors, control, isConclusionDisabled, disabled, isLessonFinished
  } = props

  const { t } = useTranslation();

  return (
      <>
        <ProtocolBlock>
          <ProtocolPlaceholderTitle>{t('the_game_ant_lambada')}</ProtocolPlaceholderTitle>
          <ProtocolBlockTitle>{t('sound_reproduction')}
            <span>{t('Звуки Д, Дь, Т, Ть, К, Г, Х')}</span></ProtocolBlockTitle>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('Дом-Дятел /Д, Дь')}
                name='game_ant_lambada.woodpecker_house'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('Тапки-Платье /Т, Ть')}
                name='game_ant_lambada.slipper_dress'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label='Кухня-Хомяк-Гусь /К – Х, Г'
                name='game_ant_lambada.kitchen_hamster_goose'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          {isLessonFinished && (
              <>
                <ProtocolResultTitle>{t('conclusion_options')}</ProtocolResultTitle>
                <ProtocolRow>
                  <ProtocolDescriptionSubtitle>{t('anterolingual')}</ProtocolDescriptionSubtitle>
                  <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('nasal')}
                          name='game_ant_lambada.nasal'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('pass')}
                          name='game_ant_lambada.skip'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkboxWithField'
                          label={t('replacing_D_with')}
                          name='game_ant_lambada.replacing_d_with'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkboxWithField'
                          label={t('replacing_D_soft_with')}
                          name='game_ant_lambada.replacing_d_soft_with'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkboxWithField'
                          label={t('replacing_T_with')}
                          name='game_ant_lambada.replacing_t_with'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkboxWithField'
                          label={t('replacing_T_soft_with')}
                          name='game_ant_lambada.replacing_t_soft_with'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    {errors.choices20 && <div className='form2__error'> {errors.choices20.message}</div>}
                  </ProtocolResultBlock>
                </ProtocolRow>
                <ProtocolRow>
                  <ProtocolDescriptionSubtitle>{t('back_lingual')}</ProtocolDescriptionSubtitle>
                  <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkboxWithField'
                          label={t('replacing_K_with')}
                          name='game_ant_lambada.replacing_k_with'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkboxWithField'
                          label={t('replacing_G_with')}
                          name='game_ant_lambada.replacing_g_with'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkboxWithField'
                          label={t('replacing_X_with')}
                          name='game_ant_lambada.replacing_kh_with'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('mixing')}
                          name='game_ant_lambada.mixing'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('distortion')}
                          name='game_ant_lambada.distortion'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                  </ProtocolResultBlock>
                  {errors.choices21 && <div className='form2__error'> {errors.choices21.message}</div>}
                </ProtocolRow>
              </>
          )}
          <ProtocolRow>
            <ProtocolFormField
                type='textarea'
                label={t('comment')}
                name='game_ant_lambada.expert_comment'
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

export default AntLambadaGame;
