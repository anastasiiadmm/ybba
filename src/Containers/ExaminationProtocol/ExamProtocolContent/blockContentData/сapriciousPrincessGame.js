import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('сapriciousPrincessGame', []);
const reviewBlock = new BlockContent('сapriciousPrincessGame.review', []);

mainBlock.content = [
  mainBlock.textFieldObject('chair', 'Стул'),
  mainBlock.textFieldObject('bow', 'Бантик'),
  mainBlock.textFieldObject('helicopter', 'Вертолет'),
  mainBlock.textFieldObject('paper_airplane', 'Самолетик (бумажный)'),
  mainBlock.textFieldObject('excavator', 'Экскаватор'),
  mainBlock.textFieldObject('camera', 'Фотоаппарат'),
];

reviewBlock.content = [
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'syllabic_structure_of_a_word',
    '',
    [
      'Слоговая структура слова не нарушена',
      'Слоговая структура слова нарушена ',
    ]
  ),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    '',
    'Диспраксичные нарушения:',
    [
      { name: 'missing_syllables', label: 'Пропуски слогов' },
      {
        name: 'missing_syllabic_vowels',
        label: 'Пропуски слогообразующих гласных',
      },
      {
        name: 'permutations_of_sounds_and_or_syllables',
        label: 'Перестановки звуков и/или слогов',
      },
      {
        name: 'insertion_of_vowels_into_consonants',
        label: 'Вставки гласных в стечение согласных',
      },
      { name: 'adding_syllables', label: 'Добавление слогов' },
    ]
  ),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    '',
    'Гностические нарушения:',
    [
      { name: 'consonant_reduction', label: 'Сокращения стечения согласных' },
      {
        name: 'inserting_consonants_into_a_syllable',
        label: 'Вставки согласных в слог',
      },
      { name: 'anticipation', label: 'Антиципации' },
      { name: 'assimilation_of_syllables', label: 'Уподобление слогов' },
      {
        name: 'gnotic_violations_addition_of_syllables',
        label: 'Добавление слогов',
      },
    ]
  ),

  reviewBlock.textAreaFieldObject('expert_comment', 'Комментарий'),
];

export const сapriciousPrincessGame = mainBlock.content;
export const сapriciousPrincessGameReview = reviewBlock.content;
