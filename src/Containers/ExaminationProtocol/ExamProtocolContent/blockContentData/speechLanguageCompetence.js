import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('', []);
const reviewBlock = new BlockContent('', []);

mainBlock.content = [
  mainBlock.textFieldObject('what_is_your_name', 'Как тебя зовут?'),
  mainBlock.textFieldObject('how_old_are_you', 'Сколько тебе лет?'),
  mainBlock.textFieldObject(
    'what_is_your_moms_name_your_daddy',
    'Как зовут твою маму? Твоего папу?'
  ),
  mainBlock.textFieldObject('where_do_you_live', 'Где ты живешь?'),
  mainBlock.textFieldObject(
    'what_time_of_year_is_it',
    'Какое сейчас время года? Время суток?'
  ),
  mainBlock.textFieldObject(
    'what_did_you_do_yesterday',
    'Что ты делал вчера? Что делал утром? Что ты будешь делать завтра?'
  ),
  mainBlock.textFieldObject(
    'what_toys_do_you_have',
    'Какие у тебя есть игрушки?'
  ),
  mainBlock.textFieldObject(
    'what_kind_of_animals_do_you_know',
    'Каких животных ты знаешь?'
  ),
  mainBlock.textAreaFieldObject(
    'general_ideas_about_the_world_around_comment',
    'Комментарий'
  ),
];

reviewBlock.content = [
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'stock_of_knowledge_about_the_world_around',
    'Сформированность представлений об окружающем мире. Запас знаний:',
    [
      'Запас знаний об окружающем мире крайне низкий',
      'Запас знаний об окружающем мире ниже возрастной нормы',
      'Запас знаний об окружающем мире соответствует возрасту',
    ]
  ),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'in_a_time_space_situation',
    'В пространственно-временной ситуации:',
    ['Ориентируется', 'Не ориентируется']
  ),

  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'knows_how_old_time_of_year_what_time_of_day_it_is',
    'Знает сколько ему лет, какое сейчас время года, какое сейчас время суток, что он делал вчера, что делал утром, что он будет делать завтра',
    ['Да, знает', 'Нет, не знает']
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'image_i',
    'Образ «Я»',
    ['Сформирован', 'Не сформирован']
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'knows_his_name_the_name_of_his_parents_where_he_lives',
    'Знает, как его зовут, как зовут его родителей, где он живет',
    ['Да, знает', 'Нет, не знает']
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'somatognosis_understanding_your_own_body',
    'Соматогнозис: представление о собственном теле',
    ['Сформировано', 'Не сформировано']
  ),
  reviewBlock.radioOrCheckFieldObject(
    reviewBlock.fieldTypes.radio,
    'contact_with_the_child',
    'Контакт с ребенком:',
    ['Установлен', 'Не установлен']
  ),
  reviewBlock.textAreaFieldObject(
    'formation_of_ideas_about_the_world_around_comment',
    'Комментарий'
  ),
];

export const speechLanguageCompetence = mainBlock.content;
export const speechLanguageCompetenceReview = reviewBlock.content;
