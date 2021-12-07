import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('additional_information', []);

mainBlock.content = [
  mainBlock.questionObject(
    mainBlock.fieldTypes.question,
    null,
    '— Во сколько ребенок сел самостоятельно? В каком возрасте пополз? Пошел самостоятельно? Были ли какие-либо травмы/инфекции у ребенка до, во время или после родов?',
    []
  ),

  mainBlock.textFieldObject('sat_in', 'Сел в:'),
  mainBlock.textFieldObject(
    'crawled_on_all_fours_into',
    'Пополз на четвереньках в:'
  ),
  mainBlock.textFieldObject('went_to', 'Пошел в:'),
  mainBlock.textFieldObject(
    'llearned_to_jump_on_two_legs_in',
    'Научился прыгать на двух ногах в:'
  ),
  mainBlock.textFieldObject(
    'injury_infection_before_during_and_or_after_childbirth',
    'Травмы/инфекции до, во время и/или после родов:'
  ),

  mainBlock.boxTitle(
    mainBlock.fieldTypes.par,
    'Раннее речевое/позднее речевое развитие '
  ),

  mainBlock.questionObject(
    mainBlock.fieldTypes.question,
    null,
    '— В каком возрасте появился лепет? Первые слова? Первые короткие фразы? ',
    []
  ),

  mainBlock.textFieldObject('babbling_in.babbling_age', 'Лепет в:'),
  mainBlock.textFieldObject(
    'first_words_in.first_words_age',
    'Первые слова в:'
  ),
  mainBlock.textFieldObject(
    'first_short_phrases_in.first_short_phrases_age',
    'Первые короткие фразы в:'
  ),

  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Речевая среда'),

  mainBlock.questionObject(
    mainBlock.fieldTypes.question,
    null,
    '— На каком языке говорят с ребенком дома? Много ли общаетесь с ребенком? Опишите ваш обычный разговор с ребенком дома и вне дома ',
    []
  ),

  mainBlock.textAreaFieldObject('speech_environment', ''),

  mainBlock.boxTitle(
    mainBlock.fieldTypes.par,
    'Настоящие и перенесенные заболевания, травмы, операции'
  ),

  mainBlock.questionObject(
    mainBlock.fieldTypes.question,
    null,
    '— Были ли у ребенка серьезные операции, и в каком возрасте? Травмы головы? Заболевания, о которых логопеду стоит знать?',
    []
  ),

  mainBlock.textAreaFieldObject('present_and_past_diseases', ''),

  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Медикаментозное лечение'),

  mainBlock.questionObject(
    mainBlock.fieldTypes.question,
    null,
    '— Проходил/проходит ли медикаментозное лечение? Если да, то какое?',
    []
  ),
  mainBlock.textAreaFieldObject('drug_treatment', ''),

  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Неврологический статус'),

  mainBlock.questionObject(
    mainBlock.fieldTypes.question,
    null,
    '— Ставил ли невролог когда-либо какой-либо диагноз? Имеется ли у ребенка эпилепсия или другие похожие состояния?',
    []
  ),
  mainBlock.textAreaFieldObject('neurological_status', ''),

  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Зрение'),

  mainBlock.questionObject(
    mainBlock.fieldTypes.question,
    null,
    '— Какое зрение у ребенка? Что говорит окулист? ',
    []
  ),
  mainBlock.textAreaFieldObject('vision', ''),

  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Слух'),

  mainBlock.questionObject(
    mainBlock.fieldTypes.question,
    null,
    '— Какой слух у ребенка? Что говорит отоларинголог?',
    []
  ),
  mainBlock.textAreaFieldObject('hearing', ''),

  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Пищевое поведение'),

  mainBlock.questionObject(
    mainBlock.fieldTypes.question,
    null,
    '— Какой аппетит у ребенка? Он предпочитает твердую или пюреобразную пищу? Имеется ли избирательность в еде?',
    []
  ),
  mainBlock.textAreaFieldObject('eating_behavior', ''),

  mainBlock.boxTitle(
    mainBlock.fieldTypes.par,
    'Эмоционально-психологический уровень'
  ),

  mainBlock.questionObject(
    mainBlock.fieldTypes.question,
    null,
    '— Как обычно ведет себя дома в привычной обстановке? Как ведет себя в незнакомой ситуации? Как ведет себя с незнакомыми людьми?',
    []
  ),

  mainBlock.textAreaFieldObject('emotional_and_psychological_level', ''),
];

export const additionalInfo = mainBlock.content;
