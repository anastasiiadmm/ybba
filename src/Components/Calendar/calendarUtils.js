const generateArrayOfNumbers = (from, to) => {
    const array = []
    for (let i = from; i <= to; i++) {
        array.push(i)
    }
    return array
}

export const getDaysArray = (month, year) => {
    if (!month || !year) {
        return generateArrayOfNumbers(1, 31)
    }
    const daysNumber = new Date(year, month, 0).getDate()
    return generateArrayOfNumbers(1, daysNumber)
}

export const getYearsArray = (from, to) => {
    return generateArrayOfNumbers(from, to)
}