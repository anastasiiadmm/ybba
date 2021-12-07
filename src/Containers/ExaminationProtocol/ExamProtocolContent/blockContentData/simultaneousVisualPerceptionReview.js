import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('game_puzzle', []);

mainBlock.content = [
  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'perception',
    'Восприятие:',
    ['Нарушено ', 'Не нарушено']
  ),
  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'level_of_perception',
    '',
    ['Cоответствует возрасту', 'Не соответствует возраст']
  ),

  mainBlock.textAreaFieldObject('expert_comment', 'Комментарий'),
];

export const simultaneousVisualPerceptionReview = mainBlock.content;
