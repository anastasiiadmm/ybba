import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('articulationApparatusStructureReview', []);

mainBlock.content = [
  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'lips',
    'Губы:',
    ['Тонкие', 'Полные', 'Несмыкание губ']
  ),

  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Зубо-челюстные аномалии:'),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'dental_anomalies.malocclusion_disorders',
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
    'dental_anomalies.incorrect_teeth_position',
    'Неправильное положение зубов:',
    ['Адентия', 'Диастема', 'Сверхкомплектные зубы']
  ),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'dental_anomalies.teeth_position_change',
    'Изменение формы зубов:',
    ['Макродентия', 'Микродентия']
  ),

  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Аномалии языка:'),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'tongue_abnormalities.tongue_size_change',
    'Изменение размера языка:',
    ['Макроглоссия', 'Микроглоссия']
  ),
  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'tongue_abnormalities.tongue_deviation',
    'Девиация языка:',
    ['Влево', 'Вправо']
  ),
  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.checkbox,
    'tongue_abnormalities.tongue_deviation.extra',
    '',
    ['Раздвоение языка', 'Укороченная подъязычная складка']
  ),
  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'lip_frenulum_abnormalities',
    'Аномалии уздечек верхней/нижней губы:',
    ['Укорочение', 'Увеличение']
  ),

  mainBlock.boxTitle(
    mainBlock.fieldTypes.par,
    'Пороки развития челюстно-лицевой области и системные аномалии мягких тканей и костей лица:'
  ),

  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'maxillofacial_region_and_systemic_anomalies_soft_tissues_and_bones.cleft',
    'Расщелина:',
    [
      'Губы',
      'Твердого и мягкого нёба',
      'Альвеолярного отростка нёба',
      'Скрытая',
    ]
  ),
  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.checkbox,
    'maxillofacial_region_and_systemic_anomalies_soft_tissues_and_bones.cleft.extra',
    '',
    ['Готическое нёбо', 'Деформации челюсти']
  ),
];

export const articulationApparatusStructureReview = mainBlock.content;
