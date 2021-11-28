import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('antLambadaGame', []);
const reviewBlock = new BlockContent('antLambadaGame.review', []);

mainBlock.content = [
  mainBlock.textFieldObject('woodpecker_house', 'Дом-Дятел /Д, Дь'),
  mainBlock.textFieldObject('slipper_dress', 'Тапки-Платье /Т, Ть'),
  mainBlock.textFieldObject(
    'kitchen_hamster_goose',
    'Кухня-Хомяк-Гусь /К – Х, Г'
  ),
];

reviewBlock.content = [
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    'front_lingual',
    'Переднеязычные:',
    [
      { name: 'nasal', label: 'Носовой' },
      { name: 'skip', label: 'Пропуск' },
      { name: 'replacing_d_with', withText: true, checkboxText: 'Замена Д на' },
      {
        name: 'replacing_d_soft_with',
        withText: true,
        checkboxText: 'Замена Дь на',
      },
      { name: 'replacing_t_with', withText: true, checkboxText: 'Замена Т на' },
      {
        name: 'replacing_t_soft_with',
        withText: true,
        checkboxText: 'Замена Ть на',
      },
    ]
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    'back_lingual',
    'Заднеязычные:',
    [
      { name: 'replacing_k_with', withText: true, checkboxText: 'Замена К на' },
      { name: 'replacing_g_with', withText: true, checkboxText: 'Замена Г на' },
      {
        name: 'replacing_kh_with',
        withText: true,
        checkboxText: 'Замена Х на',
      },

      { name: 'mixing', label: 'Смешение' },
      { name: 'distortion', label: 'Искажение' },
    ]
  ),
  reviewBlock.textAreaFieldObject('expert_comment', 'Комментарий'),
];

export const antLambadaGame = mainBlock.content;
export const antLambadaGameReview = reviewBlock.content;
