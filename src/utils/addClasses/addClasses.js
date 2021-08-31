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