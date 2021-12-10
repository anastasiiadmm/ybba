import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('game_ant_battle', []);
const reviewBlock = new BlockContent('game_ant_battle', []);

mainBlock.content = [
  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Статический праксис'),
  mainBlock.fieldObject(
    mainBlock.fieldTypes.text,
    mainBlock.nameWithParent('static_praxis_stand_on_one_leg_over_the_other'),
    'Постой на одной ноге, на другой (под счет до 4х)'
  ),
  mainBlock.fieldObject(
    mainBlock.fieldTypes.text,
    mainBlock.nameWithParent('static_praxis_get_up_on_tiptoe_wait'),
    'Поднимись на цыпочки, постой (под счет до 4х)'
  ),

  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Динамический праксис'),

  mainBlock.fieldObject(
    mainBlock.fieldTypes.text,
    mainBlock.nameWithParent('dynamic_praxis_jump_on_one_leg_the_other_two'),
    'Попрыгай на одной ноге, другой, двух (под счет до 5ти на каждую ногу'
  ),

  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Пространственный праксис'),

  mainBlock.fieldObject(
    mainBlock.fieldTypes.text,
    mainBlock.nameWithParent('spatial_praxis_turn_right_left'),
    'Повернись направо, налево'
  ),

  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Пальцевый праксис'),

  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Статический праксис'),

  mainBlock.fieldObject(
    mainBlock.fieldTypes.text,
    mainBlock.nameWithParent('show_v'),
    'Покажи «V» («зайку»)'
  ),

  mainBlock.fieldObject(
    mainBlock.fieldTypes.text,
    mainBlock.nameWithParent('show_the_cow'),
    'Покажи «корову»'
  ),

  mainBlock.boxTitle(mainBlock.fieldTypes.par, 'Динамический праксис'),

  mainBlock.fieldObject(
    mainBlock.fieldTypes.text,
    mainBlock.nameWithParent('show_the_bunny_the_cow_is_counted'),
    'Покажи «зайку» - «корову» под счет'
  ),
];

reviewBlock.content = [
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'basic_motor_skills',
    'Основные двигательные навыки:',
    ['Сформированы', 'Сформированы недостаточно', 'Не сформированы']
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'basic_motor_skills_part_two',
    '',
    ['Соответствуют возрасту', 'Не соответствуют возрасту']
  ),
  reviewBlock.boxTitle(
    mainBlock.fieldTypes.par,
    ' Нарушения первичной моторной функции: '
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'disturbances_in_tone',
    'Нарушения тонуса:',
    ['Спастичность', 'Гипотония', 'Дистония']
  ),
  reviewBlock.radioOrCheckFieldObject(reviewBlock.fieldTypes.checkbox, '', '', [
    { name: 'decrease_in_strength', label: 'Снижение силы' },
    {
      name: 'impaired_coordination_of_movement_ataxia',
      label: 'Нарушения координации движения (атаксия)',
    },
    {
      name: 'hand_coordination_crashes',
      label: 'Крушения согласованности действий рук',
    },
    {
      name: 'motor_shifting_difficulties',
      label: 'Трудности моторного переключения',
    },
  ]),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    '',
    'Нарушения отдельных аспектов сенсомоторной функции:',
    [
      { name: 'body_schema_disorders', label: 'Нарушения схемы тела' },
      {
        name: 'disorders_of_hand_eye_coordination',
        label: 'Нарушения зрительно-моторной координации',
      },
    ]
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.checkbox,
    '',
    'Содружественные движения (синкинезии): ',
    [
      { name: 'orolingual', label: 'Оролингвальные' },
      { name: 'opto_lingual', label: 'Оптолингвальные' },
    ]
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'motor_functions_of_hands_and_fingers',
    'Моторные функции кистей и пальцев рук:',
    [
      {
        label:
          'Пальцевый праксис сформирован. Воспроизвел пальцевую позу без затруднений',
        value: 'пальцевый праксис сформирован. без затруднений',
      },
      {
        label:
          'Пальцевый праксис сформирован. Воспроизвел пальцевую позу с затруднениями',
        value: 'пальцевый праксис сформирован. с затруднениями',
      },
      {
        label:
          'Пальцевый праксис не сформирован. Пальцевую позу не воспроизвел',
        value: 'пальцевый праксис сформирован не воспроизвел',
      },
    ]
  ),
];

export const generalAndFineMotorSkills = mainBlock.content;
export const generalAndFineMotorSkillsReview = reviewBlock.content;
