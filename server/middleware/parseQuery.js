const parseQuery = (req, res, next) => {

    const query = req.query

    //default values
    let shape = 'Circle'
    let size = '75'

    if (query.hasOwnProperty('shape') && query.shape.trim() !== '') {
        shape = query.shape.capitalize()
    }

    if (query.hasOwnProperty('size') && query.size.trim() !== '') {
        size = query.size
    }

    req.shape = shape
    req.size = size
    req.name = req.query.name

    next()
}

export default parseQuery;
