import * as yup from 'yup';

const examProtocolSchema = yup.object().shape({
  child_full_name: yup.string().required('Must complete'),
  what_are_your_complaints: yup.string().required('Must complete'),
  for_what_purpose_did_you_turn_to_a_speech_therapist: yup
    .string()
    .required('Must complete'),

  additional_information: yup.object().shape({
    sat_in: yup.string().required('Must complete'),
    crawled_on_all_fours_into: yup.string().required('Must complete'),
    went_to: yup.string().required('Must complete'),
    learned_to_jump_on_two_legs_in: yup.string().required('Must complete'),
    injury_infection_before_during_and_or_after_childbirth: yup
      .string()
      .required(),
    babbling_in: yup.string().required('Must complete'),
    first_words_in: yup.string().required('Must complete'),
    first_short_phrases_in: yup.string().required('Must complete'),
    speech_environment: yup.string().required('Must complete'),
    neurological_status: yup.string().required('Must complete'),
    vision: yup.string().required('Must complete'),
    hearing: yup.string().required('Must complete'),
    eating_behavior: yup.string().required('Must complete'),
    present_and_past_diseases: yup.string().required('Must complete'),
    drug_treatment: yup.string().required('Must complete'),
    emotional_and_psychological_level: yup.string().required('Must complete'),
  }),

  motivation_and_interest: yup.string().required('Must complete'),
  in_a_time_space_situation: yup.string().required('Must complete'),
  stock_of_knowledge_about_the_world_around: yup
    .string()
    .required('Must complete'),
  image_i: yup.string().required('Must complete'),
  somatognosis: yup.string().required('Must complete'),
  speech_comprehension_level: yup.string().required('Must complete'),
  level_of_vocabulary_formation: yup.string().required('Must complete'),
  active_semantic_component_active_vocabulary: yup
    .string()
    .required('Must complete'),
  vocabulary_size: yup.string().required('Must complete'),
  systemic_vocabulary_organization: yup.string().required('Must complete'),

  game_on_the_farm_part_two: yup.object().shape({
    level_of_grammatical_competence_formation: yup
      .string()
      .required('Must complete'),
    inflectional_skills_and_abilities_part_one: yup
      .string()
      .required('Must complete'),
    inflectional_skills_and_abilities_part_two: yup
      .string()
      .required('Must complete'),
    word_building_skills_and_abilities: yup.string().required('Must complete'),
  }),
  game_magic_exam: yup.object().shape({
    level_of_formation_of_phonetic_phonological_competence: yup
      .string()
      .required(),
    state_of_phonemic_perception: yup.string().required('Must complete'),
    phonemic_hearing: yup.string().required('Must complete'),
    phonological_sound_analysis_and_synthesis_skills: yup
      .string()
      .required('Must complete'),
    syllabic_structure_of_a_word: yup.string().required('Must complete'),
  }),
  game_pictures_for_fish: yup.object().shape({
    sibilant_parasigmatism: yup.string().required('Must complete'),
    replacing_s_with: yup.string().required('Must complete'),
    replacing_s_soft_with: yup.string().required('Must complete'),
    replacing_z_with: yup.string().required('Must complete'),
    replacing_z_soft_with: yup.string().required('Must complete'),
    replacing_c_with: yup.string().required('Must complete'),
    replacing_ch_with: yup.string().required('Must complete'),
    prominent_sigmatism: yup.string().required('Must complete'),
    nasal_sigmatism: yup.string().required('Must complete'),
    hissing_sigmatism: yup.string().required('Must complete'),
    lateral_sigmatism: yup.string().required('Must complete'),
    labiodental_pronunciation_of_whistling: yup
      .string()
      .required('Must complete'),
    skip_whistling_sound: yup.string().required('Must complete'),
    mixing_sounds: yup.string().required('Must complete'),
    interdental_sigmatism: yup.string().required('Must complete'),
    // 8.1
    verbal_memory: yup.string().required('Must complete'),
    verbal_memory_part_two: yup.string().required('Must complete'),
  }),
  game_giraffe: yup.object().shape({
    throat_rotacism: yup.string().required('Must complete'),
    replacing_p_with: yup.string().required('Must complete'),
    replacing_p_soft_with: yup.string().required('Must complete'),
    buccal: yup.string().required('Must complete'),
    side: yup.string().required('Must complete'),
    one_hit_pronunciation: yup.string().required('Must complete'),
    skip: yup.string().required('Must complete'),
    interdental_lambdacism: yup.string().required('Must complete'),
    replacing_l_with: yup.string().required('Must complete'),
    replacing_l_soft_with: yup.string().required('Must complete'),
    nasal: yup.string().required('Must complete'),
    lambdacism_pass: yup.string().required('Must complete'),
    two_lipped: yup.string().required('Must complete'),
    distortion: yup.string().required('Must complete'),
    //8.2
    thinking: yup.string().required('Must complete'),
    thinking_part_two: yup.string().required('Must complete'),
    there_are_difficulties_in_protecting_adequate_connections: yup
      .string()
      .required(),
    kind_of_thinking: yup.string().required('Must complete'),
  }),
  game_puzzle: yup.object().shape({
    nasal: yup.string().required('Must complete'),
    skip: yup.string().required('Must complete'),
    replacing_with_b: yup.string().required('Must complete'),
    replacing_with_b_soft: yup.string().required('Must complete'),
    replacing_with_f: yup.string().required('Must complete'),
    replacing_with_f_soft: yup.string().required('Must complete'),
    two_lipped: yup.string().required('Must complete'),
    mixing: yup.string().required('Must complete'),
    distortion: yup.string().required('Must complete'),
  }),
  game_ant_lambada: yup.object().shape({
    nasal: yup.string().required('Must complete'),
    skip: yup.string().required('Must complete'),
    replacing_d_with: yup.string().required('Must complete'),
    replacing_d_soft_with: yup.string().required('Must complete'),
    replacing_t_with: yup.string().required('Must complete'),
    replacing_t_soft_with: yup.string().required('Must complete'),
    replacing_k_with: yup.string().required('Must complete'),
    replacing_g_with: yup.string().required('Must complete'),
    replacing_kh_with: yup.string().required('Must complete'),
    mixing: yup.string().required('Must complete'),
    distortion: yup.string().required('Must complete'),
  }),
  game_on_the_farm_part_three: yup.object().shape({
    fatigue: yup.string().required('Must complete'),
    contact: yup.string().required('Must complete'),
    working_capacity: yup.string().required('Must complete'),
    motivation: yup.string().required('Must complete'),
    interest: yup.string().required('Must complete'),
    options_for_confinement_psychological_basis: yup
      .string()
      .required('Must complete'),
    prosodic_side_of_speech: yup.string().required('Must complete'),
    violation_of_tempo_rhythmic_organization_of_speech: yup
      .string()
      .required('Must complete'),
    voice: yup.string().required('Must complete'),
    voice_part_two: yup.string().required('Must complete'),
    voice_part_three: yup.string().required('Must complete'),
    voice_part_four: yup.string().required('Must complete'),
    voice_part_five: yup.string().required('Must complete'),
    smoothness: yup.string().required('Must complete'),
    pace: yup.string().required('Must complete'),
    speech: yup.string().required('Must complete'),
    breath: yup.string().required('Must complete'),
    rhythm: yup.string().required('Must complete'),
    // 8.4
    speech_comprehension: yup.string().required('Must complete'),
    there_are_difficulties_in_distributing_attention: yup
      .string()
      .required('Must complete'),
    concentration: yup.string().required('Must complete'),
    sustainability: yup.string().required('Must complete'),
    child_s_attention_is_characterized_by_rapid_exhaustion: yup
      .string()
      .required(),
    switchability: yup.string().required('Must complete'),
  }),
  game_how_the_mouse_could_not_sleep: yup.object().shape({
    // understanding_the_text
    content_semantic_meaning_of_text: yup.string().required('Must complete'),
    understands_only_basic_information_of_text: yup
      .string()
      .required('Must complete'),
    // text_production
    constructing_a_statement: yup.string().required('Must complete'),
    consistency_with_the_plot: yup.string().required('Must complete'),
    topic: yup.string().required('Must complete'),
    chronological_event_logic: yup.string().required('Must complete'),
    language_means: yup.string().required('Must complete'),
    // reproduction_of_text
    retelling_corresponds_to_original: yup.string().required('Must complete'),
    retelling_contains_both_basic_and_additional_information: yup
      .string()
      .required(),
    retelling_uses_variability_of_speech: yup
      .string()
      .required('Must complete'),
    retelling_partially_corresponds_to_original: yup
      .string()
      .required('Must complete'),
    retelling_contains_only_basic_information: yup
      .string()
      .required('Must complete'),
    vocabulary_and_syntactic_constructions_of_original: yup
      .string()
      .required('Must complete'),
    coherence_and_consistency_of_presentation_is_not_broken: yup
      .string()
      .required(),
    has_notable_difficulty_in_story_reproduction: yup
      .string()
      .required('Must complete'),
    retelling_does_not_correspond_to_original: yup
      .string()
      .required('Must complete'),
    semantic_organization_of_text_is_broken: yup
      .string()
      .required('Must complete'),
    coherence_and_consistency_of_presentation_is_broken: yup
      .string()
      .required(),
    significant_difficulties_in_language_design_of_text: yup
      .string()
      .required(),
  }),

  // articulation_apparatus_structure
  game_ant_battle: yup.object().shape({
    tone: yup.string().required('Must complete'),
    pace_of_movement: yup.string().required('Must complete'),
    facial_muscle_tone: yup.string().required('Must complete'),
    lip_muscle_tone: yup.string().required('Must complete'),
    hypersalivation: yup.string().required('Must complete'),
    lips: yup.string().required('Must complete'),
    malocclusion: yup.string().required('Must complete'),
    incorrect_position_of_teeth: yup.string().required('Must complete'),
    tooth_reshaping: yup.string().required('Must complete'),
    changing_size_of_tongue: yup.string().required('Must complete'),
    deviation_of_tongue: yup.string().required('Must complete'),
    split_tongue: yup.string().required('Must complete'),
    shortened_hyoid_fold: yup.string().required('Must complete'),
    anomalies_of_frenum_of_upper_lower_lip: yup
      .string()
      .required('Must complete'),
    cleft: yup.string().required('Must complete'),
    gothic_palate: yup.string().required('Must complete'),
    jaw_deformities: yup.string().required('Must complete'),
    basic_motor_skills: yup.string().required('Must complete'),
    basic_motor_skills_part_two: yup.string().required('Must complete'),
    disturbances_in_tone: yup.string().required('Must complete'),
    body_schema_disorders: yup.string().required('Must complete'),
    disorders_of_hand_eye_coordination: yup.string().required('Must complete'),
    orolingual: yup.string().required('Must complete'),
    opto_lingual: yup.string().required('Must complete'),
    // motor_functions_of_hands_and_fingers
    motor_functions_of_hands_and_fingers: yup
      .string()
      .required('Must complete'),
  }),

  // bilateral_motor_organization
  conclusion_options: yup.string().required('Must complete'),
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
//   .required(),
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
