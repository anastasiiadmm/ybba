import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('antLambadaGame', []);
const reviewBlock = new BlockContent('antLambadaGame.review', []);

mainBlock.content = [
  mainBlock.textFieldObject('house', 'Дом-Дятел /Д, Дь'),
  mainBlock.textFieldObject('slippers', 'Тапки-Платье /Т, Ть'),
  mainBlock.textFieldObject('kitchen', 'Кухня-Хомяк-Гусь /К – Х, Г'),
];

reviewBlock.content = [
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    'front_lingual',
    'Переднеязычные:',
    [
      'Носовой',
      'Пропуск',
      { withText: true, checkboxText: 'Замена Д на' },
      { withText: true, checkboxText: 'Замена Дь на' },
      { withText: true, checkboxText: 'Замена Т на' },
      { withText: true, checkboxText: 'Замена Ть на' },
    ]
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    'back_lingual',
    'Заднеязычные:',
    [
      { withText: true, checkboxText: 'Замена К на' },
      { withText: true, checkboxText: 'Замена Г на' },
      { withText: true, checkboxText: 'Замена Х на' },

      'Смешение',
      'Искажение',
    ]
  ),
  reviewBlock.textAreaFieldObject('specialist-comment', 'Комментарий'),
];

export const antLambadaGame = mainBlock.content;
export const antLambadaGameReview = reviewBlock.content;
