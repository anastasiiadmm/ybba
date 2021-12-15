import { SpeechCardBlockContent } from '../blockContentCreation';

const mainBlock = new SpeechCardBlockContent('', []);

mainBlock.content = [
  mainBlock.textAreaFieldObject(
    'understanding_the_text_game_how_the_mouse_could_not_sleep',
    'Понимание текста'
  ),
  mainBlock.textAreaFieldObject(
    'text_production_game_how_the_mouse_could_not_sleep',
    'Продуцирование текста'
  ),
  mainBlock.textAreaFieldObject(
    'reproduction_of_text_game_how_the_mouse_could_not_sleep',
    'Репродуцирование текста'
  ),
];

export const storyRetelling = mainBlock.content;
