import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('basisOfSpeechAndMemoryReview', []);

mainBlock.content = [
  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'verbal_memory_capacity.isEnough',
    'Объем вербальной памяти:',
    [
      'Достаточный для полнооценной коммуникации ',
      'Недостаточный для полнооценной коммуникации ',
    ]
  ),
  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'verbal_memory_capacity.observation',
    '',
    [
      'Наблюдаются незначительные трудности актуализации слов, хранения и воспроизведения вербальной информации',
      'Наблюдаются выраженные трудности актуализации слов, хранения и воспроизведения вербальной информации',
    ]
  ),
  mainBlock.textAreaFieldObject('specialist-comment', 'Комментарий'),
];

export const basisOfSpeechAndMemoryReview = mainBlock.content;
