import { getQuery } from '../../src/crawler/utils'
import moment from 'moment'

test('current date query', () => {
  const expected = 'query?f=json&outFields=*&where=Data BETWEEN (CURRENT_TIMESTAMP - INTERVAL \'24\' HOUR) AND CURRENT_TIMESTAMP&returnGeometry=false'

  expect(getQuery()).toBe(expected)
})

test('from date query', () => {
  const from = moment('2021-01-31')
  const expected = 'query?f=json&outFields=*&where=Data >= \'2021-01-31\'&returnGeometry=false'

  expect(getQuery(from)).toBe(expected)
})

test('to date query', () => {
  const to = moment('2021-01-31')
  const expected = 'query?f=json&outFields=*&where=Data <= \'2021-01-31\'&returnGeometry=false'

  expect(getQuery(null, to)).toBe(expected)
})

test('between date query', () => {
  const from = moment('2021-01-31')
  const to = moment('2021-01-31')
  const expected = 'query?f=json&outFields=*&where=Data BETWEEN \'2021-01-31\' AND \'2021-01-31\'&returnGeometry=false'

  expect(getQuery(from, to)).toBe(expected)
})
