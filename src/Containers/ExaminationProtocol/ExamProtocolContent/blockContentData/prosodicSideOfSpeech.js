import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('prosodicSideOfSpeech', []);
const reviewBlock = new BlockContent('prosodicSideOfSpeech.review', []);

mainBlock.content = [
  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'voice',
    'Голос',
    ['Афония', 'Дисфония', 'Нормальный']
  ),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'voice_part_two',
    '',
    ['Хриплый', 'Звонкий']
  ),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'voice_part_three',
    '',
    ['Громкий', 'Тихий']
  ),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'voice_part_four',
    '',
    ['Писклявый', 'Oчень низкий']
  ),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'voice_part_five',
    '',
    ['Немодулированный', 'Слабо модулированный']
  ),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.checkbox,
    'nasalized_voice',
    '',
    [{ label: 'Назализованный голос' }]
  ),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'smoothness',
    'Плавность',
    ['Речь плавная', 'Речь неплавная']
  ),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'pace',
    'Темп',
    [
      'Нормальный',
      'Быстрый',
      'Медленный',
      'Патологически ускоренный',
      'Патологически замедленный',
    ]
  ),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'speech',
    'Речь',
    ['На вдохе', 'На выдохе', 'Иссякает к концу фразы']
  ),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'breath',
    'Дыхание',
    ['Ключичное', 'Грудное', 'Диафрагмальное', 'Смешанное']
  ),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'exhalation',
    '',
    ['Выдох укорочен', 'Выдох плавный']
  ),

  mainBlock.radioOrCheckFieldObject(mainBlock.fieldTypes.checkbox, '', '', [
    { name: 'hindered', label: 'Затруднённое' },
    { name: 'superficial', label: 'Поверхностное' },
    { name: '', label: 'Неритмичное' },
    { name: 'shallow_breath', label: 'Вдох неглубокий' },
  ]),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'rhythm',
    'Ритм',
    ['Не нарушен', 'Нарушен: речь растянутая, скандированная']
  ),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'expiratory_force',
    'Сила выдоха',
    ['Слабая', 'Сильная']
  ),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'inspiratory_expiratory_differentiation',
    'Дифференцированность вдоха/выдоха и возможность управления ',
    ['В норме', 'Нарушена']
  ),
];

reviewBlock.content = [
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'prosodic_side_of_speech',
    '',
    [
      'Просодическая организация речи характеризуется неадекватным интонационным оформлением высказывания; речь невнятная, "смазанная", малопонятная для окружающих',
      'Разборчивость речи несколько снижена, речь нечеткая',
      'Речь внятная, понятная для окружающих',
    ]
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'speech_intonationally',
    '',
    [
      'Речь интонационно выразительна ',
      'Речь интонационно невыразительна: слабая выраженность голосовых модуляций',
    ]
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'violation_of_tempo_rhythmic_organization_of_speech',
    'Нарушение темпо-ритмической организации речи: ',
    ['Судороги', 'Запинки']
  ),
];

export const prosodicSideOfSpeech = mainBlock.content;
export const prosodicSideOfSpeechReview = reviewBlock.content;
