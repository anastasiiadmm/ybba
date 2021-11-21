import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('soundAnalysisAndSynthesis', []);
const reviewBlock = new BlockContent('soundAnalysisAndSynthesis.review', []);

mainBlock.content = [
  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Синтез'),

  mainBlock.fieldObject(
    mainBlock.fieldTypes.text,
    'synthesis.n_o_s',
    'Н – О – С - нос'
  ),
  mainBlock.fieldObject(
    mainBlock.fieldTypes.text,
    'synthesis.m_a_k',
    'М - А – К – мак'
  ),

  mainBlock.fieldObject(
    mainBlock.fieldTypes.text,
    'synthesis.m_u_h_a',
    'М – У – Х – А – муха'
  ),

  mainBlock.fieldObject(
    mainBlock.fieldTypes.text,
    'synthesis.k_o_sh_k_i',
    'К – О – Ш – К – И - кошки'
  ),

  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Анализ'),

  mainBlock.fieldObject(
    mainBlock.fieldTypes.text,
    'analysis.first_sound_m',
    'Какой первый звук в словах «мак» и «муха»?'
  ),

  mainBlock.fieldObject(
    mainBlock.fieldTypes.text,
    'analysis.first_sound_n',
    'Какой первый звук в слове «нос»?'
  ),

  mainBlock.fieldObject(
    mainBlock.fieldTypes.text,
    'analysis.last_sound_a',
    'Какой последний звук в словах «кошка» и «муха»?'
  ),

  mainBlock.fieldObject(
    mainBlock.fieldTypes.text,
    'analysis.last_sound_k',
    'Какой последний звук в слове «мак»?'
  ),

  mainBlock.fieldObject(
    mainBlock.fieldTypes.text,
    'analysis.no_sound_o',
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
    'phonological_analysis_and_synthesis_skills',
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

  reviewBlock.textAreaFieldObject('specialist-comment', 'Комментарий'),
];

export const soundAnalysisAndSynthesis = mainBlock.content;
export const soundAnalysisAndSynthesisReview = reviewBlock.content;
