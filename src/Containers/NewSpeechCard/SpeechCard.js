import React from 'react';
import PropTypes from 'prop-types';
import 'Containers/NewSpeechCard/speechcard.css';

import blockContent from './blockContent/blockContent';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomFormProvider from 'Components/CustomFormProvider/CustomFormProvider';
import SpeechCardBlock from './components/SpeechCardBlock';
import SpeechCardBlockBox from './components/SpeechCardBlockBox';
import SpeechCardTextField from './components/customFields/SpeechCardTextField';

function SpeechCard(props) {
  const formMethods = useForm({
    mode: 'onChange',
  });

  const { getValues } = formMethods;
  const inputChangeHandler = (e) => {
    console.log(getValues());
    // console.log(e.target.name);
  };
  return (
    <div style={{ width: '65.3%' }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,600;0,700;0,800;1,600&display=swap"
        rel="stylesheet"
      />
      <div className="speech-card-form">
        <CustomFormProvider customMethods={formMethods}>
          <form action="#">
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
                listOfFields={blockContent.selfImage}
                onChange={inputChangeHandler}
              />
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
                title="Логопедическое заключение"
                onChange={inputChangeHandler}
              >
                <SpeechCardTextField
                  onChange={inputChangeHandler}
                  type="textarea"
                  className="speech-card-form__area speech-card-form__area_md2"
                  name="conclusion"
                />
                <h1 className="speech-card-form__title">Рекомендации</h1>
                <SpeechCardTextField
                  onChange={inputChangeHandler}
                  type="textarea"
                  className="speech-card-form__area speech-card-form__area_bigX"
                  name="recommendations"
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
