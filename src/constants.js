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

export const MUTE_AUDIO = 'AudioMute';
export const PAUSE_GAME = 'PauseEnable';
export const RESTART_GAME = 'Restart';
export  const NEXT_ACTION = 'Next';
export const PREV_ACTION = 'StepBack';
export const NEXT_GAME = 'NextGame';
export const PREV_GAME = 'PrevGame';
export const INTRO_SOUND = 'IntroSound';
export const TEACHER_MOD = 'TeacherMode';

export const gameActions = {
    MUTE_AUDIO: MUTE_AUDIO,
    PAUSE_GAME: PAUSE_GAME,
    RESTART_GAME: RESTART_GAME,
    NEXT_ACTION: NEXT_ACTION,
    PREV_ACTION: PREV_ACTION,
    NEXT_GAME: NEXT_GAME,
    PREV_GAME: PREV_GAME,
    INTRO_SOUND: INTRO_SOUND,
    TEACHER_MOD: TEACHER_MOD,
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
