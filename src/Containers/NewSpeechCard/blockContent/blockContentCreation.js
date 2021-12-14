export class SpeechCardBlockContent {
  constructor(name, content) {
    this.name = name;
    this.content = content;
    this.fieldTypes = { text: 'text', textarea: 'textarea' };
  }

  fieldObject = (type, name, label, value) => ({
    type,
    name,
    label,
    value,
  });

  textFieldObject = (name, label, value) => {
    const fullName = name === null ? this.name : `${this.name}.${name}`;
    return this.fieldObject(
      this.fieldTypes.text,
      fullName,
      label,
      value ? value : null
    );
  };

  textAreaFieldObject = (name, label) => {
    const fullName = name === null ? this.name : `${this.name}.${name}`;
    return this.fieldObject(this.fieldTypes.textarea, fullName, label);
  };
}
