import moment from 'moment';
import 'moment/locale/ru.js'

import config from 'config';
import { dateNameOfMonth } from 'constants.js';

/**
 * Sync function to get human readable format of current time of day
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
 * Sync function returns current date
 * @returns {string} Current date in format 'LLL'
 */
export const getNowDate = () => {
    return moment().format('LLL')
}

/**
 * Sync function converts string date to moment date object
 * @param {string} date String date to convert
 * @returns {moment.Moment} Moment date object
 */
export const strDateToMoment = date => {
    return moment(date, config.dateFormat)
}

/**
 * Sync function converts string date time to moment date object
 * @param {string} date String date time to convert
 * @returns {moment.Moment} Moment date object
 */
export const strDateTimeToMoment = date => {
    return moment(date, `${config.dateFormat} ${config.timeFormat}`)
}

/**
 * Sync function converts moment date to string
 * @param {moment.Moment} date
 * @returns {string}
 */
export const momentDateToStr = date => {
    return moment(date).format(config.dateFormat)
}

/**
 * Sync function converts moment time to string
 * @param {moment.Moment} time
 * @returns {string}
 */
export const momentTimeToStr = (time) => {
    return moment(time, 'H:m:s').format('H:mm')
}

/**
 * Sync function converts string time to moment date object
 * @param {string} time Time to convert to moment time object
 * @returns {moment.Moment} Moment time object
 */
export const strTimeToMoment = time => {
    return moment(time, config.timeFormat)
}

/**
 * Sync function returns current date in moment
 * @returns {moment.Moment}
 */
export const getCurrentDate = () => {
    return moment(moment().format(config.dateFormat), config.dateFormat)
}

/**
 * Sync function returns current time in "moment" format
 * @returns {moment.Moment}
 */
export const getCurrentTime = () => {
    return strTimeToMoment(moment().format(config.timeFormat))
}

/**
 * Sync function returns array of moment dates between "start" and "end"
 * @param {moment.Moment} start Start of range
 * @param {moment.Moment} end End of range
 * @returns {moment.Moment[]}
 */
export const getDateRange = (start, end) => {
    let diff = end.diff(start, 'days')

    const dates = []
    for (let i = 0; i < diff+1; i++) {
        dates.push(moment(start).add(i, 'day'))
    }

    return dates
}

/**
 * Sync function return bool value which shows if date is valid
 * @param {moment.Moment} d
 * @returns {boolean}
 */
export const isValidDate = (d) => d instanceof Date && !isNaN(d)

/**
 * Sync function returns human readable format of date
 * @param date Moment date
 * @returns {string}
 */
export const momentDateToHuman = date => {
    return `${date.date()} ${dateNameOfMonth[date.month()]} ${date.year()}`
}

/**
 * Sync function returns humanized age (10 лет/2 года/1 год)
 * @param {number} age
 */
export const getHumanizeAge = age => {
    if (age < 1) {
        return `меньше 1 года`
    }

    const lastDigitOfAge = age % 10

    if (lastDigitOfAge < 1 || lastDigitOfAge > 4) {
        return `${parseInt(age)} лет`
    } else if (lastDigitOfAge === 1) {
        return `${parseInt(age)} год`
    } else if (lastDigitOfAge > 1 && lastDigitOfAge < 5) {
        return `${parseInt(age)} года`
    } else {
        return 'Wrong age'
    }
}