import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('farmGameOne', []);
const reviewBlock = new BlockContent('farmGameOne.review', []);

mainBlock.content = [
  mainBlock.textGroup([
    mainBlock.textFieldObject(
      'sandals_boots_socks_boots',
      'Босоножки, ботинки, носки, сапоги'
    ),
    mainBlock.textFieldObject('shoes_clothes', 'Обувь (одежда)'),
  ]),

  mainBlock.textGroup([
    mainBlock.textFieldObject(
      'carrot_apple_onion_cabbage',
      'Морковь, яблоко, лук, капустаги'
    ),
    mainBlock.textFieldObject('vegetables_fruits', 'Овощи (фрукты)'),
  ]),

  mainBlock.textGroup([
    mainBlock.textFieldObject(
      'table_chair_glass_sofa',
      'Стол, стул, стакан, диванги'
    ),
    mainBlock.textFieldObject('furniture_dishes', 'Мебель (посуда)'),
  ]),

  mainBlock.textGroup([
    mainBlock.textFieldObject(
      'fur_coat_jacket_coat_hat',
      'Шуба, куртка, пальто, шапкаги'
    ),
    mainBlock.textFieldObject('clothes_headwear', 'Одежда (голов. убор)'),
  ]),

  mainBlock.textGroup([
    mainBlock.textFieldObject(
      'doll_cubes_car_trolley',
      'Кукла, кубики, машинка, троллейбус'
    ),
    mainBlock.textFieldObject('toys_transport', 'Игрушки (транспорт)'),
  ]),

  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Детеныши животных'),

  mainBlock.textFieldObject('cat_kitten', 'Кошка – котенок'),
  mainBlock.textFieldObject('dog_puppy', 'Собака - щенок'),
  mainBlock.textFieldObject('cow_calf', 'Корова – теленок'),
  mainBlock.textFieldObject('pig_piglet', 'Свинья – поросенок'),

  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Глагольный словарь'),
  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Название действий'),

  mainBlock.textFieldObject('cat_meows', 'Кошка мяукает'),
  mainBlock.textFieldObject('dog_barks', 'Собака лает'),
  mainBlock.textFieldObject('cow_hums', 'Корова мычит'),
  mainBlock.textFieldObject('pig_grunts', 'Свинья хрюкает'),

  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Словарь признаков'),
  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Обследование антонимов'),

  mainBlock.textFieldObject('low_high_home', 'Низкий – Высокий (дом)'),
  mainBlock.textFieldObject('wide_narrow_belt', 'Широкий – Узкий (пояс)'),
  mainBlock.textFieldObject('', 'Большой – Маленький (кот на крыше)'),
  mainBlock.textFieldObject(
    'heavy_light_bucket_of_water_ball',
    'Тяжелый – Легкий (ведро с водой– шарик)'
  ),
  mainBlock.textFieldObject('clean_dirty_pig', 'Чистый – Грязный (поросенок)'),
  mainBlock.textFieldObject('slow_fast_snail', 'Медленный – Быстрый (улитка)'),
  mainBlock.textFieldObject('sad_cheerful_puppy', 'Грустный – Веселый (щенок)'),
  mainBlock.textFieldObject('dry_wet_grasshopper', 'Сухой – Мокрый (кузнечик)'),
  mainBlock.textFieldObject(
    'cold_hot_ice_cream_potatoes',
    'Холодный – Горячий (мороженое – картошка)'
  ),
];

reviewBlock.content = [
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'speech_comprehension_level',
    'Уровень понимания речи:',
    ['Нулевой', 'Ситуативный', 'Номинативный', 'Предикативный', 'Расчлененный']
  ),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    'presence_of_phenomenon_of_alienation',
    '',
    [{ label: 'наличие феномена отчуждения смысла слова' }]
  ),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'level_of_vocabulary_formation',
    'Уровень сформированности лексикона:',
    ['Соответствует возрастной норме', 'Не соответствует возрастной норме']
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    'active_semantic_component_active_vocabulary',
    'Активный семантический компонент (активный словарь):',
    [
      {
        label:
          'нарушение актуализации слов – нарушен выбор слова из семантического поля',
      },
      { label: 'наличие неологизмов' },
    ]
  ),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'subject_relation_of_a_word',
    'Предметная отнесенность слова:',
    ['Устойчивая', 'Неустойчивая']
  ),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'verbal_paraphasias',
    'Вербальные парафазии:',
    [
      'Литеральные',
      'Вербальные - смешение видовых признаков',
      'Вербальные – смешение признаков часть/тело',
      'Вербальные – замена названия предмета контекстным действием',
      'Вербальные – смешение по внешнему сходству',
    ]
  ),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'vocabulary_size',
    'Объем словаря:',
    [
      'Ограничен',
      'Резко ограничен',
      'Достаточный для осуществления полноценной коммуникации',
    ]
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'vocabulary_size_part_two',
    '',
    [
      'Очень мало "периферийных" слов даже из наиболее распространенных, прагматически ценных для этого возраста тематических групп',
      'Словарь преимущественно состоит из слов, обозначающих предметы, наблюдается дефицит глагольного сло¬варя, практически отсутствуют слова, обозначающие признаки и качества предметов. Словарь представлен небольшим количеством слов обиходно-бытовой тематики',
    ]
  ),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'systemic_vocabulary_organization',
    'Системная организация словаря:',
    [
      'Системная организация словаря находится на самом начальном этапе формирования; наблюдаются слабые ассоциативные связи, преобладают случайные, немотивированные ассоциации',
      'Организация словаря отличается бессистемностью, отсутствием мотивированных адекватных ассоциаций',
      'Системная организация словаря находится на уровне установления первичных тематически/ситуативно обусловленных связей, наблюдаются выраженные (незначительные) трудности установления родовидовых, антонимических и пр. отношений между словами, входящими в индивидуальный словарный запас; в лексиконе много слов, значение которых усвоено только на номинативном уровне',
      'Системная организация словаря отличается большим количеством и разнообразием смысловых и формальных связей; в лексиконе преобладают слова, значение которых усвоено на понятийном уровне',
    ]
  ),
  reviewBlock.textAreaFieldObject('expert_comment', 'Комментарий'),
];

export const farmGameOne = mainBlock.content;
export const farmGameOneReview = reviewBlock.content;
