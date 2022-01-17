import {getObject, stringToColour} from "../helper/helper";
import {createCanvas} from "canvas";

const setDrawObject = (req, res, next) => {
    const { name, shape, size } = req

    const height = shape === 'Circle' ? Math.max(...size) * 3: size[0]
    const width = shape === 'Circle' ? Math.max(...size) * 3: size[1]

    const COLOR = stringToColour(name)
    const CANVAS = createCanvas(width, height)

    const shapeObject = getObject(shape, name, COLOR, size, CANVAS)

    shapeObject.then(object => {
        req.draw = object.draw()
        next()
    })
}

export default setDrawObject