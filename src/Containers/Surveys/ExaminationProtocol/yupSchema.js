import * as yup from 'yup'

const requiredFieldErrorText = 'Обязательное поле'

export let examinationProtocolSchema = yup.object().shape({
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
        there_are_difficulties_in_distinguishing: yup.boolean()
            .nullable(true),
        distinction_between_hard_and_soft_consonants: yup.boolean()
            .nullable(true),
        distinction_between_affricates_and_their_constituent: yup.boolean()
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
        dyspraxic_disturbances_are_not_observed: yup.boolean()
            .nullable(true),
        missing_syllables: yup.boolean()
            .nullable(true),
        missing_syllabic_vowels: yup.boolean()
            .nullable(true),
        permutations_of_sounds_and_or_syllables: yup.boolean()
            .nullable(true),
        insertion_of_vowels_into_consonants: yup.boolean()
            .nullable(true),
        adding_syllables: yup.boolean()
            .nullable(true),
        gnostic_disturbances_are_not_observed: yup.boolean()
            .nullable(true),
        consonant_reduction: yup.boolean()
            .nullable(true),
        inserting_consonants_into_a_syllable: yup.boolean()
            .nullable(true),
        anticipation: yup.boolean()
            .nullable(true),
        assimilation_of_syllables: yup.boolean()
            .nullable(true),
        gnotic_violations_addition_of_syllables: yup.boolean()
            .nullable(true),
    }),
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
        sounds_p_and_pb_are_pronounced_normatively_rotacism: yup.boolean()
            .nullable(true),
        throat_rotacism: yup.boolean()
            .nullable(true),
        replacing_p_with: yup.string()
            .nullable(true),
        replacing_p_soft_with: yup.string()
            .nullable(true),
        buccal: yup.boolean()
            .nullable(true),
        side: yup.boolean()
            .nullable(true),
        one_hit_pronunciation: yup.boolean()
            .nullable(true),
        skip: yup.boolean()
            .nullable(true),
        sounds_p_and_pb_are_pronounced_normatively_lambdacism: yup.boolean()
            .nullable(true),
        interdental_lambdacism: yup.boolean()
            .nullable(true),
        replacing_l_with: yup.string()
            .nullable(true),
        replacing_l_soft_with: yup.string()
            .nullable(true),
        nasal: yup.boolean()
            .nullable(true),
        lambdacism_pass: yup.boolean()
            .nullable(true),
        two_lipped: yup.boolean()
            .nullable(true),
        distortion: yup.boolean()
            .nullable(true),
        thinking: yup.string()
            .required(true)
            .nullable(true),
        thinking_part_two: yup.string()
            .required(true)
            .nullable(true),
        kind_of_thinking: yup.string()
            .required(true)
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
        sounds_d_db_are_pronounced_normatively: yup.string()
            .nullable(true),
        sounds_t_tb_are_pronounced_normatively: yup.string()
            .nullable(true),
        nasal: yup.string()
            .nullable(true),
        skip: yup.string()
            .nullable(true),
        replacing_d_with: yup.string()
            .nullable(true),
        replacing_d_soft_with: yup.string()
            .nullable(true),
        replacing_t_with: yup.string()
            .nullable(true),
        replacing_t_soft_with: yup.string()
            .nullable(true),
        interdental_pronunciation: yup.string()
            .nullable(true),
        sounds_k_g_x_are_pronounced_normatively: yup.string()
            .nullable(true),
        replacing_k_with: yup.string()
            .nullable(true),
        replacing_g_with: yup.string()
            .nullable(true),
        replacing_kh_with: yup.string()
            .nullable(true),
        mixing: yup.string()
            .nullable(true),
        distortion: yup.string()
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
        whistling_sounds_are_pronounced_normatively: yup.boolean()
            .nullable(true),
        sibilant_parasigmatism: yup.boolean()
            .nullable(true),
        replacing_s_with: yup.string()
            .nullable(true),
        replacing_s_soft_with: yup.string()
            .nullable(true),
        replacing_z_with: yup.string()
            .nullable(true),
        replacing_z_soft_with: yup.string()
            .nullable(true),
        replacing_c_with: yup.string()
            .nullable(true),
        replacing_ch_with: yup.string()
            .nullable(true),
        prominent_sigmatism: yup.boolean()
            .nullable(true),
        nasal_sigmatism: yup.boolean()
            .nullable(true),
        hissing_sigmatism: yup.boolean()
            .nullable(true),
        lateral_sigmatism: yup.boolean()
            .nullable(true),
        labiodental_pronunciation_of_whistling: yup.boolean()
            .nullable(true),
        skip_whistling_sound: yup.boolean()
            .nullable(true),
        mixing_sounds: yup.boolean()
            .nullable(true),
        interdental_sigmatism: yup.boolean()
            .nullable(true),
        hissing_is_normal: yup.string()
            .nullable(true),
        parasigmatism_of_hissing: yup.string()
            .nullable(true),
        replacing_shch_to: yup.string()
            .nullable(true),
        replacing_zh_to: yup.string()
            .nullable(true),
        replacing_sh_to: yup.string()
            .nullable(true),
        pristine_sigmatism: yup.boolean()
            .nullable(true),
        hissing_nasal_sigmatism: yup.boolean()
            .nullable(true),
        whistling_sigmatism_of_hissing: yup.boolean()
            .nullable(true),
        hissing_sigmatism_two: yup.boolean()
            .nullable(true),
        lateral_sigmatism_two: yup.boolean()
            .nullable(true),
        labiodental_pronunciation_of_sibilants: yup.boolean()
            .nullable(true),
        skip_whistling_sound_two: yup.boolean()
            .nullable(true),
        mixing_sounds_two: yup.boolean()
            .nullable(true),
        verbal_memory: yup.string()
            .required(true)
            .nullable(true),
        verbal_memory_part_two: yup.string()
            .required(true)
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
        sounds_v_vb_are_pronounced_normatively: yup.boolean()
            .nullable(true),
        sounds_f_fb_are_pronounced_normatively: yup.boolean()
            .nullable(true),
        nasal: yup.boolean()
            .nullable(true),
        skip: yup.boolean()
            .nullable(true),
        replacing_with_b: yup.string()
            .nullable(true),
        replacing_with_b_soft: yup.string()
            .nullable(true),
        replacing_with_f: yup.string()
            .nullable(true),
        replacing_with_f_soft: yup.string()
            .nullable(true),
        two_lipped: yup.boolean()
            .nullable(true),
        mixing: yup.boolean()
            .nullable(true),
        distortion: yup.boolean()
            .nullable(true),
        perception: yup.string()
            .required(true)
            .nullable(true),
        level_of_perception: yup.string()
            .required(true)
            .nullable(true),
    }),
    game_how_the_mouse_could_not_sleep: yup.object().shape({
        mouse_in_the_forest: yup.string()
            .required(true)
            .nullable(true),
        mouse_is_eating_an_apple_and_a_berry: yup.string()
            .required(true)
            .nullable(true),
        moon_in_the_reflection_of_the_water_in_a_puddle: yup.string()
            .required(true)
            .nullable(true),
        mouse_covers_the_puddle_with_burdock: yup.string()
            .required(true)
            .nullable(true),
        sun_in_water_reflection_in_a_puddle: yup.string()
            .required(true)
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
            .required(true)
            .nullable(true),
        consistency_with_the_plot: yup.string()
            .required(true)
            .nullable(true),
        topic: yup.string()
            .required(true)
            .nullable(true),
        chronological_event_logic: yup.string()
            .required(true)
            .nullable(true),
        language_means: yup.string()
            .required(true)
            .nullable(true),
        retelling_corresponds_to_original: yup.boolean()
            .nullable(true),
        retelling_contains_both_basic_and_additional_information: yup.boolean()
            .nullable(true),
        retelling_uses_variability_of_speech: yup.boolean()
            .nullable(true),
        retelling_partially_corresponds_to_original: yup.boolean()
            .nullable(true),
        retelling_contains_only_basic_information: yup.boolean()
            .nullable(true),
        vocabulary_and_syntactic_constructions_of_original: yup.boolean()
            .nullable(true),
        coherence_and_consistency_of_presentation_is_not_broken: yup.boolean()
            .nullable(true),
        retelling_does_not_correspond_to_original: yup.string()
            .nullable(true),
        semantic_organization_of_text_is_broken: yup.string()
            .nullable(true),
        coherence_and_consistency_of_presentation_is_broken: yup.string()
            .nullable(true),
        significant_difficulties_in_language_design_of_text: yup.string()
            .nullable(true),
        content_semantic_meaning_of_text: yup.string()
            .required(true)
            .nullable(true),
        understands_only_basic_information_of_text: yup.string()
            .required(true)
            .nullable(true),
    }),
    game_ant_battle: yup.object().shape({
        fence: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        spatula: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        needle: yup.string()
            .required(requiredFieldErrorText)
            .nullable(requiredFieldErrorText),
        mushroom: yup.string()
            .required(requiredFieldErrorText)
            .nullable(requiredFieldErrorText),
        window: yup.string()
            .required(requiredFieldErrorText)
            .nullable(requiredFieldErrorText),
        watch: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        swing: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        horse: yup.string()
            .required(requiredFieldErrorText)
            .nullable(requiredFieldErrorText),
        tone: yup.string()
            .nullable(true),
        deviation_of_the_tongue: yup.boolean()
            .nullable(true),
        hyperkinesis_of_the_tongue: yup.boolean()
            .nullable(true),
        tremor_of_the_tongue: yup.boolean()
            .nullable(true),
        switching_difficulties: yup.boolean()
            .nullable(true),
        pace_of_the_movements: yup.string()
            .required(true)
            .nullable(true),
        raise_eyebrows: yup.string()
            .required(true)
            .nullable(true),
        frown: yup.string()
            .required(true)
            .nullable(true),
        wink: yup.string()
            .required(true)
            .nullable(true),
        puff_out_cheeks: yup.string()
            .required(true)
            .nullable(true),
        facial_muscle_tone: yup.string()
            .nullable(true),
        hypomimia: yup.boolean()
            .nullable(true),
        smoothness_of_nasolabial_fold: yup.boolean()
            .nullable(true),
        asymmetry_of_face: yup.boolean()
            .nullable(true),
        facial_hyperkinesis: yup.boolean()
            .nullable(true),
        synkinesis: yup.boolean()
            .nullable(true),
        lip_muscle_tone: yup.string()
            .required(true)
            .nullable(true),
        hypersalivation: yup.string()
            .required(true)
            .nullable(true),
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
            .required(true)
            .nullable(true),
        basic_motor_skills_part_two: yup.string()
            .required(true)
            .nullable(true),
        disturbances_in_tone: yup.string()
            .nullable(true),
        decrease_in_strength: yup.boolean()
            .nullable(true),
        impaired_coordination_of_movement_ataxia: yup.boolean()
            .nullable(true),
        hand_coordination_crashes: yup.boolean()
            .nullable(true),
        motor_shifting_difficulties: yup.boolean()
            .nullable(true),
        violations_of_certain_aspects_function_not_observed: yup.boolean()
            .nullable(true),
        body_schema_disorders: yup.boolean()
            .nullable(true),
        disorders_of_hand_eye_coordination: yup.boolean()
            .nullable(true),
        friendly_movements_of_synkinesis_not_observed: yup.boolean()
            .nullable(true),
        orolingual: yup.boolean()
            .nullable(true),
        opto_lingual: yup.boolean()
            .nullable(true),
        motor_functions_of_hands_and_fingers: yup.string()
            .required(true)
            .nullable(true),
        lips: yup.string()
            .required(true)
            .nullable(true),
        malocclusion: yup.string()
            .required(true)
            .nullable(true),
        incorrect_position_of_teeth: yup.string()
            .required(true)
            .nullable(true),
        tooth_reshaping: yup.string()
            .required(true)
            .nullable(true),
        changing_size_of_tongue: yup.string()
            .required(true)
            .nullable(true),
        deviation_of_tongue: yup.string()
            .nullable(true),
        split_tongue: yup.boolean()
            .nullable(true),
        shortened_hyoid_fold: yup.boolean()
            .nullable(true),
        anomalies_of_frenum_of_upper_lower_lip: yup.string()
            .required(true)
            .nullable(true),
        cleft: yup.string()
            .nullable(true),
        gothic_palate: yup.boolean()
            .nullable(true),
        jaw_deformities: yup.boolean()
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
    }),
    game_on_the_farm_part_two: yup.object().shape({
        house: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        bucket: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        tree: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        at_home: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        behind_a_tree: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        on_the_roof: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        to_the_left_of_the_kennel: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        on_the_branch_above_misha: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        to_the_right_of_the_tree: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        under_the_boot: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        peeps_out_from_behind_Misha: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        in_front_of_the_trough: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        misha_has_a_hood: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
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
            .nullable(true)
    }),
    game_on_the_farm_part_three: yup.object().shape({
        one_white_chicken: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        three_ginger_hens: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        five_speckled_hens: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        speech_comprehension: yup.string()
            .required(true)
            .nullable(true),
        there_are_difficulties_in_distributing_attention: yup.boolean()
            .nullable(true),
        difficulties_in_distribution_of_attention_are_not_observed: yup.boolean()
            .nullable(true),
        concentration: yup.string()
            .required(true)
            .nullable(true),
        sustainability: yup.string()
            .required(true)
            .nullable(true),
        exhaustion_is_not_observed: yup.boolean()
            .nullable(true),
        child_s_attention_is_characterized_by_rapid_exhaustion: yup.boolean()
            .nullable(true),
        volume: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        switchability: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
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
            .required(true)
            .nullable(true),
        voice_part_two: yup.string()
            .required(true)
            .nullable(true),
        voice_part_three: yup.string()
            .required(true)
            .nullable(true),
        voice_part_four: yup.string()
            .required(true)
            .nullable(true),
        voice_part_five: yup.string()
            .required(true)
            .nullable(true),
        smoothness: yup.string()
            .required(true)
            .nullable(true),
        pace: yup.string()
            .required(true)
            .nullable(true),
        speech: yup.string()
            .required(true)
            .nullable(true),
        breath: yup.string()
            .required(true)
            .nullable(true),
        exhalation: yup.string()
            .required(true)
            .nullable(true),
        hindered: yup.boolean()
            .nullable(true),
        superficial: yup.boolean()
            .nullable(true),
        breathing_is_not_rhythmic: yup.boolean()
            .nullable(true),
        shallow_breath: yup.boolean()
            .nullable(true),
        rhythm: yup.string()
            .required(true)
            .nullable(true),
        expiratory_force: yup.string()
            .required(true)
            .nullable(true),
        inspiratory_expiratory_differentiation: yup.string()
            .required(true)
            .nullable(true),
        prosodic_side_of_speech: yup.string()
            .required(true)
            .nullable(true),
        speech_intonationally: yup.string()
            .required(true)
            .nullable(true),
        violation_of_tempo_rhythmic_organization_of_speech: yup.string()
            .required(true)
            .nullable(true)
    })
})

examinationProtocolSchema = examinationProtocolSchema.test(
    'choicesTest',
    null,
    (obj) => {
        if (obj.game_pictures_for_fish.whistling_sounds_are_pronounced_normatively || obj.game_pictures_for_fish.sibilant_parasigmatism || obj.game_pictures_for_fish.replacing_s_with || obj.game_pictures_for_fish.replacing_s_soft_with
            || obj.game_pictures_for_fish.replacing_z_with || obj.game_pictures_for_fish.replacing_z_soft_with || obj.game_pictures_for_fish.replacing_c_with
            || obj.game_pictures_for_fish.replacing_ch_with || obj.game_pictures_for_fish.prominent_sigmatism || obj.game_pictures_for_fish.nasal_sigmatism
            || obj.game_pictures_for_fish.hissing_sigmatism || obj.game_pictures_for_fish.lateral_sigmatism || obj.game_pictures_for_fish.labiodental_pronunciation_of_whistling
            || obj.game_pictures_for_fish.skip_whistling_sound || obj.game_pictures_for_fish.mixing_sounds || obj.game_pictures_for_fish.interdental_sigmatism) {
            return true;
        } else {
            return new yup.ValidationError('Выберите хотя бы один из вариантов', null, 'choices');
        }
    }
)

examinationProtocolSchema = examinationProtocolSchema.test(
    'choicesTest',
    null,
    (obj) => {
        if (obj.game_pictures_for_fish.hissing_is_normal || obj.game_pictures_for_fish.parasigmatism_of_hissing || obj.game_pictures_for_fish.replacing_shch_to || obj.game_pictures_for_fish.replacing_zh_to || obj.game_pictures_for_fish.replacing_sh_to
            || obj.game_pictures_for_fish.pristine_sigmatism || obj.game_pictures_for_fish.hissing_nasal_sigmatism || obj.game_pictures_for_fish.whistling_sigmatism_of_hissing || obj.game_pictures_for_fish.hissing_sigmatism_two
            || obj.game_pictures_for_fish.lateral_sigmatism_two || obj.game_pictures_for_fish.labiodental_pronunciation_of_sibilants
            || obj.game_pictures_for_fish.skip_whistling_sound_two || obj.game_pictures_for_fish.mixing_sounds_two) {
            return true;
        } else {
            return new yup.ValidationError('Выберите хотя бы один из вариантов', null, 'choices2');
        }
    }
)

examinationProtocolSchema = examinationProtocolSchema.test(
    'choicesTest',
    null,
    (obj) => {
        if (obj.game_giraffe.sounds_p_and_pb_are_pronounced_normatively_rotacism || obj.game_giraffe.throat_rotacism || obj.game_giraffe.replacing_p_with || obj.game_giraffe.replacing_p_soft_with
            || obj.game_giraffe.buccal || obj.game_giraffe.side  || obj.game_giraffe.one_hit_pronunciation
            || obj.game_giraffe.skip) {
            return true;
        } else {
            return new yup.ValidationError('Выберите хотя бы один из вариантов', null, 'choices3');
        }
    }
)

examinationProtocolSchema = examinationProtocolSchema.test(
    'choicesTest',
    null,
    (obj) => {
        if (obj.game_giraffe.sounds_p_and_pb_are_pronounced_normatively_lambdacism || obj.game_giraffe.interdental_lambdacism || obj.game_giraffe.replacing_l_with || obj.game_giraffe.replacing_l_soft_with
            || obj.game_giraffe.nasal || obj.game_giraffe.lambdacism_pass || obj.game_giraffe.two_lipped
            || obj.game_giraffe.distortion) {
            return true;
        } else {
            return new yup.ValidationError('Выберите хотя бы один из вариантов', null, 'choices4');
        }
    }
)

examinationProtocolSchema = examinationProtocolSchema.test(
    'choicesTest',
    null,
    (obj) => {
        if (obj.game_puzzle.sounds_v_vb_are_pronounced_normatively || obj.game_puzzle.sounds_f_fb_are_pronounced_normatively || obj.game_puzzle.nasal || obj.game_puzzle.skip || obj.game_puzzle.replacing_with_b || obj.game_puzzle.replacing_with_b_soft || obj.game_puzzle.replacing_with_f
            || obj.game_puzzle.replacing_with_f_soft || obj.game_puzzle.two_lipped || obj.game_puzzle.mixing || obj.game_puzzle.distortion) {
            return true;
        } else {
            return new yup.ValidationError('Выберите хотя бы один из вариантов', null, 'choices5');
        }
    }
)

examinationProtocolSchema = examinationProtocolSchema.test(
    'choicesTest',
    null,
    (obj) => {
        if (obj.game_ant_battle.tone || obj.game_ant_battle.deviation_of_the_tongue || obj.game_ant_battle.hyperkinesis_of_the_tongue ||
            obj.game_ant_battle.tremor_of_the_tongue || obj.game_ant_battle.switching_difficulties) {
            return true;
        } else {
            return new yup.ValidationError('Выберите хотя бы один из вариантов', null, 'choices6');
        }
    }
)

examinationProtocolSchema = examinationProtocolSchema.test(
    'choicesTest',
    null,
    (obj) => {
        if (obj.game_ant_battle.facial_muscle_tone || obj.game_ant_battle.hypomimia || obj.game_ant_battle.smoothness_of_nasolabial_fold ||
            obj.game_ant_battle.asymmetry_of_face || obj.game_ant_battle.facial_hyperkinesis
            || obj.game_ant_battle.synkinesis) {
            return true;
        } else {
            return new yup.ValidationError('Выберите хотя бы один из вариантов', null, 'choices7');
        }
    }
)

examinationProtocolSchema = examinationProtocolSchema.test(
    'choicesTest',
    null,
    (obj) => {
        if (obj.game_ant_battle.disturbances_in_tone || obj.game_ant_battle.decrease_in_strength || obj.game_ant_battle.impaired_coordination_of_movement_ataxia ||
            obj.game_ant_battle.hand_coordination_crashes || obj.game_ant_battle.motor_shifting_difficulties) {
            return true;
        } else {
            return new yup.ValidationError('Выберите хотя бы один из вариантов', null, 'choices8');
        }
    }
)

examinationProtocolSchema = examinationProtocolSchema.test(
    'choicesTest',
    null,
    (obj) => {
        if (obj.game_ant_battle.violations_of_certain_aspects_function_not_observed || obj.game_ant_battle.body_schema_disorders || obj.game_ant_battle.disorders_of_hand_eye_coordination) {
            return true;
        } else {
            return new yup.ValidationError('Выберите хотя бы один из вариантов', null, 'choices9');
        }
    }
)

examinationProtocolSchema = examinationProtocolSchema.test(
    'choicesTest',
    null,
    (obj) => {
        if (obj.game_ant_battle.friendly_movements_of_synkinesis_not_observed || obj.game_ant_battle.orolingual || obj.game_ant_battle.opto_lingual) {
            return true;
        } else {
            return new yup.ValidationError('Выберите хотя бы один из вариантов', null, 'choices10');
        }
    }
)

examinationProtocolSchema = examinationProtocolSchema.test(
    'choicesTest',
    null,
    (obj) => {
        if (obj.game_ant_battle.deviation_of_tongue || obj.game_ant_battle.split_tongue || obj.game_ant_battle.shortened_hyoid_fold) {
            return true;
        } else {
            return new yup.ValidationError('Выберите хотя бы один из вариантов', null, 'choices11');
        }
    }
)

examinationProtocolSchema = examinationProtocolSchema.test(
    'choicesTest',
    null,
    (obj) => {
        if (obj.game_ant_battle.cleft || obj.game_ant_battle.gothic_palate || obj.game_ant_battle.jaw_deformities) {
            return true;
        } else {
            return new yup.ValidationError('Выберите хотя бы один из вариантов', null, 'choices12');
        }
    }
)

examinationProtocolSchema = examinationProtocolSchema.test(
    'choicesTest',
    null,
    (obj) => {
        if (obj.game_magic_exam.state_of_phonemic_perception || obj.game_magic_exam.there_are_difficulties_in_distinguishing || obj.game_magic_exam.distinction_between_hard_and_soft_consonants
            || obj.game_magic_exam.distinction_between_affricates_and_their_constituent) {
            return true;
        } else {
            return new yup.ValidationError('Выберите хотя бы один из вариантов', null, 'choices13');
        }
    }
)

examinationProtocolSchema = examinationProtocolSchema.test(
    'choicesTest',
    null,
    (obj) => {
        if (obj.game_capricious_princess.dyspraxic_disturbances_are_not_observed || obj.game_capricious_princess.missing_syllables || obj.game_capricious_princess.missing_syllabic_vowels || obj.game_capricious_princess.permutations_of_sounds_and_or_syllables
            || obj.game_capricious_princess.insertion_of_vowels_into_consonants || obj.game_capricious_princess.adding_syllables) {
            return true;
        } else {
            return new yup.ValidationError('Выберите хотя бы один из вариантов', null, 'choices14');
        }
    }
)

examinationProtocolSchema = examinationProtocolSchema.test(
    'choicesTest',
    null,
    (obj) => {
        if (obj.game_capricious_princess.gnostic_disturbances_are_not_observed || obj.game_capricious_princess.consonant_reduction || obj.game_capricious_princess.inserting_consonants_into_a_syllable
            || obj.game_capricious_princess.anticipation || obj.game_capricious_princess.assimilation_of_syllables
            || obj.game_capricious_princess.gnotic_violations_addition_of_syllables) {
            return true;
        } else {
            return new yup.ValidationError('Выберите хотя бы один из вариантов', null, 'choices15');
        }
    }
)

examinationProtocolSchema = examinationProtocolSchema.test(
    'choicesTest',
    null,
    (obj) => {
        if (obj.game_how_the_mouse_could_not_sleep.retelling_corresponds_to_original || obj.game_how_the_mouse_could_not_sleep.retelling_contains_both_basic_and_additional_information ||
            obj.game_how_the_mouse_could_not_sleep.retelling_uses_variability_of_speech || obj.game_how_the_mouse_could_not_sleep.retelling_partially_corresponds_to_original ||
            obj.game_how_the_mouse_could_not_sleep.retelling_contains_only_basic_information || obj.game_how_the_mouse_could_not_sleep.vocabulary_and_syntactic_constructions_of_original ||
            obj.game_how_the_mouse_could_not_sleep.coherence_and_consistency_of_presentation_is_not_broken || obj.game_how_the_mouse_could_not_sleep.retelling_does_not_correspond_to_original ||
            obj.game_how_the_mouse_could_not_sleep.semantic_organization_of_text_is_broken || obj.game_how_the_mouse_could_not_sleep.coherence_and_consistency_of_presentation_is_broken || obj.game_how_the_mouse_could_not_sleep.significant_difficulties_in_language_design_of_text) {
            return true;
        } else {
            return new yup.ValidationError('Выберите хотя бы один из вариантов', null, 'choices16');
        }
    }
)

examinationProtocolSchema = examinationProtocolSchema.test(
    'choicesTest',
    null,
    (obj) => {
        if (obj.game_on_the_farm_part_three.hindered || obj.game_on_the_farm_part_three.superficial
            || obj.game_on_the_farm_part_three.breathing_is_not_rhythmic || obj.game_on_the_farm_part_three.shallow_breath) {
            return true;
        } else {
            return new yup.ValidationError('Выберите хотя бы один из вариантов', null, 'choices19');
        }
    }
)

examinationProtocolSchema = examinationProtocolSchema.test(
    'choicesTest',
    null,
    (obj) => {
        if (obj.game_ant_lambada.sounds_d_db_are_pronounced_normatively || obj.game_ant_lambada.sounds_t_tb_are_pronounced_normatively || obj.game_ant_lambada.nasal || obj.game_ant_lambada.skip
            || obj.game_ant_lambada.replacing_d_with || obj.game_ant_lambada.replacing_d_soft_with
            || obj.game_ant_lambada.replacing_t_with || obj.game_ant_lambada.replacing_t_soft_with || obj.game_ant_lambada.interdental_pronunciation) {
            return true;
        } else {
            return new yup.ValidationError('Выберите хотя бы один из вариантов', null, 'choices20');
        }
    }
)

examinationProtocolSchema = examinationProtocolSchema.test(
    'choicesTest',
    null,
    (obj) => {
        if (obj.game_ant_lambada.sounds_k_g_x_are_pronounced_normatively || obj.game_ant_lambada.replacing_k_with || obj.game_ant_lambada.replacing_g_with
            || obj.game_ant_lambada.replacing_kh_with || obj.game_ant_lambada.mixing
            || obj.game_ant_lambada.distortion) {
            return true;
        } else {
            return new yup.ValidationError('Выберите хотя бы один из вариантов', null, 'choices21');
        }
    }
)

examinationProtocolSchema = examinationProtocolSchema.test(
    'choicesTest',
    null,
    (obj) => {
        if (obj.game_on_the_farm_part_three.there_are_difficulties_in_distributing_attention || obj.game_on_the_farm_part_three.difficulties_in_distribution_of_attention_are_not_observed) {
            return true;
        } else {
            return new yup.ValidationError('Выберите хотя бы один из вариантов', null, 'choices22');
        }
    }
)

examinationProtocolSchema = examinationProtocolSchema.test(
    'choicesTest',
    null,
    (obj) => {
        if (obj.game_on_the_farm_part_three.exhaustion_is_not_observed || obj.game_on_the_farm_part_three.child_s_attention_is_characterized_by_rapid_exhaustion) {
            return true;
        } else {
            return new yup.ValidationError('Выберите хотя бы один из вариантов', null, 'choices23');
        }
    }
)
