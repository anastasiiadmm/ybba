import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('bilateralMotorCoordination', []);

mainBlock.content = [
  mainBlock.questionObject(
    mainBlock.fieldTypes.question,
    'imaginary_phone',
    '— Возьми воображаемый телефон в руку и приложи к ухо',
    [
      {
        name: 'ear',
        options: ['Правое', 'Левое'],
        description: 'Ведущее ухо:',
      },
      {
        name: 'hand',
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
        name: 'hand',
        options: ['Правая', 'Левая'],
        description: 'Ведущая рука:',
      },
      {
        name: 'eye',
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
        name: 'leg',
        options: ['Правая', 'Левая'],
        description: 'Ведущая нога:',
      },
    ]
  ),
  mainBlock.radioOrCheckFieldObject(
    mainBlock.fieldTypes.radio,
    'review',
    'Варианты заключения:',
    [
      'Левшество, все 4 показателя совпадают',
      'Правшество, все 4 показателя совпадают',
      'Дисбаланс межполушарных связей',
    ]
  ),
];

export const bilateralMotorCoordination = mainBlock.content;
