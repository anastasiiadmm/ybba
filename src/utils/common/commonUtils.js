import config from 'config.js';


/**
 * Sync function to check current app environment
 * @param {string} env
 * @returns {boolean}
 */
export const checkEnv = env => {
    return config.appEnvironment === env
}