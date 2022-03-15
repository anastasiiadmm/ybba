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

const GiraffeGame = (props) => {

  const {
    register, errors, control, isConclusionDisabled, disabled, isLessonFinished
  } = props

  const { t } = useTranslation();

  return (
      <>
        <ProtocolBlock>
          <ProtocolPlaceholderTitle>{t('Игра «Жираф»')}</ProtocolPlaceholderTitle>
          <ProtocolBlockTitle>{t('Звукопроизношение')} <span>{t('Звуки Р, Рь, Л, Ль')}</span></ProtocolBlockTitle>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('Рыба-Корова-Забор-Краб /Р')}
                name='game_giraffe.fish_cow_fence_crab'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('Река-Варенье-Дверь /Рь')}
                name='game_giraffe.river_jam_door'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('Лампа-Молоко-Пол-Клад /Л')}
                name='game_giraffe.lamp_milk_floor_treasure'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('Колесо-Соль /Ль')}
                name='game_giraffe.wheel_salt'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>

          {isLessonFinished && (
              <>
                <ProtocolResultTitle>{t('Варианты заключения')}</ProtocolResultTitle>
                <ProtocolRow>
                  <ProtocolDescriptionSubtitle>{t('Ротацизм')}</ProtocolDescriptionSubtitle>
                  <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('Звуки Р, Рь произносятся нормативно')}
                          name='game_giraffe.sounds_p_and_pb_are_pronounced_normatively_rotacism'
                          control={control}
                          errors={errors}
                          disabled={disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('Горловой ротацизм')}
                          name='game_giraffe.throat_rotacism'
                          control={control}
                          errors={errors}
                          disabled={disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkboxWithField'
                          label={t('Замена Р на')}
                          name='game_giraffe.replacing_p_with'
                          control={control}
                          errors={errors}
                          disabled={disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkboxWithField'
                          label={t('Замена Рь на')}
                          name='game_giraffe.replacing_p_soft_with'
                          control={control}
                          errors={errors}
                          disabled={disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('Щечный')}
                          name='game_giraffe.buccal'
                          control={control}
                          errors={errors}
                          disabled={disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('Боковой')}
                          name='game_giraffe.side'
                          control={control}
                          errors={errors}
                          disabled={disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('Одноударное произношение')}
                          name='game_giraffe.one_hit_pronunciation'
                          control={control}
                          errors={errors}
                          disabled={disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('Пропуск')}
                          name='game_giraffe.skip'
                          control={control}
                          errors={errors}
                          disabled={disabled}
                      />
                    </ProtocolResultWrapper>
                    {errors.choices3 && <div className='form2__error'> {errors.choices3.message}</div>}
                  </ProtocolResultBlock>
                </ProtocolRow>
                <ProtocolRow>
                  <ProtocolDescriptionSubtitle>{t('Ламбдацизм')}</ProtocolDescriptionSubtitle>
                  <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('Звуки Р, Рь произносятся нормативно')}
                          name='game_giraffe.sounds_p_and_pb_are_pronounced_normatively_lambdacism'
                          control={control}
                          errors={errors}
                          disabled={disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('Межзубный ламбдацизм')}
                          name='game_giraffe.interdental_lambdacism'
                          control={control}
                          errors={errors}
                          disabled={disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkboxWithField'
                          label={t('Замена Л на')}
                          name='game_giraffe.replacing_l_with'
                          control={control}
                          errors={errors}
                          disabled={disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkboxWithField'
                          label={t('Замена Ль на')}
                          name='game_giraffe.replacing_l_soft_with'
                          control={control}
                          errors={errors}
                          disabled={disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('Носовой')}
                          name='game_giraffe.nasal'
                          control={control}
                          errors={errors}
                          disabled={disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('Пропуск')}
                          name='game_giraffe.lambdacism_pass'
                          control={control}
                          errors={errors}
                          disabled={disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('Двугубный')}
                          name='game_giraffe.two_lipped'
                          control={control}
                          errors={errors}
                          disabled={disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('Искажение')}
                          name='game_giraffe.distortion'
                          control={control}
                          errors={errors}
                          disabled={disabled}
                      />
                    </ProtocolResultWrapper>
                    {errors.choices4 && <div className='form2__error'> {errors.choices4.message}</div>}
                  </ProtocolResultBlock>
                </ProtocolRow>
              </>
          )}
        </ProtocolBlock>
        <ProtocolRow>
          <ProtocolFormField
              type='textarea'
              label={t('Комментарий')}
              name='game_giraffe.lambdacism_comment'
              placeholder={t('Комментарий специалиста')}
              errors={errors}
              register={register}
              disabled={disabled}
          />
        </ProtocolRow>
        {isLessonFinished && (
            <>
              <ProtocolBlock>
                <ProtocolBlockTitle>{t('Психологическая база речи. Мышление')}</ProtocolBlockTitle>
                <ProtocolResultTitle>{t('Варианты заключения')}</ProtocolResultTitle>
                <ProtocolRow>
                  <ProtocolDescriptionSubtitle>{t('Мышление')}</ProtocolDescriptionSubtitle>
                  <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Соответствует возрасту')}
                          value='соответствует возрасту'
                          name='game_giraffe.thinking'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Не соответствует возрасту')}
                          value='не соответствует возрасту'
                          name='game_giraffe.thinking'
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
                          label={t('Нарушено')}
                          value='нарушено'
                          name='game_giraffe.thinking_part_two'
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
                          name='game_giraffe.thinking_part_two'
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
                          label={t('Наблюдаются трудности установления адекватных связей между предметами и явлениями окружающего мира')}
                          name='game_giraffe.there_are_difficulties_in_protecting_adequate_connections'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                  </ProtocolResultBlock>
                </ProtocolRow>
              </ProtocolBlock>
              <ProtocolRow>
                <ProtocolDescriptionSubtitle>{t('Вид мышления')}</ProtocolDescriptionSubtitle>
                <ProtocolResultBlock>
                  <ProtocolResultWrapper>
                    <ProtocolFormField
                        type='radio'
                        label={t('Мышление наглядно-действенное. Решение мыслительных задач осуществляется только на уровне практических действий')}
                        value='мышление наглядно-действенное. Решение мыслительных задач осуществляется только на уровне практических действий'
                        name='game_giraffe.kind_of_thinking'
                        control={control}
                        errors={errors}
                        disabled={isConclusionDisabled || disabled}
                    />
                  </ProtocolResultWrapper>
                  <ProtocolResultWrapper>
                    <ProtocolFormField
                        type='radio'
                        label={t('Мышление наглядно-образное, носит целевой, организованный характер')}
                        value='мышление наглядно-образное, носит целевой, организованный характер'
                        name='game_giraffe.kind_of_thinking'
                        control={control}
                        errors={errors}
                        disabled={isConclusionDisabled || disabled}
                    />
                  </ProtocolResultWrapper>
                  <ProtocolResultWrapper>
                    <ProtocolFormField
                        type='radio'
                        label={t('Мышление наглядно-образное, присутствуют элементы абстрактно-логического/словесно-логического мышления')}
                        value='мышление наглядно-образное, присутствуют элементы абстрактно-логического/словесно-логического мышления'
                        name='game_giraffe.kind_of_thinking'
                        control={control}
                        errors={errors}
                        disabled={isConclusionDisabled || disabled}
                    />
                  </ProtocolResultWrapper>
                  <ProtocolResultWrapper>
                    <ProtocolFormField
                        type='radio'
                        label={t('Словесно-логическое, способен давать своим действиям логическое объяснение')}
                        value='словесно-логическое, способен давать своим действиям логическое объяснение'
                        name='game_giraffe.kind_of_thinking'
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
                    name='game_giraffe.expert_comment'
                    placeholder={t('Комментарий специалиста')}
                    errors={errors}
                    register={register}
                    disabled={disabled}
                />
              </ProtocolRow>
            </>
        )}
      </>
  );
};

export default GiraffeGame;
