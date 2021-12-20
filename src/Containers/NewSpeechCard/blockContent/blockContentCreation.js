export class SpeechCardBlockContent {
  constructor(name, content) {
    this.name = name;
    this.content = content;
    this.fieldTypes = { text: 'text', textarea: 'textarea' };
  }
  checkFieldName = (name) => {
    return name === '' ? `` : `${name}.`;
  };
  fieldObject = (type, name, label, value) => ({
    type,
    name,
    label,
    value,
  });

  textFieldObject = (name, label, value) => {
    return this.fieldObject(
      this.fieldTypes.text,
      `${this.checkFieldName(this.name)}${name}`,
      label,
      value ? value : null
    );
  };

  textAreaFieldObject = (name, label) => {
    return this.fieldObject(
      this.fieldTypes.textarea,
      `${this.checkFieldName(this.name)}${name}`,
      label
    );
  };
}
