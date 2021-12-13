import * as yup from 'yup';

const requiredMessage = 'Заполнение обязательно';

const examProtocolSchema = yup.object().shape({
  child_full_name: yup.string().required(requiredMessage).nullable(true),
  what_are_your_complaints: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  for_what_purpose_did_you_turn_to_a_speech_therapist: yup
    .string()
    .required(requiredMessage)
    .nullable(true),

  additional_information: yup.object().shape({
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
    first_short_phrases_in: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
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
  }),

  motivation_and_interest: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  in_a_time_space_situation: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
  stock_of_knowledge_about_the_world_around: yup
    .string()
    .required(requiredMessage)
    .nullable(true),
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
  vocabulary_size: yup.string().required(requiredMessage).nullable(true),
  systemic_vocabulary_organization: yup
    .string()
    .required(requiredMessage)
    .nullable(true),

  game_on_the_farm_part_two: yup.object().shape({
    level_of_grammatical_competence_formation: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    inflectional_skills_and_abilities_part_one: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    inflectional_skills_and_abilities_part_two: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    word_building_skills_and_abilities: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
  }),
  game_magic_exam: yup.object().shape({
    level_of_formation_of_phonetic_phonological_competence: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    state_of_phonemic_perception: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    phonemic_hearing: yup.string().required(requiredMessage).nullable(true),
    phonological_sound_analysis_and_synthesis_skills: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    syllabic_structure_of_a_word: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
  }),
  game_pictures_for_fish: yup.object().shape({
    sibilant_parasigmatism: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    replacing_s_with: yup.string().required(requiredMessage).nullable(true),
    replacing_s_soft_with: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    replacing_z_with: yup.string().required(requiredMessage).nullable(true),
    replacing_z_soft_with: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    replacing_c_with: yup.string().required(requiredMessage).nullable(true),
    replacing_ch_with: yup.string().required(requiredMessage).nullable(true),
    prominent_sigmatism: yup.string().required(requiredMessage).nullable(true),
    nasal_sigmatism: yup.string().required(requiredMessage).nullable(true),
    hissing_sigmatism: yup.string().required(requiredMessage).nullable(true),
    lateral_sigmatism: yup.string().required(requiredMessage).nullable(true),
    labiodental_pronunciation_of_whistling: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    skip_whistling_sound: yup.string().required(requiredMessage).nullable(true),
    mixing_sounds: yup.string().required(requiredMessage).nullable(true),
    interdental_sigmatism: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    // 8.1
    verbal_memory: yup.string().required(requiredMessage).nullable(true),
    verbal_memory_part_two: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
  }),
  game_giraffe: yup.object().shape({
    throat_rotacism: yup.string().required(requiredMessage).nullable(true),
    replacing_p_with: yup.string().required(requiredMessage).nullable(true),
    replacing_p_soft_with: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    buccal: yup.string().required(requiredMessage).nullable(true),
    side: yup.string().required(requiredMessage).nullable(true),
    one_hit_pronunciation: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    skip: yup.string().required(requiredMessage).nullable(true),
    interdental_lambdacism: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    replacing_l_with: yup.string().required(requiredMessage).nullable(true),
    replacing_l_soft_with: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    nasal: yup.string().required(requiredMessage).nullable(true),
    lambdacism_pass: yup.string().required(requiredMessage).nullable(true),
    two_lipped: yup.string().required(requiredMessage).nullable(true),
    distortion: yup.string().required(requiredMessage).nullable(true),
    //8.2
    thinking: yup.string().required(requiredMessage).nullable(true),
    thinking_part_two: yup.string().required(requiredMessage).nullable(true),
    there_are_difficulties_in_protecting_adequate_connections: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    kind_of_thinking: yup.string().required(requiredMessage).nullable(true),
  }),
  game_puzzle: yup.object().shape({
    nasal: yup.string().required(requiredMessage).nullable(true),
    skip: yup.string().required(requiredMessage).nullable(true),
    replacing_with_b: yup.string().required(requiredMessage).nullable(true),
    replacing_with_b_soft: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    replacing_with_f: yup.string().required(requiredMessage).nullable(true),
    replacing_with_f_soft: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    two_lipped: yup.string().required(requiredMessage).nullable(true),
    mixing: yup.string().required(requiredMessage).nullable(true),
    distortion: yup.string().required(requiredMessage).nullable(true),
  }),
  game_ant_lambada: yup.object().shape({
    nasal: yup.string().required(requiredMessage).nullable(true),
    skip: yup.string().required(requiredMessage).nullable(true),
    replacing_d_with: yup.string().required(requiredMessage).nullable(true),
    replacing_d_soft_with: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    replacing_t_with: yup.string().required(requiredMessage).nullable(true),
    replacing_t_soft_with: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    replacing_k_with: yup.string().required(requiredMessage).nullable(true),
    replacing_g_with: yup.string().required(requiredMessage).nullable(true),
    replacing_kh_with: yup.string().required(requiredMessage).nullable(true),
    mixing: yup.string().required(requiredMessage).nullable(true),
    distortion: yup.string().required(requiredMessage).nullable(true),
  }),
  game_on_the_farm_part_three: yup.object().shape({
    fatigue: yup.string().required(requiredMessage).nullable(true),
    contact: yup.string().required(requiredMessage).nullable(true),
    working_capacity: yup.string().required(requiredMessage).nullable(true),
    motivation: yup.string().required(requiredMessage).nullable(true),
    interest: yup.string().required(requiredMessage).nullable(true),
    options_for_confinement_psychological_basis: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    prosodic_side_of_speech: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    violation_of_tempo_rhythmic_organization_of_speech: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    voice: yup.string().required(requiredMessage).nullable(true),
    voice_part_two: yup.string().required(requiredMessage).nullable(true),
    voice_part_three: yup.string().required(requiredMessage).nullable(true),
    voice_part_four: yup.string().required(requiredMessage).nullable(true),
    voice_part_five: yup.string().required(requiredMessage).nullable(true),
    smoothness: yup.string().required(requiredMessage).nullable(true),
    pace: yup.string().required(requiredMessage).nullable(true),
    speech: yup.string().required(requiredMessage).nullable(true),
    breath: yup.string().required(requiredMessage).nullable(true),
    rhythm: yup.string().required(requiredMessage).nullable(true),
    // 8.4
    speech_comprehension: yup.string().required(requiredMessage).nullable(true),
    there_are_difficulties_in_distributing_attention: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    concentration: yup.string().required(requiredMessage).nullable(true),
    sustainability: yup.string().required(requiredMessage).nullable(true),
    child_s_attention_is_characterized_by_rapid_exhaustion: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    switchability: yup.string().required(requiredMessage).nullable(true),
  }),
  game_how_the_mouse_could_not_sleep: yup.object().shape({
    // understanding_the_text
    content_semantic_meaning_of_text: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    understands_only_basic_information_of_text: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    // text_production
    constructing_a_statement: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    consistency_with_the_plot: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    topic: yup.string().required(requiredMessage).nullable(true),
    chronological_event_logic: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    language_means: yup.string().required(requiredMessage).nullable(true),
    // reproduction_of_text
    retelling_corresponds_to_original: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    retelling_contains_both_basic_and_additional_information: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    retelling_uses_variability_of_speech: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    retelling_partially_corresponds_to_original: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    retelling_contains_only_basic_information: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    vocabulary_and_syntactic_constructions_of_original: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    coherence_and_consistency_of_presentation_is_not_broken: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    has_notable_difficulty_in_story_reproduction: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    retelling_does_not_correspond_to_original: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    semantic_organization_of_text_is_broken: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    coherence_and_consistency_of_presentation_is_broken: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    significant_difficulties_in_language_design_of_text: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
  }),

  // articulation_apparatus_structure
  game_ant_battle: yup.object().shape({
    tone: yup.string().required(requiredMessage).nullable(true),
    pace_of_movement: yup.string().required(requiredMessage).nullable(true),
    facial_muscle_tone: yup.string().required(requiredMessage).nullable(true),
    lip_muscle_tone: yup.string().required(requiredMessage).nullable(true),
    hypersalivation: yup.string().required(requiredMessage).nullable(true),
    lips: yup.string().required(requiredMessage).nullable(true),
    malocclusion: yup.string().required(requiredMessage).nullable(true),
    incorrect_position_of_teeth: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    tooth_reshaping: yup.string().required(requiredMessage).nullable(true),
    changing_size_of_tongue: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    deviation_of_tongue: yup.string().required(requiredMessage).nullable(true),
    split_tongue: yup.string().required(requiredMessage).nullable(true),
    shortened_hyoid_fold: yup.string().required(requiredMessage).nullable(true),
    anomalies_of_frenum_of_upper_lower_lip: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    cleft: yup.string().required(requiredMessage).nullable(true),
    gothic_palate: yup.string().required(requiredMessage).nullable(true),
    jaw_deformities: yup.string().required(requiredMessage).nullable(true),
    basic_motor_skills: yup.string().required(requiredMessage).nullable(true),
    basic_motor_skills_part_two: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    disturbances_in_tone: yup.string().required(requiredMessage).nullable(true),
    body_schema_disorders: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    disorders_of_hand_eye_coordination: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
    orolingual: yup.string().required(requiredMessage).nullable(true),
    opto_lingual: yup.string().required(requiredMessage).nullable(true),
    // motor_functions_of_hands_and_fingers
    motor_functions_of_hands_and_fingers: yup
      .string()
      .required(requiredMessage)
      .nullable(true),
  }),

  // bilateral_motor_organization
  conclusion_options: yup.string().required(requiredMessage).nullable(true),
});

export default examProtocolSchema;

// emotional_background_during_class: yup.string().required("Must complete"),
// mimic_manifestations: yup.string().required("Must complete"),
// basic_emotions_that_it_exhibits: yup.string().required("Must complete"),
// oral_praxis: yup.string().required("Must complete"),
// articulatory_praxis: yup.string().required("Must complete"),
// postural_control_of_calm_state: yup.string().required("Must complete"),
// formation_of_motor_imitation: yup.string().required("Must complete"),
// emotional_reaction: yup.string().required("Must complete"),
// emotional_response_to_adult_emotion: yup.string().required("Must complete"),
// logopedic_conclusion: yup.string().required("Must complete"),

// CHECK
// syntactic_skills_and_abilities: yup.string().required("Must complete"),
// level_of_formation_of_phonemic_perception: yup.string().required("Must complete"),
// state_of_phonemic_hearing_game_magic_exam: yup.string().required("Must complete"),
// formation_of_the_skills_of_sound_analysis_and_synthesis: yup
//   .string()
//   .required(requiredMessage).nullable(true),
// syllabic_structure_of_the_word: yup.string().required("Must complete"),
// sound_articulating_side_of_speech: yup.string().required("Must complete"),

// simultaneous_visual_perception: yup.string().required("Must complete"),
// attention: yup.string().required("Must complete"),
// general_ideas_of_child_about_world_around_him: yup.string().required("Must complete"),

// system_organization_of_dictionary_associative_links: yup.string().required("Must complete"),
// inflectional_skills_and_abilities: yup.string().required("Must complete"),

// syllabic_structure_of_word: yup.string().required("Must complete"),
// prosodic_speech_design: yup.string().required("Must complete"),
// motor_functions_of_articulatory_apparatus: yup.string().required("Must complete"),

// speech_breathing_and_voice_production: yup.string().required("Must complete"),
// exhalation_force: yup.string().required("Must complete"),
// inspiratory_expiratory_differentiation: yup.string().required("Must complete"),
// basic_motor_skills_and_state_of_coordinating_sphere: yup.string().required("Must complete"),

// bilateral_motor_coordination: yup.string().required("Must complete"),

// speech_attention: yup.string().required("Must complete"),
// thinking_verbal_and_non_verbal_intelligence: yup.string().required("Must complete"),
// features_of_early_speech_development: yup.string().required("Must complete"),
// features_of_speech_environment_in_which_child: yup.string().required("Must complete"),
// features_of_speech_behavior: yup.string().required("Must complete"),
// neurological_status_and_condition: yup.string().required("Must complete"),
// information_about_current_and_past_diseases: yup.string().required("Must complete"),
// in_case_of_failure_behaves: yup.string().required("Must complete"),
// recommendation: yup.string().required("Must complete"),
