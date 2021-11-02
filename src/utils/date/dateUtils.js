import moment from 'moment';
import 'moment/locale/ru.js'

import config from 'config';

/**
 * Function to get human readable format of current time of day
 * @returns {string} current time of day ('утро', 'день', 'вечер', 'ночь')
 */
export const getTimesDay = () => {
    const hour = moment().hour()
    if (hour >= 6 && hour < 12) {
        return 'утро';
    } else if (hour >= 12 && hour < 16) {
        return 'день';
    } else if (hour >= 16 && hour <= 22) {
        return 'вечер';
    } else {
        return 'ночь';
    }
}

/**
 * Returns current date
 * @returns {string} Current date in format 'LLL'
 */
export const getNowDate = () => {
    return moment().format('LLL')
}

/**
 * Converts string date to moment date object
 * @param {string} date String date to convert
 * @returns {moment.Moment} Moment date object
 */
export const strDateToMoment = date => {
    return moment(date, config.dateFormat)
}

/**
 * Converts string time to moment date object
 * @param {string} time Time to convert to moment time object
 * @returns {moment.Moment} Moment time object
 */
export const strTimeToMoment = time => {
    return moment(time, config.timeFormat)
}

/**
 * Returns current date in moment
 * @returns {moment.Moment}
 */
export const getCurrentDate = () => {
    return moment(moment().format(config.dateFormat), config.dateFormat)
}

/**
 * Returns current time in "moment" format
 * @returns {moment.Moment}
 */
export const getCurrentTime = () => {
    return strTimeToMoment(moment().format(config.timeFormat))
}