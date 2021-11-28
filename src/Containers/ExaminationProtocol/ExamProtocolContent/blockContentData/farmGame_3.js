import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('farmGameThree', []);
const reviewBlock = new BlockContent('farmGameThree.review', []);

mainBlock.content = [
  mainBlock.textFieldObject('one_white_chicken', 'Одна белая курица'),
  mainBlock.textFieldObject('three_ginger_hens', 'Три рыжих курицы'),
  mainBlock.textFieldObject('five_speckled_hens', 'Пять рябых куриц'),
];

reviewBlock.content = [
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'options_for_confinement',
    '',
    [
      'Ребенок смешивает парадигмы разных окончаний',
      'Ребенок делает ошибки внутри одного падежа',
    ]
  ),

  reviewBlock.textAreaFieldObject('expert_comment', 'Комментарий'),
];

export const farmGameThree = mainBlock.content;
export const farmGameThreeReview = reviewBlock.content;
