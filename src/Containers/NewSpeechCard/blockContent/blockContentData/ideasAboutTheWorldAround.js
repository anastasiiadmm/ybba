import { SpeechCardBlockContent } from '../blockContentCreation';

const mainBlock = new SpeechCardBlockContent(
  'ideas_about_the_world_around',
  []
);

mainBlock.content = [
  mainBlock.textAreaFieldObject('formation_of_ideas_about_world_around', ''),
  mainBlock.textAreaFieldObject(
    'in_a_time_space_situation',
    'В пространственно-временной ситуации '
  ),
];

export const ideasAboutTheWorldAround = mainBlock.content;
