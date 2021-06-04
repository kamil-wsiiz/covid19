import express = require('express')
import Test from '../db/models/test'

const router = express.Router()

router.get('/test', async (req, res) => {
  res.status(200).json(await Test.find())
})

export default router
