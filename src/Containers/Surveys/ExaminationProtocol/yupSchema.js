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
    general_ideas_about_the_world_around_comment: yup.string()
        .required(requiredFieldErrorText)
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
            .required(true)
            .nullable(true),
        in_which_of_words_there_is_no_sound_about_nose_of_cat_poppy: yup.string()
            .required(true)
            .nullable(true),
        phonemic_hearing_expert_comment: yup.string()
            .required(requiredFieldErrorText)
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
        expert_comment: yup.string()
            .required(requiredFieldErrorText)
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
        expert_comment: yup.string()
            .required(true)
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
        expert_comment: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
    }),
    game_how_the_mouse_could_not_sleep: yup.object().shape({
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
        expert_comment: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
    }),
    game_ant_battle: yup.object().shape({
        fence: yup.string()
            .required(true)
            .nullable(true),
        spatula: yup.string()
            .required(true)
            .nullable(true),
        needle: yup.string()
            .required(true)
            .nullable(true),
        watch: yup.string()
            .required(true)
            .nullable(true),
        swing: yup.string()
            .required(true)
            .nullable(true),
        tone: yup.string()
            .required(true)
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
        expert_comment: yup.string()
            .required(requiredFieldErrorText)
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
            .required(true)
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
            .required(true)
            .nullable(true),
        decrease_in_strength: yup.boolean()
            .nullable(true),
        impaired_coordination_of_movement_ataxia: yup.boolean()
            .nullable(true),
        hand_coordination_crashes: yup.boolean()
            .nullable(true),
        motor_shifting_difficulties: yup.boolean()
            .nullable(true),
        body_schema_disorders: yup.boolean()
            .nullable(true),
        disorders_of_hand_eye_coordination: yup.boolean()
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
            .required(true)
            .nullable(true),
        split_tongue: yup.boolean()
            .nullable(true),
        shortened_hyoid_fold: yup.boolean()
            .nullable(true),
        anomalies_of_frenum_of_upper_lower_lip: yup.string()
            .required(true)
            .nullable(true),
        cleft: yup.string()
            .required(true)
            .nullable(true),
        gothic_palate: yup.boolean()
            .nullable(true),
        jaw_deformities: yup.boolean()
            .nullable(true),
    }),
    game_on_the_farm: yup.object().shape({
        expert_comment: yup.string()
            .required(requiredFieldErrorText)
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
        to_the_right_of_the_kennel: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        on_the_branch_above_misha: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        to_the_left_of_the_tree: yup.string()
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
        expert_comment: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
    }),
})

examinationProtocolSchema = examinationProtocolSchema.test(
    'choicesTest',
    null,
    (obj) => {
        if (obj.game_pictures_for_fish.sibilant_parasigmatism || obj.game_pictures_for_fish.replacing_s_with || obj.game_pictures_for_fish.replacing_s_soft_with
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
        if (obj.game_pictures_for_fish.replacing_shch_to || obj.game_pictures_for_fish.replacing_zh_to || obj.game_pictures_for_fish.replacing_sh_to
            || obj.game_pictures_for_fish.pristine_sigmatism || obj.game_pictures_for_fish.hissing_nasal_sigmatism || obj.game_pictures_for_fish.hissing_sigmatism_two
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
        if (obj.game_giraffe.throat_rotacism || obj.game_giraffe.replacing_p_with || obj.game_giraffe.replacing_p_soft_with
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
        if (obj.game_giraffe.interdental_lambdacism || obj.game_giraffe.replacing_l_with || obj.game_giraffe.replacing_l_soft_with
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
        if (obj.game_ant_battle.deviation_of_the_tongue || obj.game_ant_battle.hyperkinesis_of_the_tongue ||
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
        if (obj.game_ant_battle.hypomimia || obj.game_ant_battle.smoothness_of_nasolabial_fold ||
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
        if (obj.game_ant_battle.decrease_in_strength || obj.game_ant_battle.impaired_coordination_of_movement_ataxia ||
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
        if (obj.game_ant_battle.body_schema_disorders || obj.game_ant_battle.disorders_of_hand_eye_coordination) {
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
        if (obj.game_ant_battle.orolingual || obj.game_ant_battle.opto_lingual) {
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
        if (obj.game_ant_battle.split_tongue || obj.game_ant_battle.shortened_hyoid_fold) {
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
        if (obj.game_ant_battle.gothic_palate || obj.game_ant_battle.jaw_deformities) {
            return true;
        } else {
            return new yup.ValidationError('Выберите хотя бы один из вариантов', null, 'choices12');
        }
    }
)
