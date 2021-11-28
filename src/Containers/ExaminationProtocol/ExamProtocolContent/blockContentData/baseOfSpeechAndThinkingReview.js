import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('baseOfSpeechAndThinkingReview', []);

mainBlock.content = [
  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'thinking',
    'Мышление:',
    ['Cоответствует возрасту', 'Не соответствует возраст']
  ),
  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'thinking_part_two',
    '',
    ['Нарушено ', 'Не нарушено']
  ),
  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.checkbox,
    'there_are_difficulties_in_protecting_adequate_connections',
    '',
    [
      {
        label:
          'Наблюдаются трудности установления адекватных связей между предметами и явлениями окружающего мира',
      },
    ]
  ),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'kind_of_thinking',
    'Вид мышления:',
    [
      'Мышление наглядно-действенное. Решение мыслительных задач осуществляется только на уровне практических действий',
      'Мышление наглядно-образное, носит целевой, организованный характер',
      'Мышление наглядно-образное, присутствуют элементы абстрактно-логического/словесно-логического мышления',
      'Словесно-логическое, способен давать своим действиям логическое объяснение',
    ]
  ),
  mainBlock.textAreaFieldObject('expert_comment', 'Комментарий'),
];

export const baseOfSpeechAndThinkingReview = mainBlock.content;
