import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('notSleepingMouseGame', []);
const reviewBlock = new BlockContent('notSleepingMouseGame.review', []);

const gameStory = `Маленькому мышонку не спалось. Пошел темной ночью он по лесу гулять.
Увидел яблочко в траве и съел его. Увидел ягодку и тоже съел.
Заметил он в луже белый светящийся круг. Подумал, что это сыр, хотел
и его слопать, но ничего не вышло. Не пропадать же добру! Решил
накрыть его лопухом — пусть до утра полежит. А утром вместо белого
круга обнаружил он в воде большое красное солнышко`;

mainBlock.content = [
  mainBlock.questionObject(
    mainBlock.fieldTypes.question,
    null,
    '— Послушай рассказ. Расставь картинки по порядку.',
    [],
    gameStory
  ),

  mainBlock.yesNoQuestionObject(
    'mouse_in_the_yard',
    'Мышонок во дворе ночью',
    1
  ),
  mainBlock.yesNoQuestionObject(
    'mouse_eats_apple',
    'Мышонок ест яблоко и ягоду',
    2
  ),
  mainBlock.yesNoQuestionObject(
    'moon_puddle_reflection',
    'Луна в отражении воды в луже',
    3
  ),
  mainBlock.yesNoQuestionObject(
    'mouse_covers_puddle',
    'Мышонок накрывает лужу лопухом',
    4
  ),
  mainBlock.yesNoQuestionObject(
    'sun_puddle_reflection',
    'Солнце в отражении воды в луже',
    5
  ),
  mainBlock.questionObject(
    mainBlock.fieldTypes.question,
    '',
    '— Ответь на вопросы',
    []
  ),
  mainBlock.textFieldObject(
    'what_was_the_white_ball',
    '1. Чем оказался белый светящийся круг?'
  ),
  mainBlock.textFieldObject(
    'when_did_the_mouse_go_to_walk',
    '2. Когда мышонок пошел гулять?'
  ),
  mainBlock.textFieldObject(
    'what_did_the_mouse_see',
    '3. Что увидел мышонок во дворе?'
  ),
  mainBlock.textFieldObject(
    'what_was_the_puddle_cover',
    '4. Чем мышонок накрыл луну?'
  ),
  mainBlock.textFieldObject(
    'what_did_the_mouse_see_in_the_puddle',
    '5. Что увидел в луже мышонок утром?'
  ),
  mainBlock.textFieldObject(
    'why_did_the_mouse_see_the_sun',
    '6. Почему вместо луны мышонок обнаружил солнышко?'
  ),

  mainBlock.questionObject(
    mainBlock.fieldTypes.question,
    '',
    '— Повтори всю историю, как запомнил:',
    []
  ),
  mainBlock.textAreaFieldObject('child-story-review', ''),
];

reviewBlock.content = [
  reviewBlock.boxTitle(reviewBlock.fieldTypes.par, 'Продуцирование:'),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'statement_building',
    'Построение высказывания:',
    [
      'Может построить собственное высказывание на основе полученной визуально информации',
      'Не может построить собственное высказывание на основе полученной визуально информации',
    ]
  ),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'plot_match',
    'Соответствие сюжету:',
    [
      'Рассказ соответствует предложенному сюжету',
      'Рассказ не соответствует предложенному сюжету',
    ]
  ),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'theme',
    'Тема:',
    ['Раскрыта ', 'Раскрыта частично', 'Не раскрыта']
  ),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'chronological_event_logic',
    'Временную, логическую последовательность событий: ',
    ['Соблюдает', 'Не соблюдает']
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'language_tools',
    'Языковые средства:',
    [
      'Свободно владеет языковыми средствами и адекватно их использует при построении связного текста',
      'Неадекватно использует языковые средства при построении связного текста',
    ]
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    'language_tools.phrasal_perseverations',
    '',
    ['Фразовые персеверации']
  ),

  reviewBlock.boxTitle(reviewBlock.fieldTypes.par, 'Репродуцирование:'),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    'has_no_difficulty_in_story_reproduction',
    'Ребенок не испытывает трудностей в репродуцировании текста:',
    [
      'Пересказ соответствует оригиналу',
      'Пересказ содержит как основную, так и дополнительную информацию',
      'При пересказе используется вариативность речи',
    ]
  ),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    'has_some_difficulty_in_story_reproduction',
    'Наблюдаются некоторые трудности в репродуцировании текста:',
    [
      'Пересказ частично соответствует оригиналу',
      'Пересказ содержит только основную информацию',
      'Сохраняются лексика и синтаксические конструкции оригинала',
      'Не нарушена связность и логичность изложения ',
    ]
  ),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    'has_notable_difficulty_in_story_reproduction',
    'Наблюдаются значительные трудности в репродуцировании текста: ',
    [
      'Пересказ не соответствует оригиналу<',
      'Нарушена смысловая организация текста<',
      'Нарушена связность и логичность изложения <',
      'Значительные трудности в языковом оформлении текста',
    ]
  ),

  reviewBlock.boxTitle(reviewBlock.fieldTypes.par, 'Понимание:'),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'content_and_semantic_meaning_of_the_text:',
    ' Содержательно-смысловое значение текста:',
    ['Идентифицирует', 'Не идентифицирует ']
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'content_and_semantic_meaning_of_the_text:',
    'Понимание:',
    [
      'понимает только основную информацию текста',
      'доступно понимание как основной, так и дополнительной информа¬ции каждой смысловой части текста',
      'доступно понимание скрытого смысла',
    ]
  ),

  reviewBlock.textAreaFieldObject('specialist-comment', 'Комментарий'),
];

export const notSleepingMouseGame = mainBlock.content;
export const notSleepingMouseGameReview = reviewBlock.content;
