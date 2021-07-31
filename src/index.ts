require('dotenv').config() // eslint-disable-line

import bodyParser from 'body-parser'
import compression from 'compression'
import cors from 'cors'
import express, { Application } from 'express'
import fs from 'fs'
import helmet from 'helmet'
import { createServer } from 'http'
import morgan from 'morgan'
import path from 'path'
import * as rfs from 'rotating-file-stream'
import Knex from 'knex'
import { Model } from 'objection'

const app: Application = express()

const PORT = process.env.PORT || 4000
const NODE_ENV = process.env.NODE_ENV || 'development'

app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
app.use(bodyParser.json({ limit: '10mb' }))

app.set('trust proxy', true)

const httpServer = createServer(app)

httpServer.listen({ port: PORT }, () => {
  console.log('NODE_ENV', NODE_ENV)
  console.log(`🚀 Server ready at http://localhost:${PORT}`)
})
