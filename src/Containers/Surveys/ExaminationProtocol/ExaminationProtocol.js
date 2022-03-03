import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import PropTypes from 'prop-types';
import { useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { updateProtocol } from 'redux/surveys/surveysSlice.js';
import { examinationProtocolSchema } from 'Containers/Surveys/ExaminationProtocol/yupSchema.js';
import { examinationProtocolStatuses, lessonStatuses } from 'constants.js';
import { momentDateToHuman, strDateToMoment } from 'utils/date/dateUtils';
import { authSelector } from 'redux/auth/authSlice';

import ProtocolBlock from 'Components/Surveys/ExaminationProtocol/ProtocolBlock/ProtocolBlock';
import ProtocolMain from 'Components/Surveys/ExaminationProtocol/ProtocolMain/ProtocolMain.js';
import ProtocolRow from 'Components/Surveys/ExaminationProtocol/ProtocolRow/ProtocolRow.js';
import ProtocolFormField from 'Components/Surveys/ExaminationProtocol/ProtocolFormField/ProtocolFormField.js';
import ProtocolTitle from 'Components/Surveys/ExaminationProtocol/ProtocolTitle/ProtocolTitle.js';
import ProtocolBlockTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBlockTitle/ProtocolBlockTitle.js';
import ProtocolResultTitle from 'Components/Surveys/ExaminationProtocol/ProtocolResultTitle/ProtocolResultTitle.js';
import ProtocolDescriptionSubtitle
  from 'Components/Surveys/ExaminationProtocol/ProtocolResultTitle/ProtocolResultTitle.js';
import ProtocolResultBlock from 'Components/Surveys/ExaminationProtocol/ProtocolResultBlock/ProtocolResultBlock.js';
import ProtocolResultWrapper
  from 'Components/Surveys/ExaminationProtocol/ProtocolResultWrapper/ProtocolResultWrapper.js';
import ProtocolPlaceholderTitle
  from 'Components/Surveys/ExaminationProtocol/ProtocolPlaceholderTitle/ProtocolPlaceholderTitle.js';
import SurveySubmitButton from 'Components/Surveys/Common/SurveySubmitButton.js';
import Questionnaire from 'Containers/Surveys/Questionnaire/Questionnaire.js';
import PicturesForFish from 'Containers/Surveys/ExaminationProtocol/games/PicturesForFish.js';
import GiraffeGame from 'Containers/Surveys/ExaminationProtocol/games/GiraffeGame';
import PuzzleGame from 'Containers/Surveys/ExaminationProtocol/games/PuzzleGame';
import AntLambadaGame from 'Containers/Surveys/ExaminationProtocol/games/AntLambadaGame';
import AntBattleGame from 'Containers/Surveys/ExaminationProtocol/games/AntBattleGame';
import MagicExamGame from 'Containers/Surveys/ExaminationProtocol/games/MagicExamGame';
import CapriciousPrincessGame from 'Containers/Surveys/ExaminationProtocol/games/CapriciousPrincessGame';
import HowTheMouseCouldNotSleep from 'Containers/Surveys/ExaminationProtocol/games/HowTheMouseCouldNotSleep';
import OnTheFarmGame from 'Containers/Surveys/ExaminationProtocol/games/OnTheFarmGame';
import OnTheFarmPartTwoGame from 'Containers/Surveys/ExaminationProtocol/games/OnTheFarmPartTwoGame';
import OnTheFarmPartThree from 'Containers/Surveys/ExaminationProtocol/games/OnTheFarmPartThree';
import ProtocolBlockSubTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBlockSubTitle/ProtocolBlockSubTitle';

import 'Containers/Surveys/ExaminationProtocol/examinationProtocol.css'


const ExaminationProtocol = (props) => {

  const {
    protocol, lesson, onSubmit, isClosed
  } = props

  const { t } = useTranslation();

  const dispatch = useDispatch()

  const { user } = useSelector(authSelector)

  const { register, formState: { errors }, control, handleSubmit, trigger } = useForm({
    resolver: yupResolver(examinationProtocolSchema),
    defaultValues: {
      ...protocol,
      lesson: lesson.id
    }
  })
  const data = useWatch({ control })
  let timer = null
  const isLessonFinished = lesson.status === lessonStatuses.finished || user.role === 'admin'
  const isConclusionDisabled = lesson.status !== lessonStatuses.finished
  const isProtocolClosed = protocol.status === examinationProtocolStatuses.closed || isClosed

  useEffect(() => {
    clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timer = setTimeout(() => {
      dispatch(updateProtocol({
        protocolId: protocol.id,
        newData: data,
      }))
    }, 1000)
    return () => clearTimeout(timer)
  }, [data])

  const onProtocolFormSubmit = async () => {
    const isFormValid = await trigger()
    onSubmit(data, isFormValid)
  }

  return (
      <ProtocolMain
          submitHandler={handleSubmit}
      >
        <ProtocolBlock>
          <ProtocolRow>
            <p className='protocol__person'>{protocol.child.first_name} {protocol.child.last_name}</p>
            <p className='protocol__person-descr'>{momentDateToHuman(strDateToMoment(protocol.child_date_of_birth))}</p>
            <p className='protocol__person'>{t('Родитель')}: {protocol.parent.first_name} {protocol.parent.last_name}</p>
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='textarea'
                label={t('Какие у вас жалобы?')}
                placeholder={t('Ответ родителя')}
                name='what_are_your_complaints'
                register={register}
                errors={errors}
                disabled={isProtocolClosed}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='textarea'
                label={t('С какой целью вы обратились к логопеду?')}
                placeholder={t('Ответ родителя')}
                name='for_what_purpose_did_you_turn_to_a_speech_therapist'
                register={register}
                errors={errors}
                disabled={isProtocolClosed}
            />
          </ProtocolRow>
        </ProtocolBlock>
        <ProtocolBlock>
          <ProtocolTitle>{t('Рече-языковая компетенция')}</ProtocolTitle>
          <ProtocolBlockTitle>{t('Общие представления об окружающем мире. Понимание ребенком обращенной к нему речи')}</ProtocolBlockTitle>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('Как тебя зовут?')}
                placeholder={t('Ответ ребенка')}
                name='what_is_your_name'
                register={register}
                errors={errors}
                disabled={isProtocolClosed}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('Сколько тебе лет?')}
                placeholder={t('Ответ ребенка')}
                name='how_old_are_you'
                register={register}
                errors={errors}
                disabled={isProtocolClosed}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('Как зовут твою маму? Твоего папу?')}
                placeholder={t('Ответ ребенка')}
                name='what_is_your_moms_name_your_daddy'
                register={register}
                errors={errors}
                disabled={isProtocolClosed}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('Где ты живешь?')}
                placeholder={t('Ответ ребенка')}
                name='where_do_you_live'
                register={register}
                errors={errors}
                disabled={isProtocolClosed}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('Какое сейчас время года? Время суток?')}
                placeholder={t('Ответ ребенка')}
                name='what_time_of_year_is_it'
                register={register}
                errors={errors}
                disabled={isProtocolClosed}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('Что ты делал вчера? Что делал утром? Что ты будешь делать завтра?')}
                placeholder={t('Ответ ребенка')}
                name='what_did_you_do_yesterday'
                register={register}
                errors={errors}
                disabled={isProtocolClosed}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('Какие у тебя есть игрушки?')}
                placeholder={t('Ответ ребенка')}
                name='what_toys_do_you_have'
                register={register}
                errors={errors}
                disabled={isProtocolClosed}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='text'
                label={t('Каких животных ты знаешь?')}
                placeholder={t('Ответ ребенка')}
                name='what_kind_of_animals_do_you_know'
                register={register}
                errors={errors}
                disabled={isProtocolClosed}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='textarea'
                label={t('Комментарий')}
                placeholder={t('Комментарий специалиста')}
                name='general_ideas_about_the_world_around_comment'
                register={register}
                errors={errors}
                disabled={isProtocolClosed}
            />
          </ProtocolRow>
          {isLessonFinished && (
              <>
                <ProtocolResultTitle>{t('Варианты заключения')}</ProtocolResultTitle>
                <ProtocolRow>
                  <ProtocolDescriptionSubtitle>{t('Сформированность представлений об окружающем мире')}</ProtocolDescriptionSubtitle>
                  <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Запас знаний об окружающем мире крайне низкий')}
                          name='stock_of_knowledge_about_the_world_around'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || isProtocolClosed}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Запас знаний об окружающем мире ниже возрастной нормы')}
                          name='stock_of_knowledge_about_the_world_around'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || isProtocolClosed}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Запас знаний об окружающем мире соответствует возрасту')}
                          name='stock_of_knowledge_about_the_world_around'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || isProtocolClosed}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('В пределах возрастной нормы')}
                          name='stock_of_knowledge_about_the_world_around'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || isProtocolClosed}
                      />
                    </ProtocolResultWrapper>
                  </ProtocolResultBlock>
                </ProtocolRow>
                <ProtocolRow>
                  <ProtocolDescriptionSubtitle>{t('В пространственно-временной ситуации')}</ProtocolDescriptionSubtitle>
                  <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Ориентируется')}
                          name='in_a_time_space_situation'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || isProtocolClosed}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Не ориентируется')}
                          name='in_a_time_space_situation'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || isProtocolClosed}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('В пределах возрастной нормы')}
                          name='in_a_time_space_situation'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || isProtocolClosed}
                      />
                    </ProtocolResultWrapper>
                  </ProtocolResultBlock>
                </ProtocolRow>
                <ProtocolRow>
                  <ProtocolDescriptionSubtitle>{t('Знает, сколько ему лет, какое сейчас время года, какое сейчас время суток, что он делал вчера, что делал утром, что он будет делать завтра')}</ProtocolDescriptionSubtitle>
                  <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Да, знает')}
                          name='knows_how_old_time_of_year_what_time_of_day_it_is'
                          register={register}
                          value={true}
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || isProtocolClosed}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Нет, не знает')}
                          name='knows_how_old_time_of_year_what_time_of_day_it_is'
                          value={false}
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || isProtocolClosed}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('В пределах возрастной нормы')}
                          name='knows_how_old_time_of_year_what_time_of_day_it_is'
                          value={false}
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || isProtocolClosed}
                      />
                    </ProtocolResultWrapper>
                  </ProtocolResultBlock>
                </ProtocolRow>
                <ProtocolRow>
                  <ProtocolDescriptionSubtitle>{t('Образ «Я»')}</ProtocolDescriptionSubtitle>
                  <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Сформирован')}
                          name='image_i'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || isProtocolClosed}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Не сформирован')}
                          name='image_i'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || isProtocolClosed}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('В пределах возрастной нормы')}
                          name='image_i'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || isProtocolClosed}
                      />
                    </ProtocolResultWrapper>
                  </ProtocolResultBlock>
                </ProtocolRow>
                <ProtocolRow>
                  <ProtocolDescriptionSubtitle>{t('Знает, как его зовут, как зовут его родителей, где он живет')}</ProtocolDescriptionSubtitle>
                  <ProtocolResultWrapper>
                    <ProtocolResultBlock>
                      <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='radio'
                            label={t('Да, знает')}
                            name='knows_his_name_the_name_of_his_parents_where_he_lives'
                            control={control}
                            value={true}
                            errors={errors}
                            disabled={isConclusionDisabled || isProtocolClosed}
                        />
                      </ProtocolResultWrapper>
                      <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='radio'
                            label={t('Нет, не знает')}
                            name='knows_his_name_the_name_of_his_parents_where_he_lives'
                            control={control}
                            value={false}
                            errors={errors}
                            disabled={isConclusionDisabled || isProtocolClosed}
                        />
                      </ProtocolResultWrapper>
                      <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='radio'
                            label={t('В пределах возрастной нормы')}
                            name='knows_his_name_the_name_of_his_parents_where_he_lives'
                            control={control}
                            value={false}
                            errors={errors}
                            disabled={isConclusionDisabled || isProtocolClosed}
                        />
                      </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                  </ProtocolResultWrapper>
                </ProtocolRow>
                <ProtocolRow>
                  <ProtocolDescriptionSubtitle>{t('Соматогнозис: представление о собственном теле')}</ProtocolDescriptionSubtitle>
                  <ProtocolResultWrapper>
                    <ProtocolResultBlock>
                      <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='radio'
                            label={t('Сформирован')}
                            name='somatognosis_understanding_your_own_body'
                            control={control}
                            errors={errors}
                            disabled={isConclusionDisabled || isProtocolClosed}
                        />
                      </ProtocolResultWrapper>
                      <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='radio'
                            label={t('Не сформирован')}
                            name='somatognosis_understanding_your_own_body'
                            control={control}
                            errors={errors}
                            disabled={isConclusionDisabled || isProtocolClosed}
                        />
                      </ProtocolResultWrapper>
                      <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='radio'
                            label={t('В пределах возрастной нормы')}
                            name='somatognosis_understanding_your_own_body'
                            control={control}
                            errors={errors}
                            disabled={isConclusionDisabled || isProtocolClosed}
                        />
                      </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                  </ProtocolResultWrapper>
                </ProtocolRow>
              </>
          )}
          <ProtocolRow>
            <ProtocolDescriptionSubtitle>{t('Контакт с ребенком')}</ProtocolDescriptionSubtitle>
            <ProtocolResultWrapper>
              <ProtocolResultBlock>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='radio'
                      label={t('Установлен')}
                      name='contact_with_the_child'
                      control={control}
                      value={true}
                      errors={errors}
                      disabled={isProtocolClosed}
                  />
                </ProtocolResultWrapper>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='radio'
                      label={t('Не установлен')}
                      name='contact_with_the_child'
                      control={control}
                      value={false}
                      errors={errors}
                      disabled={isProtocolClosed}
                  />
                </ProtocolResultWrapper>
                <ProtocolResultWrapper>
                  <ProtocolFormField
                      type='radio'
                      label={t('В пределах возрастной нормы')}
                      name='contact_with_the_child'
                      control={control}
                      value={false}
                      errors={errors}
                      disabled={isProtocolClosed}
                  />
                </ProtocolResultWrapper>
              </ProtocolResultBlock>
            </ProtocolResultWrapper>
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='textarea'
                label={t('Комментарий')}
                placeholder={t('Комментарий специалиста')}
                name='formation_of_ideas_about_the_world_around_comment'
                register={register}
                errors={errors}
                disabled={isProtocolClosed}
            />
          </ProtocolRow>
        </ProtocolBlock>
        <ProtocolBlock>
          <ProtocolTitle>{t('Билатеральная моторная координация')}</ProtocolTitle>
          <ProtocolPlaceholderTitle>{t('— Возьми воображаемый телефон в руку и приложи к уху')}</ProtocolPlaceholderTitle>
          <ProtocolRow>
            <ProtocolDescriptionSubtitle>{t('Ведущее ухо')}</ProtocolDescriptionSubtitle>
            <ProtocolResultBlock>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Правое')}
                    name='leading_ear_phone'
                    control={control}
                    value={t('Правое ухо')}
                    errors={errors}
                    disabled={isProtocolClosed}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Левое')}
                    name='leading_ear_phone'
                    control={control}
                    value={t('Левое ухо')}
                    errors={errors}
                    disabled={isProtocolClosed}
                />
              </ProtocolResultWrapper>
            </ProtocolResultBlock>
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolDescriptionSubtitle>{t('Ведущая рука')}</ProtocolDescriptionSubtitle>
            <ProtocolResultBlock>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Правая')}
                    name='leading_hand_phone'
                    control={control}
                    value={t('Правая рука')}
                    errors={errors}
                    disabled={isProtocolClosed}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Левая')}
                    name='leading_hand_phone'
                    control={control}
                    value={t('Левая рука')}
                    errors={errors}
                    disabled={isProtocolClosed}
                />
              </ProtocolResultWrapper>
            </ProtocolResultBlock>
          </ProtocolRow>
          <ProtocolPlaceholderTitle>{t('— Посмотри в воображаемую подзорную трубу')}</ProtocolPlaceholderTitle>
          <ProtocolRow>
            <ProtocolDescriptionSubtitle>{t('Ведущая рука')}</ProtocolDescriptionSubtitle>
            <ProtocolResultBlock>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Правая')}
                    name='leading_hand_spyglass'
                    control={control}
                    value={t('Правая рука')}
                    errors={errors}
                    disabled={isProtocolClosed}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Левая')}
                    name='leading_hand_spyglass'
                    control={control}
                    value={t('Левая рука')}
                    errors={errors}
                    disabled={isProtocolClosed}
                />
              </ProtocolResultWrapper>
            </ProtocolResultBlock>
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolDescriptionSubtitle>{t('Ведущий глаз')}</ProtocolDescriptionSubtitle>
            <ProtocolResultBlock>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Правый')}
                    name='leading_eye_spyglass'
                    control={control}
                    value={t('Правый глаз')}
                    errors={errors}
                    disabled={isProtocolClosed}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Левый')}
                    name='leading_eye_spyglass'
                    control={control}
                    value={t('Левый глаз')}
                    errors={errors}
                    disabled={isProtocolClosed}
                />
              </ProtocolResultWrapper>
            </ProtocolResultBlock>
          </ProtocolRow>
          <ProtocolPlaceholderTitle>{t('— Ударь ногой по воображаемому мячу')}</ProtocolPlaceholderTitle>
          <ProtocolRow>
            <ProtocolDescriptionSubtitle>{t('Ведущая нога')}</ProtocolDescriptionSubtitle>
            <ProtocolResultBlock>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Правая')}
                    name='leading_leg_ball'
                    control={control}
                    value='Правая нога'
                    errors={errors}
                    disabled={isProtocolClosed}
                />
              </ProtocolResultWrapper>
              <ProtocolResultWrapper>
                <ProtocolFormField
                    type='radio'
                    label={t('Левая')}
                    name='leading_leg_ball'
                    control={control}
                    value='Левая нога'
                    errors={errors}
                    disabled={isProtocolClosed}
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
                          label={t('Левшество, все 4 показателя совпадают')}
                          name='conclusion_options'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || isProtocolClosed}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Правшество, все 4 показателя совпадают')}
                          name='conclusion_options'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || isProtocolClosed}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('Дисбаланс межполушарных связей')}
                          name='conclusion_options'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || isProtocolClosed}
                      />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                      <ProtocolFormField
                          type='radio'
                          label={t('В пределах возрастной нормы')}
                          name='conclusion_options'
                          control={control}
                          errors={errors}
                          disabled={isConclusionDisabled || isProtocolClosed}
                      />
                    </ProtocolResultWrapper>
                  </ProtocolResultBlock>
                </ProtocolRow>
              </>
          )}
        </ProtocolBlock>
        <PicturesForFish
            register={register}
            errors={errors}
            control={control}
            isConclusionDisabled={isConclusionDisabled}
            disabled={isProtocolClosed}
            isLessonFinished={isLessonFinished}
        />
        <GiraffeGame
            register={register}
            errors={errors}
            control={control}
            isConclusionDisabled={isConclusionDisabled}
            disabled={isProtocolClosed}
            isLessonFinished={isLessonFinished}
        />
        <PuzzleGame
            register={register}
            errors={errors}
            control={control}
            isConclusionDisabled={isConclusionDisabled}
            disabled={isProtocolClosed}
            isLessonFinished={isLessonFinished}
        />
        <AntLambadaGame
            register={register}
            errors={errors}
            control={control}
            isConclusionDisabled={isConclusionDisabled}
            disabled={isProtocolClosed}
            isLessonFinished={isLessonFinished}
        />
        <AntBattleGame
            register={register}
            errors={errors}
            control={control}
            isConclusionDisabled={isConclusionDisabled}
            disabled={isProtocolClosed}
        />
        <MagicExamGame
            register={register}
            errors={errors}
            control={control}
            isConclusionDisabled={isConclusionDisabled}
            disabled={isProtocolClosed}
            isLessonFinished={isLessonFinished}
        />
        <CapriciousPrincessGame
            register={register}
            errors={errors}
            control={control}
            isConclusionDisabled={isConclusionDisabled}
            disabled={isProtocolClosed}
            isLessonFinished={isLessonFinished}
        />
        <HowTheMouseCouldNotSleep
            register={register}
            errors={errors}
            control={control}
            isConclusionDisabled={isConclusionDisabled}
            disabled={isProtocolClosed}
            isLessonFinished={isLessonFinished}
        />
        <OnTheFarmGame
            register={register}
            errors={errors}
            control={control}
            isConclusionDisabled={isConclusionDisabled}
            disabled={isProtocolClosed}
            isLessonFinished={isLessonFinished}
        />
        <OnTheFarmPartTwoGame
            register={register}
            errors={errors}
            control={control}
            isConclusionDisabled={isConclusionDisabled}
            disabled={isProtocolClosed}
            isLessonFinished={isLessonFinished}
        />
        <OnTheFarmPartThree
            register={register}
            errors={errors}
            control={control}
            isConclusionDisabled={isConclusionDisabled}
            disabled={isProtocolClosed}
            isLessonFinished={isLessonFinished}
        />
        <ProtocolBlock>
          <ProtocolBlockTitle>{t('Дополнительная информация')}</ProtocolBlockTitle>
          <ProtocolBlockSubTitle>{t('Данные о развитии')}</ProtocolBlockSubTitle>
          <ProtocolBlockSubTitle>{t('Раннее/позднее физическое развитие')}</ProtocolBlockSubTitle>
          <Questionnaire
              register={register}
              errors={errors}
              disabled={isProtocolClosed}
              isConclusionDisabled={isConclusionDisabled}
          />
        </ProtocolBlock>
        <ProtocolBlock>
          <ProtocolBlockTitle>{t('Логопедическое заключение')}</ProtocolBlockTitle>
          <ProtocolRow>
            <ProtocolFormField
                type='textarea'
                name='speech_therapy_conclusion'
                register={register}
                errors={errors}
                classNameLabel='protocol__result-lbl'
                disabled={isProtocolClosed}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='textarea'
                label={t('Динамическое заключение (5 занятий)')}
                name='dynamic_conclusion'
                register={register}
                errors={errors}
                classNameLabel='protocol__result-lbl'
                disabled={isProtocolClosed}
            />
          </ProtocolRow>
          <ProtocolRow>
            <ProtocolFormField
                type='textarea'
                label={t('Итоговое заключение (10 занятий)')}
                name='final_conclusion'
                register={register}
                errors={errors}
                classNameLabel='protocol__result-lbl'
                disabled={isProtocolClosed}
            />
          </ProtocolRow>
          <ProtocolRow>
            <p className='protocol__finish-title'>{t('Логопед')}</p>
            <ProtocolDescriptionSubtitle>{t('Дата рождения')} {protocol.child_date_of_birth}</ProtocolDescriptionSubtitle>
            <p className='protocol__info'>{t('Родитель')}: {protocol.parent.first_name} {protocol.parent.last_name}</p>
          </ProtocolRow>
        </ProtocolBlock>
        {protocol.status !== examinationProtocolStatuses.closed && (
            <ProtocolBlock>
              <ProtocolRow>
                <SurveySubmitButton
                    type='submit'
                    id='finish-protocol'
                    onClick={onProtocolFormSubmit}
                >
                  {t('Завершить заполение протокола')}
                </SurveySubmitButton>
              </ProtocolRow>
            </ProtocolBlock>
        )}
      </ProtocolMain>
  );
}

ExaminationProtocol.propTypes = {
  protocol: PropTypes.object.isRequired,
  lesson: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isClosed: PropTypes.bool,
}

export default ExaminationProtocol;
