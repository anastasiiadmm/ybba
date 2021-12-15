import { SpeechCardBlockContent } from '../blockContentCreation';

const mainBlock = new SpeechCardBlockContent('', []);

mainBlock.content = [
  mainBlock.textAreaFieldObject('formation_of_ideas_about_world_around', ''),
  mainBlock.textAreaFieldObject(
    'in_a_time_space_situation',
    'В пространственно-временной ситуации '
  ),
];

export const ideasAboutTheWorldAround = mainBlock.content;
