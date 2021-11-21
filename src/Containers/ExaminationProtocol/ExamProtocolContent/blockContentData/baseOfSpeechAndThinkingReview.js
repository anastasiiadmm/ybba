import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('baseOfSpeechAndThinkingReview', []);

mainBlock.content = [
  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'thinking.isAgeAppropriate',
    'Мышление:',
    ['Cоответствует возрасту', 'Не соответствует возраст']
  ),
  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'thinking.isDistorted',
    '',
    ['Нарушено ', 'Не нарушено']
  ),
  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.checkbox,
    'thinking.struggles',
    '',
    [
      'Наблюдаются трудности установления адекватных связей между предметами и явлениями окружающего мира',
    ]
  ),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'thinking.types',
    'Вид мышления:',
    [
      'Мышление наглядно-действенное. Решение мыслительных задач осуществляется только на уровне практических действий',
      'Мышление наглядно-образное, носит целевой, организованный характер',
      'Мышление наглядно-образное, присутствуют элементы абстрактно-логического/словесно-логического мышления',
      'Словесно-логическое, способен давать своим действиям логическое объяснение',
    ]
  ),
  mainBlock.textAreaFieldObject('specialist-comment', 'Комментарий'),
];

export const baseOfSpeechAndThinkingReview = mainBlock.content;
