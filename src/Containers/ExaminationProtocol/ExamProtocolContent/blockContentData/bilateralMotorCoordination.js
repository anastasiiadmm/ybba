import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('bilateralMotorCoordination', []);

mainBlock.content = [
  mainBlock.questionObject(
    mainBlock.fieldTypes.question,
    'imaginary_phone',
    '— Возьми воображаемый телефон в руку и приложи к ухо',
    [
      {
        name: 'leading_ear_phone',
        options: ['Правое', 'Левое'],
        description: 'Ведущее ухо:',
      },
      {
        name: 'leading_hand_phone',
        options: ['Правая', 'Левая'],
        description: 'Ведущая рука:',
      },
    ]
  ),
  mainBlock.questionObject(
    mainBlock.fieldTypes.question,
    'imaginary_binocular',
    '— Посмотри в воображаемую подзорную трубу',
    [
      {
        name: 'leading_hand_spyglass',
        options: ['Правая', 'Левая'],
        description: 'Ведущая рука:',
      },
      {
        name: 'leading_eye_spyglass',
        options: ['Правый', 'Левый'],
        description: 'Ведущая рука:',
      },
    ]
  ),
  mainBlock.questionObject(
    mainBlock.fieldTypes.question,
    'imaginary_kick',
    '— Ударь ногой по воображаемому мячу',
    [
      {
        name: 'leading_leg_ball',
        options: ['Правая', 'Левая'],
        description: 'Ведущая нога:',
      },
    ]
  ),
  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'conclusion_options',
    'Варианты заключения:',
    [
      'Левшество, все 4 показателя совпадают',
      'Правшество, все 4 показателя совпадают',
      'Дисбаланс межполушарных связей',
    ]
  ),
];

export const bilateralMotorCoordination = mainBlock.content;
