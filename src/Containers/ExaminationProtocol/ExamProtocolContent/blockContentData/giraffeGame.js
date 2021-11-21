import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('giraffeGame', []);
const reviewBlock = new BlockContent('giraffeGame.review', []);

mainBlock.content = [
  mainBlock.textFieldObject('fish', 'Рыба-Корова-Забор-Краб /Р'),
  mainBlock.textFieldObject('river', 'Река-Варенье-Дверь /Рь'),
  mainBlock.textFieldObject('lamp', 'Лампа-Молоко-Пол-Клад /Л'),
  mainBlock.textFieldObject('wheel', 'Колесо-Соль /Ль'),
];

reviewBlock.content = [
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    'rotacism',
    'Ротацизм:',
    [
      'Горловой ротацизм',
      { withText: true, checkboxText: 'Замена Р на' },
      { withText: true, checkboxText: 'Замена Рь на' },

      'Щечный',
      'Боковой',
      'Одноударное произношение',
      'Пропуск',
    ]
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    'lambdacism',
    'Ламбдацизм:',
    [
      'Межзубный ламбдацизм',
      { withText: true, checkboxText: 'Замена Л на' },
      { withText: true, checkboxText: 'Замена Ль на' },

      'Носовой',
      'Пропуск',
      'Двугубный',
      'Искажение',
    ]
  ),
];

export const giraffeGame = mainBlock.content;
export const giraffeGameReview = reviewBlock.content;
