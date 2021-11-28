import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('examMagicGame', []);
const reviewBlock = new BlockContent('examMagicGame.review', []);

mainBlock.content = [
  mainBlock.textFieldObject('bear_bowl', 'Мишка-Миска (Ш – С)'),
  mainBlock.textFieldObject('cancer_varnish', 'Рак-Лак (Р – Л)'),
  mainBlock.textFieldObject('scythe_goat', 'Коса-Коза (С – З)'),
  mainBlock.textFieldObject('duck_fishing_rod', 'Уточка-Удочка (Т – Д)'),
  mainBlock.textFieldObject('barrel_kidney', 'Бочка-Почка (Б – П)'),
  mainBlock.textFieldObject('saber_heron', 'Сабля-Цапля (С – Ц)'),
];

reviewBlock.content = [
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'level_of_formation_of_phonetic_phonological_competence',
    'Уровень сформированности фонетико-фонологической компетенции: ',
    [
      'Уровень сформированности фонетико-фонологической компетенции соответствует возрастной норме',
      'Уровень сформированности фонетико-фонологической компетенции не соответствует возрастной норме',
    ]
  ),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'state_of_phonemic_perception',
    'Состояние фонематического восприятия:',
    [
      'Фонематическое восприятие сформировано ',
      'Фонематическое восприятие не сформировано',
    ]
  ),

  reviewBlock.radioOrCheckFieldObject(reviewBlock.fieldTypes.checkbox, '', '', [
    {
      name: 'there_are_difficulties_in_distinguishing',
      label: 'Наблюдаются трудности различения глухих и звонких согласных',
    },
    {
      name: 'distinction_between_hard_and_soft_consonants',
      label: 'Нарушено различение твердых и мягких согласных',
    },
    {
      name: 'distinction_between_affricates_and_their_constituent',
      label: 'Нарушено различение аффрикат и входящих в их состав звуков',
    },
  ]),
  reviewBlock.textAreaFieldObject('expert_comment', 'Комментарий'),
];

export const examMagicGame = mainBlock.content;
export const examMagicGameReview = reviewBlock.content;
