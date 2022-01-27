import * as yup from 'yup'

const requiredFieldErrorText = 'Обязательное поле'

export const examinationProtocolSchema = yup.object().shape({
    what_are_your_complaints: yup.string()
        .required(requiredFieldErrorText)
        .nullable(true),
    for_what_purpose_did_you_turn_to_a_speech_therapist: yup.string()
        .required(requiredFieldErrorText)
        .nullable(true),
    what_is_your_name: yup.string()
        .required(requiredFieldErrorText)
        .nullable(true),
    how_old_are_you: yup.string()
        .required(requiredFieldErrorText)
        .nullable(true),
    what_is_your_moms_name_your_daddy: yup.string()
        .required(requiredFieldErrorText)
        .nullable(true),
    where_do_you_live: yup.string()
        .required(requiredFieldErrorText)
        .nullable(true),
    what_time_of_year_is_it: yup.string()
        .required(requiredFieldErrorText)
        .nullable(true),
    what_did_you_do_yesterday: yup.string()
        .required(requiredFieldErrorText)
        .nullable(true),
    what_toys_do_you_have: yup.string()
        .required(requiredFieldErrorText)
        .nullable(true),
    what_kind_of_animals_do_you_know: yup.string()
        .required(requiredFieldErrorText)
        .nullable(true),
    general_ideas_about_the_world_around_comment: yup.string()
        .required(requiredFieldErrorText)
        .nullable(true),
    stock_of_knowledge_about_the_world_around: yup.string()
        .required(true)
        .nullable(true),
    in_a_time_space_situation: yup.string()
        .required(true)
        .nullable(true),
    knows_how_old_time_of_year_what_time_of_day_it_is: yup.string()
        .required(true)
        .nullable(true),
    image_i: yup.string()
        .required(true)
        .nullable(true),
    knows_his_name_the_name_of_his_parents_where_he_lives: yup.string()
        .required(true)
        .nullable(true),
    somatognosis_understanding_your_own_body: yup.string()
        .required(true)
        .nullable(true),
    contact_with_the_child: yup.string()
        .required(true)
        .nullable(true),
    formation_of_ideas_about_the_world_around_comment: yup.string()
        .required(requiredFieldErrorText)
        .nullable(true),
    leading_ear_phone: yup.string()
        .required(true)
        .nullable(true),
    leading_hand_phone: yup.string()
        .required(true)
        .nullable(true),
    leading_hand_spyglass: yup.string()
        .required(true)
        .nullable(true),
    leading_eye_spyglass: yup.string()
        .required(true)
        .nullable(true),
    leading_leg_ball: yup.string()
        .required(true)
        .nullable(true),
    conclusion_options: yup.string()
        .required(true)
        .nullable(true),
    game_giraffe: yup.object().shape({
        fish_cow_fence_crab: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        river_jam_door: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        lamp_milk_floor_treasure: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        wheel_salt: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        throat_rotacism: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        replacing_p_with: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        replacing_p_soft_with: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        buccal: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        side: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        one_hit_pronunciation: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        skip: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        interdental_lambdacism: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        replacing_l_with: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        replacing_l_soft_with: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        nasal: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        lambdacism_pass: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        two_lipped: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        distortion: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        thinking: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        thinking_part_two: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        there_are_difficulties_in_protecting_adequate_connections: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        kind_of_thinking: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        expert_comment: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
    }),
    game_puzzle: yup.object().shape({
        wolf_scoop_fork_scroll: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        beans_dates: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        waffles: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        nasal: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        skip: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        replacing_with_b: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        replacing_with_b_soft: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        replacing_with_f: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        replacing_with_f_soft: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        two_lipped: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        mixing: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        distortion: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        perception: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        level_of_perception: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        expert_comment: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
    }),
    game_how_the_mouse_could_not_sleep: yup.object().shape({
        mouse_in_the_yard_at_night: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        mouse_is_eating_an_apple_and_a_berry: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        moon_in_the_reflection_of_the_water_in_a_puddle: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        mouse_covers_the_puddle_with_burdock: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        sun_in_water_reflection_in_a_puddle: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        what_was_the_white_glowing_circle: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        when_did_the_mouse_go_for_a_walk: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        what_did_the_mouse_see_in_the_forest: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        what_did_the_mouse_cover_the_moon_with: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        what_did_the_mouse_see_in_the_puddle_in_the_morning: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        why_instead_of_the_moon_the_mouse_found_the_sun: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        repeat_the_whole_story_as_you_remember: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        constructing_a_statement: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        consistency_with_the_plot: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        topic: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        chronological_event_logic: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        language_means: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        phrasal_perseverations: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        retelling_corresponds_to_original: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        retelling_contains_both_basic_and_additional_information: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        retelling_uses_variability_of_speech: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        retelling_partially_corresponds_to_original: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        retelling_contains_only_basic_information: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        vocabulary_and_syntactic_constructions_of_original: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        coherence_and_consistency_of_presentation_is_not_broken: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        retelling_does_not_correspond_to_original: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        semantic_organization_of_text_is_broken: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        coherence_and_consistency_of_presentation_is_broken: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        significant_difficulties_in_language_design_of_text: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        content_semantic_meaning_of_text: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        understands_only_basic_information_of_text: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        expert_comment: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
    }),
    game_ant_lambada: yup.object().shape({
        woodpecker_house: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        slipper_dress: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        kitchen_hamster_goose: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        nasal: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        skip: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        replacing_d_with: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        replacing_d_soft_with: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        replacing_t_with: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        replacing_t_soft_with: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        replacing_k_with: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        replacing_g_with: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        replacing_kh_with: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        mixing: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        distortion: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        expert_comment: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
    }),
    game_ant_battle: yup.object().shape({
        static_praxis_stand_on_one_leg_over_the_other: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        static_praxis_get_up_on_tiptoe_wait: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        dynamic_praxis_jump_on_one_leg_the_other_two: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        spatial_praxis_turn_right_left: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        show_v: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        show_the_cow: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        show_the_bunny_the_cow_is_counted: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        basic_motor_skills: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        basic_motor_skills_part_two: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        disturbances_in_tone: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        decrease_in_strength: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        impaired_coordination_of_movement_ataxia: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        hand_coordination_crashes: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        motor_shifting_difficulties: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        body_schema_disorders: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        disorders_of_hand_eye_coordination: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        orolingual: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        opto_lingual: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        motor_functions_of_hands_and_fingers: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        fence: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        spatula: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        needle: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        watch: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        swing: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        tone: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        deviation_of_the_tongue: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        hyperkinesis_of_the_tongue: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        tremor_of_the_tongue: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        switching_difficulties: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        pace_of_the_movements: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        expert_comment: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        raise_eyebrows: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        frown: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        wink: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        puff_out_cheeks: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        facial_muscle_tone: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        hypomimia: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        smoothness_of_nasolabial_fold: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        asymmetry_of_face: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        facial_hyperkinesis: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        synkinesis: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        lip_muscle_tone: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        restriction_of_lip_mobility: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        hypersalivation: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        lips: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        non_closure_of_lips: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        malocclusion: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        incorrect_position_of_teeth: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        tooth_reshaping: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        changing_size_of_tongue: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        deviation_of_tongue: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        shortened_hyoid_fold: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        anomalies_of_frenum_of_upper_lower_lip: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        cleft: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        gothic_palate: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        jaw_deformities: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
    }),
    game_pictures_for_fish: yup.object().shape({
        shop_hay_cornflower: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        dog_pump_lock_goat: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        starling_heron_finger: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        detective_tongs_garlic: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        pike_things_bream: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        beetle_soot_scissors: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        fur_coat_cat_reed_freckles: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        sibilant_parasigmatism: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        replacing_s_with: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        replacing_s_soft_with: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        replacing_z_with: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        replacing_z_soft_with: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        replacing_c_with: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        replacing_ch_with: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        prominent_sigmatism: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        nasal_sigmatism: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        hissing_sigmatism: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        lateral_sigmatism: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        labiodental_pronunciation_of_whistling: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        skip_whistling_sound: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        mixing_sounds: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        interdental_sigmatism: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        replacing_shch_to: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        replacing_zh_to: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        replacing_sh_to: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        pristine_sigmatism: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        hissing_nasal_sigmatism: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        hissing_sigmatism_two: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        lateral_sigmatism_two: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        labiodental_pronunciation_of_sibilants: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        skip_whistling_sound_two: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        mixing_sounds_two: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        verbal_memory: yup.string()
            .required(true)
            .nullable(true),
        verbal_memory_part_two: yup.string()
            .required(true)
            .nullable(true),
        expert_comment: yup.string()
            .required(true)
            .nullable(true),
    }),
    game_capricious_princess: yup.object().shape({
        chair: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        bow: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        helicopter: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        paper_airplane: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        excavator: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        camera: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        syllabic_structure_of_a_word: yup.string()
            .required(true)
            .nullable(true),
        missing_syllables: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        missing_syllabic_vowels: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        permutations_of_sounds_and_or_syllables: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        insertion_of_vowels_into_consonants: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        adding_syllables: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        consonant_reduction: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        inserting_consonants_into_a_syllable: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        anticipation: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        assimilation_of_syllables: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        gnotic_violations_addition_of_syllables: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        expert_comment: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
    }),
    game_magic_exam: yup.object().shape({
        bear_bowl: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        cancer_varnish: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        scythe_goat: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        duck_fishing_rod: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        barrel_kidney: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        saber_heron: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        level_of_formation_of_phonetic_phonological_competence: yup.string()
            .required(true)
            .nullable(true),
        state_of_phonemic_perception: yup.string()
            .required(true)
            .nullable(true),
        there_are_difficulties_in_distinguishing: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        distinction_between_hard_and_soft_consonants: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        distinction_between_affricates_and_their_constituent: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        expert_comment: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        nose: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        poppy: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        fly: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        cats: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        what_is_first_sound_in_words_poppy_and_fly: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        what_is_first_sound_in_word_nose: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        what_is_last_sound_in_words_cat_and_fly: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        what_is_last_sound_in_word_poppy: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        what_is_common_sound_in_words_of_a_cat_and_anose: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        in_which_of_words_there_is_no_sound_about_nose_of_cat_poppy: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        phonemic_hearing: yup.string()
            .required(true)
            .nullable(true),
        phonological_sound_analysis_and_synthesis_skills: yup.string()
            .required(true)
            .nullable(true),
        phonemic_hearing_expert_comment: yup.string()
            .required(true)
            .nullable(true),
    }),
    additional_information: yup.object().shape({
        sat_in: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        crawled_on_all_fours_into: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        went_to: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        learned_to_jump_on_two_legs_in: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        injury_infection_before_during_and_or_after_childbirth: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        babbling_in: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        first_words_in: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        first_short_phrases_in: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        speech_environment: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        present_and_past_diseases: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        drug_treatment: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        neurological_status: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        vision: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        hearing: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        eating_behavior: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        emotional_and_psychological_level: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
    }),
    game_on_the_farm: yup.object().shape({
        sandals_boots_socks_boots: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        shoes_clothes: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        carrot_apple_onion_cabbage: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        vegetables_fruits: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        table_chair_glass_sofa: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        furniture_dishes: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        fur_coat_jacket_coat_hat: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        clothes_headwear: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        doll_cubes_car_trolley: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        toys_transport: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        cat_kitten: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        dog_puppy: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        cow_calf: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        pig_piglet: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        cat_meows: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        dog_barks: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        cow_hums: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        pig_grunts: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        low_high_home: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        wide_narrow_belt: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        heavy_light_bucket_of_water_ball: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        clean_dirty_pig: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        slow_fast_snail: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        sad_cheerful_puppy: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        dry_wet_grasshopper: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        cold_hot_ice_cream_potatoes: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        speech_comprehension_level: yup.string()
            .required(true)
            .nullable(true),
        presence_of_phenomenon_of_alienation: yup.string()
            .required(false)
            .nullable(true),
        level_of_vocabulary_formation: yup.string()
            .required(true)
            .nullable(true),
        active_semantic_component_active_vocabulary: yup.string()
            .required(true)
            .nullable(true),
        subject_relation_of_a_word: yup.string()
            .required(true)
            .nullable(true),
        verbal_paraphasias: yup.string()
            .required(true)
            .nullable(true),
        vocabulary_size: yup.string()
            .required(true)
            .nullable(true),
        vocabulary_size_part_two: yup.string()
            .required(true)
            .nullable(true),
        systemic_vocabulary_organization: yup.string()
            .required(true)
            .nullable(true),
        expert_comment: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
    }),
    game_on_the_farm_part_two: yup.object().shape({
        level_of_grammatical_competence_formation: yup.string()
            .required(true)
            .nullable(true),
        inflectional_skills_and_abilities_part_one: yup.string()
            .required(true)
            .nullable(true),
        word_building_skills_and_abilities: yup.string()
            .required(true)
            .nullable(true),
        syntax_skills_and_abilities_part_two: yup.string()
            .required(true)
            .nullable(true),
        expert_comment: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
    }),
    game_on_the_farm_part_three: yup.object().shape({
        fatigue: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        contact: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        working_capacity: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        motivation: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        interest: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        options_for_confinement_psychological_basis: yup.string()
            .required(true)
            .nullable(true),
        voice: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        voice_part_two: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        voice_part_three: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        voice_part_four: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        voice_part_five: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        nasalized_voice: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        smoothness: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        pace: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        speech: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        breath: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        exhalation: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        hindered: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        superficial: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        breathing_is_not_rhythmic: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        shallow_breath: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        rhythm: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        expiratory_force: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        inspiratory_expiratory_differentiation: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        prosodic_side_of_speech: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        speech_intonationally: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        violation_of_tempo_rhythmic_organization_of_speech: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        speech_comprehension: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        there_are_difficulties_in_distributing_attention: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        concentration: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        sustainability: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        child_s_attention_is_characterized_by_rapid_exhaustion: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        volume: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        switchability: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
    })
})