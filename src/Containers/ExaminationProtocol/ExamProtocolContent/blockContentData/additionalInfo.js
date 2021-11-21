import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('additionalInfo', []);

mainBlock.content = [
  mainBlock.questionObject(
    mainBlock.fieldTypes.question,
    null,
    '— Во сколько ребенок сел самостоятельно? В каком возрасте пополз? Пошел самостоятельно? Были ли какие-либо травмы/инфекции у ребенка до, во время или после родов?',
    []
  ),

  mainBlock.textFieldObject('sat_age', 'Сел в:'),
  mainBlock.textFieldObject('crawled_age', 'Пополз на четвереньках в:'),
  mainBlock.textFieldObject('started_walking__age', 'Пошел в:'),
  mainBlock.textFieldObject(
    'learned_to_jump__age',
    'Научился прыгать на двух ногах в:'
  ),
  mainBlock.textFieldObject(
    'birth_traumas_infections',
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

  mainBlock.textFieldObject('babling_words.babbling_age', 'Лепет в:'),
  mainBlock.textFieldObject('babling_words.first_words_age', 'Первые слова в:'),
  mainBlock.textFieldObject(
    'babling_words.first_short_phrases_age',
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

  mainBlock.textAreaFieldObject('trauma_illness_operation', ''),

  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Медикаментозное лечение'),

  mainBlock.questionObject(
    mainBlock.fieldTypes.question,
    null,
    '— Проходил/проходит ли медикаментозное лечение? Если да, то какое?',
    []
  ),
  mainBlock.textAreaFieldObject('medical_treatment', ''),

  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Неврологический статус'),

  mainBlock.questionObject(
    mainBlock.fieldTypes.question,
    null,
    '— Ставил ли невролог когда-либо какой-либо диагноз? Имеется ли у ребенка эпилепсия или другие похожие состояния?',
    []
  ),
  mainBlock.textAreaFieldObject('neurological_status', ''),

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
  mainBlock.textAreaFieldObject('eating_behaviour', ''),

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

  mainBlock.textAreaFieldObject('emotional_psychological_level', ''),

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

  mainBlock.textAreaFieldObject('emotional_psychological_level', ''),
];

export const additionalInfo = mainBlock.content;
