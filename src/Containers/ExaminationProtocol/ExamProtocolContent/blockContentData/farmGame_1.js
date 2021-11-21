import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('farmGameOne', []);
const reviewBlock = new BlockContent('farmGameOne.review', []);

mainBlock.content = [
  mainBlock.textGroup([
    mainBlock.textFieldObject(
      'boots_socks',
      'Босоножки, ботинки, носки, сапоги'
    ),
    mainBlock.textFieldObject('shoes_clothes', 'Обувь (одежда)'),
  ]),

  mainBlock.textGroup([
    mainBlock.textFieldObject(
      'carrot_apple',
      'Морковь, яблоко, лук, капустаги'
    ),
    mainBlock.textFieldObject('vagetables_fruit', 'Овощи (фрукты)'),
  ]),

  mainBlock.textGroup([
    mainBlock.textFieldObject('table_chair', 'Стол, стул, стакан, диванги'),
    mainBlock.textFieldObject('furniture_dishes', 'Мебель (посуда)'),
  ]),

  mainBlock.textGroup([
    mainBlock.textFieldObject('coat', 'Шуба, куртка, пальто, шапкаги'),
    mainBlock.textFieldObject('clothes_hats', 'Одежда (голов. убор)'),
  ]),

  mainBlock.textGroup([
    mainBlock.textFieldObject(
      'doll_cubes',
      'Кукла, кубики, машинка, троллейбус'
    ),
    mainBlock.textFieldObject('toys_transport', 'Игрушки (транспорт)'),
  ]),

  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Детеныши животных'),

  mainBlock.textFieldObject('animal_children.cat', 'Кошка – котенок'),
  mainBlock.textFieldObject('animal_children.dog', 'Собака - щенок'),
  mainBlock.textFieldObject('animal_children.cow', 'Корова – теленок'),
  mainBlock.textFieldObject('animal_children.pig', 'Свинья – поросенок'),

  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Глагольный словарь'),
  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Название действий'),

  mainBlock.textFieldObject('animal_sounds.cat', 'Кошка мяукает'),
  mainBlock.textFieldObject('animal_sounds.dog', 'Собака лает'),
  mainBlock.textFieldObject('animal_sounds.cow', 'Корова мычит'),
  mainBlock.textFieldObject('animal_sounds.pig', 'Свинья хрюкает'),

  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Словарь признаков'),
  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Обследование антонимов'),

  mainBlock.textFieldObject(
    'opposite_adjectives.low_high',
    'Низкий – Высокий (дом)'
  ),
  mainBlock.textFieldObject(
    'opposite_adjectives.wide_narrow',
    'Широкий – Узкий (пояс)'
  ),
  mainBlock.textFieldObject(
    'opposite_adjectives.big_small',
    'Большой – Маленький (кот на крыше)'
  ),
  mainBlock.textFieldObject(
    'opposite_adjectives.heavy_light',
    'Тяжелый – Легкий (ведро с водой– шарик)'
  ),
  mainBlock.textFieldObject(
    'opposite_adjectives.clean_dirty',
    'Чистый – Грязный (поросенок)'
  ),
  mainBlock.textFieldObject(
    'opposite_adjectives.slow_fast',
    'Медленный – Быстрый (улитка)'
  ),
  mainBlock.textFieldObject(
    'opposite_adjectives.sad_happy',
    'Грустный – Веселый (щенок)'
  ),
  mainBlock.textFieldObject(
    'opposite_adjectives.dry_wet',
    'Сухой – Мокрый (кузнечик)'
  ),
  mainBlock.textFieldObject(
    'opposite_adjectives.cold_hot',
    'Холодный – Горячий (мороженое – картошка)'
  ),
];

reviewBlock.content = [
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'speech_undestanding_level',
    'Уровень понимания речи:',
    ['Нулевой', 'Ситуативный', 'Номинативный', 'Предикативный', 'Расчлененный']
  ),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    'word_meaning_alienation',
    '',
    ['наличие феномена отчуждения смысла слова']
  ),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'lexicon_level',
    'Уровень сформированности лексикона:',
    ['Соответствует возрастной норме', 'Не соответствует возрастной норме']
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    'semantic_component',
    'Активный семантический компонент (активный словарь):',
    [
      'нарушение актуализации слов – нарушен выбор слова из семантического поля',
      'наличие неологизмов',
    ]
  ),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'word_object_relatedness',
    'Предметная отнесенность слова:',
    ['Устойчивая', 'Неустойчивая']
  ),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'verbal_paraphrasias',
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
    'vocabulary',
    'Объем словаря:',
    [
      'Ограничен',
      'Резко ограничен',
      'Достаточный для осуществления полноценной коммуникации',
      'Очень мало "периферийных" слов даже из наиболее распространенных, прагматически ценных для этого возраста тематических групп',
      'Словарь преимущественно состоит из слов, обозначающих предметы, наблюдается дефицит глагольного сло¬варя, практически отсутствуют слова, обозначающие признаки и качества предметов. Словарь представлен небольшим количеством слов обиходно-бытовой тематики',
    ]
  ),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'vocabulary_organization_system',
    'Системная организация словаря:',
    [
      'Системная организация словаря находится на самом начальном этапе формирования; наблюдаются слабые ассоциативные связи, преобладают случайные, немотивированные ассоциации',
      'Организация словаря отличается бессистемностью, отсутствием мотивированных адекватных ассоциаций',
      'Системная организация словаря находится на уровне установления первичных тематически/ситуативно обусловленных связей, наблюдаются выраженные (незначительные) трудности установления родовидовых, антонимических и пр. отношений между словами, входящими в индивидуальный словарный запас; в лексиконе много слов, значение которых усвоено только на номинативном уровне',
      'Системная организация словаря отличается большим количеством и разнообразием смысловых и формальных связей; в лексиконе преобладают слова, значение которых усвоено на понятийном уровне',
    ]
  ),
  reviewBlock.textAreaFieldObject('specialist-comment', 'Комментарий'),
];

export const farmGameOne = mainBlock.content;
export const farmGameOneReview = reviewBlock.content;
