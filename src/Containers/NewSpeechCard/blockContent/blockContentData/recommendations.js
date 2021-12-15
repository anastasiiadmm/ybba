import { SpeechCardBlockContent } from '../blockContentCreation';

const mainBlock = new SpeechCardBlockContent('', []);

mainBlock.content = [mainBlock.textFieldObject('recommendation', '', '')];

export const recommendations = mainBlock.content;
