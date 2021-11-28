import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('psychologicalBasisOfSpeechMotivation', []);
const reviewBlock = new BlockContent(
  'psychologicalBasisOfSpeechMotivation.review',
  []
);

mainBlock.content = [
  mainBlock.fieldObject(mainBlock.fieldTypes.text, 'fatigue', 'Утомляемость'),
  mainBlock.fieldObject(mainBlock.fieldTypes.text, 'contact', 'Контактность'),
  mainBlock.fieldObject(
    mainBlock.fieldTypes.text,
    'working_capacity',
    'Работоспособность'
  ),
  mainBlock.fieldObject(mainBlock.fieldTypes.text, 'motivation', 'Мотивация'),
  mainBlock.fieldObject(mainBlock.fieldTypes.text, 'interest', 'Интерес'),
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
