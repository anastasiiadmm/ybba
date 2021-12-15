import { SpeechCardBlockContent } from '../blockContentCreation';

// Main Block

const mainBlock = new SpeechCardBlockContent('', []);

mainBlock.content = [
  mainBlock.textAreaFieldObject(
    'basic_motor_skills_and_state_of_coordinating_sphere',
    'Основные двигательные навыки и состояние координаторной сферы'
  ),
  mainBlock.textAreaFieldObject(
    'postural_control_of_calm_state',
    'Постуральный контроль спокойного состояния'
  ),
  mainBlock.textFieldObject(
    'bilateral_motor_coordination',
    'Билатеральная моторная координация'
  ),
  mainBlock.textFieldObject('leading_ear', 'Ведущее ухо'),
  mainBlock.textFieldObject('leading_hand', 'Ведущая рука'),
  mainBlock.textFieldObject('leading_eye', 'Ведущий глаз'),
  mainBlock.textFieldObject('leading_leg', 'Ведущая нога'),
  mainBlock.textFieldObject(
    'formation_of_motor_imitation',
    'Сформированность моторной имитации'
  ),
];

// Block 1
const motor_functions_of_the_hands_and_fingers = new SpeechCardBlockContent(
  '',
  []
);

motor_functions_of_the_hands_and_fingers.content = [
  motor_functions_of_the_hands_and_fingers.textAreaFieldObject(
    'motor_functions_of_hands_and_fingers',
    ''
  ),
];

export const motorDevelopment = {
  mainBlock: mainBlock.content,
  motor_functions_of_the_hands_and_fingers:
    motor_functions_of_the_hands_and_fingers.content,
};
