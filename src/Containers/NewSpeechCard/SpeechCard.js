import React, { useEffect, useState } from 'react';
import PropTypes, { resetWarningCache } from 'prop-types';
import 'Containers/NewSpeechCard/speechcard.css';

import blockContent from './blockContent/blockContent';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomFormProvider from 'Components/CustomFormProvider/CustomFormProvider';
import SpeechCardBlock from './components/SpeechCardBlock';
import SpeechCardBlockBox from './components/SpeechCardBlockBox';
import SpeechCardTextField from './components/customFields/SpeechCardTextField';
import { useDispatch, useSelector } from 'react-redux';

import speechCardSchema from 'utils/formValidationSchemas/speechCardSchema';

import {
  getSpeechCard,
  surveysSelector,
  updateSpeechCard,
} from 'redux/surveys/surveysSlice';
import dummyData from './dummyData';

function SpeechCard(props) {
  const dispatch = useDispatch();
  const [defaultData, setDefaultData] = useState(null);

  const formMethods = useForm({
    mode: 'onChange',
    defaultValues: defaultData,
    resolver: yupResolver(speechCardSchema),
  });

  const { childId } = props;
  const { speechCard } = useSelector(surveysSelector);

  const { getValues, reset, handleSubmit } = formMethods;

  const inputChangeHandler = (e) => {
    setDefaultData({ ...defaultData, [e.target.name]: e.target.value });
  };

  const submitHandler = (data, e) => {
    e.preventDefault();
    console.log({ STATUS: 'SUCCESS' });
    console.log({ DATA: data });
    const { parent, ...rest } = defaultData;
    dispatch(
      updateSpeechCard({
        speechCardId: speechCard.id,
        speechCardData: rest,
      })
    );
    return console.log('checked');
  };
  const errorSubmitHandler = (errors, e) => {
    e.preventDefault();
    // setValidationErrors(errors);

    console.log({ ERRORS: errors });
    // console.log(validationErrors[name]);
    return console.log('not checked');
  };

  useEffect(() => {
    if (childId) {
      dispatch(getSpeechCard(childId));
    }
  }, [childId]);

  useEffect(() => {
    if (speechCard) {
      const temporarySolution = {
        understanding_the_text: 'temporarySolution',
        reproduction_of_text: 'temporarySolution',
        level_of_formation_of_phonemic_perception: 'temporarySolution',
        inflectional_skills_and_abilities: 'temporarySolution',
      };
      let unchangedCard = { ...temporarySolution, ...speechCard };
      reset(unchangedCard);
      setDefaultData(unchangedCard);
      console.log({ SPEECH: unchangedCard });
    }
  }, [speechCard]);

  return (
    // <div style={{ width: '65.3%' }}>
    <div
      style={{ overflowY: 'scroll', overflowX: 'hidden', height: 'inherit' }}
    >
      <div className="speech-card-form">
        <CustomFormProvider customMethods={formMethods}>
          <form onSubmit={handleSubmit(submitHandler, errorSubmitHandler)}>
            <div className="speach-card-form__timer">
              До заверешения заполнения речевой карты 19:24
            </div>
            <div className="speech-card-form__section">
              <SpeechCardBlock
                title="Речевая карта"
                listOfFields={blockContent.parentBlock}
                onChange={inputChangeHandler}
              >
                <p className="speech-card-form__date">
                  Дата заполнения: 12 мая 2016
                </p>
              </SpeechCardBlock>
              <SpeechCardBlock
                blockTitle="1. Краткие сведения из анамнеза "
                onChange={inputChangeHandler}
              >
                <SpeechCardBlockBox
                  listOfFields={
                    blockContent.briefAnamnesisBlock.physical_development
                  }
                  boxTitle="1.1. Раннее/позднее физическое развитие "
                />

                <SpeechCardBlockBox
                  listOfFields={
                    blockContent.briefAnamnesisBlock.speech_development
                  }
                  boxTitle="1.2. Раннее/позднее речевое развитие "
                />
                <SpeechCardBlockBox
                  listOfFields={
                    blockContent.briefAnamnesisBlock.speech_environment
                  }
                  boxTitle="1.3. Речевая среда, в которой воспитывается ребенок "
                />
                <SpeechCardBlockBox
                  listOfFields={
                    blockContent.briefAnamnesisBlock.neurological_status
                  }
                  boxTitle="1.4. Неврологический статус и состояние сенсорно-перцептивных органов и систем (зрение, слух, осязание и др.). Эпилептиформная активность "
                />

                <SpeechCardBlockBox
                  listOfFields={
                    blockContent.briefAnamnesisBlock.current_and_past_traumas
                  }
                  boxTitle="1.5. Сведения о настоящих и перенесенных операциях, травмах, заболеваниях "
                />

                <SpeechCardBlockBox
                  listOfFields={blockContent.briefAnamnesisBlock.drug_treatment}
                  boxTitle="1.6. Медикаментозное лечение "
                />

                <SpeechCardBlockBox
                  listOfFields={
                    blockContent.briefAnamnesisBlock
                      .emotional_and_psychological_level
                  }
                  boxTitle="1.7. Эмоционально-психологический уровень "
                />
              </SpeechCardBlock>
              <SpeechCardBlock
                blockTitle="2. Сформированность представлений об окружающем мире "
                listOfFields={blockContent.ideasAboutTheWorldAround}
                onChange={inputChangeHandler}
              />
              <SpeechCardBlock
                blockTitle="3. Образ «Я»"
                listOfFields={blockContent.selfImage}
                onChange={inputChangeHandler}
              />
              <SpeechCardBlock
                blockTitle="4. Речеязыковая компетенция"
                onChange={inputChangeHandler}
              >
                <SpeechCardBlockBox
                  listOfFields={
                    blockContent.speechAndLanguageCompetence
                      .speech_comprehension_level
                  }
                  boxTitle="4.1. Уровень понимания речи"
                />
                <SpeechCardBlockBox
                  listOfFields={
                    blockContent.speechAndLanguageCompetence
                      .vocabulary_formation_level
                  }
                  boxTitle="4.2. Уровень сформированности лексикона "
                />
                <SpeechCardBlockBox
                  listOfFields={
                    blockContent.speechAndLanguageCompetence
                      .grammatical_competence_formation_level
                  }
                  boxTitle="4.3. Уровень сформированности грамматической компетенции "
                />

                <SpeechCardBlockBox
                  listOfFields={
                    blockContent.speechAndLanguageCompetence
                      .phonetic_phonological_competence_formation_level
                  }
                  boxTitle="4.4. Уровень сформированности фонетико-фонологической компетенции "
                />
              </SpeechCardBlock>
              <SpeechCardBlock
                blockTitle="5. Понимание и самостоятельное продуцирование/репродуцирование текста повествовательного характера в соответствии с предложенным сюжетом (рассказ/пересказ) "
                listOfFields={blockContent.storyRetelling}
                onChange={inputChangeHandler}
              />
              <SpeechCardBlock
                blockTitle="6. Состояние речевого аппарата "
                onChange={inputChangeHandler}
              >
                <SpeechCardBlockBox
                  listOfFields={
                    blockContent.stateOfTheSpeechApparatus
                      .articulation_apparatus_structure
                  }
                  boxTitle="6.1. Строение артикуляционного аппарата "
                />
                <SpeechCardBlockBox
                  listOfFields={
                    blockContent.stateOfTheSpeechApparatus
                      .articulation_apparatus_condition
                  }
                  boxTitle="6.2. Состояние артикуляционного аппарата "
                />
              </SpeechCardBlock>
              <SpeechCardBlock
                blockTitle="7. Двигательное развитие "
                onChange={inputChangeHandler}
                listOfFields={blockContent.motorDevelopment.mainBlock}
              >
                <SpeechCardBlockBox
                  listOfFields={
                    blockContent.motorDevelopment
                      .motor_functions_of_the_hands_and_fingers
                  }
                  boxTitle="7.1. Моторные функции кистей и пальцев рук "
                />
              </SpeechCardBlock>
              <SpeechCardBlock
                blockTitle=" 8. Психологическая база речи "
                onChange={inputChangeHandler}
                listOfFields={blockContent.psychologicalBasisOfSpeech.mainBlock}
              >
                <SpeechCardBlockBox
                  listOfFields={
                    blockContent.psychologicalBasisOfSpeech.verbal_memory
                  }
                  boxTitle="8.1. Вербальная память"
                />
                <SpeechCardBlockBox
                  listOfFields={
                    blockContent.psychologicalBasisOfSpeech
                      .thinking_verbal_and_non_verbal_intelligence
                  }
                  boxTitle="8.2. Мышление (вербальный и невербальный интеллект)"
                />
                <SpeechCardBlockBox
                  listOfFields={
                    blockContent.psychologicalBasisOfSpeech
                      .simultaneous_visual_perception
                  }
                  boxTitle="8.3. Симультанное зрительное восприятие"
                />
                <SpeechCardBlockBox
                  listOfFields={
                    blockContent.psychologicalBasisOfSpeech.attention
                  }
                  boxTitle="8.4. Внимание"
                />
              </SpeechCardBlock>
            </div>
            <hr className="speech-card-form__line" />
            <div className="speech-card-form__section">
              <SpeechCardBlock
                title="Логопедическое заключение ---> заполняется логопедом самостоятельно"
                onChange={inputChangeHandler}
              >
                <SpeechCardTextField
                  onChange={inputChangeHandler}
                  type="textarea"
                  className="speech-card-form__area speech-card-form__area_md2"
                  name="logopedic_conclusion"
                />
                <h1 className="speech-card-form__title">
                  Рекомендации --- заполняется логопедом самостоятельно
                </h1>
                <SpeechCardTextField
                  onChange={inputChangeHandler}
                  type="textarea"
                  className="speech-card-form__area speech-card-form__area_bigX"
                  name="recommendation"
                />
              </SpeechCardBlock>
            </div>
            <p className="speech-card-form__sign-title">Логопед</p>
            <p className="speech-card-form__sign-title">Логопед</p>
            <hr className="speech-card-form__line" />
            <div className="speech-card-form__section">
              <button className="btn2 speech-card-form__btn" type="submit">
                Завершить заполнение
              </button>
            </div>
          </form>
        </CustomFormProvider>
      </div>
    </div>
  );
}

SpeechCard.propTypes = {};

export default SpeechCard;
