import { SpeechCardBlockContent } from '../blockContentCreation';

const mainBlock = new SpeechCardBlockContent('', []);

mainBlock.content = [
  mainBlock.textAreaFieldObject('image_i', 'Образ «Я»'),
  mainBlock.textAreaFieldObject('somatognosis', 'Соматогнозис'),
];

export const selfImage = mainBlock.content;
