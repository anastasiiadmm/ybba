import { SpeechCardBlockContent } from '../blockContentCreation';

// Block 1
const physicalDevelopment = new SpeechCardBlockContent(
  'briefAnamnesisBlock.physical_development',
  []
);

physicalDevelopment.content = [
  physicalDevelopment.textFieldObject('sat_in', 'Сел в:'),
  physicalDevelopment.textFieldObject(
    'crawled_on_all_fours_into',
    'Пополз на четвереньках в:'
  ),
  physicalDevelopment.textFieldObject('went_to', 'Пошел в:'),
  physicalDevelopment.textFieldObject('started_walking__age', 'Пошел в:'),
  physicalDevelopment.textFieldObject(
    'learned_to_jump_on_two_legs_in',
    'Научился прыгать на двух ногах в:'
  ),
  physicalDevelopment.textFieldObject(
    'injury_infection_before_during_and_or_after_childbirth',
    'Травмы/инфекции до, во время и/или после родов:'
  ),
];

//Block 2
const speechDevelopment = new SpeechCardBlockContent(
  'briefAnamnesisBlock.speech_development',
  []
);

speechDevelopment.content = [
  speechDevelopment.textFieldObject('babbling_in', 'Лепет в:'),
  speechDevelopment.textFieldObject('first_words_in', 'Первые слова в:'),
  speechDevelopment.textFieldObject(
    'first_short_phrases_in',
    'Первые короткие фразы в:'
  ),
];

//Block 3

const speechEnvironment = new SpeechCardBlockContent(
  'briefAnamnesisBlock.speech_environment',
  []
);

speechEnvironment.content = [
  speechEnvironment.textAreaFieldObject('speech_environment', ''),
];

//Block 4

const neurologicalStatus = new SpeechCardBlockContent(
  'briefAnamnesisBlock.neurological_status_and_condition_of_sensory_perceptual_organs',
  []
);

neurologicalStatus.content = [
  neurologicalStatus.textAreaFieldObject('neurological_status', ''),
  neurologicalStatus.textFieldObject(
    'vision',
    'Особенности зрительной системы'
  ),
  neurologicalStatus.textFieldObject('hearing', 'Особенности слуховой системы'),
  neurologicalStatus.textFieldObject('eating_behavior', 'Пищевое поведение'),
];

//Block 5

const currentAndPastTraumas = new SpeechCardBlockContent(
  'briefAnamnesisBlock.current_and_past_traumas',
  []
);

currentAndPastTraumas.content = [
  neurologicalStatus.textAreaFieldObject('present_and_past_diseases', ''),
];

//Block 6

const drugTreatment = new SpeechCardBlockContent(
  'briefAnamnesisBlock.drug_treatment',
  []
);

drugTreatment.content = [
  neurologicalStatus.textAreaFieldObject('drug_treatment', ''),
];

//Block 7

const emotionalAndPsychologicalLevel = new SpeechCardBlockContent(
  'briefAnamnesisBlock.emotional_and_psychological_level',
  []
);

emotionalAndPsychologicalLevel.content = [
  emotionalAndPsychologicalLevel.textAreaFieldObject(
    'emotional_and_psychological_level',
    ''
  ),
  emotionalAndPsychologicalLevel.textFieldObject(
    'emotional_background_during_class',
    'Эмоциональный фон во время занятия'
  ),
  emotionalAndPsychologicalLevel.textFieldObject(
    'motivation_and_interest',
    'Мотивация и интерес'
  ),
  emotionalAndPsychologicalLevel.textFieldObject(
    'emotional_response_to_adult_emotion',
    'Эмоциональный отклик на эмоцию взрослого'
  ),
  emotionalAndPsychologicalLevel.textFieldObject(
    'mimic_manifestations',
    'Мимические проявления'
  ),
  emotionalAndPsychologicalLevel.textFieldObject(
    'basic_emotions_that_it_exhibits',
    'Базовые эмоции, которые проявлял во время занятия'
  ),
];

export const briefAnamnesisBlock = {
  physical_development: physicalDevelopment.content,
  speech_development: speechDevelopment.content,
  speech_environment: speechEnvironment.content,
  neurological_status: neurologicalStatus.content,
  current_and_past_traumas: currentAndPastTraumas.content,
  drug_treatment: drugTreatment.content,
  emotional_and_psychological_level: emotionalAndPsychologicalLevel.content,
};
