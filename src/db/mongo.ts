import { database } from '../config/config'
import { MongoError } from 'mongodb'
const mongoose = require('mongoose')

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(database.connectionString, options)
  .then(() => { console.log('Connected to database') })
  .catch((error: MongoError) => console.error(error))
