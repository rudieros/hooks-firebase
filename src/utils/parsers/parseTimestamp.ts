export const parseTimestamp = (timestamp: number) => {
    const date = new Date(timestamp),
    datevalues = [
    date.getFullYear(),
    date.getMonth()+1,
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
];
return datevalues
}

export const timestampToString = (timestamp: number) => {
    const date = parseTimestamp(timestamp)
    return `${date[2]}/${date[1]}/${date[0]} ${date[3]}:${date[4]}`
}