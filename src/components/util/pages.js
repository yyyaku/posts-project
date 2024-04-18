export const getPagesCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const getArrayPages = (totalPages) => {
    const result = []
    
    for (let index = 0; index < totalPages; index++) {
        result.push(index + 1)      
    }

    return result
}