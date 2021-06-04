const mongoose = require('mongoose')
const { Schema } = mongoose

const Test = new Schema({
  account_id: Number,
  limit: Number,
  products: [String]
})

export default mongoose.model('test', Test)
