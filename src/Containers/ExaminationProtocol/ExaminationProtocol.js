import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import FormRow from 'Components/FormRow/FormRow';
import Button from 'Components/Button/Button';
import Container from 'Components/Container/Container';
import CustomFormProvider from 'Components/CustomFormProvider/CustomFormProvider';

import ProtocolBlock from './components/ProtocolBlock';
import GameSectionBlock from './components/GameSectionBlock';
import blockContent from './ExamProtocolContent/blockContent';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import examProtocolSchema from 'utils/formValidationSchemas/examProtocolSchema';

import { clearProtocolState } from 'redux/surveys/protocolSlice';

import './examinationProtocol.css';

import {
  getProtocol,
  protocolSelector,
  updateProtocol,
} from 'redux/surveys/protocolSlice';
import { lessonSelector } from 'redux/lesson/lessonSlice';

const ExaminationProtocol = (props) => {
  const dispatch = useDispatch();
  const { protocol } = useSelector(protocolSelector);
  const { lesson } = useSelector(lessonSelector);

  const { showFields } = props;

  const [validationErrors, setValidationErrors] = useState(null);

  const formMethods = useForm({
    resolver: yupResolver(examProtocolSchema),
    mode: 'onSubmit',
    defaultValues: protocol,
  });

  const { getValues, reset, setValue, handleSubmit } = formMethods;

  let timeout = null;

  const inputChangeHandler = (e) => {
    clearTimeout(timeout);
    setValue(e.target.name, e.target.value);
    const splitName = e.target.name.split('.');
    // console.log({ [e.target.name]: e.target.value });

    timeout = setTimeout(function () {
      const formValue = getValues(e.target.name);
      dispatch(
        updateProtocol({
          protocolId: protocol.id,
          newData:
            splitName.length > 1
              ? {
                  [splitName[0]]: {
                    [splitName[1]]:
                      typeof formValue === 'string'
                        ? formValue.toLowerCase()
                        : formValue,
                  },
                }
              : {
                  [e.target.name]:
                    typeof formValue === 'string'
                      ? formValue.toLowerCase()
                      : formValue,
                },
        })
      );
    }, 500);
  };

  const submitHandler = (data, e) => {
    e.preventDefault();
    console.log({ dirtyFields: data });
    return console.log('checked');
  };
  const errorSubmitHandler = (errors, e) => {
    e.preventDefault();
    setValidationErrors(errors);

    // console.log(keyValue);
    // console.log(validationErrors[name]);
    return console.log('not checked');
  };

  useEffect(() => {
    if (lesson) {
      dispatch(getProtocol(lesson.student.id));
    } else {
      console.log('NO LESSON');
    }
  }, [lesson]);

  useEffect(() => {
    reset(protocol);
    // console.log(protocol);
  }, [protocol]);

  useEffect(() => {
    // console.log(validationErrors);
  }, [validationErrors]);

  return (
    <Container>
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,600;0,700;0,800;1,600&display=swap"
        rel="stylesheet"
      />

      {protocol ? (
        <div className="protocol">
          <CustomFormProvider customMethods={formMethods}>
            <form onSubmit={handleSubmit(submitHandler, errorSubmitHandler)}>
              <ProtocolBlock
                validationErrors={validationErrors}
                listOfFields={blockContent.parentProtocolBlock}
                fieldTypes={blockContent.fieldTypes}
                inputChangeHandler={inputChangeHandler}
                secondPlaceholder="Ответ родителя"
              >
                <FormRow customStyle="protocol__row">
                  <p className="protocol__person">{`${lesson?.student.first_name} ${lesson?.student.last_name}`}</p>
                  <p className="protocol__person-descr">
                    Дата рождения: {`${lesson?.student.date_of_birth} `}
                  </p>
                  <p className="protocol__person">Родитель: Ирина Климова</p>
                </FormRow>
              </ProtocolBlock>
              <ProtocolBlock
                validationErrors={validationErrors}
                title="Рече-языковая компетенция"
                titleBlock="Общие представления об окружающем мире. Понимание ребенком обращенной
              к нему речи"
                listOfFields={blockContent.speechLanguageCompetence}
                fieldTypes={blockContent.fieldTypes}
                inputChangeHandler={inputChangeHandler}
                placeholder="Ответ ребенка"
                secondPlaceholder="Комментарий специалиста"
              />
              <ProtocolBlock
                validationErrors={validationErrors}
                listOfFields={blockContent.speechLanguageCompetenceReview}
                fieldTypes={blockContent.fieldTypes}
                inputChangeHandler={inputChangeHandler}
                description="Сформированность представлений об окружающем мире. Запас знаний:"
                secondPlaceholder="Комментарий специалиста"
                disabled={!showFields}
              >
                <p className="protocol__result-title">Варианты заключения:</p>
              </ProtocolBlock>
              <ProtocolBlock
                validationErrors={validationErrors}
                title="Билатеральная моторная координация"
                listOfFields={blockContent.bilateralMotorCoordination}
                fieldTypes={blockContent.fieldTypes}
                inputChangeHandler={inputChangeHandler}
              />
              <GameSectionBlock
                validationErrors={validationErrors}
                gameTitle="Игра “Картинки для рыбки”"
                titleBlock="Звукопроизношение"
                titleBlockSpan="Звуки С, Сь, З, Зь, Ц, Ч, Щ, Ж, Ш"
                fieldTypes={blockContent.fieldTypes}
                inputChangeHandler={inputChangeHandler}
                placeholder="Ответ ребенка"
                secondPlaceholder="Комментарий специалиста"
                gameFields={blockContent.fishGame}
                gameReviewFields={blockContent.fishGameReview}
                sectionReviewTitle="Психологическая база речи. Память"
                sectionReviewFields={blockContent.basisOfSpeechAndMemoryReview}
              />

              <GameSectionBlock
                validationErrors={validationErrors}
                gameTitle="Игра “Жираф”"
                titleBlock="Звукопроизношение"
                titleBlockSpan="Звуки Р, Рь, Л, Ль"
                fieldTypes={blockContent.fieldTypes}
                placeholder="Ответ ребенка"
                secondPlaceholder="Комментарий специалиста"
                inputChangeHandler={inputChangeHandler}
                gameFields={blockContent.giraffeGame}
                gameReviewFields={blockContent.giraffeGameReview}
                sectionReviewTitle="Психологическая база речи. Мышление"
                sectionReviewFields={blockContent.baseOfSpeechAndThinkingReview}
              />
              <GameSectionBlock
                validationErrors={validationErrors}
                gameTitle="Игра “Пазл”"
                titleBlock="Звукопроизношение"
                titleBlockSpan="Звуки В, Вь, Ф, Фь"
                placeholder="Ответ ребенка"
                secondPlaceholder="Комментарий специалиста"
                fieldTypes={blockContent.fieldTypes}
                inputChangeHandler={inputChangeHandler}
                gameFields={blockContent.puzzleGame}
                gameReviewFields={blockContent.puzzleGameReview}
                sectionReviewTitle="Симультанное зрительное восприятие"
                sectionReviewFields={
                  blockContent.simultaneousVisualPerceptionReview
                }
              />
              <GameSectionBlock
                validationErrors={validationErrors}
                gameTitle="Игра “Муравьиная ламбада”"
                titleBlock="Звукопроизношение"
                titleBlockSpan="Звуки Д, Дь, Т, Ть, К, Г, Х"
                placeholder="Ответ ребенка"
                secondPlaceholder="Комментарий специалиста"
                fieldTypes={blockContent.fieldTypes}
                inputChangeHandler={inputChangeHandler}
                gameFields={blockContent.antLambadaGame}
                gameReviewFields={blockContent.antLambadaGameReview}
              />
              <GameSectionBlock
                validationErrors={validationErrors}
                gameTitle="Игра “Муравьиный батл”"
                titleBlock="Состояние артикуляционного аппарата и двигательного развития "
                placeholder="Комментарий специалиста"
                secondPlaceholder="Комментарий специалиста"
                subtitleBlock="Артикуляционная моторика"
                subtitleBlock2="Праксис"
                fieldTypes={blockContent.fieldTypes}
                inputChangeHandler={inputChangeHandler}
                gameFields={blockContent.antBattleGame}
                gameReviewFields={blockContent.antBattleGameReview}
              />

              <ProtocolBlock
                validationErrors={validationErrors}
                titleBlock="Мимическая мускулатура "
                titleBlockSpan="Упражнение:"
                placeholder="Комментарий специалиста"
                secondPlaceholder="Комментарий специалиста"
                listOfFields={blockContent.mimicMusculature}
                fieldTypes={blockContent.fieldTypes}
                inputChangeHandler={inputChangeHandler}
              />
              <ProtocolBlock
                validationErrors={validationErrors}
                listOfFields={blockContent.mimicMusculatureReview}
                fieldTypes={blockContent.fieldTypes}
                inputChangeHandler={inputChangeHandler}
              >
                <p className="protocol__result-title">Варианты заключения:</p>
              </ProtocolBlock>

              <ProtocolBlock
                validationErrors={validationErrors}
                subtitleBlock="Общая и мелкая моторика"
                subtitleBlock2="Праксис"
                placeholder="Комментарий специалиста"
                secondPlaceholder="Комментарий специалиста"
                listOfFields={blockContent.generalAndFineMotorSkills}
                fieldTypes={blockContent.fieldTypes}
                inputChangeHandler={inputChangeHandler}
              />
              <ProtocolBlock
                validationErrors={validationErrors}
                listOfFields={blockContent.generalAndFineMotorSkillsReview}
                fieldTypes={blockContent.fieldTypes}
                inputChangeHandler={inputChangeHandler}
              >
                <p className="protocol__result-title">Варианты заключения:</p>
              </ProtocolBlock>

              <ProtocolBlock
                validationErrors={validationErrors}
                titleBlock="Строение артикуляционного аппарата "
                listOfFields={blockContent.articulationApparatusStructureReview}
                fieldTypes={blockContent.fieldTypes}
                inputChangeHandler={inputChangeHandler}
              >
                <p className="protocol__result-title">Варианты заключения:</p>
              </ProtocolBlock>
              <GameSectionBlock
                validationErrors={validationErrors}
                gameTitle="Игра “Экзамен по магии”"
                titleBlock="Фонематическое восприятие"
                placeholder="Ответ ребенка"
                secondPlaceholder="Комментарий специалиста"
                fieldTypes={blockContent.fieldTypes}
                inputChangeHandler={inputChangeHandler}
                gameFields={blockContent.examMagicGame}
                gameReviewFields={blockContent.examMagicGameReview}
              />
              <ProtocolBlock
                validationErrors={validationErrors}
                subtitleBlock2="Звуковой анализ и синтез"
                placeholder="Ответ ребенка"
                secondPlaceholder="Комментарий специалиста"
                listOfFields={blockContent.soundAnalysisAndSynthesis}
                fieldTypes={blockContent.fieldTypes}
                inputChangeHandler={inputChangeHandler}
              />
              <ProtocolBlock
                validationErrors={validationErrors}
                listOfFields={blockContent.soundAnalysisAndSynthesisReview}
                fieldTypes={blockContent.fieldTypes}
                inputChangeHandler={inputChangeHandler}
              >
                <p className="protocol__result-title">Варианты заключения:</p>
              </ProtocolBlock>
              <GameSectionBlock
                validationErrors={validationErrors}
                gameTitle="Игра “Капризная принцесса”"
                titleBlock="Слоговая структура"
                placeholder="Ответ ребенка"
                secondPlaceholder="Комментарий специалиста"
                fieldTypes={blockContent.fieldTypes}
                inputChangeHandler={inputChangeHandler}
                gameFields={blockContent.сapriciousPrincessGame}
                gameReviewFields={blockContent.сapriciousPrincessGameReview}
              />
              <GameSectionBlock
                validationErrors={validationErrors}
                gameTitle="Игра «Как мышонку не спалось»"
                titleBlock="Обследование связной речи"
                placeholder="Ответ ребенка"
                fieldTypes={blockContent.fieldTypes}
                inputChangeHandler={inputChangeHandler}
                gameFields={blockContent.notSleepingMouseGame}
                gameReviewFields={blockContent.notSleepingMouseGameReview}
              />
              <GameSectionBlock
                validationErrors={validationErrors}
                gameTitle="Игра «На ферме». Часть 1"
                titleBlock="Обследование связной речи"
                subtitleBlock2="Предметный словарь"
                placeholder="Ответ ребенка"
                fieldTypes={blockContent.fieldTypes}
                inputChangeHandler={inputChangeHandler}
                gameFields={blockContent.farmGameOne}
                gameReviewFields={blockContent.farmGameOneReview}
              />
              <GameSectionBlock
                validationErrors={validationErrors}
                gameTitle="Игра «На ферме». Часть 2"
                titleBlock="Обследование уровня сформированности грамматической компетенции "
                subtitleBlock2="Словообразование"
                placeholder="Ответ ребенка"
                fieldTypes={blockContent.fieldTypes}
                inputChangeHandler={inputChangeHandler}
                gameFields={blockContent.farmGameTwo}
                gameReviewFields={blockContent.farmGameTwoReview}
              />
              <GameSectionBlock
                validationErrors={validationErrors}
                gameTitle="Игра «На ферме». Часть 3"
                subtitleBlock2="Согласование сущ.+числ."
                placeholder="Ответ ребенка"
                fieldTypes={blockContent.fieldTypes}
                inputChangeHandler={inputChangeHandler}
                gameFields={blockContent.farmGameThree}
                gameReviewFields={blockContent.farmGameThreeReview}
              />
              <ProtocolBlock
                validationErrors={validationErrors}
                titleBlock="Психологическая база речи: Внимание"
                listOfFields={blockContent.psychologicalBasisOfSpeechAttention}
                fieldTypes={blockContent.fieldTypes}
                inputChangeHandler={inputChangeHandler}
                placeholder="Комментарий специалиста"
              >
                <p className="protocol__result-title">Варианты заключения:</p>
              </ProtocolBlock>
              <ProtocolBlock
                validationErrors={validationErrors}
                titleBlock="Психологическая база речи: Познавательная активность. Мотивация и интерес"
                listOfFields={blockContent.psychologicalBasisOfSpeechMotivation}
                fieldTypes={blockContent.fieldTypes}
                inputChangeHandler={inputChangeHandler}
                placeholder="Комментарий специалиста"
              />
              <ProtocolBlock
                validationErrors={validationErrors}
                listOfFields={
                  blockContent.psychologicalBasisOfSpeechMotivationReview
                }
                fieldTypes={blockContent.fieldTypes}
                inputChangeHandler={inputChangeHandler}
              >
                <p className="protocol__result-title">Варианты заключения:</p>
              </ProtocolBlock>
              <ProtocolBlock
                validationErrors={validationErrors}
                titleBlock="Просодическая сторона речи"
                subtitleBlock2="Компоненты:"
                listOfFields={blockContent.prosodicSideOfSpeech}
                fieldTypes={blockContent.fieldTypes}
                inputChangeHandler={inputChangeHandler}
                placeholder="Комментарий специалиста"
              />
              <ProtocolBlock
                validationErrors={validationErrors}
                listOfFields={blockContent.prosodicSideOfSpeechReview}
                fieldTypes={blockContent.fieldTypes}
                inputChangeHandler={inputChangeHandler}
              >
                <p className="protocol__result-title">Варианты заключения:</p>
              </ProtocolBlock>
              <ProtocolBlock
                validationErrors={validationErrors}
                titleBlock="Дополнительная информация"
                subtitleBlock2="Данные о развитии: Раннее/ позднее физическое развитие "
                listOfFields={blockContent.additionalInfo}
                fieldTypes={blockContent.fieldTypes}
                inputChangeHandler={inputChangeHandler}
                placeholder="Ответ родителя"
              />
              <ProtocolBlock
                validationErrors={validationErrors}
                listOfFields={blockContent.speechTherapyConclusion}
                fieldTypes={blockContent.fieldTypes}
                inputChangeHandler={inputChangeHandler}
              />
              <FormRow customStyle="protocol__row">
                <p className="protocol__finish-title">
                  Логопед:{' '}
                  {`${lesson?.teacher.profile.first_name} ${lesson?.teacher.profile.last_name}`}
                </p>
                <p className="protocol__descr">Дата рождения: 12 мая 2016</p>
                <p className="protocol__info">Родитель: Ирина Климова</p>
                {/* <p className="protocol__info">Родитель: Ирина Климова</p> */}
              </FormRow>
              <FormRow customStyle="protocol__row">
                <input
                  id="finish-protocol"
                  type="submit"
                  className="protocol__submit"
                  value="Завершить заполнение протокола"
                />
              </FormRow>
            </form>
          </CustomFormProvider>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </Container>
  );
};

ExaminationProtocol.propTypes = {
  child: PropTypes.object,
  lessonId: PropTypes.string,
  showFields: PropTypes.bool,
  parent: PropTypes.shape({
    profile: PropTypes.shape({
      first_name: PropTypes.string,
      last_name: PropTypes.string,
    }),
  }).isRequired,
};

export default ExaminationProtocol;
