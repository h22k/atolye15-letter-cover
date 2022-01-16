import {existsSync, readFileSync} from 'fs'
const checkParams = (req, res, next) => {

    const shape = req.shape.capitalize()
    let numbersOfSize = req.size.split('x')

    const MAX_HEIGHT = 1080
    const MAX_WIDTH = 1920

    if ( ! existsSync(`${__dirname}/../shapes/${shape}.js`)) {
        throw new Error(`The shape {${shape}} is not exists`)
    }

    if (numbersOfSize.length > 2) {
        throw new Error('The size that is accepted are this formats: 150 OR 150x150')
    }

    numbersOfSize.forEach((e, key) => {
        if (isNaN(e)) {
            throw new Error('Every size should be an integer!')
        }
        numbersOfSize[key] = parseInt(e)
    })

    if (numbersOfSize.length < 2) {
        if (numbersOfSize[0] > MAX_HEIGHT) {
            throw new
            Error(`First parameter of size is the short side (for +4 sides) and it can not be bigger than ${MAX_HEIGHT}`)
        }
        numbersOfSize.push(numbersOfSize[0])
    }

    if (numbersOfSize[1] > MAX_WIDTH) {
        throw new
        Error(`Second parameter of size is the long side (for +4 sides) and it can not be bigger than ${MAX_WIDTH}`)
    }

    req.size = numbersOfSize

    next()
}

export default checkParams