import { useState } from 'react';

export const GAME_FILE_TYPE_LOADER = 'file_loader'
export const GAME_FILE_TYPE_DATA = 'file_data'
export const GAME_FILE_TYPE_FRAMEWORK = 'file_framework'
export const GAME_FILE_TYPE_WASM = 'file_wasm'
export const GAME_FOLDER_STREAMING_ASSETS = 'steaming_assets_folder'

export const LESSON_STATUS_NEW = 'new'
export const LESSON_STATUS_PENDING = 'pending'
export const LESSON_STATUS_ON = 'process'
export const LESSON_STATUS_FINISHED = 'finished'

export const jitsiTools = {
    mic: 'microphone',
    camera: 'camera'
}

export const UNITY_CONTEXT = 'UNITY_CONTEXT';
export const ACTIVE_GAME = 'ACTIVE_GAME';
export const IS_UNITY_INITIALIZED = 'IS_UNITY_INITIALIZED';
export const IS_TEACHER_HAVE_CONTROL_ON_GAME = 'IS_TEACHER_HAVE_CONTROL_ON_GAME';
export const IS_DISPLAY_RESTART = 'IS_DISPLAY_RESTART';
export const IS_GAME_TIP_OPEN = 'IS_GAME_TIP_OPEN';
export const IS_GAME_MUTED = 'IS_GAME_MUTED';
export const IS_MUTED = 'IS_MUTED';

export const lessonProperties = {
    UNITY_CONTEXT,
    ACTIVE_GAME,
    IS_TEACHER_HAVE_CONTROL_ON_GAME,
    IS_UNITY_INITIALIZED,
    IS_DISPLAY_RESTART,
    IS_GAME_TIP_OPEN,
    IS_GAME_MUTED,
    IS_MUTED,
};

export const IS_INTRO_BUTTON_VISIBLE = 'IS_INTRO_BUTTON_VISIBLE';
export const IS_NEXT_BUTTON_VISIBLE = 'IS_NEXT_BUTTON_VISIBLE';
export const IS_PREV_BUTTON_VISIBLE = 'IS_PREV_BUTTON_VISIBLE';
export const IS_REPEAT_BUTTON_VISIBLE = 'IS_REPEAT_BUTTON_VISIBLE';
export const buttonVisibleStatuses = {
    IS_INTRO_BUTTON_VISIBLE,
    IS_NEXT_BUTTON_VISIBLE,
    IS_PREV_BUTTON_VISIBLE,
    IS_REPEAT_BUTTON_VISIBLE,
};

export const TEACHER_MOD = 'TeacherMode';
export const START_GAME = 'GameStart';
export const RESTART_GAME = 'Restart';
export const INTRO_SOUND = 'IntroSound';
export const REPEAT = 'Repeat';
export const NEXT_ACTION = 'Next';
export const PREV_ACTION = 'StepBack';
export const UN_MUTE_GAME_SOUND = 'UnMuteBackgroundSound';
export const MUTE_GAME_SOUND = 'MuteBackgroundSound'

export const gameActions = {
    TEACHER_MOD,
    START_GAME,
    RESTART_GAME,
    INTRO_SOUND,
    REPEAT,
    NEXT_ACTION,
    PREV_ACTION,
    UN_MUTE_GAME_SOUND,
    MUTE_GAME_SOUND,
}

export const userRoles = {
    therapist: 'therapist',
    parent: 'parent',
    admin: 'admin'
}

export const lessonStatuses = {
    new: 'new',
    pending: 'pending',
    process: 'process',
    finished: 'finished'
}

export const lessonTypes = {
    usual: 'usual',
    diagnostic: 'diagnostic'
}

export const namesOfDaysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение']
export const namesOfDaysOfWeekShort = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
export const shortNamesOfMonths = ['Янв', 'Февр', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Ноябрь', 'Дек']
export const namesOfMonths = [
    'Январь', 'Февраль', 'Март', 'Апрель',
    'Май', 'Июнь', 'Июль', 'Август',
    'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
]
export const dateNameOfMonth = [
    'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'
]

export const phoneticTableOneMapping = {
    s: 'с',
    s_soft: 'c\'',
    z: 'з',
    z_soft: 'з\'',
    ts: 'ц',
    sh: 'ш',
    zh: 'ж',
    ch: 'ч',
    shch: 'щ',
    l: 'л',
    l_soft: 'л\'',
    r: 'р',
    r_soft: 'p\'',
    n: 'н',
    n_soft: 'н\'',
    m: 'м',
    m_soft: 'м\'',
    j: 'й'
}

export const phoneticTableTwoMapping = {
    t: 'т',
    t_soft: 'т\'',
    d: 'д',
    d_soft: 'д\'',
    k: 'к',
    k_soft: 'к\'',
    g: 'г',
    g_soft: 'г\'',
    kh: 'х',
    kh_soft: 'х\'',
    v: 'в',
    v_soft: 'в\'',
    f: 'ф',
    f_soft: 'ф\'',
    a: 'а',
    o: 'о',
    u: 'у',
    y: 'ы',
    e: 'э',
    i: 'и',
}

export const envs = {
    local: 'local',
    development: 'development',
    staging: 'staging',
    production: 'production'
}

export const apiPath = '/api/v1'
export const wsPath = '/ws'

export const domains = {
    [envs.local]: 'localhost',
    [envs.development]: 'dev.yba.ltestl.com',
    [envs.staging]: 'staging.yba.ltestl.com',
    [envs.production]: 'diagnostika.pro'
}

export const frontUrls = {
    [envs.local]: `http://${domains[envs.local]}:3000`,
    [envs.development]: `https://${domains[envs.development]}`,
    [envs.staging]: `https://${domains[envs.staging]}`,
    [envs.production]: `https://${domains[envs.production]}`
}

export const serverUrls = {
    [envs.local]: `http://${domains[envs.local]}:8000`,
    [envs.development]: `https://${domains[envs.development]}`,
    [envs.staging]: `https://${domains[envs.staging]}`,
    [envs.production]: `https://${domains[envs.production]}`
}

export const apiUrls = {
    [envs.local]: `${serverUrls[envs.local]}${apiPath}`,
    [envs.development]: `${serverUrls[envs.development]}${apiPath}`,
    [envs.staging]: `${serverUrls[envs.staging]}${apiPath}`,
    [envs.production]: `${serverUrls[envs.production]}${apiPath}`
}

export const wsUrls = {
    [envs.local]: `ws://172.17.0.1:8080${wsPath}`,
    [envs.development]: `wss://${domains[envs.development]}${wsPath}`,
    [envs.staging]: `wss://${domains[envs.staging]}${wsPath}`,
    [envs.production]: `wss://${domains[envs.production]}${wsPath}`
}

export const permissionStates = {
    granted: 'granted',
    denied: 'denied',
    prompt: 'prompt'
}

export const deviceTypes = {
    tablet: 'tablet',
    mobile: 'mobile',
    desktop: 'desktop'
}

export const examinationProtocolStatuses = {
    open: 'open',
    closed: 'closed'
}

export const gameUserRoles = {
    [userRoles.therapist]: 1,
    [userRoles.parent]: 2,
}

export const speechCardStatuses = {
    open: 'open',
    closed: 'closed'
}

export const relationOfProtocolToSpeechCard = {
    'main_complaints_from_parents': 'what_are_your_complaints',
    'for_what_purpose_did_you_turn_to_a_speech_therapist': 'for_what_purpose_did_you_turn_to_a_speech_therapist',
    'sat_in': 'additional_information.sat_in',
    'crawled_on_all_fours_into': 'additional_information.crawled_on_all_fours_into',
    'went_to': 'additional_information.went_to',
    'learned_to_jump_on_two_legs_in': 'additional_information.learned_to_jump_on_two_legs_in',
    'injury_infection_before_during_and_or_after_childbirth': 'additional_information.injury_infection_before_during_and_or_after_childbirth',
    'babbling_in': 'additional_information.babbling_in',
    'first_words_in': 'additional_information.first_words_in',
    'first_short_phrases_in': 'additional_information.first_short_phrases_in',
    'speech_environment': 'additional_information.speech_environment',
    'neurological_status': 'additional_information.neurological_status',
    'vision': 'additional_information.vision',
    'hearing': 'additional_information.hearing',
    'eating_behavior': 'additional_information.eating_behavior',
    'present_and_past_diseases': 'additional_information.present_and_past_diseases',
    'drug_treatment': 'additional_information.drug_treatment',
    'emotional_and_psychological_level': 'additional_information.emotional_and_psychological_level',
    'emotional_background_during_class': 'game_on_the_farm_part_three.fatigue',
    'motivation_and_interest': 'game_on_the_farm_part_three.options_for_confinement_psychological_basis',
    'formation_of_ideas_about_world_around': 'stock_of_knowledge_about_the_world_around',
    'in_a_time_space_situation': 'in_a_time_space_situation',
    'image_i': 'image_i',
    'somatognosis': 'somatognosis_understanding_your_own_body',
    'speech_comprehension_level': 'game_on_the_farm.speech_comprehension_level',
    'level_of_vocabulary_formation': 'game_on_the_farm.level_of_vocabulary_formation',
    'active_semantic_component_active_vocabulary': 'game_on_the_farm.active_semantic_component_active_vocabulary',
    'volume_vocabulary': 'game_on_the_farm.vocabulary_size',
    'system_organization_of_dictionary_associative_links': 'game_on_the_farm.systemic_vocabulary_organization',
    'level_of_grammatical_competence_formation': 'game_on_the_farm_part_two.level_of_grammatical_competence_formation',
    'inflectional_skills_and_abilities_part_one': 'game_on_the_farm_part_two.inflectional_skills_and_abilities_part_one',
    'word_building_skills_and_abilities': 'game_on_the_farm_part_two.word_building_skills_and_abilities',
    'syntactic_skills_and_abilities': 'game_on_the_farm_part_two.level_of_grammatical_competence_formation',
    'level_of_formation_of_phonetic_phonological_competence': 'game_magic_exam.level_of_formation_of_phonetic_phonological_competence',
    'state_of_phonemic_perception': 'game_magic_exam.state_of_phonemic_perception',
    'state_of_phonemic_hearing': 'game_magic_exam.phonemic_hearing',
    'formation_of_the_skills_of_sound_analysis_and_synthesis': 'game_magic_exam.phonemic_hearing',
    'syllabic_structure_of_a_word': 'game_capricious_princess.syllabic_structure_of_a_word',
    'sound_articulating_side_of_speech': 'game_puzzle.wolf_scoop_fork_scroll',
    'prosodic_side_of_speech_game_on_the_farm_part_three': 'game_on_the_farm_part_three.prosodic_side_of_speech',
    'voice': 'game_on_the_farm_part_three.voice',
    'smoothness': 'game_on_the_farm_part_three.smoothness',
    'pace': 'game_on_the_farm_part_three.pace',
    'speech_game_on_the_farm_part_three': 'game_on_the_farm_part_three.speech',
    'breath_game_on_the_farm_part_three': 'game_on_the_farm_part_three.breath',
    'rhythm_game_on_the_farm_part_three': 'game_on_the_farm_part_three.rhythm',
    'inspiratory_expiratory_differentiation': 'game_on_the_farm_part_three.inspiratory_expiratory_differentiation',
    'understanding_the_text_game_how_the_mouse_could_not_sleep': 'game_how_the_mouse_could_not_sleep.content_semantic_meaning_of_text',
    'text_production': 'game_how_the_mouse_could_not_sleep.constructing_a_statement',
    'reproduction_of_text_game_how_the_mouse_could_not_sleep': 'game_how_the_mouse_could_not_sleep.retelling_corresponds_to_original',
    'articulation_apparatus_structure_game_how_the_mouse_could': 'game_ant_battle.lips',
    'articulation_apparatus_structure': 'game_ant_battle.lips',
    'basic_motor_skills_and_state_of_coordinating_sphere': 'game_ant_battle.basic_motor_skills',
    'bilateral_motor_coordination': 'conclusion_options',
    'leading_ear': 'leading_ear_phone',
    'leading_hand': 'leading_hand_phone',
    'leading_eye': 'leading_eye_spyglass',
    'leading_leg': 'leading_leg_ball',
    'motor_functions_of_hands_and_fingers': 'game_ant_battle.motor_functions_of_hands_and_fingers',
    'verbal_memory': 'game_pictures_for_fish.verbal_memory',
    'thinking_verbal_and_non_verbal_intelligence': 'game_giraffe.thinking',
    'simultaneous_visual_perception': 'game_puzzle.perception',
    'attention': 'game_on_the_farm_part_three.speech_comprehension',
}
