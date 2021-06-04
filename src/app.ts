import { app as appConfig } from './config/config'
import express = require('express')
import bodyParser = require('body-parser')
import './db/mongo'
import testRoutes from './routes/test'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', testRoutes)

app.listen(appConfig.server.port, () => console.log(`App listening on port ${appConfig.server.port}!`))
