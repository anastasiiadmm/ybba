import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('game_ant_battle', []);

mainBlock.content = [
  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'lips',
    'Губы:',
    [
      { label: 'Тонкие', value: 'тонкие губы' },
      { label: 'Полные', value: 'полные губы' },
      { label: 'Несмыкание губ', value: 'несмыкание губ' },
    ]
  ),

  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Зубо-челюстные аномалии:'),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'malocclusion',
    'Нарушения прикуса:',
    [
      'Прогнатия',
      'Прогения',
      'Глубокий прикус',
      'Открытый прикус',
      'Перекрестный прикус',
    ]
  ),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'incorrect_position_of_teeth',
    'Неправильное положение зубов:',
    ['Адентия', 'Диастема', 'Сверхкомплектные зубы']
  ),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'tooth_reshaping',
    'Изменение формы зубов:',
    ['Макродентия', 'Микродентия']
  ),

  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Аномалии языка:'),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'changing_size_of_tongue',
    'Изменение размера языка:',
    ['Макроглоссия', 'Микроглоссия']
  ),
  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'deviation_of_tongue',
    'Девиация языка:',
    ['Влево', 'Вправо']
  ),
  mainBlock.radioOrCheckFieldObject(mainBlock.fieldTypes.checkbox, '', '', [
    { name: 'split_tongue', label: 'Раздвоение языка' },
    { name: 'shortened_hyoid_fold', label: 'Укороченная подъязычная складка' },
  ]),
  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'anomalies_of_frenum_of_upper_lower_lip',
    'Аномалии уздечек верхней/нижней губы:',
    ['Укорочение', 'Увеличение']
  ),

  mainBlock.boxTitle(
    mainBlock.fieldTypes.par,
    'Пороки развития челюстно-лицевой области и системные аномалии мягких тканей и костей лица:'
  ),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'cleft',
    'Расщелина:',
    [
      'Губы',
      'Твердого и мягкого нёба',
      'Альвеолярного отростка нёба',
      'Скрытая',
    ]
  ),
  mainBlock.radioOrCheckFieldObject(mainBlock.fieldTypes.checkbox, '', '', [
    { name: 'gothic_palate', label: 'Готическое нёбо' },
    { name: 'jaw_deformities', label: 'Деформации челюсти' },
  ]),
];

export const articulationApparatusStructureReview = mainBlock.content;
