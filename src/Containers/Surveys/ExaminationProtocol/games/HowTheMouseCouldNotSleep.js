import React from 'react';
import { useTranslation } from 'react-i18next';

import ProtocolBlock from 'Components/Surveys/ExaminationProtocol/ProtocolBlock/ProtocolBlock';
import ProtocolPlaceholderTitle
  from 'Components/Surveys/ExaminationProtocol/ProtocolPlaceholderTitle/ProtocolPlaceholderTitle';
import ProtocolBlockTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBlockTitle/ProtocolBlockTitle';
import ProtocolRowText from 'Components/Surveys/ExaminationProtocol/ProtocolRowText/ProtocolRowText';
import ProtocolTitleTest from 'Components/Surveys/ExaminationProtocol/ProtocolTitleTest/ProtocolTitleTest';
import ProtocolSwitchText from 'Components/Surveys/ExaminationProtocol/ProtocolSwitchText/ProtocolSwitchText';
import ProtocolTextTest from 'Components/Surveys/ExaminationProtocol/ProtocolTextTest/ProtocolTextTest';
import ProtocolFormField from 'Components/Surveys/ExaminationProtocol/ProtocolFormField/ProtocolFormField';
import ProtocolRow from 'Components/Surveys/ExaminationProtocol/ProtocolRow/ProtocolRow';
import ProtocolResultTitle from 'Components/Surveys/ExaminationProtocol/ResultTitle/ResultTitle';
import ProtocolDescriptionMain
  from 'Components/Surveys/ExaminationProtocol/ProtocolDescriptionMain/ProtocolDescriptionMain';
import ProtocolDescriptionSubtitle
  from 'Components/Surveys/ExaminationProtocol/ProtocolResultTitle/ProtocolResultTitle';
import ProtocolResultBlock from 'Components/Surveys/ExaminationProtocol/ProtocolResultBlock/ProtocolResultBlock';
import ProtocolResultWrapper from 'Components/Surveys/ExaminationProtocol/ProtocolResultWrapper/ProtocolResultWrapper';


const HowTheMouseCouldNotSleep = (props) => {

  const {
    register, errors, control, isConclusionDisabled, disabled, isLessonFinished
  } = props

  const { t } = useTranslation();

  return (
      <>
        <ProtocolBlock>
          <ProtocolPlaceholderTitle>{t('Игра «Как мышонку не спалось»')}</ProtocolPlaceholderTitle>
          <ProtocolBlockTitle>{t('Обследование связной речи')}</ProtocolBlockTitle>
          <ProtocolPlaceholderTitle>{t('— Послушай рассказ. Расставь картинки по порядку.')}</ProtocolPlaceholderTitle>
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
                  name='game_how_the_mouse_could_not_sleep.mouse_in_the_forest'
                  control={control}
                  disabled={disabled}
              />
              <ProtocolFormField
                  type='radio'
                  classNameLabel='switch2__plus'
                  className='switch2__input'
                  value={true}
                  label='+'
                  name='game_how_the_mouse_could_not_sleep.mouse_in_the_forest'
                  control={control}
                  disabled={disabled}
              />
            </ProtocolSwitchText>
          </ProtocolRowText>
          <ProtocolRowText>
            <ProtocolTitleTest>2) {t('Мышонок ест яблоко и ягоду')}</ProtocolTitleTest>
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
            <ProtocolTitleTest>3) {t('Луна в отражении воды в луже')}</ProtocolTitleTest>
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
            <ProtocolTitleTest>4) {t('Мышонок накрывает лужу лопухом')}</ProtocolTitleTest>
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
            <ProtocolTitleTest>5) {t('Солнце в отражении воды в луже')}</ProtocolTitleTest>
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
          <ProtocolPlaceholderTitle>— {t('Ответь на вопросы')}</ProtocolPlaceholderTitle>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('1. Чем оказался белый светящийся круг?')}
                name='game_how_the_mouse_could_not_sleep.what_was_the_white_glowing_circle'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('2. Когда мышонок пошел гулять?')}
                name='game_how_the_mouse_could_not_sleep.when_did_the_mouse_go_for_a_walk'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('3. Что увидел мышонок в лесу?')}
                name='game_how_the_mouse_could_not_sleep.what_did_the_mouse_see_in_the_forest'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('4. Чем мышонок накрыл луну?')}
                name='game_how_the_mouse_could_not_sleep.what_did_the_mouse_cover_the_moon_with'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('5. Что увидел в луже мышонок утром?')}
                name='game_how_the_mouse_could_not_sleep.what_did_the_mouse_see_in_the_puddle_in_the_morning'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('6. Почему вместо луны мышонок обнаружил солнышко?')}
                name='game_how_the_mouse_could_not_sleep.why_instead_of_the_moon_the_mouse_found_the_sun'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          <ProtocolPlaceholderTitle>— {t('Повтори всю историю, как запомнил:')}</ProtocolPlaceholderTitle>
          <ProtocolRow>
            <ProtocolFormField
                type='textarea'
                label={t('Рассказ ребенка')}
                name='game_how_the_mouse_could_not_sleep.repeat_the_whole_story_as_you_remember'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          {isLessonFinished && (
              <>
                <ProtocolResultTitle>{t('Варианты заключения')}</ProtocolResultTitle>
                <ProtocolRow>
                  <ProtocolDescriptionMain>{t('Продуцирование')}</ProtocolDescriptionMain>
                  <ProtocolDescriptionSubtitle>{t('Построение высказывания')}</ProtocolDescriptionSubtitle>
                  <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Может построить собственное высказывание на основе полученной визуально информации')}
                          name='game_how_the_mouse_could_not_sleep.constructing_a_statement'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Не может построить собственное высказывание на основе полученной визуально информации')}
                          name='game_how_the_mouse_could_not_sleep.constructing_a_statement'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                  </ProtocolResultBlock>
                  <ProtocolDescriptionSubtitle>{t('Соответствие сюжету')}</ProtocolDescriptionSubtitle>
                  <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Рассказ соответствует предложенному сюжету')}
                          value='рассказ соответствует предложенному сюжету'
                          name='game_how_the_mouse_could_not_sleep.consistency_with_the_plot'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Рассказ не соответствует предложенному сюжету')}
                          value='рассказ не соответствует предложенному сюжету'
                          name='game_how_the_mouse_could_not_sleep.consistency_with_the_plot'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                  </ProtocolResultBlock>
                  <ProtocolDescriptionSubtitle>{t('Тема')}</ProtocolDescriptionSubtitle>
                  <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Раскрыта')}
                          value='раскрыта'
                          name='game_how_the_mouse_could_not_sleep.topic'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Раскрыта частично')}
                          value='тема раскрыта частично'
                          name='game_how_the_mouse_could_not_sleep.topic'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Не раскрыта')}
                          value='не раскрыто'
                          name='game_how_the_mouse_could_not_sleep.topic'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                  </ProtocolResultBlock>
                  <ProtocolDescriptionSubtitle>{t('Временную, логическую последовательность событий')}</ProtocolDescriptionSubtitle>
                  <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Соблюдает')}
                          value='соблюдает'
                          name='game_how_the_mouse_could_not_sleep.chronological_event_logic'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Не соблюдает')}
                          value='не соблюдает'
                          name='game_how_the_mouse_could_not_sleep.chronological_event_logic'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                  </ProtocolResultBlock>
                  <ProtocolDescriptionSubtitle>{t('Языковые средства')}</ProtocolDescriptionSubtitle>
                  <ProtocolResultWrapper>
                    <ProtocolFormField
                        type='radio'
                        label={t('Свободно владеет языковыми средствами и адекватно их использует при построении связного текста')}
                        value='свободно владеет языковыми средствами и адекватно их использует при построении связного текста'
                        name='game_how_the_mouse_could_not_sleep.language_means'
                        control={control}
                        errors={errors}
                        disabled={isConclusionDisabled || disabled}
                    />
                  </ProtocolResultWrapper>
                  <ProtocolResultWrapper>
                    <ProtocolFormField
                        type='radio'
                        label={t('Неадекватно использует языковые средства при построении связного текста')}
                        value='неадекватно использует языковые средства при построении связного текста'
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
                          label={t('Фразовые персеверации')}
                          name='game_how_the_mouse_could_not_sleep.phrasal_perseverations'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                  </ProtocolResultBlock>
                  <ProtocolDescriptionMain>{t('Репродуцирование')}</ProtocolDescriptionMain>
                  <ProtocolDescriptionSubtitle>{t('Ребенок не испытывает трудностей в репродуцировании текста')}</ProtocolDescriptionSubtitle>
                  <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('Пересказ соответствует оригиналу')}
                          name='game_how_the_mouse_could_not_sleep.retelling_corresponds_to_original'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('Пересказ содержит как основную, так и дополнительную информацию')}
                          name='game_how_the_mouse_could_not_sleep.retelling_contains_both_basic_and_additional_information'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('При пересказе используется вариативность речи')}
                          name='game_how_the_mouse_could_not_sleep.retelling_uses_variability_of_speech'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    {errors.choices16 && <div className='form2__error'> {errors.choices16.message}</div>}
                  </ProtocolResultBlock>
                  <ProtocolDescriptionSubtitle>{t('Наблюдаются некоторые трудности в репродуцировании текста ')}</ProtocolDescriptionSubtitle>
                  <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('Пересказ частично соответствует оригиналу')}
                          name='game_how_the_mouse_could_not_sleep.retelling_partially_corresponds_to_original'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('Пересказ содержит только основную информацию')}
                          name='game_how_the_mouse_could_not_sleep.retelling_contains_only_basic_information'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('Сохраняются лексика и синтаксические конструкции оригинала')}
                          name='game_how_the_mouse_could_not_sleep.vocabulary_and_syntactic_constructions_of_original'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('Не нарушена связность и логичность изложения ')}
                          name='game_how_the_mouse_could_not_sleep.coherence_and_consistency_of_presentation_is_not_broken'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    {errors.choices16 && <div className='form2__error'> {errors.choices16.message}</div>}
                  </ProtocolResultBlock>
                  <ProtocolDescriptionSubtitle>{t('Наблюдаются значительные трудности в репродуцировании текста')}</ProtocolDescriptionSubtitle>
                  <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('Пересказ не соответствует оригиналу')}
                          name='game_how_the_mouse_could_not_sleep.retelling_does_not_correspond_to_original'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('Нарушена смысловая организация текста')}
                          name='game_how_the_mouse_could_not_sleep.semantic_organization_of_text_is_broken'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('Нарушена связность и логичность изложения')}
                          name='game_how_the_mouse_could_not_sleep.coherence_and_consistency_of_presentation_is_broken'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('Значительные трудности в языковом оформлении текста')}
                          name='game_how_the_mouse_could_not_sleep.significant_difficulties_in_language_design_of_text'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    {errors.choices16 && <div className='form2__error'> {errors.choices16.message}</div>}
                  </ProtocolResultBlock>
                  <ProtocolDescriptionMain>{t('Понимание')}</ProtocolDescriptionMain>
                  <ProtocolDescriptionSubtitle>{t('Содержательно-смысловое значение текста')}</ProtocolDescriptionSubtitle>
                  <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Идентифицирует')}
                          value='идентифицирует'
                          name='game_how_the_mouse_could_not_sleep.content_semantic_meaning_of_text'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Не идентифицирует')}
                          value='не идентифицирует'
                          name='game_how_the_mouse_could_not_sleep.content_semantic_meaning_of_text'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                  </ProtocolResultBlock>
                  <ProtocolDescriptionSubtitle>{t('Понимание')}</ProtocolDescriptionSubtitle>
                  <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Понимает только основную информацию текста')}
                          value='понимает только основную информацию текста'
                          name='game_how_the_mouse_could_not_sleep.understands_only_basic_information_of_text'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Доступно понимание как основной, так и дополнительной информации каждой смысловой части текста')}
                          value='доступно понимание как основной, так и дополнительной информации каждой смысловой части текста'
                          name='game_how_the_mouse_could_not_sleep.understands_only_basic_information_of_text'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Доступно понимание скрытого смысла')}
                          value='доступно понимание скрытого смысла'
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
                label={t('Комментарий')}
                name='game_how_the_mouse_could_not_sleep.expert_comment'
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

export default HowTheMouseCouldNotSleep;
