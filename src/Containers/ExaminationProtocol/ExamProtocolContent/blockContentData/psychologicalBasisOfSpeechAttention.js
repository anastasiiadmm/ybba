import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('psychologicalBasisOfSpeechAttention', []);

mainBlock.content = [
  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'there_are_difficulties_in_distributing_attention',
    'Речевое внимание:',
    ['Сформировано ', 'Сформировано недостаточно', 'Не сформировано']
  ),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.checkbox,
    'concentration',
    'Распределение:',
    [{ label: 'Наблюдаются трудности распределения внимания' }]
  ),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'sustainability',
    'Устойчивость:',
    [
      'Внимание неустойчивое, поверхностное, ребенок очень быстро истощается',
      'Внимание недостаточно устойчивое',
      'Внимание устойчивое',
    ]
  ),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.checkbox,
    'child_s_attention_is_characterized_by_rapid_exhaustion',
    'Истощаемость:',
    [{ label: 'Внимание ребенка характеризуется быстрой истощаемостью' }]
  ),

  mainBlock.fieldObject(mainBlock.fieldTypes.text, 'volume', 'Объем:'),

  mainBlock.fieldObject(
    mainBlock.fieldTypes.text,
    'switchability',
    'Переключаемость:'
  ),
];

export const psychologicalBasisOfSpeechAttention = mainBlock.content;
