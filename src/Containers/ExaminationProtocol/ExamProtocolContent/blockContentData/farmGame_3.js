import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('farmGameThree', []);
const reviewBlock = new BlockContent('farmGameThree.review', []);

mainBlock.content = [
  mainBlock.textFieldObject(
    'nouns_with_numbers.one_chicken',
    'Одна белая курица'
  ),
  mainBlock.textFieldObject(
    'nouns_with_numbers.two_chickens',
    'Три рыжих курицы'
  ),
  mainBlock.textFieldObject(
    'nouns_with_numbers.five_chickens',
    'Пять рябых куриц'
  ),
];

reviewBlock.content = [
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'word_ending_mistakes',
    '',
    [
      'Ребенок смешивает парадигмы разных окончаний',
      'Ребенок делает ошибки внутри одного падежа',
    ]
  ),

  reviewBlock.textAreaFieldObject('specialist-comment', 'Комментарий'),
];

export const farmGameThree = mainBlock.content;
export const farmGameThreeReview = reviewBlock.content;
