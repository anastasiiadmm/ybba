import React from 'react';
import { useTranslation } from 'react-i18next';

import PropTypes from 'prop-types';

import ProtocolBlock from 'Components/Surveys/ExaminationProtocol/ProtocolBlock/ProtocolBlock.js';
import ProtocolPlaceholderTitle
  from 'Components/Surveys/ExaminationProtocol/ProtocolPlaceholderTitle/ProtocolPlaceholderTitle.js';
import ProtocolBlockTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBlockTitle/ProtocolBlockTitle.js';
import ProtocolRow from 'Components/Surveys/ExaminationProtocol/ProtocolRow/ProtocolRow.js';
import ProtocolFormField from 'Components/Surveys/ExaminationProtocol/ProtocolFormField/ProtocolFormField.js';
import ProtocolResultTitle from 'Components/Surveys/ExaminationProtocol/ResultTitle/ResultTitle.js';
import ProtocolDescriptionSubtitle
  from 'Components/Surveys/ExaminationProtocol/ProtocolResultTitle/ProtocolResultTitle.js';
import ProtocolResultBlock from 'Components/Surveys/ExaminationProtocol/ProtocolResultBlock/ProtocolResultBlock.js';
import ProtocolResultWrapper
  from 'Components/Surveys/ExaminationProtocol/ProtocolResultWrapper/ProtocolResultWrapper.js';

const PicturesForFish = (props) => {

  const {
    register, errors, control, isConclusionDisabled, disabled, isLessonFinished
  } = props

  const { t } = useTranslation();

  return <>
    <ProtocolBlock>
      <ProtocolPlaceholderTitle>{t('Игра «Картинки для рыбки»')}</ProtocolPlaceholderTitle>
      <ProtocolBlockTitle>{t('Звукопроизношение')}
        <span>{t('Звуки С, Сь, З, Зь, Ц, Ч, Щ, Ж, Ш')}</span>
      </ProtocolBlockTitle>
      <ProtocolRow>
        <ProtocolFormField
            type='text'
            label={t('Магазин-Сено-Василек /ЗЬ, СЬ')}
            name='game_pictures_for_fish.shop_hay_cornflower'
            register={register}
            errors={errors}
            disabled={disabled}
        />
      </ProtocolRow>
      <ProtocolRow>
        <ProtocolFormField
            type='text'
            label={t('Собака-Насос-Замок-Коза /С, З')}
            name='game_pictures_for_fish.dog_pump_lock_goat'
            register={register}
            errors={errors}
            disabled={disabled}
        />
      </ProtocolRow>
      <ProtocolRow>
        <ProtocolFormField
            type='text'
            label={t('Скворец-Цапля-Палец /С – Ц, Ц')}
            name='game_pictures_for_fish.starling_heron_finger'
            register={register}
            errors={errors}
            disabled={disabled}
        />
      </ProtocolRow>
      <ProtocolRow>
        <ProtocolFormField
            type='text'
            label={t('Сыщик-Щипцы-Чеснок /С – Щ, Щ – Ц, Ч - С')}
            name='game_pictures_for_fish.detective_tongs_garlic'
            register={register}
            errors={errors}
            disabled={disabled}
        />
      </ProtocolRow>
      <ProtocolRow>
        <ProtocolFormField
            type='text'
            label={t('Щука-Вещи-Лещ /Щ')}
            name='game_pictures_for_fish.pike_things_bream'
            register={register}
            errors={errors}
            disabled={disabled}
        />
      </ProtocolRow>
      <ProtocolRow>
        <ProtocolFormField
            type='text'
            label={t('Жук-Сажа-Ножницы /Ж, С – Ж, Ж - Ц')}
            name='game_pictures_for_fish.beetle_soot_scissors'
            register={register}
            errors={errors}
            disabled={disabled}
        />
      </ProtocolRow>
      <ProtocolRow>
        <ProtocolFormField
            type='text'
            label={t('Шуба-Кошка-Камыш-Веснушки /Ш, С - Ш')}
            name='game_pictures_for_fish.fur_coat_cat_reed_freckles'
            register={register}
            errors={errors}
            disabled={disabled}
        />
      </ProtocolRow>
      {isLessonFinished && (
          <>
            <ProtocolResultTitle>{t('Варианты заключения')}</ProtocolResultTitle>
            <ProtocolRow>
              <ProtocolDescriptionSubtitle>{t('Свистящие')}</ProtocolDescriptionSubtitle>
              <ProtocolResultBlock>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='checkbox'
                      label={t('Свистящие звуки произносятся нормативно')}
                      name='game_pictures_for_fish.whistling_sounds_are_pronounced_normatively'
                      control={control}
                      errors={errors}
                      disabled={disabled}
                  />
                </ProtocolResultWrapper>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='checkbox'
                      label={t('Парасигматизм свистящих')}
                      name='game_pictures_for_fish.sibilant_parasigmatism'
                      control={control}
                      errors={errors}
                      disabled={disabled}
                  />
                </ProtocolResultWrapper>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='checkboxWithField'
                      label={t('Замена С на')}
                      name='game_pictures_for_fish.replacing_s_with'
                      control={control}
                      errors={errors}
                      disabled={disabled}
                  />
                </ProtocolResultWrapper>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='checkboxWithField'
                      label={t('Замена Сь на')}
                      name='game_pictures_for_fish.replacing_s_soft_with'
                      control={control}
                      errors={errors}
                      disabled={disabled}
                  />
                </ProtocolResultWrapper>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='checkboxWithField'
                      label={t('Замена З на')}
                      name='game_pictures_for_fish.replacing_z_with'
                      control={control}
                      errors={errors}
                      disabled={disabled}
                  />
                </ProtocolResultWrapper>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='checkboxWithField'
                      label={t('Замена Зь на')}
                      name='game_pictures_for_fish.replacing_z_soft_with'
                      control={control}
                      errors={errors}
                      disabled={disabled}
                  />
                </ProtocolResultWrapper>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='checkboxWithField'
                      label={t('Замена Ц на')}
                      name='game_pictures_for_fish.replacing_c_with'
                      control={control}
                      errors={errors}
                      disabled={disabled}
                  />
                </ProtocolResultWrapper>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='checkboxWithField'
                      label={t('Замена Ч на')}
                      name='game_pictures_for_fish.replacing_ch_with'
                      control={control}
                      errors={errors}
                      disabled={disabled}
                  />
                </ProtocolResultWrapper>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='checkbox'
                      label={t('Призубный сигматизм')}
                      name='game_pictures_for_fish.prominent_sigmatism'
                      control={control}
                      errors={errors}
                      disabled={disabled}
                  />
                </ProtocolResultWrapper>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='checkbox'
                      label={t('Носовой сигматизм')}
                      name='game_pictures_for_fish.nasal_sigmatism'
                      control={control}
                      errors={errors}
                      disabled={disabled}
                  />
                </ProtocolResultWrapper>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='checkbox'
                      label={t('Шипящий сигматизм')}
                      name='game_pictures_for_fish.hissing_sigmatism'
                      control={control}
                      errors={errors}
                      disabled={disabled}
                  />
                </ProtocolResultWrapper>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='checkbox'
                      label={t('Боковой сигматизм')}
                      name='game_pictures_for_fish.lateral_sigmatism'
                      control={control}
                      errors={errors}
                      disabled={disabled}
                  />
                </ProtocolResultWrapper>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='checkbox'
                      label={t('Губно-зубное произношение свистящих')}
                      name='game_pictures_for_fish.labiodental_pronunciation_of_whistling'
                      control={control}
                      errors={errors}
                      disabled={disabled}
                  />
                </ProtocolResultWrapper>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='checkbox'
                      label={t('Пропуск свистящего звука')}
                      name='game_pictures_for_fish.skip_whistling_sound'
                      control={control}
                      errors={errors}
                      disabled={disabled}
                  />
                </ProtocolResultWrapper>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='checkbox'
                      label={t('Смешение звуков')}
                      name='game_pictures_for_fish.mixing_sounds'
                      control={control}
                      errors={errors}
                      disabled={disabled}
                  />
                </ProtocolResultWrapper>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='checkbox'
                      label={t('Межзубный сигматизм')}
                      name='game_pictures_for_fish.interdental_sigmatism'
                      control={control}
                      errors={errors}
                      disabled={disabled}
                  />
                </ProtocolResultWrapper>
                {errors.choices && <div className='form2__error'> {errors.choices.message}</div>}
              </ProtocolResultBlock>
            </ProtocolRow>
            <ProtocolRow>
              <ProtocolDescriptionSubtitle>{t('Шипящие')}</ProtocolDescriptionSubtitle>
              <ProtocolResultBlock>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='checkbox'
                      label={t('Шипящие звуки произносятся нормативно')}
                      name='game_pictures_for_fish.hissing_is_normal'
                      control={control}
                      errors={errors}
                      disabled={disabled}
                  />
                </ProtocolResultWrapper>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='checkbox'
                      label={t('Парасигматизм шипящих')}
                      name='game_pictures_for_fish.parasigmatism_of_hissing'
                      control={control}
                      errors={errors}
                      disabled={disabled}
                  />
                </ProtocolResultWrapper>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='checkboxWithField'
                      label={t('Замена Щ на')}
                      name='game_pictures_for_fish.replacing_shch_to'
                      control={control}
                      errors={errors}
                      disabled={disabled}
                  />
                </ProtocolResultWrapper>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='checkboxWithField'
                      label={t('Замена Ж на')}
                      name='game_pictures_for_fish.replacing_zh_to'
                      control={control}
                      errors={errors}
                      disabled={disabled}
                  />
                </ProtocolResultWrapper>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='checkboxWithField'
                      label={t('Замена Ш на')}
                      name='game_pictures_for_fish.replacing_sh_to'
                      control={control}
                      errors={errors}
                      disabled={disabled}
                  />
                </ProtocolResultWrapper>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='checkbox'
                      label={t('Призубный сигматизм')}
                      name='game_pictures_for_fish.pristine_sigmatism'
                      control={control}
                      errors={errors}
                      disabled={disabled}
                  />
                </ProtocolResultWrapper>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='checkbox'
                      label={t('Носовой сигматизм')}
                      name='game_pictures_for_fish.hissing_nasal_sigmatism'
                      control={control}
                      errors={errors}
                      disabled={disabled}
                  />
                </ProtocolResultWrapper>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='checkbox'
                      label={t('Свистящий сигматизм шипящих')}
                      name='game_pictures_for_fish.whistling_sigmatism_of_hissing'
                      control={control}
                      errors={errors}
                      disabled={disabled}
                  />
                </ProtocolResultWrapper>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='checkbox'
                      label={t('Боковой сигматизм')}
                      name='game_pictures_for_fish.lateral_sigmatism_two'
                      control={control}
                      errors={errors}
                      disabled={disabled}
                  />
                </ProtocolResultWrapper>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='checkbox'
                      label={t('Губно-зубное произношение шипящих')}
                      name='game_pictures_for_fish.labiodental_pronunciation_of_sibilants'
                      control={control}
                      errors={errors}
                      disabled={disabled}
                  />
                </ProtocolResultWrapper>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='checkbox'
                      label={t('Пропуск шипящего звука')}
                      name='game_pictures_for_fish.skip_whistling_sound_two'
                      control={control}
                      errors={errors}
                      disabled={disabled}
                  />
                </ProtocolResultWrapper>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='checkbox'
                      label={t('Смешение звуков')}
                      name='game_pictures_for_fish.mixing_sounds_two'
                      control={control}
                      errors={errors}
                      disabled={disabled}
                  />
                </ProtocolResultWrapper>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='checkbox'
                      label={t('Межзубный сигматизм шипящих')}
                      name='game_pictures_for_fish.interdental_sigmatism_of_hissing'
                      control={control}
                      errors={errors}
                      disabled={disabled}
                  />
                </ProtocolResultWrapper>
                {errors.choices2 && <div className='form2__error'> {errors.choices2.message}</div>}
              </ProtocolResultBlock>
            </ProtocolRow>
          </>
      )}
    </ProtocolBlock>
    <ProtocolBlock>
      {isLessonFinished && (
          <>
            <ProtocolBlockTitle>{t('Психологическая база речи. Память')}</ProtocolBlockTitle>
            <ProtocolResultTitle>{t('Варианты заключения')}</ProtocolResultTitle>
            <ProtocolRow>
              <ProtocolDescriptionSubtitle>{t('Объем вербальной памяти')}</ProtocolDescriptionSubtitle>
              <ProtocolResultBlock>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='radio'
                      label={t('Достаточный для полноценной коммуникации')}
                      value='достаточный для полноценной коммуникации'
                      name='game_pictures_for_fish.verbal_memory'
                      control={control}
                      errors={errors}
                      disabled={isConclusionDisabled || disabled}
                  />
                </ProtocolResultWrapper>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='radio'
                      label={t('Недостаточный для полноценной коммуникации')}
                      value='недостаточный для полноценной коммуникации'
                      name='game_pictures_for_fish.verbal_memory'
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
                      label={t('Наблюдаются незначительные трудности актуализации слов, хранения и воспроизведения вербальной информации')}
                      value='наблюдаются незначительные трудности актуализации слов, хранения и воспроизведения вербальной информации'
                      name='game_pictures_for_fish.verbal_memory_part_two'
                      control={control}
                      errors={errors}
                      disabled={isConclusionDisabled || disabled}
                  />
                </ProtocolResultWrapper>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='radio'
                      label={t('Наблюдаются выраженные трудности актуализации слов, хранения и воспроизведения вербальной информации')}
                      value='наблюдаются выраженные трудности актуализации слов, хранения и воспроизведения вербальной информации'
                      name='game_pictures_for_fish.verbal_memory_part_two'
                      control={control}
                      errors={errors}
                      disabled={isConclusionDisabled || disabled}
                  />
                </ProtocolResultWrapper>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='radio'
                      label={t('Трудностей актуализации слов, хранения и воспроизведения вербальной информации не наблюдается')}
                      value='трудностей актуализации слов, хранения и воспроизведения вербальной информации не наблюдается'
                      name='game_pictures_for_fish.verbal_memory_part_two'
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
            name='game_pictures_for_fish.expert_comment'
            placeholder={t('Комментарий специалиста')}
            register={register}
            errors={errors}
            disabled={disabled}
        />
      </ProtocolRow>
    </ProtocolBlock>
  </>;
}

PicturesForFish.propTypes = {
  register: PropTypes.func.isRequired,
  control: PropTypes.object,
  errors: PropTypes.object.isRequired,
  isConclusionDisabled: PropTypes.bool
}

export default PicturesForFish;
