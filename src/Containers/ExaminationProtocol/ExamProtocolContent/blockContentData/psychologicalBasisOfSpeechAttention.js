import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('psychologicalBasisOfSpeechAttention', []);

mainBlock.content = [
  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'speech_attention',
    'Речевое внимание:',
    ['Сформировано ', 'Сформировано недостаточно', 'Не сформировано']
  ),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.checkbox,
    'distribution',
    'Распределение:',
    ['Наблюдаются трудности распределения внимания']
  ),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'stability',
    'Устойчивость:',
    [
      'Внимание неустойчивое, поверхностное, ребенок очень быстро истощается',
      'Внимание недостаточно устойчивое',
      'Внимание устойчивое',
    ]
  ),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.checkbox,
    'depletion',
    'Истощаемость:',
    ['Внимание ребенка характеризуется быстрой истощаемостью']
  ),

  mainBlock.fieldObject(mainBlock.fieldTypes.text, 'volume', 'Объем:'),

  mainBlock.fieldObject(
    mainBlock.fieldTypes.text,
    'switchability',
    'Переключаемость:'
  ),
];

export const psychologicalBasisOfSpeechAttention = mainBlock.content;
