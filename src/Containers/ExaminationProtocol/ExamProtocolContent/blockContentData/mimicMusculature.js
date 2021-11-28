import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('mimicMusculature', []);
const reviewBlock = new BlockContent('mimicMusculature.review', []);

mainBlock.content = [
  mainBlock.fieldObject(
    mainBlock.fieldTypes.text,
    'raise_eyebrows',
    'Поднять брови'
  ),
  mainBlock.fieldObject(mainBlock.fieldTypes.text, 'frown', 'Нахмурить брови'),
  mainBlock.fieldObject(mainBlock.fieldTypes.text, 'wink', 'Подмигнуть'),
  mainBlock.fieldObject(
    mainBlock.fieldTypes.text,
    'puff_out_cheeks',
    'Надуть щеки'
  ),
];

reviewBlock.content = [
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'facial_muscle_tone',
    'Тонус мышц лица:',
    ['Cпастичность', 'Гипотония', 'Дистония']
  ),
  reviewBlock.radioOrCheckFieldObject(reviewBlock.fieldTypes.checkbox, '', '', [
    { name: 'hypomimia', label: 'Гипомимия' },
    {
      name: 'smoothness_of_nasolabial_fold',
      label: 'Сглаженность носогубной складки',
    },
    { name: 'asymmetry_of_face', label: 'Асимметрия лица' },
    { name: 'facial_hyperkinesis', label: 'Гиперкинезы лица' },
    { name: 'synkinesis', label: 'Синкинезии ' },
  ]),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'lip_muscle_tone',
    'Тонус мышц губ:',
    ['Cпастичность', 'Гипотония', 'Дистония']
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    'restriction_of_lip_mobility',
    '',
    [{ label: 'Ограничение подвижности губ' }]
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
