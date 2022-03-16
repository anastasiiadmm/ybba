import { appLanguages } from 'constants.js';
import config from 'config';

/**
 * Get language index for Unity game
 *
 * @returns {Number} 0 - russian; 1 - english
 */
export const getGameLanguage = () =>  {
  return appLanguages[config.appLang];
}

export const checkAppLang = (lang) => {
  return config.appLang === lang;
}