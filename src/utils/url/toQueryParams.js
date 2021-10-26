/**
 * Returns query string form object
 * @param {object} obj Object to convert it to query string
 * @returns {string}
 */
export const toQueryParams = (obj) => {
    const array = Object.entries(obj).map(data => {
        const [key, value] = data
        return `${key}=${value}`
    })
    return `?${array.join('&')}`
}