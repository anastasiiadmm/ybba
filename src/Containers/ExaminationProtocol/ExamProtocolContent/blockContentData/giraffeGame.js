import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('giraffeGame', []);
const reviewBlock = new BlockContent('giraffeGame.review', []);

mainBlock.content = [
  mainBlock.textFieldObject('fish_cow_fence_crab', 'Рыба-Корова-Забор-Краб /Р'),
  mainBlock.textFieldObject('river_jam_door', 'Река-Варенье-Дверь /Рь'),
  mainBlock.textFieldObject(
    'lamp_milk_floor_treasure',
    'Лампа-Молоко-Пол-Клад /Л'
  ),
  mainBlock.textFieldObject('wheel_salt', 'Колесо-Соль /Ль'),
];

reviewBlock.content = [
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    '',
    'Ротацизм:',
    [
      { name: 'throat_rotacism', label: 'Горловой ротацизм' },
      { name: 'replacing_p_with', withText: true, checkboxText: 'Замена Р на' },
      {
        name: 'replacing_p_soft_with',
        withText: true,
        checkboxText: 'Замена Рь на',
      },

      { name: 'buccal', label: 'Щечный' },
      { name: 'side', label: 'Боковой' },
      { name: 'one_hit_pronunciation', label: 'Одноударное произношение' },
      { name: 'skip', label: 'Пропуск' },
    ]
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    '',
    'Ламбдацизм:',
    [
      { name: 'interdental_lambdacism', label: 'Межзубный ламбдацизм' },
      { name: 'replacing_l_with', withText: true, checkboxText: 'Замена Л на' },
      {
        name: 'replacing_l_soft_with',
        withText: true,
        checkboxText: 'Замена Ль на',
      },

      { name: 'nasal', label: 'Носовой' },
      { name: 'lambdacism_pass', label: 'Пропуск' },
      { name: 'two_lipped', label: 'Двугубный' },
      { name: 'distortion', label: 'Искажение' },
    ]
  ),
];

export const giraffeGame = mainBlock.content;
export const giraffeGameReview = reviewBlock.content;
