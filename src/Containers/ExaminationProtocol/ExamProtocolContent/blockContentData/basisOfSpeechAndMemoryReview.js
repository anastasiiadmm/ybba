import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('game_pictures_for_fish', []);

mainBlock.content = [
  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'verbal_memory',
    'Объем вербальной памяти:',
    [
      'Достаточный для полнооценной коммуникации ',
      'Недостаточный для полнооценной коммуникации ',
    ]
  ),
  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'verbal_memory_part_two',
    '',
    [
      'Наблюдаются незначительные трудности актуализации слов, хранения и воспроизведения вербальной информации',
      'Наблюдаются выраженные трудности актуализации слов, хранения и воспроизведения вербальной информации',
    ]
  ),
  mainBlock.textAreaFieldObject('expert_comment', 'Комментарий'),
];

export const basisOfSpeechAndMemoryReview = mainBlock.content;
