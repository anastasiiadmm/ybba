import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('farmGameTwo', []);
const reviewBlock = new BlockContent('farmGameTwo.review', []);

mainBlock.content = [
  mainBlock.boxTitle(
    mainBlock.fieldTypes.par,
    'Образование уменьшительно-ласкательных форм существительных '
  ),

  mainBlock.textFieldObject('house', 'Дом – Домик'),
  mainBlock.textFieldObject('bucket', 'Ведро – Ведерко'),
  mainBlock.textFieldObject('tree', 'Дерево - Деревце'),

  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Словоизменение'),

  mainBlock.boxTitle(
    mainBlock.fieldTypes.par,
    'Употребление падежных конструкций. '
  ),

  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Предлоги'),

  mainBlock.textGroup([
    mainBlock.textFieldObject('at_home', 'У дома'),
    mainBlock.textFieldObject('behind_a_tree', 'За деревом'),
  ]),

  mainBlock.textGroup([
    mainBlock.textFieldObject('on_the_roof', 'На крыше'),
    mainBlock.textFieldObject('to_the_right_of_the_kennel', 'Справа от конуры'),
  ]),

  mainBlock.textGroup([
    mainBlock.textFieldObject(
      'on_the_branch_above_misha',
      'На ветке над Мишей'
    ),
    mainBlock.textFieldObject('to_the_left_of_the_tree', 'Слева от дерева'),
  ]),

  mainBlock.textGroup([
    mainBlock.textFieldObject('under_the_boot', 'Под ботинком'),
    mainBlock.textFieldObject(
      'peeps_out_from_behind_Misha',
      'Выглядывает из-за Мишы'
    ),
  ]),
  mainBlock.textGroup([
    mainBlock.textFieldObject('in_front_of_the_trough', 'Перед корытом'),
    mainBlock.textFieldObject('misha_has_a_hood', 'У Мишы в капюшоне'),
  ]),
];

reviewBlock.content = [
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'level_of_grammatical_competence_formation',
    'Уровень сформированности грамматической компетенции: ',
    [
      'Соответствует возрастной норме ',
      'Ниже возрастной нормы',
      'Значительно ниже возрастной нормы',
    ]
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'inflectional_skills_and_abilities_part_one',
    'Словоизменительные навыки и умения:',
    [
      'На самой начальной стадии формирования; наблюдаются выраженные трудности усвоения словоизменительной системы языка, в речи присутствует большое количество морфемных (формообразовательных) аграмматизмов; усвоены только наиболее продуктивные словоизменительные модели языка',
      'В стадии формирования, характерной для речи детей более младшего возраста; наблюдаются трудности усвоения нерегулярных словоизменительных моделей',
      'Сформированы на уровне, соответствующем данной возрастной группе; в речи наблюдается незначительное количество словоизменительных ошибок (в основном при непродуктивном словоизменении)',
      'Словоизменительные навыки и умения сформированы',
    ]
  ),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'word_building_skills_and_abilities',
    'Словообразовательные навыки и умения:',
    [
      'Словообразовательная деятельность не сформирована; морфологическое членение слова недоступно; наблюдаются выраженные трудности категоризации семантически значимых морфем; в речи присутствует большое количество словообразовательных ошибок',
      'Словообразовательная деятельность находится на самой начальной стадии формирования; усвоены продуктивные словообразовательные модели; в речи допускаются ошибки в словах, образованных по менее продуктивным и нерегулярным моделям',
      'Словообразовательная деятельность сформирована на уровне, позволяющем осуществлять коммуникацию, в речи наблюдаются незначительные трудности усвоения нерегулярных словообразовательных моделей',
      'Словообразовательная деятельность сформирована',
    ]
  ),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'inflectional_skills_and_abilities_part_two',
    'Синтаксические навыки и умения:',
    [
      'Синтаксические навыки сформированы на самом элементарном уровне, в речи присутствуют простые нераспространенные предложения, понимание смысла синтаксических конструкций более сложной структуры затруднено; предикативная часть многих самых элементарных конструкций отсутствует',
      'Синтаксические навыки сформированы на уровне, соответствующем более младшей возрастной группе (ниже возрастного эталона); наблюдаются выраженные трудности построения распространенных в языке синтаксических конструкций (пропуск предлогов, информативно значимых частей), ошибки согласования и управления, недоступно понимание логико-грамматически',
      'Синтаксические навыки в целом сформированы, при построении регулярных синтаксических конструкций соблюдается соответствие формы и содержания, в речи допускаются отдельные недочеты при построении сложносочиненных предложений с причинно-следственной или временной связью, вариативные возможности построения конструкций различного вида на очень низком уровне',
      'Синтаксические навыки и умения сформированы, в речи наблюдаются многообразие синтаксических конструкций, вариативность их применения, ребенок демонстрирует трансформационные возможности при оперировании синтаксическим материалом',
    ]
  ),

  reviewBlock.textAreaFieldObject('expert_comment', 'Комментарий'),
];

export const farmGameTwo = mainBlock.content;
export const farmGameTwoReview = reviewBlock.content;
