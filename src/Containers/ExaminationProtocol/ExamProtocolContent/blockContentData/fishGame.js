import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('fishGame', []);
const reviewBlock = new BlockContent('fishGame.review', []);

mainBlock.content = [
  mainBlock.textFieldObject(
    'shop_hay_cornflower',
    'Магазин-Сено-Василек /ЗЬ, СЬ'
  ),
  mainBlock.textFieldObject(
    'dog_pump_lock_goat',
    'Собака-Насос-Замок-Коза /С, З'
  ),
  mainBlock.textFieldObject(
    'starling_heron_finger',
    'Скворец-Цапля-Палец /С – Ц, Ц'
  ),
  mainBlock.textFieldObject(
    'detective_tongs_garlic',
    'Сыщик-Щипцы-Чеснок /С – Щ, Щ – Ц, Ч - С'
  ),
  mainBlock.textFieldObject('pike_things_bream', 'Щука-Вещи-Лещ /Щ'),
  mainBlock.textFieldObject(
    'beetle_soot_scissors',
    'Жук-Сажа-Ножницы /Ж, С – Ж, Ж - Ц'
  ),
  mainBlock.textFieldObject(
    'fur_coat_cat_reed_freckles',
    'Шуба-Кошка-Камыш-Веснушки /Ш, С - Ш'
  ),
];

reviewBlock.content = [
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    'whistling',
    'Свистящие:',
    [
      'Парасигматизм свистящих',
      { withText: true, checkboxText: 'Замена С на' },
      { withText: true, checkboxText: 'Замена Сь на' },
      { withText: true, checkboxText: 'Замена З на' },
      { withText: true, checkboxText: 'Замена Зь на' },
      { withText: true, checkboxText: 'Замена Ц на' },
      { withText: true, checkboxText: 'Замена Ч на' },

      'Призубный сигматизм',
      'Носовой сигматизм',
      'Шипящий сигматизм',
      'Боковой сигматизм',
      'Губно-зубное произношение свистящих',
      'Пропуск свистящего звука',
      'Смешение звуков',
      'Межзубный сигматизм',
    ]
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    'sizzling',
    'Шипящие:',
    [
      { withText: true, checkboxText: 'Замена Щ на' },
      { withText: true, checkboxText: 'Замена Ж на' },
      { withText: true, checkboxText: 'Замена Ш на' },

      'Призубный сигматизм',
      'Носовой сигматизм',
      'Шипящий сигматизм',
      'Боковой сигматизм',
      'Губно-зубное произношение шипящих',
      'Пропуск шипящего звука',
      'Смешение звуков',
    ]
  ),
];

export const fishGame = mainBlock.content;
export const fishGameReview = reviewBlock.content;
