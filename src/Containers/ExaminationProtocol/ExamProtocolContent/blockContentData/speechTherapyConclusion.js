import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('speechTherapyConclusion', []);

mainBlock.content = [
  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Логопедическое заключение'),
  mainBlock.textAreaFieldObject('main', ''),
  mainBlock.textAreaFieldObject(
    'five_session_dynamic_conclusion',
    'Динамическое заключение (5 занятий)'
  ),
  mainBlock.textAreaFieldObject(
    'ten_session_dynamic_conclusion',
    'Динамическое заключение (10 занятий)'
  ),
];

export const speechTherapyConclusion = mainBlock.content;
