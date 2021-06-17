import { crawl as crawlCases } from './crawler/cases'
import { crawl as crawlVaccinations } from './crawler/vaccinations'

const cron = require('node-cron')

// fetch today cases data
cron.schedule('0 12 * * *', () => {
  crawlCases().then(() => console.log('Crawl cases executed'))
})

// fetch today vaccinations data
cron.schedule('0 12 * * *', () => {
  crawlVaccinations().then(() => console.log('Crawl vaccinations executed'))
})
