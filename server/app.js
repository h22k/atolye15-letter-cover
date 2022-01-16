import express from "express"
import cookieParser from 'cookie-parser'
import photoRouter from "./routes/photoRouter"

const app = express();

import { initCapitalize } from './helper/helper'

initCapitalize()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', photoRouter)

export default app
