import express from "express"
const router = express.Router()
import {createCanvas} from "canvas"
import color from 'color'

//middlewares
import nameParameterCheck from "../middleware/nameParameterCheck"
import parseQuery from "../middleware/parseQuery"
import checkParams from "../middleware/checkParams"
import setDrawObject from "../middleware/setDrawObject"
import errorHandling from '../middleware/errorHandling'
import {adjust, getContrastYIQ, parseName, stringToColour} from '../helper/helper'

router.use(nameParameterCheck)
router.use(parseQuery)
router.use(checkParams)
router.use(setDrawObject)
router.use(errorHandling)

router.get('/', (req, res) => {

    const width = 1920
    const height = 1080

    const canvas = createCanvas(width, height)
    const context = canvas.getContext('2d')

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 140;

    context.beginPath();
    context.fillStyle = stringToColour(req.name);
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    // context.fillRect(860, 490, 200, 100)
    context.fill();
    context.lineWidth = 20;
    context.strokeStyle = adjust(stringToColour(req.name), -10)
    context.font = '70px Arial'
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.fillStyle = getContrastYIQ(stringToColour(req.name))
    context.fillText(parseName(req.name), centerX, centerY)
    context.stroke();

    res.set('Content-Type', 'image/png')

    res.send(canvas.toBuffer())
})

export default router