export const cleanInput = (input: any) => {
    return Object.keys(input).reduce((previousValue, currentValue) => {
        if (input[currentValue] !== undefined) {
            return { ...previousValue, [currentValue]: input[currentValue] }
        }
        return previousValue
    }, {})
}