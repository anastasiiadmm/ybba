export const fieldTypes = {
  text: 'text',
  textarea: 'textarea',
  textGroup: 'textgroup',
  table: 'table',
  radio: 'radio',
  select: 'select',
  radioWithText: 'radioWithText',
  question: 'question',
  yesNoQuestion: 'yesNoQuestion',
  checkbox: 'checkbox',
  checkboxWithText: 'checkboxWithText',
  par: 'par',
  question_label: 'questionLabel',
};

export class BlockContent {
  constructor(name, content) {
    this.name = name;
    this.content = content;
    this.fieldTypes = fieldTypes;
  }

  checkFieldName = (name) => {
    return name === '' ? `` : `${name}.`;
  };
  nameWithParent = (name) => {
    return `${this.checkFieldName(this.name)}${name}`;
  };
  fieldObject = (type, name, label) => ({
    type,
    name,
    label,
  });

  textFieldObject = (name, label) => {
    return this.fieldObject(
      fieldTypes.text,
      `${this.checkFieldName(this.name)}${name}`,
      label
    );
  };

  textAreaFieldObject = (name, label) => {
    return this.fieldObject(
      fieldTypes.textarea,
      `${this.checkFieldName(this.name)}${name}`,
      label
    );
  };
  boxTitle = (type, text) => ({ type, text });

  selectObject = (type, name, label, options) => {
    return {
      type,
      name: `${this.checkFieldName(this.name)}${name}`,
      label,
      options,
    };
  };

  radioOrCheckFieldObject = (type, name, description, options) => ({
    type,
    name: `${this.checkFieldName(this.name)}${name}`,
    description,
    options,
  });

  questionObject = (type, mainName, question, radioGroupsArr, story) => {
    const newRadioGroups = radioGroupsArr.reduce((prev, curr) => {
      const fullObjectData = [
        this.radioOrCheckFieldObject(
          fieldTypes.radio,

          `${this.checkFieldName(this.name)}${this.checkFieldName(mainName)}${
            curr.name
          }`,
          curr.description,
          curr.options
        ),
      ];
      return prev.concat(fullObjectData);
    }, []);

    return { type, question, newRadioGroups, storyText: story ? story : null };
  };

  yesNoQuestionObject = (name, question, order) => {
    return {
      type: fieldTypes.yesNoQuestion,
      name: `${this.name}.${name}`,
      question,
      order,
    };
  };
  textGroup = (inputFields) => {
    return {
      type: fieldTypes.textGroup,
      inputFields,
    };
  };
}
