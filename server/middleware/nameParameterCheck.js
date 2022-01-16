const isQueryHasNameParameter = (req, res, next) => {
    const queries = req.query

    if ( ! queries.hasOwnProperty('name')) {
        throw new Error('The name param required!')
    }

    queries.name = queries.name.trim()

    if (queries.name === '') {
        throw new Error('The name param cannot be empty!')
    }

    if (/\d/.test(queries.name)) {
        throw new Error('The name param cannot contains number!')
    }

    const names = queries.name.split(' ')

    if (names.length < 2) {
        throw new Error('The name param must has at least 2 word')
    }

    next()
}

export default isQueryHasNameParameter