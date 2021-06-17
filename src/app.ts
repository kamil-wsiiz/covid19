import { app as appConfig } from './config/config'
import express, { Request, Response } from 'express'
import bodyParser = require('body-parser')
import './db/mongo'
import cases from './routes/cases'
import vaccinations from './routes/vaccinations'
import './cron'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req: Request, res: Response): void => {
  res.status(200).json({ name: process.env.npm_package_name, version: process.env.npm_package_version })
})

app.use('/cases', cases)
app.use('/vaccinations', vaccinations)

app.listen(appConfig.server.port, () => console.log(`App listening on port ${appConfig.server.port}!`))
