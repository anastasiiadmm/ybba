import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('speechLanguageCompetence', []);
const reviewBlock = new BlockContent('speechLanguageCompetence.review', []);

mainBlock.content = [
  mainBlock.textFieldObject('whats_your_name', 'Как тебя зовут?'),
  mainBlock.textFieldObject('how_old_are_you', 'Сколько тебе лет?'),
  mainBlock.textFieldObject(
    'whats_your_mothers_name',
    'Как зовут твою маму? Твоего папу?'
  ),
  mainBlock.textFieldObject('where_do_you_live', 'Где ты живешь?'),
  mainBlock.textFieldObject(
    'whats_the_season',
    'Какое сейчас время года? Время суток?'
  ),
  mainBlock.textFieldObject(
    'what_did_you_do',
    'Что ты делал вчера? Что делал утром? Что ты будешь делать завтра?'
  ),
  mainBlock.textFieldObject(
    'what_toys_do_you_have',
    'Какие у тебя есть игрушки?'
  ),
  mainBlock.textFieldObject(
    'what_animals_do_you_know',
    'Каких животных ты знаешь?'
  ),
  mainBlock.textAreaFieldObject('specialist_comment', 'Комментарий'),
];

reviewBlock.content = [
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'knowledge-stock',
    'Сформированность представлений об окружающем мире. Запас знаний:',
    [
      'Запас знаний об окружающем мире крайне низкий',
      'Запас знаний об окружающем мире ниже возрастной нормы',
      'Запас знаний об окружающем мире соответствует возрасту',
    ]
  ),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'orientation',
    'В пространственно-временной ситуации:',
    ['Ориентируется', 'Не ориентируется']
  ),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'knowledge-general',
    'Знает сколько ему лет, какое сейчас время года, какое сейчас время суток, что он делал вчера, что делал утром, что он будет делать завтра',
    ['Да, знает', 'Нет, не знает']
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'self-image',
    'Образ «Я»',
    ['Сформирован', 'Не сформирован']
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'knowledge-names',
    'Знает, как его зовут, как зовут его родителей, где он живет',
    ['Да, знает', 'Нет, не знает']
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'somatognosis',
    'Соматогнозис: представление о собственном теле',
    ['Сформировано', 'Не сформировано']
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'contact',
    'Контакт с ребенком:',
    ['Установлен', 'Не установлен']
  ),
  reviewBlock.textAreaFieldObject('specialist-comment', 'Комментарий'),
];

export const speechLanguageCompetence = mainBlock.content;
export const speechLanguageCompetenceReview = reviewBlock.content;
