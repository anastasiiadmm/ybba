import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('game_on_the_farm_part_three', []);
const reviewBlock = new BlockContent('game_on_the_farm_part_three', []);

mainBlock.content = [
  mainBlock.textFieldObject('fatigue', 'Утомляемость'),
  mainBlock.textFieldObject('contact', 'Контактность'),
  mainBlock.textFieldObject('working_capacity', 'Работоспособность'),
  mainBlock.textFieldObject('motivation', 'Мотивация'),
  mainBlock.textFieldObject('interest', 'Интерес'),
];

reviewBlock.content = [
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'options_for_confinement_psychological_basis',
    '',
    [
      'Крайне низкая познавательная активность и мотивация к предметной, предметно-игровой деятельности',
      'Низкая познавательная активность и мотивация к различным видам деятельности, наблюдается немотивированная избирательность познавательной активности',
      'Отмечается некоторая недостаточность познавательной активности и мотивации к предметной деятельности',
      'Ярко выраженная познавательная активность и мотивация к предметной, предметно-игровой деятельности',
    ]
  ),
];

export const psychologicalBasisOfSpeechMotivation = mainBlock.content;
export const psychologicalBasisOfSpeechMotivationReview = reviewBlock.content;
