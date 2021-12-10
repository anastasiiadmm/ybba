import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('', []);

mainBlock.content = [
  mainBlock.questionObject(
    mainBlock.fieldTypes.question,
    '',
    '— Возьми воображаемый телефон в руку и приложи к ухо',
    [
      {
        name: 'leading_ear_phone',
        options: [
          { label: 'Правое', value: 'правое ухо' },
          { label: 'Левое', value: 'левое ухо' },
        ],
        description: 'Ведущее ухо:',
      },
      {
        name: 'leading_hand_phone',
        options: [
          { label: 'Правая', value: 'правая рука' },
          { label: 'Левая', value: 'левая рука' },
        ],
        description: 'Ведущая рука:',
      },
    ]
  ),
  mainBlock.questionObject(
    mainBlock.fieldTypes.question,
    '',
    '— Посмотри в воображаемую подзорную трубу',
    [
      {
        name: 'leading_hand_spyglass',
        options: [
          { label: 'Правая', value: 'правая рука' },
          { label: 'Левая', value: 'левая рука' },
        ],
        description: 'Ведущая рука:',
      },
    ]
  ),
  mainBlock.questionObject(
    mainBlock.fieldTypes.question,
    '',
    '— Ударь ногой по воображаемому мячу',
    [
      {
        name: 'leading_leg_ball',
        options: [
          { label: 'Правая', value: 'правая нога' },
          { label: 'Левая', value: 'левая нога' },
        ],
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
