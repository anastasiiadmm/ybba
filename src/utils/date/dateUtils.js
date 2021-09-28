import moment from 'moment';
import 'moment/locale/ru.js'

import config from '../../config';


export const transformDateFormat = (date, from, to) => {
    return moment(date, from).format(to);
}

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

export const getNowDate = () => {
    return moment().format('LLL')
}

export const strDateToMoment = date => {
    return moment(date, config.dateFormat)
}

export const strTimeToMoment = date => {
    return moment(date, config.timeFormat)
}