import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('simultaneousVisualPerceptionReview', []);

mainBlock.content = [
  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'perception.isDistorted',
    'Восприятие:',
    ['Нарушено ', 'Не нарушено']
  ),
  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'perception.isAgeAppropriate',
    '',
    ['Cоответствует возрасту', 'Не соответствует возраст']
  ),

  mainBlock.textAreaFieldObject('specialist-comment', 'Комментарий'),
];

export const simultaneousVisualPerceptionReview = mainBlock.content;
