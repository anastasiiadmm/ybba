export const generateDateRange = (start, end) => {
    const dates = []
    const date = start.clone()

    while (date.isSameOrBefore(end)) {
        dates.push(date.clone())
        date.add(1, 'days')
    }

    return dates
}