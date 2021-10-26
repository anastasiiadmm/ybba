/**
 * Function to specify additional classes depending on bool values
 * @param {string} defaultClasses Default classes which anyway will returns in result classes string
 * @param {object} additionalClassesObject {"class": !!0 === false} example object, which says that class "class" will be added in result classes string
 * @returns {string} Result classes string
 */
export const addClasses = (defaultClasses, additionalClassesObject) => {
    let classes = defaultClasses
    Object.values(additionalClassesObject).forEach((isClassTrue, index) => {
        if (isClassTrue) {
            const className = Object.keys(additionalClassesObject)[index]
            classes += ` ${className}`
        }
    })
    return classes
}