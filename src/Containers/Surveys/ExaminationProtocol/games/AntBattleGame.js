import React from 'react';
import { useTranslation } from 'react-i18next';

import ProtocolPlaceholderTitle
  from 'Components/Surveys/ExaminationProtocol/ProtocolPlaceholderTitle/ProtocolPlaceholderTitle';
import ProtocolBlockTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBlockTitle/ProtocolBlockTitle';
import ProtocolBlock from 'Components/Surveys/ExaminationProtocol/ProtocolBlock/ProtocolBlock';
import ProtocolFormField from 'Components/Surveys/ExaminationProtocol/ProtocolFormField/ProtocolFormField';
import ProtocolRow from 'Components/Surveys/ExaminationProtocol/ProtocolRow/ProtocolRow';
import ProtocolBox from 'Components/Surveys/ExaminationProtocol/ProtocolBox/ProtocolBox';
import ProtocolBoxTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBoxTitle/ProtocolBoxTitle';
import ProtocolResultTitle from 'Components/Surveys/ExaminationProtocol/ResultTitle/ResultTitle';
import ProtocolDescriptionSubtitle
  from 'Components/Surveys/ExaminationProtocol/ProtocolResultTitle/ProtocolResultTitle';
import ProtocolResultBlock from 'Components/Surveys/ExaminationProtocol/ProtocolResultBlock/ProtocolResultBlock';
import ProtocolResultWrapper from 'Components/Surveys/ExaminationProtocol/ProtocolResultWrapper/ProtocolResultWrapper';
import ProtocolTitle from 'Components/Surveys/ExaminationProtocol/ProtocolTitle/ProtocolTitle';
import ProtocolDescriptionMain
  from 'Components/Surveys/ExaminationProtocol/ProtocolDescriptionMain/ProtocolDescriptionMain';


const AntBattleGame = (props) => {

  const {
    register, errors, control, disabled
  } = props

  const { t } = useTranslation();

  return (
      <>
        <ProtocolBlock>
          <ProtocolPlaceholderTitle>{t('Игра «Муравьиный батл»')}</ProtocolPlaceholderTitle>
          <ProtocolBlockTitle>{t('Состояние артикуляционного аппарата и двигательного развития')}</ProtocolBlockTitle>
          <p className='protocol__subtitle-block'>{t('Артикуляционная моторика')}</p>
          <p className='protocol__sub2title-block'>{t('Праксис')}</p>
          <ProtocolBox>
            <ProtocolBoxTitle>{t('Статический праксис')}</ProtocolBoxTitle>
            <ProtocolRow>
              <ProtocolFormField
                  type='text'
                  label={t('Забор')}
                  name='game_ant_battle.fence'
                  register={register}
                  errors={errors}
                  disabled={disabled}
              />
            </ProtocolRow>
            <ProtocolRow>
              <ProtocolFormField
                  type='text'
                  label={t('Лопаточка')}
                  name='game_ant_battle.spatula'
                  register={register}
                  errors={errors}
                  disabled={disabled}
              />
            </ProtocolRow>
            <ProtocolRow>
              <ProtocolFormField
                  type='text'
                  label={t('Иголка')}
                  name='game_ant_battle.needle'
                  register={register}
                  errors={errors}
                  disabled={disabled}
              />
            </ProtocolRow>
            <ProtocolRow>
              <ProtocolFormField
                  type='text'
                  label={t('Грибочек')}
                  name='game_ant_battle.mushroom'
                  register={register}
                  errors={errors}
                  disabled={disabled}
              />
            </ProtocolRow>
            <ProtocolRow>
              <ProtocolFormField
                  type='text'
                  label={t('Окошко (открой рот)')}
                  name='game_ant_battle.window'
                  register={register}
                  errors={errors}
                  disabled={disabled}
              />
            </ProtocolRow>
          </ProtocolBox>
          <ProtocolBox>
            <ProtocolBoxTitle>{t('Динамический праксис')}</ProtocolBoxTitle>
            <ProtocolRow>
              <ProtocolFormField
                  type='text'
                  label={t('Часики')}
                  name='game_ant_battle.watch'
                  register={register}
                  errors={errors}
                  disabled={disabled}
              />
            </ProtocolRow>
            <ProtocolRow>
              <ProtocolFormField
                  type='text'
                  label={t('Качели')}
                  name='game_ant_battle.swing'
                  register={register}
                  errors={errors}
                  disabled={disabled}
              />
            </ProtocolRow>
            <ProtocolRow>
              <ProtocolFormField
                  type='text'
                  label={t('Лошадка')}
                  name='game_ant_battle.horse'
                  register={register}
                  errors={errors}
                  disabled={disabled}
              />
            </ProtocolRow>
          </ProtocolBox>
          <ProtocolResultTitle>{t('Варианты заключения')}</ProtocolResultTitle>
          <ProtocolRow>
            <ProtocolDescriptionSubtitle>{t('Тонус')}</ProtocolDescriptionSubtitle>
            <ProtocolResultBlock>
              <ProtocolFormField
                  type='radio'
                  label={t('В норме')}
                  value='в норме'
                  name='game_ant_battle.tone'
                  control={control}
                  errors={errors}
                  disabled={disabled}
              />
            </ProtocolResultBlock>
            <ProtocolResultBlock>
              <ProtocolFormField
                  type='radio'
                  label={t('Спастичность мышц языка')}
                  value='спастичность мышц языка'
                  name='game_ant_battle.tone'
                  control={control}
                  errors={errors}
                  disabled={disabled}
              />
            </ProtocolResultBlock>
            <ProtocolResultBlock>
              <ProtocolFormField
                  type='radio'
                  label={t('Гипотония мышц языка')}
                  value='гипотония мышц языка'
                  name='game_ant_battle.tone'
                  control={control}
                  errors={errors}
                  disabled={disabled}
              />
            </ProtocolResultBlock>
            <ProtocolResultBlock>
              <ProtocolFormField
                  type='radio'
                  label={t('Дистония мышц языка')}
                  value='дистония мышц языка'
                  name='game_ant_battle.tone'
                  control={control}
                  errors={errors}
                  disabled={disabled}
              />
            </ProtocolResultBlock>
            <ProtocolResultBlock>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='checkbox'
                    label={t('Девиация языка (отклонения языка в сторону)')}
                    name='game_ant_battle.deviation_of_the_tongue'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='checkbox'
                    label={t('Гиперкинезы языка')}
                    name='game_ant_battle.hyperkinesis_of_the_tongue'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='checkbox'
                    label={t('Тремор языка')}
                    name='game_ant_battle.tremor_of_the_tongue'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='checkbox'
                    label={t('Трудности переключения')}
                    name='game_ant_battle.switching_difficulties'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              {errors.choices6 && <div className='form2__error'> {errors.choices6.message}</div>}
            </ProtocolResultBlock>
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolDescriptionSubtitle>{t('Темп выполнения движений')}</ProtocolDescriptionSubtitle>
            <ProtocolResultBlock>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Нормальный темп выполнение движений')}
                    value='нормальный темп выполнение движений'
                    name='game_ant_battle.pace_of_the_movements'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Замедленный темп выполнения движений')}
                    value='замедленный темп выполнения движений'
                    name='game_ant_battle.pace_of_the_movements'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Ускоренный темп выполнения движений')}
                    value='ускоренный темп выполнения движений'
                    name='game_ant_battle.pace_of_the_movements'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
            </ProtocolResultBlock>
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='textarea'
                label={t('Комментарий')}
                name='game_ant_battle.expert_comment'
                placeholder={t('Комментарий специалиста')}
                errors={errors}
                register={register}
                disabled={disabled}
            />
          </ProtocolRow>
        </ProtocolBlock>
        <ProtocolBlock>
          <ProtocolBlockTitle>{t('Мимическая мускулатура')} <span>{t('Упражнение')}</span></ProtocolBlockTitle>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('Поднять брови')}
                name='game_ant_battle.raise_eyebrows'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('Нахмурить брови')}
                name='game_ant_battle.frown'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('Подмигнуть')}
                name='game_ant_battle.wink'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('Надуть щеки')}
                name='game_ant_battle.puff_out_cheeks'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolRow>
          <ProtocolResultTitle>{t('Варианты заключения')}</ProtocolResultTitle>
          <ProtocolRow>
            <ProtocolDescriptionSubtitle>{t('Тонус мышц лица')}</ProtocolDescriptionSubtitle>
            <ProtocolResultBlock>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('В норме')}
                    value='в норме'
                    name='game_ant_battle.facial_muscle_tone'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Спастичность')}
                    value='спастичность'
                    name='game_ant_battle.facial_muscle_tone'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Гипотония')}
                    value='гипотония'
                    name='game_ant_battle.facial_muscle_tone'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Дистония')}
                    value='дистония'
                    name='game_ant_battle.facial_muscle_tone'
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
                    label={t('Гипомимия')}
                    name='game_ant_battle.hypomimia'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='checkbox'
                    label={t('Сглаженность носогубной складки')}
                    name='game_ant_battle.smoothness_of_nasolabial_fold'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='checkbox'
                    label={t('Асимметрия лица')}
                    name='game_ant_battle.asymmetry_of_face'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='checkbox'
                    label={t('Гиперкинезы лица')}
                    name='game_ant_battle.facial_hyperkinesis'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='checkbox'
                    label={t('Синкинезии')}
                    name='game_ant_battle.synkinesis'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              {errors.choices7 && <div className='form2__error'> {errors.choices7.message}</div>}
            </ProtocolResultBlock>
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolResultTitle>{t('Тонус мышц губ')}:</ProtocolResultTitle>
            <ProtocolResultBlock>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('В норме')}
                    value='в норме'
                    name='game_ant_battle.lip_muscle_tone'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Спастичность')}
                    value='спастичность'
                    name='game_ant_battle.lip_muscle_tone'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Гипотония')}
                    value='гипотония'
                    name='game_ant_battle.lip_muscle_tone'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Дистония')}
                    value='дистония'
                    name='game_ant_battle.lip_muscle_tone'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='checkbox'
                    label={t('Ограничение подвижности губ')}
                    name='game_ant_battle.restriction_of_lip_mobility'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
            </ProtocolResultBlock>
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolResultTitle>{t('Гиперсаливация')}:</ProtocolResultTitle>
            <ProtocolResultWrapper>
              <ProtocolFormField
                  type='radio'
                  label={t('Постоянная')}
                  value='постоянная'
                  name='game_ant_battle.hypersalivation'
                  control={control}
                  errors={errors}
                  disabled={disabled}
              />
            </ProtocolResultWrapper>
            <ProtocolResultWrapper>
              <ProtocolFormField
                  type='radio'
                  label={t('После функциональной нагрузки')}
                  value='после функциональной нагрузки'
                  name='game_ant_battle.hypersalivation'
                  control={control}
                  errors={errors}
                  disabled={disabled}
              />
            </ProtocolResultWrapper>
            <ProtocolResultWrapper>
              <ProtocolFormField
                  type='radio'
                  label={t('Отсутствует')}
                  value='отсутствует'
                  name='game_ant_battle.hypersalivation'
                  control={control}
                  errors={errors}
                  disabled={disabled}
              />
            </ProtocolResultWrapper>
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='textarea'
                label={t('Комментарии')}
                name='game_ant_battle.hypersalivation_comment'
                placeholder={t('Комментарии специалиста')}
                errors={errors}
                register={register}
                disabled={disabled}
            />
          </ProtocolRow>
        </ProtocolBlock>
        <ProtocolBlock>
          <ProtocolTitle>{t('Общая и мелкая моторика')}</ProtocolTitle>
          <ProtocolBlockTitle>{t('Праксис')}</ProtocolBlockTitle>
          <ProtocolBox>
            <p className='protocol__sub2title-block'>{t('Статический праксис')}</p>
            <ProtocolRow>
              <ProtocolFormField
                  type='text'
                  label={t('Постой на одной ноге, на другой (под счет до 4х)')}
                  name='game_ant_battle.static_praxis_stand_on_one_leg_over_the_other'
                  register={register}
                  errors={errors}
                  disabled={disabled}
              />
            </ProtocolRow>
            <ProtocolRow>
              <ProtocolFormField
                  type='text'
                  label={t('Поднимись на цыпочки, постой (под счет до 4х)')}
                  name='game_ant_battle.static_praxis_get_up_on_tiptoe_wait'
                  register={register}
                  errors={errors}
                  disabled={disabled}
              />
            </ProtocolRow>
          </ProtocolBox>
          <ProtocolBox>
            <ProtocolBoxTitle>{t('Динамический праксис')}</ProtocolBoxTitle>
            <ProtocolFormField
                type='text'
                label={t('Попрыгай на одной ноге, другой, двух (под счет до 5ти на каждую ногу)')}
                name='game_ant_battle.dynamic_praxis_jump_on_one_leg_the_other_two'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolBox>
          <ProtocolBox>
            <ProtocolBoxTitle>{t('Пространственный праксис')}</ProtocolBoxTitle>
            <ProtocolFormField
                type='text'
                label={t('Повернись направо, налево')}
                name='game_ant_battle.spatial_praxis_turn_right_left'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolBox>
          <p className='protocol__sub2title-block'>{t('Пальцевый праксис')}</p>
          <ProtocolBox>
            <ProtocolBoxTitle>{t('Статический праксис')}</ProtocolBoxTitle>
            <ProtocolFormField
                type='text'
                label={t('Покажи «V» («зайку»)')}
                name='game_ant_battle.show_v'
                register={register}
                errors={errors}
                disabled={disabled}
            />
            <ProtocolFormField
                type='text'
                label={t('Покажи «корову»')}
                name='game_ant_battle.show_the_cow'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolBox>
          <ProtocolBox>
            <ProtocolBoxTitle>{t('Динамический праксис')}</ProtocolBoxTitle>
            <ProtocolFormField
                type='text'
                label={t('Покажи «зайку» — «корову» под счет')}
                name='game_ant_battle.show_the_bunny_the_cow_is_counted'
                register={register}
                errors={errors}
                disabled={disabled}
            />
          </ProtocolBox>
          <ProtocolResultTitle>{t('Варианты заключения')}</ProtocolResultTitle>
          <ProtocolRow>
            <ProtocolDescriptionSubtitle>{t('Основные двигательные навыки')}</ProtocolDescriptionSubtitle>
            <ProtocolResultBlock>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Сформированы')}
                    value='сформированы'
                    name='game_ant_battle.basic_motor_skills'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Сформированы недостаточно')}
                    value='сформированы недостаточно'
                    name='game_ant_battle.basic_motor_skills'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Не сформированы')}
                    value='не сформированы'
                    name='game_ant_battle.basic_motor_skills'
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
                    label={t('Соответствуют возрасту')}
                    value='соответствуют возрасту'
                    name='game_ant_battle.basic_motor_skills_part_two'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Не соответствуют возрасту')}
                    value='не соответствуют возрасту'
                    name='game_ant_battle.basic_motor_skills_part_two'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
            </ProtocolResultBlock>
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolDescriptionMain>{t('Нарушения первичной моторной функции')}</ProtocolDescriptionMain>
            <ProtocolDescriptionSubtitle>{t('Нарушения тонуса')}</ProtocolDescriptionSubtitle>
            <ProtocolResultBlock>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Не наблюдаются')}
                    value='не наблюдаются'
                    name='game_ant_battle.disturbances_in_tone'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Спастичность')}
                    value='спастичность'
                    name='game_ant_battle.disturbances_in_tone'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Гипотония')}
                    value='гипотония'
                    name='game_ant_battle.disturbances_in_tone'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Дистония')}
                    value='дистония'
                    name='game_ant_battle.disturbances_in_tone'
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
                    label={t('Снижение силы')}
                    name='game_ant_battle.decrease_in_strength'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='checkbox'
                    label={t('Нарушения координации движения (атаксия)')}
                    name='game_ant_battle.impaired_coordination_of_movement_ataxia'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='checkbox'
                    label={t('Нарушения согласованности действий рук')}
                    name='game_ant_battle.hand_coordination_crashes'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='checkbox'
                    label={t('Трудности моторного переключения')}
                    name='game_ant_battle.motor_shifting_difficulties'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              {errors.choices8 && <div className='form2__error'> {errors.choices8.message}</div>}
            </ProtocolResultBlock>
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolDescriptionSubtitle>{t('Нарушения отдельных аспектов сенсомоторной функции')}</ProtocolDescriptionSubtitle>
            <ProtocolResultBlock>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='checkbox'
                    label={t('Не наблюдаются')}
                    name='game_ant_battle.violations_of_certain_aspects_function_not_observed'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='checkbox'
                    label={t('Нарушения схемы тела')}
                    name='game_ant_battle.body_schema_disorders'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='checkbox'
                    label={t('Нарушения зрительно-моторной координации')}
                    name='game_ant_battle.disorders_of_hand_eye_coordination'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              {errors.choices9 && <div className='form2__error'> {errors.choices9.message}</div>}
            </ProtocolResultBlock>
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolDescriptionSubtitle>{t('Содружественные движения (синкинезии)')}</ProtocolDescriptionSubtitle>
            <ProtocolResultBlock>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='checkbox'
                    label={t('Не наблюдаются')}
                    name='game_ant_battle.friendly_movements_of_synkinesis_not_observed'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='checkbox'
                    label={t('Оролингвальные')}
                    name='game_ant_battle.orolingual'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='checkbox'
                    label={t('Оптолингвальные')}
                    name='game_ant_battle.opto_lingual'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              {errors.choices10 && <div className='form2__error'> {errors.choices10.message}</div>}
            </ProtocolResultBlock>
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolDescriptionSubtitle>{t('Моторные функции кистей и пальцев рук')}</ProtocolDescriptionSubtitle>
            <ProtocolResultBlock>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Пальцевый праксис сформирован. Воспроизвел пальцевую позу без затруднений')}
                    value='пальцевый праксис сформирован. Воспроизвел пальцевую позу без затруднений'
                    name='game_ant_battle.motor_functions_of_hands_and_fingers'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Пальцевый праксис сформирован. Воспроизвел пальцевую позу с затруднениями')}
                    value='пальцевый праксис сформирован. Воспроизвел пальцевую позу с затруднениями'
                    name='game_ant_battle.motor_functions_of_hands_and_fingers'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Пальцевый праксис не сформирован. Пальцевую позу не воспроизвел')}
                    value='пальцевый праксис не сформирован. Пальцевую позу не воспроизвел'
                    name='game_ant_battle.motor_functions_of_hands_and_fingers'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
            </ProtocolResultBlock>
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='textarea'
                label={t('Комментарии')}
                name='game_ant_battle.motor_functions_of_hands_and_fingers_comment'
                placeholder={t('Комментарии специалиста')}
                errors={errors}
                register={register}
                disabled={disabled}
            />
          </ProtocolRow>
        </ProtocolBlock>
        <ProtocolBlock>
          <ProtocolTitle>{t('Строение артикуляционного аппарата')}</ProtocolTitle>
          <ProtocolResultTitle>{t('Варианты заключения')}</ProtocolResultTitle>
          <ProtocolRow>
            <ProtocolDescriptionSubtitle>{t('Губы')}</ProtocolDescriptionSubtitle>
            <ProtocolResultBlock>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Нормальные')}
                    value='нормальные'
                    name='game_ant_battle.lips'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Тонкие')}
                    value='тонкие губы'
                    name='game_ant_battle.lips'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Полные')}
                    value='полные губы'
                    name='game_ant_battle.lips'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='checkbox'
                    label={t('Несмыкание губ')}
                    name='game_ant_battle.non_closure_of_lips'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
            </ProtocolResultBlock>
            <ProtocolDescriptionMain>{t('Зубо-челюстные аномалии')}</ProtocolDescriptionMain>
            <ProtocolDescriptionSubtitle>{t('Нарушения прикуса')}</ProtocolDescriptionSubtitle>
            <ProtocolResultBlock>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Не наблюдаются')}
                    value='не наблюдаются'
                    name='game_ant_battle.malocclusion'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Прогнатия')}
                    value='прогнатия'
                    name='game_ant_battle.malocclusion'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Прогения')}
                    value='прогения'
                    name='game_ant_battle.malocclusion'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Глубокий прикус')}
                    value='глубокий прикус'
                    name='game_ant_battle.malocclusion'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Открытый прикус')}
                    value='открытый прикус'
                    name='game_ant_battle.malocclusion'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Перекрестный прикус')}
                    value='перекрестный прикус'
                    name='game_ant_battle.malocclusion'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
            </ProtocolResultBlock>
            <ProtocolDescriptionSubtitle>{t('Неправильное положение зубов')}</ProtocolDescriptionSubtitle>
            <ProtocolResultBlock>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Не наблюдается')}
                    value='не наблюдается'
                    name='game_ant_battle.incorrect_position_of_teeth'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Адентия')}
                    value='адентия'
                    name='game_ant_battle.incorrect_position_of_teeth'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Диастема')}
                    value='диастема'
                    name='game_ant_battle.incorrect_position_of_teeth'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Сверхкомплектные зубы')}
                    value='сверхкомплектные зубы'
                    name='game_ant_battle.incorrect_position_of_teeth'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
            </ProtocolResultBlock>
            <ProtocolDescriptionSubtitle>{t('Изменение формы зубов')}</ProtocolDescriptionSubtitle>
            <ProtocolResultBlock>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Не наблюдается')}
                    value='не наблюдается'
                    name='game_ant_battle.tooth_reshaping'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Макродентия')}
                    value='макродентия'
                    name='game_ant_battle.tooth_reshaping'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Микродентия')}
                    value='микродентия'
                    name='game_ant_battle.tooth_reshaping'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
            </ProtocolResultBlock>
            <ProtocolDescriptionMain>{t('Аномалии языка')}</ProtocolDescriptionMain>
            <ProtocolDescriptionSubtitle>{t('Изменение размера языка')}</ProtocolDescriptionSubtitle>
            <ProtocolResultBlock>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Не наблюдается')}
                    value='не наблюдается'
                    name='game_ant_battle.changing_size_of_tongue'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Макроглоссия')}
                    value='макроглоссия'
                    name='game_ant_battle.changing_size_of_tongue'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Микроглоссия')}
                    value='микроглоссия'
                    name='game_ant_battle.changing_size_of_tongue'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
            </ProtocolResultBlock>
            <ProtocolDescriptionSubtitle>{t('Девиация языка')}</ProtocolDescriptionSubtitle>
            <ProtocolResultWrapper>
              <ProtocolFormField
                  type='radio'
                  label={t('Не наблюдается')}
                  value='не наблюдается'
                  name='game_ant_battle.deviation_of_tongue'
                  control={control}
                  errors={errors}
                  disabled={disabled}
              />
            </ProtocolResultWrapper>
            <ProtocolResultWrapper>
              <ProtocolFormField
                  type='radio'
                  label={t('Отсутствует')}
                  value='отсутствует'
                  name='game_ant_battle.deviation_of_tongue'
                  control={control}
                  errors={errors}
                  disabled={disabled}
              />
            </ProtocolResultWrapper>
            <ProtocolResultWrapper>
              <ProtocolFormField
                  type='radio'
                  label={t('Влево')}
                  value='влево'
                  name='game_ant_battle.deviation_of_tongue'
                  control={control}
                  errors={errors}
                  disabled={disabled}
              />
            </ProtocolResultWrapper>
            <ProtocolResultWrapper>
              <ProtocolFormField
                  type='radio'
                  label={t('Вправо')}
                  value='вправо'
                  name='game_ant_battle.deviation_of_tongue'
                  control={control}
                  errors={errors}
                  disabled={disabled}
              />
            </ProtocolResultWrapper>
            <ProtocolResultBlock>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='checkbox'
                    label={t('Раздвоение языка')}
                    name='game_ant_battle.split_tongue'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='checkbox'
                    label={t('Укороченная подъязычная складка')}
                    name='game_ant_battle.shortened_hyoid_fold'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              {errors.choices11 && <div className='form2__error'> {errors.choices11.message}</div>}
            </ProtocolResultBlock>
            <ProtocolDescriptionSubtitle>{t('Аномалии уздечек верхней/нижней губы')}</ProtocolDescriptionSubtitle>
            <ProtocolResultBlock>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Не наблюдается')}
                    value='не наблюдается'
                    name='game_ant_battle.anomalies_of_frenum_of_upper_lower_lip'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Укорочение')}
                    value='укорочение'
                    name='game_ant_battle.anomalies_of_frenum_of_upper_lower_lip'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Увеличение')}
                    value='увеличение'
                    name='game_ant_battle.anomalies_of_frenum_of_upper_lower_lip'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
            </ProtocolResultBlock>
            <ProtocolDescriptionMain>{t('Пороки развития челюстно-лицевой области и системные аномалии мягких тканей и костей лица')}</ProtocolDescriptionMain>
            <ProtocolDescriptionSubtitle>{t('Расщелина')}</ProtocolDescriptionSubtitle>
            <ProtocolResultBlock>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Не наблюдается')}
                    value='не наблюдается'
                    name='game_ant_battle.cleft'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Губы')}
                    value='губы'
                    name='game_ant_battle.cleft'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Твердого и мягкого нёба')}
                    value='твердого и мягкого нёба'
                    name='game_ant_battle.cleft'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Альвеолярного отростка нёба')}
                    value='альвеолярного отростка нёба'
                    name='game_ant_battle.cleft'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Скрытая')}
                    value='скрытая'
                    name='game_ant_battle.cleft'
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
                    label={t('Готическое нёбо')}
                    name='game_ant_battle.gothic_palate'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='checkbox'
                    label={t('Деформации челюсти')}
                    name='game_ant_battle.jaw_deformities'
                    control={control}
                    errors={errors}
                    disabled={disabled}
                />
              </ProtocolResultWrapper>
              {errors.choices12 && <div className='form2__error'> {errors.choices12.message}</div>}
            </ProtocolResultBlock>
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='textarea'
                label={t('Комментарии')}
                name='game_ant_battle.cleft_comment'
                placeholder={t('Комментарии специалиста')}
                errors={errors}
                register={register}
                disabled={disabled}
            />
          </ProtocolRow>
        </ProtocolBlock>
      </>
  );
};

export default AntBattleGame;
