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
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    'tone.more',
    '',
    [
      'Девиация языка (отклонения языка в сторону)',
      'Гиперкинезы языка',
      'Тремор языка ',
      'Трудности переключения',
    ]
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'pace_of_movement',
    'Темп выполнения движений:',
    [
      'Замедленный темп выполнения движений',
      'Ускоренный темп выполнения движений',
    ]
  ),
  reviewBlock.textAreaFieldObject('specialist-comment', 'Комментарий'),
];

export const antBattleGame = mainBlock.content;
export const antBattleGameReview = reviewBlock.content;
