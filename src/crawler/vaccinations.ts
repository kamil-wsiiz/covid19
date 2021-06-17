import { Moment } from 'moment'
import { getQuery, fetchData } from './utils'
import Vaccinations, { IVaccinations } from '../db/models/vaccinations'

const baseUrl = 'https://services-eu1.arcgis.com/zk7YlClTgerl62BY/ArcGIS/rest/services/global_szczepienia_widok2/FeatureServer/0/'

function mapData (data: any): IVaccinations[] {
  const objects: IVaccinations[] = []

  if ('features' in data) {
    for (const feature of data.features) {
      const object = new Vaccinations()

      object.objectId = feature.attributes.OBJECTID
      object.date = feature.attributes.Data
      object.vaccinationsSum = feature.attributes.SZCZEPIENIA_SUMA
      object.vaccinationsDaily = feature.attributes.SZCZEPIENIA_DZIENNIE
      object.sum1Doses = feature.attributes.DAWKA_1_SUMA
      object.sum2Doses = feature.attributes.DAWKA_2_SUMA
      object.sumDoses = feature.attributes.SUMA_DAWEK_POLSKA
      object.daily2Doses = feature.attributes.DAWKA_2_DZIENNIE
      object.vaccineInjuries = feature.attributes.ODCZYNY_NIEPOZADANE
      object.lostDoses = feature.attributes.DAWKI_UTRACONE
      object.undeterminedGenderVaccinations = feature.attributes.SZCZEPIENIA_PLEC_NIEUSTALONO
      object.womansVaccinations = feature.attributes.SZCZEPIENIA_KOBIETY
      object.mansVaccinations = feature.attributes.SZCZEPIENIA_MEZCZYZNI
      object.vaccinations0to17 = feature.attributes.SZCZEPIENIA0_17
      object.vaccinations18to30 = feature.attributes.SZCZEPIENIA18_30
      object.vaccinations31to40 = feature.attributes.SZCZEPIENIA31_40
      object.vaccinations41to50 = feature.attributes.SZCZEPIENIA41_50
      object.vaccinations51to60 = feature.attributes.SZCZEPIENIA51_60
      object.vaccinations61to70 = feature.attributes.SZCZEPIENIA61_70
      object.vaccinations71to75 = feature.attributes.SZCZEPIENIA71_75
      object.vaccinations75Plus = feature.attributes.SZCZEPIENIA75_
      object.vaccinationsUndeterminedAge = feature.attributes.SZCZEPIENIA_WIEK_NIEUSTALONO
      object.stockStatus = feature.attributes.STAN_MAGAZYN
      object.dosesInPoints = feature.attributes.LICZBA_DAWEK_PUNKTY
      object.dosesInOrders = feature.attributes.zamowienia_realizacja

      objects.push(object)
    }
  }

  return objects
}

async function crawl (from?: Moment, to?: Moment): Promise<void> {
  const data = await fetchData(baseUrl + getQuery(from, to))
  const objects = mapData(data)

  for (const object of objects) {
    const doesObjectExists = await Vaccinations.exists({ objectId: object.objectId })

    if (!doesObjectExists) {
      await object.save()
    }
  }
}

export { crawl }
