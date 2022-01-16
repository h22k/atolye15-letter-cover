import {getObject, stringToColour} from "../helper/helper";
import {createCanvas} from "canvas";

const setDrawObject = (req, res, next) => {
    const { name, shape, size } = req

    const height = 1080
    const width = 1920

    const shapeObject = getObject(shape, name, stringToColour(name), size, createCanvas(width, height))

    shapeObject.then(object => {
        req.draw = object.draw()
        next()
    })
}

export default setDrawObject