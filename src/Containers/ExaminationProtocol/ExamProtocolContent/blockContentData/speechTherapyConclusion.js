import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('additional_information', []);

mainBlock.content = [
  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Логопедическое заключение'),
  mainBlock.textAreaFieldObject('speech_therapy_conclusion', ''),
  mainBlock.textAreaFieldObject(
    'dynamic_conclusion',
    'Динамическое заключение (5 занятий)'
  ),
  mainBlock.textAreaFieldObject(
    'final_conclusion',
    'Динамическое заключение (10 занятий)'
  ),
];

export const speechTherapyConclusion = mainBlock.content;
