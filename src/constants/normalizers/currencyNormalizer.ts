export const currencyNormalizer = (input: string | number | undefined) => {
    const number = currencyNormalizerUndoer(input)
    if (!number) return ''
    let formattedNumber = number.toLocaleString('pt-BR')
    const decimals = formattedNumber.split(',')[1]
    if (!decimals) formattedNumber += ',00'
    else if (decimals.length < 2) formattedNumber += '0'
    return formattedNumber
}

export const currencyNormalizerUndoer = (input: any) => {
    if (!input) return undefined
    if (typeof input === 'number') return input
    return Number(input.split('.').join('').split(',').join('')) / 100 || undefined
}


