import React from 'react';
import PropTypes from 'prop-types';
import ProtocolRow from './customFields/ProtocolRow';
import FormField from 'Components/FormField/FormField';
import ProtocolTextField from './customFields/ProtocolTextField';
import ProtocolRadioField from './customFields/ProtocolRadioField';
import ProtocolCheckboxField from './customFields/ProtocolCheckboxField';
import ProtocolSwitchField from './customFields/ProtocolSwitchField';
import ProtocolCheckboxWithText from './customFields/ProtocolCheckboxWithText';
import ProtocolRadioWithText from './customFields/ProtocolRadioWithText';
import ProtocolTextAreaField from './customFields/ProtocolTextAreaField';

const FormRadioBlock = ({ children, description }) => {
  return (
    <>
      <p className="protocol__descr">{description}</p>
      <div className="protocol__result-item">{children}</div>
    </>
  );
};

function ProtocolBlock(props) {
  const {
    listOfFields,
    children,
    fieldTypes,
    inputChangeHandler,
    title,
    titleBlock,
    titleBlockSpan,
    subtitleBlock,
    subtitleBlock2,
    placeholder,
    secondPlaceholder,
  } = props;

  return (
    <div className="protocol__block">
      {title && <h3 className="protocol__title">{title}</h3>}
      {titleBlock && (
        <p className="protocol__title-block">
          {titleBlock}
          {titleBlockSpan && <span>{titleBlockSpan}</span>}
        </p>
      )}
      {subtitleBlock && (
        <p className="protocol__subtitle-block">{subtitleBlock}</p>
      )}
      {subtitleBlock2 && (
        <p className="protocol__sub2title-block">{subtitleBlock2}</p>
      )}
      {children}

      {listOfFields &&
        listOfFields.map((field, fieldIndex) => {
          const typeOfFields = {
            [fieldTypes.par]: (
              <p className="protocol__box-title">{field.text}</p>
            ),
            [fieldTypes.text]: (
              <ProtocolRow customStyle="protocol__row">
                <ProtocolTextField
                  type="text"
                  label={field.label}
                  name={field.name}
                  placeholder={placeholder}
                  onChange={inputChangeHandler}
                />
              </ProtocolRow>
            ),
            [fieldTypes.textarea]: (
              <ProtocolRow customStyle="protocol__row">
                <ProtocolTextAreaField
                  type="textarea"
                  label={field.label}
                  name={field.name}
                  placeholder={
                    secondPlaceholder ? secondPlaceholder : placeholder
                  }
                  onChange={inputChangeHandler}
                />
              </ProtocolRow>
            ),
            [fieldTypes.radio]: (
              <ProtocolRow customStyle="protocol__row">
                <FormRadioBlock description={field.description}>
                  {field.options &&
                    field.options.map((option) => {
                      return option.withText ? (
                        <ProtocolRadioWithText
                          name={field.name}
                          onChange={inputChangeHandler}
                          label={option.radioText}
                          value={option.radioText}
                        />
                      ) : (
                        <ProtocolRadioField
                          name={field.name}
                          onChange={inputChangeHandler}
                          label={option}
                          value={option}
                        />
                      );
                    })}
                </FormRadioBlock>
              </ProtocolRow>
            ),
            [fieldTypes.question]: (
              <ProtocolRow customStyle="protocol__row">
                <p className="protocol__test">{field.question}</p>
                {field.storyText && (
                  <p className="protocol__text-test">{field.storyText}</p>
                )}
                {field.newRadioGroups &&
                  field.newRadioGroups.map((radioGroup) => {
                    return (
                      <FormRadioBlock description={radioGroup.description}>
                        {radioGroup.options &&
                          radioGroup.options.map((option) => {
                            return (
                              <ProtocolRadioField
                                type="protocolRadio"
                                name={radioGroup.name}
                                onChange={inputChangeHandler}
                                label={option}
                                value={option}
                              />
                            );
                          })}
                      </FormRadioBlock>
                    );
                  })}
              </ProtocolRow>
            ),
            [fieldTypes.yesNoQuestion]: (
              <ProtocolRow customStyle="protocol__row protocol__row_flex">
                <p className="protocol__qu-test">
                  {field.order}) {field.question}
                </p>
                <ProtocolSwitchField
                  name={field.name}
                  onChange={inputChangeHandler}
                />
              </ProtocolRow>
            ),
            [fieldTypes.textGroup]: (
              <ProtocolRow customStyle="protocol__row protocol__row_flex">
                {field.inputFields &&
                  field.inputFields.map((inputField) => {
                    return (
                      <div className="protocol__col">
                        <ProtocolTextField
                          type="text"
                          label={inputField.label}
                          name={inputField.name}
                          placeholder={placeholder}
                          onChange={inputChangeHandler}
                        />
                      </div>
                    );
                  })}
              </ProtocolRow>
            ),
            [fieldTypes.checkbox]: (
              <ProtocolRow customStyle="protocol__row">
                <FormRadioBlock description={field.description}>
                  {field.options &&
                    field.options.map((option, index) => {
                      return option.withText ? (
                        <ProtocolCheckboxWithText
                          name={
                            option.name
                              ? `${field.name}.${option.name}`
                              : `${field.name}`
                          }
                          onChange={inputChangeHandler}
                          label={option.checkboxText}
                        />
                      ) : (
                        <ProtocolCheckboxField
                          name={
                            option.name
                              ? `${field.name}.${option.name}`
                              : `${field.name}`
                          }
                          onChange={inputChangeHandler}
                          label={option.label}
                        />
                      );
                    })}
                </FormRadioBlock>
              </ProtocolRow>
            ),
          };

          return typeOfFields[field.type];
        })}
    </div>
  );
}

ProtocolBlock.propTypes = {
  listOfFields: PropTypes.array,
  fieldTypes: PropTypes.object,
  inputChangeHandler: PropTypes.func,
  titleBlock: PropTypes.string,
  title: PropTypes.string,
  titleBlockSpan: PropTypes.string,
  subtitleBlock: PropTypes.string,
  subtitleBlock2: PropTypes.string,
  placeholder: PropTypes.string,
  secondPlaceholder: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.element,
};

export default ProtocolBlock;
