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

import './examinationProtocol.css';
import { getProtocol, createProtocol } from 'redux/surveys/protocolSlice';
import { authSelector } from 'redux/auth/authSlice.js';
import { getChildren, lessonsSelector } from 'redux/lessons/lessonsSlice.js';
import { getChild } from 'redux/child/childSlice';

const ExaminationProtocol = (props) => {
  const dispatch = useDispatch();
  const { user } = useSelector(authSelector);
  const { children } = useSelector(lessonsSelector);
  const { student } = props;

  // useEffect(() => {
  //   dispatch(getChildren(user.id));
  //   console.log(children);
  // }, []);
  const formMethods = useForm({
    resolver: yupResolver(examProtocolSchema),
    mode: 'onChange',
  });

<<<<<<< HEAD
  const {
    getValues,
    formState: { errors },
  } = formMethods;

  const dispatch = useDispatch();

  let timeout = null;

  const inputTimer = (e) => {
    clearTimeout(timeout);

    timeout = setTimeout(function () {
      console.log(getValues(e.target.name));
    }, 1000);
  };

=======
  // useEffect(() => {
  //   console.log(dispatch(getProtocol('171d0536-68c8-4344-861f-5ac9a0cf2984')));
  // }, []);
  const { getValues } = formMethods;

>>>>>>> bcadab4... API related corrections
  const inputChangeHandler = (e) => {
    return inputTimer(e);
  };

  useEffect(() => {
    // if (student) {
    // console.log({ this_is_protocol: student.id });
    dispatch(createProtocol('171d0536-68c8-4344-861f-5ac9a0cf2984')).then(
      (data) => console.log(data)
    );
    // console.log({ this_is_protocol: dispatch(createProtocol(student.id)) });
    // }
  }, [student]);

  return (
    <Container>
      {/* <link rel="stylesheet" href="./examinationProtocol.css" /> */}
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,600;0,700;0,800;1,600&display=swap"
        rel="stylesheet"
      />

      <div className="protocol">
        <CustomFormProvider customMethods={formMethods}>
          <form>
            <ProtocolBlock
              listOfFields={blockContent.parentProtocolBlock}
              fieldTypes={blockContent.fieldTypes}
              inputChangeHandler={inputChangeHandler}
              secondPlaceholder="Ответ родителя"
            >
              <FormRow customStyle="protocol__row">
                {/* <p className="protocol__person">{`${student.first_name} ${student.last_name} `}</p> */}
                <p className="protocol__person-descr">
                  Дата рождения: 12 мая 2016
                </p>
                <p className="protocol__person">Родитель: Ирина Климова</p>
              </FormRow>
            </ProtocolBlock>
            <ProtocolBlock
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
              listOfFields={blockContent.speechLanguageCompetenceReview}
              fieldTypes={blockContent.fieldTypes}
              inputChangeHandler={inputChangeHandler}
              description="Сформированность представлений об окружающем мире. Запас знаний:"
              secondPlaceholder="Комментарий специалиста"
            >
              <p className="protocol__result-title">Варианты заключения:</p>
            </ProtocolBlock>
            <ProtocolBlock
              title="Билатеральная моторная координация"
              listOfFields={blockContent.bilateralMotorCoordination}
              fieldTypes={blockContent.fieldTypes}
              inputChangeHandler={inputChangeHandler}
            />
            <GameSectionBlock
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
              titleBlock="Мимическая мускулатура "
              titleBlockSpan="Упражнение:"
              placeholder="Комментарий специалиста"
              secondPlaceholder="Комментарий специалиста"
              listOfFields={blockContent.mimicMusculature}
              fieldTypes={blockContent.fieldTypes}
              inputChangeHandler={inputChangeHandler}
            />
            <ProtocolBlock
              listOfFields={blockContent.mimicMusculatureReview}
              fieldTypes={blockContent.fieldTypes}
              inputChangeHandler={inputChangeHandler}
            >
              <p className="protocol__result-title">Варианты заключения:</p>
            </ProtocolBlock>

            <ProtocolBlock
              subtitleBlock="Общая и мелкая моторика"
              subtitleBlock2="Праксис"
              placeholder="Комментарий специалиста"
              secondPlaceholder="Комментарий специалиста"
              listOfFields={blockContent.generalAndFineMotorSkills}
              fieldTypes={blockContent.fieldTypes}
              inputChangeHandler={inputChangeHandler}
            />
            <ProtocolBlock
              listOfFields={blockContent.generalAndFineMotorSkillsReview}
              fieldTypes={blockContent.fieldTypes}
              inputChangeHandler={inputChangeHandler}
            >
              <p className="protocol__result-title">Варианты заключения:</p>
            </ProtocolBlock>

            <ProtocolBlock
              titleBlock="Строение артикуляционного аппарата "
              listOfFields={blockContent.articulationApparatusStructureReview}
              fieldTypes={blockContent.fieldTypes}
              inputChangeHandler={inputChangeHandler}
            >
              <p className="protocol__result-title">Варианты заключения:</p>
            </ProtocolBlock>
            <GameSectionBlock
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
              subtitleBlock2="Звуковой анализ и синтез"
              placeholder="Ответ ребенка"
              secondPlaceholder="Комментарий специалиста"
              listOfFields={blockContent.soundAnalysisAndSynthesis}
              fieldTypes={blockContent.fieldTypes}
              inputChangeHandler={inputChangeHandler}
            />
            <ProtocolBlock
              listOfFields={blockContent.soundAnalysisAndSynthesisReview}
              fieldTypes={blockContent.fieldTypes}
              inputChangeHandler={inputChangeHandler}
            >
              <p className="protocol__result-title">Варианты заключения:</p>
            </ProtocolBlock>
            <GameSectionBlock
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
              gameTitle="Игра «Как мышонку не спалось»"
              titleBlock="Обследование связной речи"
              placeholder="Ответ ребенка"
              fieldTypes={blockContent.fieldTypes}
              inputChangeHandler={inputChangeHandler}
              gameFields={blockContent.notSleepingMouseGame}
              gameReviewFields={blockContent.notSleepingMouseGameReview}
            />
            <GameSectionBlock
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
              gameTitle="Игра «На ферме». Часть 3"
              subtitleBlock2="Согласование сущ.+числ."
              placeholder="Ответ ребенка"
              fieldTypes={blockContent.fieldTypes}
              inputChangeHandler={inputChangeHandler}
              gameFields={blockContent.farmGameThree}
              gameReviewFields={blockContent.farmGameThreeReview}
            />
            <ProtocolBlock
              titleBlock="Психологическая база речи: Внимание"
              listOfFields={blockContent.psychologicalBasisOfSpeechAttention}
              fieldTypes={blockContent.fieldTypes}
              inputChangeHandler={inputChangeHandler}
              placeholder="Комментарий специалиста"
            >
              <p className="protocol__result-title">Варианты заключения:</p>
            </ProtocolBlock>
            <ProtocolBlock
              titleBlock="Психологическая база речи: Познавательная активность. Мотивация и интерес"
              listOfFields={blockContent.psychologicalBasisOfSpeechMotivation}
              fieldTypes={blockContent.fieldTypes}
              inputChangeHandler={inputChangeHandler}
              placeholder="Комментарий специалиста"
            />
            <ProtocolBlock
              listOfFields={
                blockContent.psychologicalBasisOfSpeechMotivationReview
              }
              fieldTypes={blockContent.fieldTypes}
              inputChangeHandler={inputChangeHandler}
            >
              <p className="protocol__result-title">Варианты заключения:</p>
            </ProtocolBlock>
            <ProtocolBlock
              titleBlock="Просодическая сторона речи"
              subtitleBlock2="Компоненты:"
              listOfFields={blockContent.prosodicSideOfSpeech}
              fieldTypes={blockContent.fieldTypes}
              inputChangeHandler={inputChangeHandler}
              placeholder="Комментарий специалиста"
            />
            <ProtocolBlock
              listOfFields={blockContent.prosodicSideOfSpeechReview}
              fieldTypes={blockContent.fieldTypes}
              inputChangeHandler={inputChangeHandler}
            >
              <p className="protocol__result-title">Варианты заключения:</p>
            </ProtocolBlock>
            <ProtocolBlock
              titleBlock="Дополнительная информация"
              subtitleBlock2="Данные о развитии: Раннее/ позднее физическое развитие "
              listOfFields={blockContent.additionalInfo}
              fieldTypes={blockContent.fieldTypes}
              inputChangeHandler={inputChangeHandler}
              placeholder="Ответ родителя"
            />
            <ProtocolBlock
              listOfFields={blockContent.speechTherapyConclusion}
              fieldTypes={blockContent.fieldTypes}
              inputChangeHandler={inputChangeHandler}
            />
            <FormRow customStyle="protocol__row">
              <p className="protocol__finish-title">Логопед</p>
              <p className="protocol__descr">Дата рождения: 12 мая 2016</p>
              <p className="protocol__info">Родитель: Ирина Климова</p>
              <p className="protocol__info">Родитель: Ирина Климова</p>
            </FormRow>
          </form>
        </CustomFormProvider>
      </div>
    </Container>
  );
};

ExaminationProtocol.propTypes = {
  child: PropTypes.shape({
    id: PropTypes.number,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
  }),
  parent: PropTypes.shape({
    profile: PropTypes.shape({
      first_name: PropTypes.string,
      last_name: PropTypes.string,
    }),
  }).isRequired,
};

export default ExaminationProtocol;
