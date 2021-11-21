export const fieldTypes = {
  text: 'text',
  textarea: 'textarea',
  textGroup: 'textgroup',
  table: 'table',
  radio: 'radio',
  radioWithText: 'radioWithText',
  question: 'question',
  yesNoQuestion: 'yesNoQuestion',
  checkbox: 'checkbox',
  checkboxWithText: 'checkboxWithText',
  par: 'par',
};

export class BlockContent {
  constructor(name, content) {
    this.name = name;
    this.content = content;
    this.fieldTypes = fieldTypes;
  }

  fieldObject = (type, name, label) => ({
    type,
    name,
    label,
  });

  textFieldObject = (name, label) => {
    return this.fieldObject(fieldTypes.text, `${this.name}.${name}`, label);
  };

  textAreaFieldObject = (name, label) => {
    return this.fieldObject(fieldTypes.textarea, `${this.name}.${name}`, label);
  };
  boxTitle = (type, text) => ({ type, text });

  radioOrCheckFieldObject = (type, name, description, options) => ({
    type,
    name: `${this.name}.${name}`,
    description,
    options,
  });

  questionObject = (type, mainName, question, radioGroupsArr, story) => {
    const newRadioGroups = radioGroupsArr.reduce((prev, curr) => {
      const fullObjectData = [
        this.radioOrCheckFieldObject(
          fieldTypes.radio,
          `${this.name}.${mainName}.${curr.name}`,
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
