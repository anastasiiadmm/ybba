import { SpeechCardBlockContent } from '../blockContentCreation';

// Block 1
const speechComprehensionLevel = new SpeechCardBlockContent(
  'speechAndLanguageCompetence.speech_comprehension_level',
  []
);

speechComprehensionLevel.content = [
  speechComprehensionLevel.textFieldObject(null, ''),
];

//Block 2
const vocabularyFormationLevel = new SpeechCardBlockContent(
  'speechAndLanguageCompetence.vocabulary_formation_level',
  []
);

vocabularyFormationLevel.content = [
  vocabularyFormationLevel.textFieldObject('main', 'Лепет в:'),
  vocabularyFormationLevel.textAreaFieldObject(
    'active_semantic_component',
    'Активный семантический компонент'
  ),
  vocabularyFormationLevel.textAreaFieldObject(
    'vocabulary_volume',
    'Объем словаря'
  ),
  vocabularyFormationLevel.textAreaFieldObject(
    'systemic_vocabulary_organization',
    'Системная организация словаря (ассоциативные связи)'
  ),
];

//Block 3

const grammaticalCompetenceFormationLevel = new SpeechCardBlockContent(
  'speechAndLanguageCompetence.grammatical_competence_formation_level',
  []
);

grammaticalCompetenceFormationLevel.content = [
  grammaticalCompetenceFormationLevel.textFieldObject('main_description', ''),

  grammaticalCompetenceFormationLevel.textAreaFieldObject(
    'state_of_phonemic_perception',
    'Состояние фонематического восприятия'
  ),
  grammaticalCompetenceFormationLevel.textAreaFieldObject(
    'цord_building_skills_and_abilities',
    'Словообразовательные навыки и умения'
  ),

  grammaticalCompetenceFormationLevel.textAreaFieldObject(
    'syntactic_skills_and_abilities',
    'Синтаксические навыки и умения'
  ),
];

//Block 4

const phoneticPhonologicalCompetenceFormationLevel = new SpeechCardBlockContent(
  'speechAndLanguageCompetence.phonetic_phonological_competence_formation_level',
  []
);

phoneticPhonologicalCompetenceFormationLevel.content = [
  phoneticPhonologicalCompetenceFormationLevel.textAreaFieldObject(
    'main_description',
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
    'sound_analysis_and_synthesis_skills',
    'Сформированность навыков звукового анализа и синтеза'
  ),
  phoneticPhonologicalCompetenceFormationLevel.textAreaFieldObject(
    'word_syllable_structure',
    'Слоговая структура слова'
  ),
  phoneticPhonologicalCompetenceFormationLevel.textAreaFieldObject(
    'word_syllable_structure',
    'Слоговая структура слова'
  ),
  phoneticPhonologicalCompetenceFormationLevel.textAreaFieldObject(
    'sound_articulating_side_of_speech',
    'Звукопроизносительная сторона речи'
  ),
  phoneticPhonologicalCompetenceFormationLevel.textAreaFieldObject(
    'prosodic_side_of_speech',
    'Просодическая сторона речи'
  ),
  phoneticPhonologicalCompetenceFormationLevel.textFieldObject(
    'voice',
    'Голос'
  ),
  phoneticPhonologicalCompetenceFormationLevel.textFieldObject(
    'smoothness',
    'Плавность'
  ),
  phoneticPhonologicalCompetenceFormationLevel.textFieldObject('tempo', 'Темп'),
  phoneticPhonologicalCompetenceFormationLevel.textFieldObject(
    'speech',
    'Речь'
  ),
  phoneticPhonologicalCompetenceFormationLevel.textFieldObject(
    'breath',
    'Дыхание'
  ),
  phoneticPhonologicalCompetenceFormationLevel.textFieldObject(
    'rhythm',
    'Ритм'
  ),
  phoneticPhonologicalCompetenceFormationLevel.textFieldObject(
    'exhalation_strength',
    'Сила выдоха'
  ),
  phoneticPhonologicalCompetenceFormationLevel.textFieldObject(
    'inspiratory_expiratory_differentiation_and_control_capability',
    'Дифференцированность вдоха/выдоха и возможность управления'
  ),
];

export const speechAndLanguageCompetence = {
  speech_comprehension_level: speechComprehensionLevel.content,
  vocabulary_formationLevel: vocabularyFormationLevel.content,
  phonetic_phonological_competence_formation_level:
    phoneticPhonologicalCompetenceFormationLevel.content,
  grammatical_competence_formation_level:
    grammaticalCompetenceFormationLevel.content,
};
