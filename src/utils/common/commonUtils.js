import config from 'config.js';
import { lessonTestIds } from '../../constants';


/**
 * Sync function to check current app environment
 * @param {string} env
 * @returns {boolean}
 */
export const checkEnv = env => {
    return config.appEnvironment === env
}

/**
 * Sync function to lowercase first letter
 * @param string
 * @returns {string}
 */
export const lowercaseFirstLetter = (string) => {
    return string.charAt(0).toLocaleLowerCase() + string.slice(1);
}

export const isTestLesson = (lessonId) => {
    return lessonTestIds[config.appEnvironment] === lessonId;
}