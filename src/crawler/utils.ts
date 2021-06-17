import { Moment } from 'moment'
import axios from 'axios'

function getQuery (from?: Moment, to?: Moment): string {
  const format = 'YYYY-MM-DD'
  let where = null

  if (from && to) {
    where = `Data BETWEEN '${from.format(format)}' AND '${to.format(format)}'`
  } else if (from) {
    where = `Data >= '${from.format(format)}'`
  } else if (to) {
    where = `Data <= '${to.format(format)}'`
  } else {
    return 'query?f=json&outFields=*&where=Data BETWEEN (CURRENT_TIMESTAMP - INTERVAL \'24\' HOUR) AND CURRENT_TIMESTAMP&returnGeometry=false'
  }

  return `query?f=json&outFields=*&where=${where}&returnGeometry=false`
}

async function fetchData (url: string): Promise<object> {
  return await axios.get(url)
    .then((response: any) => {
      if (response.status !== 200) {
        console.log('Error occured while fetching cases data')
        return
      }

      return response.data
    })
    .catch((err: any) => console.log(typeof err))
}

export { getQuery, fetchData }
