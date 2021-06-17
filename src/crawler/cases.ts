import { Moment } from 'moment'
import { getQuery, fetchData } from './utils'
import Cases, { ICases } from '../db/models/cases'

const baseUrl = 'https://services-eu1.arcgis.com/zk7YlClTgerl62BY/ArcGIS/rest/services/global_corona_widok2/FeatureServer/0/'

function mapData (data: any): ICases[] {
  const objects: ICases[] = []

  if ('features' in data) {
    for (const feature of data.features) {
      const object = new Cases()

      object.objectId = feature.attributes.OBJECTID
      object.date = feature.attributes.Data
      object.infections = feature.attributes.LICZBA_ZAKAZEN
      object.deaths = feature.attributes.LICZBA_ZGONOW
      object.womansDeaths = feature.attributes.ZGONY_KOBIETY
      object.mansDeaths = feature.attributes.ZGONY_MEZCZYZNI
      object.deaths0to10 = feature.attributes.ZGONY0_10
      object.deaths11to20 = feature.attributes.ZGONY11_20
      object.deaths21to30 = feature.attributes.ZGONY21_30
      object.deaths31to40 = feature.attributes.ZGONY31_40
      object.deaths41to50 = feature.attributes.ZGONY41_50
      object.deaths51to60 = feature.attributes.ZGONY51_60
      object.deaths61to70 = feature.attributes.ZGONY61_70
      object.deaths71to80 = feature.attributes.ZGONY71_80
      object.deaths81Plus = feature.attributes.ZGONY81_
      object.dailyInfections = feature.attributes.ZAKAZENIA_DZIENNE
      object.dailyDeaths = feature.attributes.ZGONY_DZIENNE
      object.convalescents = feature.attributes.LICZBA_OZDROWIENCOW

      objects.push(object)
    }
  }

  return objects
}

async function crawl (from?: Moment, to?: Moment): Promise<void> {
  const data = await fetchData(baseUrl + getQuery(from, to))
  const objects = mapData(data)

  for (const object of objects) {
    const doesObjectExists = await Cases.exists({ objectId: object.objectId })

    if (!doesObjectExists) {
      await object.save()
    }
  }
}

export { crawl }
