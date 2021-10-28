/**
 * [someFunction description]
 * @param  {moment} start start of range
 * @param  {moment} end   end of range
 * @return {[moment]}     array of dates between "start" and "end"
 */
export const generateDateRange = (start, end) => {
    const dates = []
    const date = start.clone()

    while (date.isSameOrBefore(end)) {
        dates.push(date.clone())
        date.add(1, 'days')
    }

    return dates
}