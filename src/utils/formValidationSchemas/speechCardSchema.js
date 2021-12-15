import * as yup from 'yup';

const requiredMessage = 'Заполнение обязательно';

// const speechCardSchema = yup.object().shape({});
const speechCardSchema = yup.object().shape({
  sat_in: yup.string().required(requiredMessage).nullable(true),
  crawled_on_all_fours_into: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  went_to: yup.string().required(requiredMessage).nullable(true),
  learned_to_jump_on_two_legs_in: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  injury_infection_before_during_and_or_after_childbirth: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  babbling_in: yup.string().required(requiredMessage).nullable(true),
  first_words_in: yup.string().required(requiredMessage).nullable(true),
  first_short_phrases_in: yup.string().required(requiredMessage).nullable(true),
  speech_environment: yup.string().required(requiredMessage).nullable(true),
  neurological_status: yup.string().required(requiredMessage).nullable(true),
  vision: yup.string().required(requiredMessage).nullable(true),
  hearing: yup.string().required(requiredMessage).nullable(true),
  eating_behavior: yup.string().required(requiredMessage).nullable(true),
  present_and_past_diseases: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  drug_treatment: yup.string().required(requiredMessage).nullable(true),
  emotional_and_psychological_level: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  emotional_background_during_class: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  motivation_and_interest: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  emotional_response_to_adult_emotion: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  mimic_manifestations: yup.string().required(requiredMessage).nullable(true),
  basic_emotions_that_it_exhibits: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  formation_of_ideas_about_world_around: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  in_a_time_space_situation: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  basic_motor_skills_and_state_of_coordinating_sphere: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  postural_control_of_calm_state: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  bilateral_motor_coordination: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  formation_of_motor_imitation: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  child_full_name: yup.string().required(requiredMessage).nullable(true),
  child_date_of_birth: yup.string().required(requiredMessage).nullable(true),
  parent: yup.string().required(requiredMessage).nullable(true),
  main_complaints_from_parents: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  for_what_purpose_did_you_turn_to_a_speech_therapist: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  verbal_memory: yup.string().required(requiredMessage).nullable(true),
  thinking_verbal_and_non_verbal_intelligence: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  simultaneous_visual_perception: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  attention: yup.string().required(requiredMessage).nullable(true),
  recommendation: yup.string().required(requiredMessage).nullable(true),
  image_i: yup.string().required(requiredMessage).nullable(true),
  somatognosis: yup.string().required(requiredMessage).nullable(true),
  speech_comprehension_level: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  level_of_vocabulary_formation: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  active_semantic_component_active_vocabulary: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  volume_vocabulary: yup.string().required(requiredMessage).nullable(true),
  systemic_vocabulary_organization: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  level_of_grammatical_competence_formation: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  state_of_phonemic_perception: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  word_building_skills_and_abilities: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  syntactic_skills_and_abilities: yup
    .string()
    .required(requiredMessage)
    .nullable(true),

  level_of_formation_of_phonetic_phonological_competence: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  state_of_phonemic_hearing: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  formation_of_skills_of_sound_analysis_and_synthesis: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  syllabic_structure_of_a_word: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  sound_articulating_side_of_speech: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  prosodic_side_of_speech_game_on_the_farm_part_three: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  voice: yup.string().required(requiredMessage).nullable(true),
  smoothness_game_on_the_farm_part_three: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  pace_game_on_the_farm_part_three: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  speech_game_on_the_farm_part_three: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  breath_game_on_the_farm_part_three: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  rhythm_game_on_the_farm_part_three: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  exhalation_force: yup.string().required(requiredMessage).nullable(true),
  inspiratory_expiratory_differentiation: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  articulation_apparatus_structure_game_how_the_mouse_could: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  articulation_apparatus_structure: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  oral_praxis: yup.string().required(requiredMessage).nullable(true),
  articulatory_praxis: yup.string().required(requiredMessage).nullable(true),
  understanding_the_text_game_how_the_mouse_could_not_sleep: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  text_production_game_how_the_mouse_could_not_sleep: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  reproduction_of_text_game_how_the_mouse_could_not_sleep: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
});

export default speechCardSchema;
