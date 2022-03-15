import React from 'react';
import { useTranslation } from 'react-i18next';


import ProtocolBlock from 'Components/Surveys/ExaminationProtocol/ProtocolBlock/ProtocolBlock';
import ProtocolPlaceholderTitle
  from 'Components/Surveys/ExaminationProtocol/ProtocolPlaceholderTitle/ProtocolPlaceholderTitle';
import ProtocolSubtitleThree from 'Components/Surveys/ExaminationProtocol/ProtocolSubtitleThree/ProtocolSubtitleThree';
import ProtocolFormField from 'Components/Surveys/ExaminationProtocol/ProtocolFormField/ProtocolFormField';
import ProtocolRow from 'Components/Surveys/ExaminationProtocol/ProtocolRow/ProtocolRow';
import ProtocolResultTitle from 'Components/Surveys/ExaminationProtocol/ResultTitle/ResultTitle';
import ProtocolResultBlock from 'Components/Surveys/ExaminationProtocol/ProtocolResultBlock/ProtocolResultBlock';
import ProtocolResultWrapper from 'Components/Surveys/ExaminationProtocol/ProtocolResultWrapper/ProtocolResultWrapper';
import ProtocolBlockTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBlockTitle/ProtocolBlockTitle';
import ProtocolDescriptionSubtitle
  from 'Components/Surveys/ExaminationProtocol/ProtocolResultTitle/ProtocolResultTitle';


const OnTheFarmPartThree = (props) => {

  const {
    register, errors, control, isConclusionDisabled, disabled, isLessonFinished
  } = props

  const { t } = useTranslation();

  return (
      <>
        <ProtocolBlock>
          <ProtocolPlaceholderTitle>{t('Игра «На ферме». Часть 3')}</ProtocolPlaceholderTitle>
          <ProtocolSubtitleThree>{t('Согласование сущ.+числ.')}</ProtocolSubtitleThree>

          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('Одна белая курица')}
                name='game_on_the_farm_part_three.one_white_chicken'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('Три рыжих курицы')}
                name='game_on_the_farm_part_three.three_ginger_hens'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('Пять рябых куриц')}
                name='game_on_the_farm_part_three.five_speckled_hens'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          {isLessonFinished && (
              <>
                <ProtocolResultTitle>{t('Варианты заключения')}</ProtocolResultTitle>
                <ProtocolRow>
                  <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Ребенок смешивает парадигмы разных окончаний')}
                          value='ребенок смешивает парадигмы разных окончаний'
                          name='game_on_the_farm_part_three.options_for_confinement'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Ребенок делает ошибки внутри одного падежа')}
                          value='ребенок делает ошибки внутри одного падежа'
                          name='game_on_the_farm_part_three.options_for_confinement'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Ошибок согласования частей речи не наблюдается')}
                          value='ошибок согласования частей речи не наблюдается'
                          name='game_on_the_farm_part_three.options_for_confinement'
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
                name='game_on_the_farm_part_three.expert_comment'
                placeholder={t('Комментарий специалиста')}
                register={register}
                disabled={disabled}
            />
          </ProtocolRow>
        </ProtocolBlock>
        {isLessonFinished && (
            <>
              <ProtocolBlock>
                <ProtocolBlockTitle>{t('Психологическая база речи: Внимание')}</ProtocolBlockTitle>
                <ProtocolResultTitle>{t('Варианты заключения')}</ProtocolResultTitle>
                <ProtocolRow>
                  <ProtocolDescriptionSubtitle>{t('Речевое внимание')}</ProtocolDescriptionSubtitle>
                  <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Сформировано')}
                          value='сформировано'
                          name='game_on_the_farm_part_three.speech_comprehension'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Сформировано недостаточно')}
                          value='сформировано недостаточно'
                          name='game_on_the_farm_part_three.speech_comprehension'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Не сформировано')}
                          value='не сформировано'
                          name='game_on_the_farm_part_three.speech_comprehension'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                  </ProtocolResultBlock>
                  <ProtocolDescriptionSubtitle>{t('Распределение')}</ProtocolDescriptionSubtitle>
                  <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('Наблюдаются трудности распределения внимания')}
                          name='game_on_the_farm_part_three.there_are_difficulties_in_distributing_attention'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('Трудностей распределения внимания не наблюдается')}
                          name='game_on_the_farm_part_three.difficulties_in_distribution_of_attention_are_not_observed'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    {errors.choices22 && <div className='form2__error'> {errors.choices22.message}</div>}
                  </ProtocolResultBlock>
                  <ProtocolDescriptionSubtitle>{t('Концентрация')}</ProtocolDescriptionSubtitle>
                  <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Низкая концентрация и неустойчивость внимания в целом (ребенок плохо сосредотачивается, с трудом удерживает внимание на объекте)')}
                          value='низкая концентрация и неустойчивость внимания в целом (ребенок плохо сосредотачивается, с трудом удерживает внимание на объекте)'
                          name='game_on_the_farm_part_three.concentration'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Наблюдаются трудности концентрации произвольного внимания')}
                          value='наблюдаются трудности концентрации произвольного внимания'
                          name='game_on_the_farm_part_three.concentration'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Трудностей не наблюдается, концентрация внимания устойчивая, ребенок сосредотачивается и удерживает внимание на объекте продолжительное время (в пределах возрастной нормы)')}
                          value='трудностей не наблюдается, концентрация внимания устойчивая, ребенок'
                          name='game_on_the_farm_part_three.concentration'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                  </ProtocolResultBlock>
                  <ProtocolDescriptionSubtitle>{t('Устойчивость')}</ProtocolDescriptionSubtitle>
                  <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Внимание неустойчивое, поверхностное, ребенок очень быстро истощается')}
                          value='внимание неустойчивое, поверхностное, ребенок очень быстро истощается'
                          name='game_on_the_farm_part_three.sustainability'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Внимание недостаточно устойчивое')}
                          value='внимание недостаточно устойчивое'
                          name='game_on_the_farm_part_three.sustainability'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Внимание устойчивое')}
                          value='внимание устойчивое'
                          name='game_on_the_farm_part_three.sustainability'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                  </ProtocolResultBlock>
                  <ProtocolDescriptionSubtitle>{t('Истощаемость')}</ProtocolDescriptionSubtitle>
                  <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('Не наблюдается')}
                          name='game_on_the_farm_part_three.exhaustion_is_not_observed'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='checkbox'
                          label={t('Внимание ребенка характеризуется быстрой истощаемостью')}
                          name='game_on_the_farm_part_three.child_s_attention_is_characterized_by_rapid_exhaustion'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || disabled}
                      />
                    </ProtocolResultWrapper>
                    {errors.choices23 && <div className='form2__error'> {errors.choices23.message}</div>}
                  </ProtocolResultBlock>
                </ProtocolRow>
                <ProtocolRow>
                  <ProtocolFormField
                      type='text'
                      label={t('Объем')}
                      name='game_on_the_farm_part_three.volume'
                      register={register}
                      errors={errors}
                      disabled={isConclusionDisabled || disabled}
                  />
                </ProtocolRow>
                <ProtocolRow>
                  <ProtocolFormField
                      type='text'
                      label={t('Переключаемость')}
                      name='game_on_the_farm_part_three.switchability'
                      register={register}
                      errors={errors}
                      disabled={isConclusionDisabled || disabled}
                  />
                </ProtocolRow>
              </ProtocolBlock>
              <ProtocolBlock>
                <ProtocolBlockTitle>{t('Психологическая база речи: Познавательная активность. Мотивация и интерес')}</ProtocolBlockTitle>
                <ProtocolRow>
                  <ProtocolFormField
                      type='text'
                      label={t('Утомляемость')}
                      name='game_on_the_farm_part_three.fatigue'
                      register={register}
                      errors={errors}
                      disabled={isConclusionDisabled || disabled}
                  />
                </ProtocolRow>
                <ProtocolRow>
                  <ProtocolFormField
                      type='text'
                      label={t('Контактность')}
                      name='game_on_the_farm_part_three.contact'
                      register={register}
                      errors={errors}
                      disabled={isConclusionDisabled || disabled}
                  />
                </ProtocolRow>
                <ProtocolRow>
                  <ProtocolFormField
                      type='text'
                      label={t('Работоспособность')}
                      name='game_on_the_farm_part_three.working_capacity'
                      register={register}
                      errors={errors}
                      disabled={isConclusionDisabled || disabled}
                  />
                </ProtocolRow>
                <ProtocolRow>
                  <ProtocolFormField
                      type='text'
                      label={t('Мотивация')}
                      name='game_on_the_farm_part_three.motivation'
                      register={register}
                      errors={errors}
                      disabled={isConclusionDisabled || disabled}
                  />
                </ProtocolRow>
                <ProtocolRow>
                  <ProtocolFormField
                      type='text'
                      label={t('Интерес')}
                      name='game_on_the_farm_part_three.interest'
                      register={register}
                      errors={errors}
                      disabled={isConclusionDisabled || disabled}
                  />
                </ProtocolRow>
                <ProtocolResultTitle>{t('Варианты заключения')}</ProtocolResultTitle>
                <ProtocolRow>
                  <ProtocolResultWrapper>
                    <ProtocolFormField
                        type='radio'
                        label={t('Крайне низкая познавательная активность и мотивация к предметной, предметно-игровой деятельности')}
                        value='крайне низкая познавательная активность и мотивация к предметной, предметно-игровой деятельности'
                        name='game_on_the_farm_part_three.options_for_confinement_psychological_basis'
                        control={control}
                        errors={errors}
                        disabled={isConclusionDisabled || disabled}
                    />
                  </ProtocolResultWrapper>
                  <ProtocolResultWrapper>
                    <ProtocolFormField
                        type='radio'
                        label={t('Низкая познавательная активность и мотивация к различным видам деятельности, наблюдается немотивированная избирательность познавательной активности')}
                        value='низкая познавательная активность и мотивация к различным видам деятельности, наблюдается немотивированная избирательность познавательной активности'
                        name='game_on_the_farm_part_three.options_for_confinement_psychological_basis'
                        control={control}
                        errors={errors}
                        disabled={isConclusionDisabled || disabled}
                    />
                  </ProtocolResultWrapper>
                  <ProtocolResultWrapper>
                    <ProtocolFormField
                        type='radio'
                        label={t('Отмечается некоторая недостаточность познавательной активности и мотивации к предметной деятельности')}
                        value='отмечается некоторая недостаточность познавательной активности и мотивации к предметной деятельности'
                        name='game_on_the_farm_part_three.options_for_confinement_psychological_basis'
                        control={control}
                        errors={errors}
                        disabled={isConclusionDisabled || disabled}
                    />
                  </ProtocolResultWrapper>
                  <ProtocolResultWrapper>
                    <ProtocolFormField
                        type='radio'
                        label={t('Ярко выраженная познавательная активность и мотивация к предметной, предметно-игровой деятельности')}
                        value='ярко выраженная познавательная активность и мотивация к предметной, предметно-игровой деятельности'
                        name='game_on_the_farm_part_three.options_for_confinement_psychological_basis'
                        control={control}
                        errors={errors}
                        disabled={isConclusionDisabled || disabled}
                    />
                  </ProtocolResultWrapper>
                </ProtocolRow>
              </ProtocolBlock>
            </>
        )}
        <ProtocolBlock>
          <ProtocolBlockTitle>{t('Просодическая сторона речи')}</ProtocolBlockTitle>
          <ProtocolSubtitleThree>{t('Компоненты')}</ProtocolSubtitleThree>
          <ProtocolRow>
            <ProtocolDescriptionSubtitle>{t('Голос')}</ProtocolDescriptionSubtitle>
            <ProtocolResultBlock>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Афония')}
                    value='афония'
                    name='game_on_the_farm_part_three.voice'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Дисфония')}
                    value='дисфония'
                    name='game_on_the_farm_part_three.voice'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Нормальный')}
                    value='нормальный'
                    name='game_on_the_farm_part_three.voice'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
            </ProtocolResultBlock>
            <ProtocolResultBlock>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Хриплый')}
                    value='хриплый'
                    name='game_on_the_farm_part_three.voice_part_two'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Звонкий')}
                    value='звонкий'
                    name='game_on_the_farm_part_three.voice_part_two'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Без особенностей')}
                    value='без особенностей'
                    name='game_on_the_farm_part_three.voice_part_two'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
            </ProtocolResultBlock>
            <ProtocolResultBlock>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Громкий')}
                    value='громкий'
                    name='game_on_the_farm_part_three.voice_part_three'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Тихий')}
                    value='тихий'
                    name='game_on_the_farm_part_three.voice_part_three'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Средний по силе')}
                    value='средний по силе'
                    name='game_on_the_farm_part_three.voice_part_three'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
            </ProtocolResultBlock>
            <ProtocolResultBlock>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Писклявый')}
                    value='писклявый'
                    name='game_on_the_farm_part_three.voice_part_four'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Очень низкий')}
                    value='очень низкий'
                    name='game_on_the_farm_part_three.voice_part_four'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Средний по высоте')}
                    value='средний по высоте'
                    name='game_on_the_farm_part_three.voice_part_four'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
            </ProtocolResultBlock>
            <ProtocolResultBlock>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Немодулированный')}
                    value='немодулированный'
                    name='game_on_the_farm_part_three.voice_part_five'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Слабо модулированный')}
                    value='слабо модулированный'
                    name='game_on_the_farm_part_three.voice_part_five'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Модулированный')}
                    value='модулированный'
                    name='game_on_the_farm_part_three.voice_part_five'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
            </ProtocolResultBlock>
            <ProtocolResultBlock>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='checkbox'
                    label={t('Назализованный')}
                    name='game_on_the_farm_part_three.nasalized_voice'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
            </ProtocolResultBlock>
            <ProtocolDescriptionSubtitle>{t('Плавность')}</ProtocolDescriptionSubtitle>
            <ProtocolResultBlock>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Речь плавная')}
                    value='речь плавная'
                    name='game_on_the_farm_part_three.smoothness'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Речь неплавная')}
                    value='речь неплавная'
                    name='game_on_the_farm_part_three.smoothness'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
            </ProtocolResultBlock>
            <ProtocolDescriptionSubtitle>{t('Темп')}</ProtocolDescriptionSubtitle>
            <ProtocolResultBlock>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Нормальный')}
                    value='нормальный'
                    name='game_on_the_farm_part_three.pace'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Быстрый')}
                    value='быстрый'
                    name='game_on_the_farm_part_three.pace'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Медленный')}
                    value='медленный'
                    name='game_on_the_farm_part_three.pace'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Патологически ускоренный')}
                    value='патологически ускоренный'
                    name='game_on_the_farm_part_three.pace'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Патологически замедленный')}
                    value='патологически замедленный'
                    name='game_on_the_farm_part_three.pace'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
            </ProtocolResultBlock>
            <ProtocolDescriptionSubtitle>{t('Речь')}</ProtocolDescriptionSubtitle>
            <ProtocolResultBlock>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('На вдохе')}
                    value='на вдохе'
                    name='game_on_the_farm_part_three.speech'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('На выдохе')}
                    value='на выдохе'
                    name='game_on_the_farm_part_three.speech'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Иссякает к концу фразы')}
                    value='иссякает к концу фразы'
                    name='game_on_the_farm_part_three.speech'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
            </ProtocolResultBlock>
            <ProtocolDescriptionSubtitle>{t('Дыхание')}</ProtocolDescriptionSubtitle>
            <ProtocolResultBlock>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Ключичное')}
                    value='ключичное'
                    name='game_on_the_farm_part_three.breath'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Грудное')}
                    value='грудное'
                    name='game_on_the_farm_part_three.breath'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Диафрагмальное')}
                    value='диафрагмальное'
                    name='game_on_the_farm_part_three.breath'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Смешанное')}
                    value='смешанное'
                    name='game_on_the_farm_part_three.breath'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
            </ProtocolResultBlock>
            <ProtocolResultBlock>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Выдох укорочен')}
                    value='выдох укорочен'
                    name='game_on_the_farm_part_three.exhalation'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Выдох плавный')}
                    value='выдох плавный'
                    name='game_on_the_farm_part_three.exhalation'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
            </ProtocolResultBlock>
            <ProtocolResultBlock>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='checkbox'
                    label={t('Затруднённое')}
                    name='game_on_the_farm_part_three.hindered'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='checkbox'
                    label={t('Поверхностное')}
                    name='game_on_the_farm_part_three.superficial'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='checkbox'
                    label={t('Неритмичное')}
                    name='game_on_the_farm_part_three.breathing_is_not_rhythmic'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='checkbox'
                    label={t('Вдох неглубокий')}
                    name='game_on_the_farm_part_three.shallow_breath'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              {errors.choices19 && <div className='form2__error'> {errors.choices19.message}</div>}
            </ProtocolResultBlock>
            <ProtocolDescriptionSubtitle>{t('Ритм')}</ProtocolDescriptionSubtitle>
            <ProtocolResultBlock>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Не нарушен')}
                    value='не нарушен'
                    name='game_on_the_farm_part_three.rhythm'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Нарушен: речь растянутая, скандированная')}
                    value='нарушен: речь растянутая, скандированная'
                    name='game_on_the_farm_part_three.rhythm'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
            </ProtocolResultBlock>
            <ProtocolDescriptionSubtitle>{t('Сила выдоха')}</ProtocolDescriptionSubtitle>
            <ProtocolResultBlock>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Слабая')}
                    value='слабая'
                    name='game_on_the_farm_part_three.expiratory_force'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Сильная')}
                    value='сильная'
                    name='game_on_the_farm_part_three.expiratory_force'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
            </ProtocolResultBlock>
            <ProtocolDescriptionSubtitle>{t('Дифференцированность вдоха/выдоха и возможность управления дыханием')}</ProtocolDescriptionSubtitle>
            <ProtocolResultBlock>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('В норме')}
                    value='в норме'
                    name='game_on_the_farm_part_three.inspiratory_expiratory_differentiation'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Нарушена')}
                    value='нарушена'
                    name='game_on_the_farm_part_three.inspiratory_expiratory_differentiation'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
            </ProtocolResultBlock>
          </ProtocolRow>
          {isLessonFinished && (
              <>
                <ProtocolResultTitle>{t('Варианты заключения')}</ProtocolResultTitle>
                <ProtocolRow>
                  <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Просодическая организация речи характеризуется неадекватным интонационным оформлением высказывания; речь невнятная, смазанная, малопонятная для окружающих')}
                          value='просодическая организация речи характеризуется неадекватным интонационным оформлением высказывания; речь невнятная, смазанная, малопонятная для окружающих'
                          name='game_on_the_farm_part_three.prosodic_side_of_speech'
                          control={control}
                          errors={errors}
                          disabled={disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Разборчивость речи несколько снижена, речь нечеткая')}
                          value='разборчивость речи несколько снижена, речь нечеткая'
                          name='game_on_the_farm_part_three.prosodic_side_of_speech'
                          control={control}
                          errors={errors}
                          disabled={disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Речь внятная, понятная для окружающих')}
                          value='речь внятная, понятная для окружающих'
                          name='game_on_the_farm_part_three.prosodic_side_of_speech'
                          control={control}
                          errors={errors}
                          disabled={disabled}
                      />
                    </ProtocolResultWrapper>
                  </ProtocolResultBlock>
                  <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Речь интонационно выразительна')}
                          value='речь интонационно выразительна'
                          name='game_on_the_farm_part_three.speech_intonationally'
                          control={control}
                          errors={errors}
                          disabled={disabled}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Речь интонационно невыразительна: слабая выраженность голосовых модуляций')}
                          value='речь интонационно невыразительна: слабая выраженность голосовых модуляций'
                          name='game_on_the_farm_part_three.speech_intonationally'
                          control={control}
                          errors={errors}
                          disabled={disabled}
                      />
                    </ProtocolResultWrapper>
                  </ProtocolResultBlock>
                </ProtocolRow>
                <ProtocolDescriptionSubtitle>{t('Нарушение темпо-ритмической организации речи')}</ProtocolDescriptionSubtitle>
                <ProtocolResultBlock>
                  <ProtocolResultWrapper>
                    <ProtocolFormField
                        type='radio'
                        label={t('Не наблюдается')}
                        value='не наблюдается'
                        name='game_on_the_farm_part_three.violation_of_tempo_rhythmic_organization_of_speech'
                        control={control}
                        errors={errors}
                        disabled={disabled}
                    />
                  </ProtocolResultWrapper>
                  <ProtocolResultWrapper>
                    <ProtocolFormField
                        type='radio'
                        label={t('Судороги')}
                        value='судороги'
                        name='game_on_the_farm_part_three.violation_of_tempo_rhythmic_organization_of_speech'
                        control={control}
                        errors={errors}
                        disabled={disabled}
                    />
                  </ProtocolResultWrapper>
                  <ProtocolResultWrapper>
                    <ProtocolFormField
                        type='radio'
                        label={t('Запинки')}
                        value='запинки'
                        name='game_on_the_farm_part_three.violation_of_tempo_rhythmic_organization_of_speech'
                        control={control}
                        errors={errors}
                        disabled={disabled}
                    />
                  </ProtocolResultWrapper>
                </ProtocolResultBlock>
              </>
          )}
        </ProtocolBlock>
      </>
  );
};

export default OnTheFarmPartThree;
