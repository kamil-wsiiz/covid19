import mongoose, { Schema, Document } from 'mongoose'

export interface IVaccinations extends Document {
  objectId: number,
  date: number,
  vaccinationsSum: number,
  vaccinationsDaily: number,
  sum1Doses: number,
  sum2Doses: number,
  sumDoses: number,
  daily2Doses: number,
  vaccineInjuries: number,
  lostDoses: number,
  undeterminedGenderVaccinations: number,
  womansVaccinations: number,
  mansVaccinations: number,
  vaccinations0to17: number,
  vaccinations18to30: number,
  vaccinations31to40: number,
  vaccinations41to50: number,
  vaccinations51to60: number,
  vaccinations61to70: number,
  vaccinations71to75: number,
  vaccinations75Plus: number,
  vaccinationsUndeterminedAge: number,
  stockStatus: number,
  dosesInPoints: number,
  dosesInOrders: number
}

const Vaccinations: Schema = new Schema({
  objectId: { type: Number, required: true },
  date: { type: Number, required: true },
  vaccinationsSum: { type: Number },
  vaccinationsDaily: { type: Number },
  sum1Doses: { type: Number },
  sum2Doses: { type: Number },
  sumDoses: { type: Number },
  daily2Doses: { type: Number },
  vaccineInjuries: { type: Number },
  lostDoses: { type: Number },
  undeterminedGenderVaccinations: { type: Number },
  womansVaccinations: { type: Number },
  mansVaccinations: { type: Number },
  vaccinations0to17: { type: Number },
  vaccinations18to30: { type: Number },
  vaccinations31to40: { type: Number },
  vaccinations41to50: { type: Number },
  vaccinations51to60: { type: Number },
  vaccinations61to70: { type: Number },
  vaccinations71to75: { type: Number },
  vaccinations75Plus: { type: Number },
  vaccinationsUndeterminedAge: { type: Number },
  stockStatus: { type: Number },
  dosesInPoints: { type: Number },
  dosesInOrders: { type: Number }
})

export default mongoose.model<IVaccinations>('vaccinations', Vaccinations)
