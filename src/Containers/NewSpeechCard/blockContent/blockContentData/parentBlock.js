import { SpeechCardBlockContent } from '../blockContentCreation';

const mainBlock = new SpeechCardBlockContent('parentBlock', []);

mainBlock.content = [
  mainBlock.textFieldObject(
    'child_full_name',
    'Фамилия, имя ребенка',
    'Иван Климов'
  ),
  mainBlock.textFieldObject(
    'child_date_of_birth',
    'Дата рождения/Возраст',
    '12 мая 2016'
  ),
  mainBlock.textAreaFieldObject('parents', 'Родители (законные представители)'),
  mainBlock.textAreaFieldObject(
    'main_complaints_from_parents',
    'Основные жалобы родителей'
  ),
  mainBlock.textAreaFieldObject(
    'for_what_purpose_did_you_turn_to_a_speech_therapist',
    'С какой целью обратились к логопеду'
  ),
];

export const parentBlock = mainBlock.content;
