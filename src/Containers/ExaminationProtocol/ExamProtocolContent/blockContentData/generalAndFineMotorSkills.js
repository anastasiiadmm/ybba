import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('generalAndFineMotorSkills', []);
const reviewBlock = new BlockContent('generalAndFineMotorSkills.review', []);

mainBlock.content = [
  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Статический праксис'),
  mainBlock.fieldObject(
    mainBlock.fieldTypes.text,
    'stand_on_one_leg',
    'Постой на одной ноге, на другой (под счет до 4х)'
  ),
  mainBlock.fieldObject(
    mainBlock.fieldTypes.text,
    'stand_on_your_toes',
    'Поднимись на цыпочки, постой (под счет до 4х)'
  ),

  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Динамический праксис'),

  mainBlock.fieldObject(
    mainBlock.fieldTypes.text,
    'jump_on_one_leg',
    'Попрыгай на одной ноге, другой, двух (под счет до 5ти на каждую ногу'
  ),

  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Пространственный праксис'),

  mainBlock.fieldObject(
    mainBlock.fieldTypes.text,
    'turn',
    'Повернись направо, налево'
  ),

  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Пальцевый праксис'),

  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Статический праксис'),

  mainBlock.fieldObject(
    mainBlock.fieldTypes.text,
    'show_bunny',
    'Покажи «V» («зайку»)'
  ),

  mainBlock.fieldObject(
    mainBlock.fieldTypes.text,
    'show_cow',
    'Покажи «корову»'
  ),

  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Динамический праксис'),

  mainBlock.fieldObject(
    mainBlock.fieldTypes.text,
    'show_bunny_and_cow',
    'Покажи «зайку» - «корову» под счет'
  ),
];

reviewBlock.content = [
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'basic_motor_skills.main',
    'Основные двигательные навыки:',
    ['Сформированы', 'Сформированы недостаточно', 'Не сформированы']
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'basic_motor_skills.extra',
    '',
    ['Соответствуют возрасту', 'Не соответствуют возрасту']
  ),
  reviewBlock.boxTitle(
    mainBlock.fieldTypes.par,
    ' Нарушения первичной моторной функции: '
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'primary_motor_function_disorders.tone_disorders',
    'Нарушения тонуса:',
    ['Cпастичность', 'Гипотония', 'Дистония']
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    'primary_motor_function_disorders.tone_disorders.extra',
    '',
    [
      'Снижение силы',
      'Нарушения координации движения (атаксия)',
      'Крушения согласованности действий рук',
      'Трудности моторного переключения',
    ]
  ),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    'primary_motor_function_disorders.aspects_of_sensorimotor_function_disorders',
    'Нарушения отдельных аспектов сенсомоторной функции:',
    ['Нарушения схемы тела', 'Нарушения зрительно-моторной координации']
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    'primary_motor_function_disorders.synkinesis',
    'Содружественные движения (синкинезии): ',
    ['Оролингвальные', 'Оптолингвальные']
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'primary_motor_function_disorders.hands_and_fingers_motor_functions',
    'Моторные функции кистей и пальцев рук:',
    [
      'Пальцевый праксис сформирован. Воспроизвел пальцевую позу без затруднений',
      'Пальцевый праксис сформирован. Воспроизвел пальцевую позу с затруднениями',
      'Пальцевый праксис не сформирован. Пальцевую позу не воспроизвел',
    ]
  ),
];

export const generalAndFineMotorSkills = mainBlock.content;
export const generalAndFineMotorSkillsReview = reviewBlock.content;
