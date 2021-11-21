import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('examMagicGame', []);
const reviewBlock = new BlockContent('examMagicGame.review', []);

mainBlock.content = [
  mainBlock.textFieldObject('sh_s', 'Мишка-Миска (Ш – С)'),
  mainBlock.textFieldObject('r_l', 'Рак-Лак (Р – Л)'),
  mainBlock.textFieldObject('s_z', 'Коса-Коза (С – З)'),
  mainBlock.textFieldObject('t_d', 'Уточка-Удочка (Т – Д)'),
  mainBlock.textFieldObject('b_p', 'Бочка-Почка (Б – П)'),
  mainBlock.textFieldObject('s_ts', 'Сабля-Цапля (С – Ц)'),
];

reviewBlock.content = [
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'phonetic_and_phonological_competence_formation:',
    'Уровень сформированности фонетико-фонологической компетенции: ',
    [
      'Уровень сформированности фонетико-фонологической компетенции соответствует возрастной норме',
      'Уровень сформированности фонетико-фонологической компетенции не соответствует возрастной норме',
    ]
  ),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'phonemic_perception.main',
    'Состояние фонематического восприятия:',
    [
      'Фонематическое восприятие сформировано ',
      'Фонематическое восприятие не сформировано',
    ]
  ),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    'phonemic_perception.extra',
    '',
    [
      'Наблюдаются трудности различения глухих и звонких согласных',
      'Нарушено различение твердых и мягких согласных',
      'Нарушено различение аффрикат и входящих в их состав звуков',
    ]
  ),
  reviewBlock.textAreaFieldObject('specialist-comment', 'Комментарий'),
];

export const examMagicGame = mainBlock.content;
export const examMagicGameReview = reviewBlock.content;
