import { SpeechCardBlockContent } from '../blockContentCreation';

// Block 1
const articulationApparatusStructure = new SpeechCardBlockContent(
  'stateOfTheSpeechApparatus.articulation_apparatus_structure_game_how_the_mouse_could',
  []
);

articulationApparatusStructure.content = [
  articulationApparatusStructure.textAreaFieldObject(null, ''),
];

//Block 2
const articulationApparatusCondition = new SpeechCardBlockContent(
  'stateOfTheSpeechApparatus.articulation_apparatus_condition',
  []
);

articulationApparatusCondition.content = [
  articulationApparatusCondition.textAreaFieldObject(null, ''),
  articulationApparatusCondition.textFieldObject(
    'oral_praxis',
    'Оральный праксис'
  ),
  articulationApparatusCondition.textFieldObject(
    'articulatory_praxis',
    'Артикуляционный праксис'
  ),
];

export const stateOfTheSpeechApparatus = {
  articulation_apparatus_structure: articulationApparatusStructure.content,
  articulation_apparatus_condition: articulationApparatusCondition.content,
};
