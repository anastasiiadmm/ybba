import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('prosodicSideOfSpeech', []);
const reviewBlock = new BlockContent('prosodicSideOfSpeech.review', []);

mainBlock.content = [
  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'voice.aphonia_dysphonia',
    'Голос',
    ['Афония', 'Дисфония', 'Нормальный']
  ),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'voice.hoarse_voiced',
    '',
    ['Хриплый', 'Звонкий']
  ),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'voice.loud_quiet',
    '',
    ['Громкий', 'Тихий']
  ),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'voice.squeaky_low',
    '',
    ['Писклявый', 'Oчень низкий']
  ),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'voice.unmodulated_weakly_modulated',
    '',
    ['Немодулированный', 'Слабо модулированный']
  ),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.checkbox,
    'voice.extra',
    '',
    ['Назализованный голос']
  ),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'smoothness',
    'Плавность',
    ['Речь плавная', 'Речь неплавная']
  ),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'tempo',
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
    'breath.main',
    'Дыхание',
    ['Ключичное', 'Грудное', 'Диафрагмальное', 'Смешанное']
  ),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'breath.tempo',
    '',
    ['Выдох укорочен', 'Выдох плавный']
  ),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.checkbox,
    'breath.extra',
    '',
    ['Затруднённое', 'Поверхностное', 'Неритмичное', 'Вдох неглубокий']
  ),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'rhythm',
    'Ритм',
    ['Не нарушен', 'Нарушен: речь растянутая, скандированная']
  ),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'exhale_strength',
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
    'specific_speech',
    '',
    [
      'Просодическая организация речи характеризуется неадекватным интонационным оформлением высказывания; речь невнятная, "смазанная", малопонятная для окружающих',
      'Разборчивость речи несколько снижена, речь нечеткая',
      'Речь внятная, понятная для окружающих',
    ]
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'tone_speech',
    '',
    [
      'Речь интонационно выразительна ',
      'Речь интонационно невыразительна: слабая выраженность голосовых модуляций',
    ]
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'tempo_rhythmic_speech',
    'Нарушение темпо-ритмической организации речи: ',
    ['Судороги', 'Запинки']
  ),
];

export const prosodicSideOfSpeech = mainBlock.content;
export const prosodicSideOfSpeechReview = reviewBlock.content;
