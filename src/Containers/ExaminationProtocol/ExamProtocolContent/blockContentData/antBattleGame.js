import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('antBattleGame', []);
const reviewBlock = new BlockContent('antBattleGame.review', []);

mainBlock.content = [
  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Статический праксис'),
  mainBlock.textFieldObject('fence', 'Забор'),
  mainBlock.textFieldObject('spatula', 'Лопаточка'),
  mainBlock.textFieldObject('needle', 'Иголка'),
  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Динамический праксис'),
  mainBlock.textFieldObject('watch', 'Часики'),
  mainBlock.textFieldObject('swing', 'Качели'),
];

reviewBlock.content = [
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'tone',
    'Тонус:',
    ['Cпастичность мышц языка', 'Гипотония мышц языка', 'Дистония мышц языка']
  ),
  reviewBlock.radioOrCheckFieldObject(reviewBlock.fieldTypes.checkbox, '', '', [
    {
      name: 'deviation_of_the_tongue',
      label: 'Девиация языка (отклонения языка в сторону)',
    },
    { name: 'hyperkinesis_of_the_tongue', label: 'Гиперкинезы языка' },
    { name: 'tremor_of_the_tongue', label: 'Тремор языка ' },
    { name: 'switching_difficulties', label: 'Трудности переключения' },
  ]),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'pace_of_movement',
    'Темп выполнения движений:',
    [
      'Замедленный темп выполнения движений',
      'Ускоренный темп выполнения движений',
    ]
  ),
  reviewBlock.textAreaFieldObject('expert_comment', 'Комментарий'),
];

export const antBattleGame = mainBlock.content;
export const antBattleGameReview = reviewBlock.content;
