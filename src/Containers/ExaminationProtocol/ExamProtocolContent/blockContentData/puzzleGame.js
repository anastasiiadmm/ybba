import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('puzzleGame', []);
const reviewBlock = new BlockContent('puzzleGame.review', []);

mainBlock.content = [
  mainBlock.textFieldObject('wolf', 'Волк-Совок-Вилка-Свиток /В, Вь'),
  mainBlock.textFieldObject('beans', 'Фасоль-Финики /Ф, Фь'),
  mainBlock.textFieldObject('waffles', 'Вафли /В - Ф'),
];

reviewBlock.content = [
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    'lips_teeth',
    'Губно-зубные:',
    [
      'Носовой',
      'Пропуск',
      { withText: true, checkboxText: 'Замена В на' },
      { withText: true, checkboxText: 'Замена Вь на' },
      { withText: true, checkboxText: 'Замена Ф на' },
      { withText: true, checkboxText: 'Замена Фь на' },
      'Двугубный',
      'Смешение',
      'Искажение',
    ]
  ),
];

export const puzzleGame = mainBlock.content;
export const puzzleGameReview = reviewBlock.content;
