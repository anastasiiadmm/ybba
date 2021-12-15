import { SpeechCardBlockContent } from '../blockContentCreation';

// Block 1
const articulationApparatusStructure = new SpeechCardBlockContent('', []);

articulationApparatusStructure.content = [
  articulationApparatusStructure.textAreaFieldObject(
    'articulation_apparatus_structure_game_how_the_mouse_could',
    ''
  ),
];

//Block 2
const articulationApparatusCondition = new SpeechCardBlockContent('', []);

articulationApparatusCondition.content = [
  articulationApparatusCondition.textAreaFieldObject(
    'articulation_apparatus_structure',
    ''
  ),
  articulationApparatusCondition.textFieldObject(
    'oral_praxis',
    'Оральный праксис ---> заполняется логопедом самостоятельно'
  ),
  articulationApparatusCondition.textFieldObject(
    'articulatory_praxis',
    'Артикуляционный праксис ---> заполняется логопедом самостоятельно'
  ),
];

export const stateOfTheSpeechApparatus = {
  articulation_apparatus_structure: articulationApparatusStructure.content,
  articulation_apparatus_condition: articulationApparatusCondition.content,
};
