import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import FormRow from 'Components/FormRow/FormRow';
import Button from 'Components/Button/Button';
import Container from 'Components/Container/Container';
import CustomFormProvider from 'Components/CustomFormProvider/CustomFormProvider';

import ProtocolBlock from './components/ProtocolBlock';
import GameSectionBlock from './components/GameSectionBlock';
import { parentProtocol } from './ExamProtocolContent/blockContentData/parentProtocol';

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

const ExaminationProtocolParent = (props) => {
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
    console.log({ STATUS: 'SUCCESS' });
    return console.log('checked');
  };
  const errorSubmitHandler = (errors, e) => {
    e.preventDefault();
    setValidationErrors(errors);

    console.log(errors);
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
    console.log(protocol);
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

      {!protocol ? (
        <div className="protocol">
          <CustomFormProvider customMethods={formMethods}>
            <form onSubmit={handleSubmit(submitHandler, errorSubmitHandler)}>
              <ProtocolBlock
                validationErrors={validationErrors}
                title="Вопросы о развитии ребенка"
                subtitleBlock2="Это позволит более точно описать заключение и рекомендации."
                listOfFields={parentProtocol.data}
                fieldTypes={parentProtocol.fieldTypes}
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
            </form>
          </CustomFormProvider>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </Container>
  );
};

ExaminationProtocolParent.propTypes = {
  child: PropTypes.object,
  lessonId: PropTypes.string,
  showFields: PropTypes.bool,
};

export default ExaminationProtocolParent;
