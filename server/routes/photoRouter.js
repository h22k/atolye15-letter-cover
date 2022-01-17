import express from "express"
const router = express.Router()
import {createCanvas} from "canvas"
import color from 'color'

//middlewares
import nameParameterCheck from "../middleware/nameParameterCheck"
import parseQuery from "../middleware/parseQuery"
import checkParams from "../middleware/checkParams"
import setDrawObject from "../middleware/setDrawObject"
import setContentTypeToPng from "../middleware/setContentTypeToPng"
import errorHandling from '../middleware/errorHandling'

router.use(nameParameterCheck)
router.use(parseQuery)
router.use(checkParams)
router.use(setDrawObject)
router.use(setContentTypeToPng)
router.use(errorHandling)

router.get('/', (req, res) => {
    const canvas =  req.draw
    res.send(canvas.toBuffer())
})

export default router