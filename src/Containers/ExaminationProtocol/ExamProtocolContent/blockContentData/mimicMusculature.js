import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('mimicMusculature', []);
const reviewBlock = new BlockContent('mimicMusculature.review', []);

mainBlock.content = [
  mainBlock.fieldObject(
    mainBlock.fieldTypes.text,
    'raise_eyebrows',
    'Поднять брови'
  ),
  mainBlock.fieldObject(mainBlock.fieldTypes.text, 'wink', 'Подмигнуть'),
  mainBlock.fieldObject(
    mainBlock.fieldTypes.text,
    'blow_cheeks',
    'Надуть щеки'
  ),
];

reviewBlock.content = [
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'facial_muscle_tone.type',
    'Тонус мышц лица:',
    ['Cпастичность', 'Гипотония', 'Дистония']
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    'facial_muscle_tone.checkbox',
    '',
    [
      'Гипомимия',
      'Сглаженность носогубной складки',
      'Асимметрия лица',
      'Гиперкинезы лица',
      'Синкинезии ',
    ]
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'lip_muscle_tone.type',
    'Тонус мышц губ:',
    ['Cпастичность', 'Гипотония', 'Дистония']
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    'lip_muscle_tone.checkbox',
    '',
    ['Ограничение подвижности губ']
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'hypersalivation',
    'Гиперсаливация:',
    ['Постоянная', 'После функциональной нагрузки']
  ),
];

export const mimicMusculature = mainBlock.content;
export const mimicMusculatureReview = reviewBlock.content;
