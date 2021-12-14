import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('game_puzzle', []);

mainBlock.content = [
  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'perception',
    'Восприятие:',
    ['Нарушено', 'Не нарушено']
  ),
  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'level_of_perception',
    '',
    [
      {
        label: 'Cоответствует возрасту',
        value: 'уровень восприятия соответствует возрасту',
      },
      {
        label: 'Не соответствует возрасту',
        value: 'уровень не восприятия соответствует возрасту',
      },
    ]
  ),

  mainBlock.textAreaFieldObject('expert_comment', 'Комментарий'),
];

export const simultaneousVisualPerceptionReview = mainBlock.content;
