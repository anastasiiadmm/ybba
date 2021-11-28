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
      { name: 'sibilant_parasigmatism', label: 'Парасигматизм свистящих' },
      { name: 'replacing_s_with', withText: true, checkboxText: 'Замена С на' },
      {
        name: 'replacing_s_soft_with',
        withText: true,
        checkboxText: 'Замена Сь на',
      },
      { name: 'replacing_z_with', withText: true, checkboxText: 'Замена З на' },
      {
        name: 'replacing_z_soft_with',
        withText: true,
        checkboxText: 'Замена Зь на',
      },
      { name: 'replacing_c_with', withText: true, checkboxText: 'Замена Ц на' },
      {
        name: 'replacing_ch_with',
        withText: true,
        checkboxText: 'Замена Ч на',
      },
      { name: 'prominent_sigmatism', label: 'Призубный сигматизм' },
      { name: 'nasal_sigmatism', label: 'Носовой сигматизм' },
      { name: 'hissing_sigmatism', label: 'Шипящий сигматизм' },
      { name: 'lateral_sigmatism', label: 'Боковой сигматизм' },
      {
        name: 'labiodental_pronunciation_of_whistling',
        label: 'Губно-зубное произношение свистящих',
      },
      { name: 'skip_whistling_sound', label: 'Пропуск свистящего звука' },
      { name: 'mixing_sounds', label: 'Смешение звуков' },
      { name: 'interdental_sigmatism', label: 'Межзубный сигматизм' },
    ]
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    'sizzling',
    'Шипящие:',
    [
      {
        name: 'replacing_shch_to',
        withText: true,
        checkboxText: 'Замена Щ на',
      },
      { name: 'replacing_zh_to', withText: true, checkboxText: 'Замена Ж на' },
      { name: 'replacing_sh_to', withText: true, checkboxText: 'Замена Ш на' },

      { name: 'pristine_sigmatism', label: 'Призубный сигматизм' },
      { name: 'hissing_nasal_sigmatism', label: 'Носовой сигматизм' },
      { name: 'hissing_sigmatism_two', label: 'Шипящий сигматизм' },
      { name: 'lateral_sigmatism_two', label: 'Боковой сигматизм' },
      {
        name: 'labiodental_pronunciation_of_sibilants',
        label: 'Губно-зубное произношение шипящих',
      },
      { name: 'skip_whistling_sound_two', label: 'Пропуск шипящего звука' },
      { name: 'mixing_sounds_two', label: 'Смешение звуков' },
    ]
  ),
];

export const fishGame = mainBlock.content;
export const fishGameReview = reviewBlock.content;
