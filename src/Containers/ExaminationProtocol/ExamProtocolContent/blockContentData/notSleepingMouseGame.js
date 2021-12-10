import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('game_how_the_mouse_could_not_sleep', []);
const reviewBlock = new BlockContent('game_how_the_mouse_could_not_sleep', []);

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
    'mouse_in_the_yard_at_night',
    'Мышонок во дворе ночью',
    1
  ),
  mainBlock.yesNoQuestionObject(
    'mouse_is_eating_an_apple_and_a_berry',
    'Мышонок ест яблоко и ягоду',
    2
  ),
  mainBlock.yesNoQuestionObject(
    'moon_in_the_reflection_of_the_water_in_a_puddle',
    'Луна в отражении воды в луже',
    3
  ),
  mainBlock.yesNoQuestionObject(
    'mouse_covers_the_puddle_with_burdock',
    'Мышонок накрывает лужу лопухом',
    4
  ),
  mainBlock.yesNoQuestionObject(
    'sun_in_water_reflection_in_a_puddle',
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
    'what_was_the_white_glowing_circle',
    '1. Чем оказался белый светящийся круг?'
  ),
  mainBlock.textFieldObject(
    'when_did_the_mouse_go_for_a_walk',
    '2. Когда мышонок пошел гулять?'
  ),
  mainBlock.textFieldObject(
    'what_did_the_mouse_see_in_the_forest',
    '3. Что увидел мышонок во дворе?'
  ),
  mainBlock.textFieldObject(
    'what_did_the_mouse_cover_the_moon_with',
    '4. Чем мышонок накрыл луну?'
  ),
  mainBlock.textFieldObject(
    'what_did_the_mouse_see_in_the_puddle_in_the_morning',
    '5. Что увидел в луже мышонок утром?'
  ),
  mainBlock.textFieldObject(
    'why_instead_of_the_moon_the_mouse_found_the_sun',
    '6. Почему вместо луны мышонок обнаружил солнышко?'
  ),

  mainBlock.questionObject(
    mainBlock.fieldTypes.question,
    '',
    '— Повтори всю историю, как запомнил:',
    []
  ),
  mainBlock.textAreaFieldObject('crepeat_the_whole_story_as_you_remember', ''),
];

reviewBlock.content = [
  reviewBlock.boxTitle(reviewBlock.fieldTypes.par, 'Продуцирование:'),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'constructing_a_statement',
    'Построение высказывания:',
    [
      'Может построить собственное высказывание на основе полученной визуально информации',
      'Не может построить собственное высказывание на основе полученной визуально информации',
    ]
  ),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'consistency_with_the_plot',
    'Соответствие сюжету:',
    [
      'Рассказ соответствует предложенному сюжету',
      'Рассказ не соответствует предложенному сюжету',
    ]
  ),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'topic',
    'Тема:',
    [
      'Раскрыта',
      { label: 'Раскрыта частично', value: 'тема раскрыта частично' },
      { label: 'Не раскрыта', value: 'не раскрыто' },
    ]
  ),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'chronological_event_logic',
    'Временную, логическую последовательность событий: ',
    ['Соблюдает', 'Не соблюдает']
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'language_means',
    'Языковые средства:',
    [
      {
        label:
          'Свободно владеет языковыми средствами и адекватно их использует при построении связного текста',
        value:
          'свободно владеет языковыми средствами и адекватно их использует при построении связного текста',
      },
      {
        label:
          'Неадекватно использует языковые средства при построении связного текста',
        value:
          'неадекватно использует языковые средства при построении связного текста',
      },
    ]
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    '',
    '',

    [
      {
        name: 'phrasal_perseverations',
        label: 'Фразовые персеверации',
      },
    ]
  ),

  reviewBlock.boxTitle(reviewBlock.fieldTypes.par, 'Репродуцирование:'),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    '',
    'Ребенок не испытывает трудностей в репродуцировании текста:',
    [
      {
        name: 'retelling_corresponds_to_original',
        label: 'Пересказ соответствует оригиналу',
      },
      {
        name: 'retelling_contains_both_basic_and_additional_information',
        label:
          'Пересказ содержит как основную, так и дополнительную информацию',
      },
      {
        name: 'retelling_uses_variability_of_speech',
        label: 'При пересказе используется вариативность речи',
      },
    ]
  ),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    '',
    'Наблюдаются некоторые трудности в репродуцировании текста:',
    [
      {
        name: 'retelling_partially_corresponds_to_original',
        label: 'Пересказ частично соответствует оригиналу',
      },
      {
        name: 'retelling_contains_only_basic_information',
        label: 'Пересказ содержит только основную информацию',
      },
      {
        name: 'vocabulary_and_syntactic_constructions_of_original',
        label: 'Сохраняются лексика и синтаксические конструкции оригинала',
      },
      {
        name: 'coherence_and_consistency_of_presentation_is_not_broken',
        label: 'Не нарушена связность и логичность изложения ',
      },
    ]
  ),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    'has_notable_difficulty_in_story_reproduction',
    'Наблюдаются значительные трудности в репродуцировании текста: ',
    [
      {
        name: 'retelling_does_not_correspond_to_original',
        label: 'Пересказ не соответствует оригиналу',
      },
      {
        name: 'semantic_organization_of_text_is_broken',
        label: 'Нарушена смысловая организация текста',
      },
      {
        name: 'coherence_and_consistency_of_presentation_is_broken',
        label: 'Нарушена связность и логичность изложения',
      },
      {
        name: 'significant_difficulties_in_language_design_of_text',
        label: 'Значительные трудности в языковом оформлении текста',
      },
    ]
  ),

  reviewBlock.boxTitle(reviewBlock.fieldTypes.par, 'Понимание:'),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'content_semantic_meaning_of_text',
    ' Содержательно-смысловое значение текста:',
    ['Идентифицирует', 'Не идентифицирует']
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'understands_only_basic_information_of_text',
    'Понимание:',
    [
      'понимает только основную информацию текста',
      'доступно понимание как основной, так и дополнительной информации каждой смысловой части текста',
      'доступно понимание скрытого смысла',
    ]
  ),

  reviewBlock.textAreaFieldObject('expert_comment', 'Комментарий'),
];

export const notSleepingMouseGame = mainBlock.content;
export const notSleepingMouseGameReview = reviewBlock.content;
