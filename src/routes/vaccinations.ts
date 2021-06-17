import express, { Request, Response } from 'express'
import moment, { Moment } from 'moment'
import Vaccinations from '../db/models/vaccinations'

const router = express.Router()

router.get('/', async (req: Request, res: Response): Promise<void> => {
  res.status(200).json(await Vaccinations.findOne().sort([['date', -1]]))
})

router.get('/:type1/:value1/:type2?/:value2?', async (req: Request, res: Response): Promise<void> => {
  let from: Moment
  let to: Moment

  if (req.params.type1 === 'from') {
    from = moment(req.params.value1)
  } else if (req.params.type2 === 'from') {
    from = moment(req.params.value2)
  }

  if (req.params.type1 === 'to') {
    to = moment(req.params.value1)
  } else if (req.params.type2 === 'to') {
    to = moment(req.params.value2)
  }

  if ((from && !from.isValid()) || (to && !to.isValid())) {
    res.sendStatus(400)
    return
  }

  res.status(200).json(await Vaccinations.find({
    date: { $gte: from?.valueOf(), $lte: to?.valueOf() }
  }).sort([['date', -1]]))
})

export default router
