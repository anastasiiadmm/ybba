import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('game_magic_exam', []);
const reviewBlock = new BlockContent('game_magic_exam', []);

mainBlock.content = [
  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Синтез'),

  mainBlock.textFieldObject('nose', 'Н – О – С - нос'),
  mainBlock.textFieldObject('poppy', 'М - А – К – мак'),

  mainBlock.textFieldObject('fly', 'М – У – Х – А – муха'),

  mainBlock.textFieldObject('cats', 'К – О – Ш – К – И - кошки'),

  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Анализ'),

  mainBlock.textFieldObject(
    'what_is_first_sound_in_words_poppy_and_fly',
    'Какой первый звук в словах «мак» и «муха»?'
  ),

  mainBlock.textFieldObject(
    'what_is_first_sound_in_word_nose',
    'Какой первый звук в слове «нос»?'
  ),

  mainBlock.textFieldObject(
    'what_is_last_sound_in_words_cat_and_fly',
    'Какой последний звук в словах «кошка» и «муха»?'
  ),

  mainBlock.textFieldObject(
    'what_is_last_sound_in_word_poppy',
    'Какой последний звук в слове «мак»?'
  ),
  mainBlock.textFieldObject(
    'what_is_common_sound_in_words_of_a_cat_and_anose',
    'Какой общий звук в словах «кошки» и «нос»?'
  ),

  mainBlock.textFieldObject(
    'in_which_of_words_there_is_no_sound_about_nose_of_cat_poppy',
    'В каком из слов нет звука О: нос, кошки, мак?'
  ),
];

reviewBlock.content = [
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'phonemic_hearing',
    'Фонематический слух:',
    ['Сформирован', 'Не сформирован']
  ),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'phonological_sound_analysis_and_synthesis_skills',
    'Навыки фонологического (звукового) анализа и синтеза:',
    [
      'не сформированы',
      {
        withText: true,
        radioText:
          'находятся на самой начальной стадии формирования. Ребенку доступен анализ звукового ряда, состоящего из',
      },
      {
        withText: true,
        radioText:
          'находятся в активной стадии формирования; ребенку доступен анализ слов типа',
      },
    ]
  ),

  reviewBlock.textAreaFieldObject(
    'phonemic_hearing_expert_comment',
    'Комментарий'
  ),
];

export const soundAnalysisAndSynthesis = mainBlock.content;
export const soundAnalysisAndSynthesisReview = reviewBlock.content;
