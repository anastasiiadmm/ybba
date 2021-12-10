import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('game_giraffe', []);

mainBlock.content = [
  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'thinking',
    'Мышление:',
    ['Соответствует возрасту', 'Не соответствует возрасту']
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
      {
        label:
          'Мышление наглядно-действенное. Решение мыслительных задач осуществляется только на уровне практических действий',
        value:
          'мышление наглядно действенное. Решение мыслительных задач осуществляется только на уровне практических действий',
      },
      {
        label:
          'Мышление наглядно-образное, носит целевой, организованный характер',
        value:
          'мышление наглядно действенное. Решение мыслительных задач осуществляется только на уровне практических действий',
      },
      {
        label:
          'Мышление наглядно-образное, присутствуют элементы абстрактно-логического/словесно-логического мышления',
        value:
          'мышление наглядно-образное, присутствиют элементы абстрактно-логического',
      },
      {
        label:
          'Словесно-логическое, способен давать своим действиям логическое объяснение',
        value:
          'словесно-логическое, способен давайть своим действиям логическое объяснение',
      },
    ]
  ),
  mainBlock.textAreaFieldObject('expert_comment', 'Комментарий'),
];

export const baseOfSpeechAndThinkingReview = mainBlock.content;
