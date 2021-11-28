import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('puzzleGame', []);
const reviewBlock = new BlockContent('puzzleGame.review', []);

mainBlock.content = [
  mainBlock.textFieldObject(
    'wolf_scoop_fork_scroll',
    'Волк-Совок-Вилка-Свиток /В, Вь'
  ),
  mainBlock.textFieldObject('beans_dates', 'Фасоль-Финики /Ф, Фь'),
  mainBlock.textFieldObject('waffles', 'Вафли /В - Ф'),
];

reviewBlock.content = [
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    '',
    'Губно-зубные:',
    [
      { name: 'nasal', label: 'Носовой' },
      { name: 'skip', label: 'Пропуск' },
      { name: 'replacing_with_b', withText: true, checkboxText: 'Замена В на' },
      {
        name: 'replacing_with_b_soft',
        withText: true,
        checkboxText: 'Замена Вь на',
      },
      { name: 'replacing_with_f', withText: true, checkboxText: 'Замена Ф на' },
      {
        name: 'replacing_with_f_soft',
        withText: true,
        checkboxText: 'Замена Фь на',
      },
      { name: 'two_lipped', label: 'Двугубный' },
      { name: 'mixing', label: 'Смешение' },
      { name: 'distortion', label: 'Искажение' },
    ]
  ),
];

export const puzzleGame = mainBlock.content;
export const puzzleGameReview = reviewBlock.content;
