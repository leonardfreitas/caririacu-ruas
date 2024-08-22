import 'reflect-metadata'
import 'dotenv/config'
import 'express-async-errors'

import '../di'
import { routes } from './routes'
import express from 'express'

const app = express()

app.use(express.json())

app.use('/api', routes)

export { app }
