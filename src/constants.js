export const GAME_FILE_TYPE_LOADER = 'file_loader'
export const GAME_FILE_TYPE_DATA = 'file_data'
export const GAME_FILE_TYPE_FRAMEWORK = 'file_framework'
export const GAME_FILE_TYPE_WASM = 'file_wasm'

export const LESSON_STATUS_NEW = 'new'
export const LESSON_STATUS_PENDING = 'pending'
export const LESSON_STATUS_ON = 'process'
export const LESSON_STATUS_FINISHED = 'finished'

export const jitsiTools = {
    mic: 'microphone',
    camera: 'camera'
}

export const MUTE_AUDIO = 'AudioMute';
export const PAUSE_GAME = 'PauseEnable';
export const RESTART_GAME = 'Restart';
export  const NEXT_ACTION = 'NextAction';
export const PREV_ACTION = 'PrevAction';
export const NEXT_GAME = 'NextGame';
export const PREV_GAME = 'PrevGame';

export const gameActions = {
    MUTE_AUDIO: MUTE_AUDIO,
    PAUSE_GAME: PAUSE_GAME,
    RESTART_GAME: RESTART_GAME,
    NEXT_ACTION: NEXT_ACTION,
    PREV_ACTION: PREV_ACTION,
    NEXT_GAME: NEXT_GAME,
    PREV_GAME: PREV_GAME,
}

export const userRoles = {
    therapist: 'therapist',
    parent: 'parent'
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
export const namesOfDaysOfWeekShort = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
export const namesOfDaysOfWorkWeekShort = ['Пон', 'Вт', 'Ср', 'Чт', 'Пт']

export const shortNamesOfMonths = ['Янв', 'Февр', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Ноябрь', 'Дек']
export const namesOfMonths = [
    'Январь', 'Февраль', 'Март', 'Апрель',
    'Май', 'Июнь', 'Июль', 'Август',
    'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
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
    development: 'development'
}