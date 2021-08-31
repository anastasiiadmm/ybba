import moment from "moment";

export const transformDateFormat = (date, from, to) => {
    return moment(date, from).format(to);
}