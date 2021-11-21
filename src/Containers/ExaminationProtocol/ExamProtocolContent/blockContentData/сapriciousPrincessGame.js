import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('сapriciousPrincessGame', []);
const reviewBlock = new BlockContent('сapriciousPrincessGame.review', []);

mainBlock.content = [
  mainBlock.textFieldObject('chair', 'Стул'),
  mainBlock.textFieldObject('bow', 'Бантик'),
  mainBlock.textFieldObject('helicopter', 'Вертолет'),
  mainBlock.textFieldObject('paper_plane', 'Самолетик (бумажный)'),
  mainBlock.textFieldObject('excavator', 'Экскаватор'),
  mainBlock.textFieldObject('photo_camera', 'Фотоаппарат'),
];

reviewBlock.content = [
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'word_syllable_structure',
    '',
    [
      'Слоговая структура слова не нарушена',
      'Слоговая структура слова нарушена ',
    ]
  ),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    'dyspraxic_disorders',
    'Диспраксичные нарушения:',
    [
      'Пропуски слогов',
      'Пропуски слогообразующих гласных',
      'Перестановки звуков и/или слогов',
      'Вставки гласных в стечение согласных',
      'Добавление слогов',
    ]
  ),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    'gnostic_disorders',
    'Гностические нарушения:',
    [
      'Сокращения стечения согласных',
      'Вставки согласных в слог',
      'Антиципации',
      'Уподобление слогов',
      'Добавление слогов',
    ]
  ),

  reviewBlock.textAreaFieldObject('specialist-comment', 'Комментарий'),
];

export const сapriciousPrincessGame = mainBlock.content;
export const сapriciousPrincessGameReview = reviewBlock.content;
