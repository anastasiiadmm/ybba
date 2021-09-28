export const toQueryParams = (obj) => {
    const array = Object.entries(obj).map(data => {
        const [key, value] = data
        return `${key}=${value}`
    })
    return `?${array.join('&')}`
}