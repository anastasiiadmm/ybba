import { SpeechCardBlockContent } from '../blockContentCreation';

// Block 1
const speechComprehensionLevel = new SpeechCardBlockContent('', []);

speechComprehensionLevel.content = [
  speechComprehensionLevel.textFieldObject('speech_comprehension_level', ''),
];

//Block 2
const vocabularyFormationLevel = new SpeechCardBlockContent('', []);

vocabularyFormationLevel.content = [
  vocabularyFormationLevel.textFieldObject('level_of_vocabulary_formation', ''),
  vocabularyFormationLevel.textAreaFieldObject(
    'active_semantic_component_active_vocabulary',
    'Активный семантический компонент'
  ),
  vocabularyFormationLevel.textAreaFieldObject(
    'volume_vocabulary',
    'Объем словаря'
  ),
  vocabularyFormationLevel.textAreaFieldObject(
    'systemic_vocabulary_organization',
    'Системная организация словаря (ассоциативные связи)'
  ),
];

//Block 3

const grammaticalCompetenceFormationLevel = new SpeechCardBlockContent('', []);

grammaticalCompetenceFormationLevel.content = [
  grammaticalCompetenceFormationLevel.textFieldObject(
    'level_of_grammatical_competence_formation',
    ''
  ),

  grammaticalCompetenceFormationLevel.textAreaFieldObject(
    'inflectional_skills_and_abilities_part_one',
    'Словоизменительные навыки и умения'
  ),
  grammaticalCompetenceFormationLevel.textAreaFieldObject(
    'word_building_skills_and_abilities',
    'Словообразовательные навыки и умения'
  ),

  grammaticalCompetenceFormationLevel.textAreaFieldObject(
    'syntactic_skills_and_abilities',
    'Синтаксические навыки и умения'
  ),
];

//Block 4

const phoneticPhonologicalCompetenceFormationLevel = new SpeechCardBlockContent(
  '',
  []
);

phoneticPhonologicalCompetenceFormationLevel.content = [
  phoneticPhonologicalCompetenceFormationLevel.textAreaFieldObject(
    'level_of_formation_of_phonetic_phonological_competence',
    ''
  ),
  phoneticPhonologicalCompetenceFormationLevel.textAreaFieldObject(
    'state_of_phonemic_perception',
    'Состояние фонематического восприятия'
  ),
  phoneticPhonologicalCompetenceFormationLevel.textAreaFieldObject(
    'state_of_phonemic_hearing',
    'Состояние фонематического слуха'
  ),
  phoneticPhonologicalCompetenceFormationLevel.textAreaFieldObject(
    'formation_of_skills_of_sound_analysis_and_synthesis',
    'Сформированность навыков звукового анализа и синтеза'
  ),
  phoneticPhonologicalCompetenceFormationLevel.textAreaFieldObject(
    'syllabic_structure_of_a_word',
    'Слоговая структура слова'
  ),

  phoneticPhonologicalCompetenceFormationLevel.textAreaFieldObject(
    'sound_articulating_side_of_speech',
    'Звукопроизносительная сторона речи'
  ),
  phoneticPhonologicalCompetenceFormationLevel.textAreaFieldObject(
    'prosodic_side_of_speech_game_on_the_farm_part_three',
    'Просодическая сторона речи'
  ),
  phoneticPhonologicalCompetenceFormationLevel.textFieldObject(
    'voice',
    'Голос'
  ),
  phoneticPhonologicalCompetenceFormationLevel.textFieldObject(
    'smoothness_game_on_the_farm_part_three',
    'Плавность'
  ),
  phoneticPhonologicalCompetenceFormationLevel.textFieldObject(
    'pace_game_on_the_farm_part_three',
    'Темп'
  ),
  phoneticPhonologicalCompetenceFormationLevel.textFieldObject(
    'speech_game_on_the_farm_part_three',
    'Речь'
  ),
  phoneticPhonologicalCompetenceFormationLevel.textFieldObject(
    'breath_game_on_the_farm_part_three',
    'Дыхание'
  ),
  phoneticPhonologicalCompetenceFormationLevel.textFieldObject(
    'rhythm_game_on_the_farm_part_three',
    'Ритм'
  ),
  phoneticPhonologicalCompetenceFormationLevel.textFieldObject(
    'exhalation_force',
    'Сила выдоха'
  ),
  phoneticPhonologicalCompetenceFormationLevel.textFieldObject(
    'inspiratory_expiratory_differentiation',
    'Дифференцированность вдоха/выдоха и возможность управления'
  ),
];

export const speechAndLanguageCompetence = {
  speech_comprehension_level: speechComprehensionLevel.content,
  vocabulary_formation_level: vocabularyFormationLevel.content,
  phonetic_phonological_competence_formation_level:
    phoneticPhonologicalCompetenceFormationLevel.content,
  grammatical_competence_formation_level:
    grammaticalCompetenceFormationLevel.content,
};
