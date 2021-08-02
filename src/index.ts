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

import dbconfig from './settings/config'
process.env.TZ = 'UTC'

const app: Application = express()

const PORT = process.env.PORT || 4000
const NODE_ENV = process.env.NODE_ENV || 'development'

const knex = Knex(dbconfig[NODE_ENV])

knex.raw('select 1+1 as result').then((data) => {
  console.log('good connection?')
})

Model.knex(knex)

app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
app.use(bodyParser.json({ limit: '10mb' }))

app.set('trust proxy', true)

/* Security middleware */
app.use(helmet())
app.use(cors())
app.use(compression())

const httpServer = createServer(app)

httpServer.listen({ port: PORT }, () => {
  console.log('NODE_ENV', NODE_ENV)
  console.log(`🚀 Server ready at http://localhost:${PORT}`)
})
