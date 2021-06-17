import mongoose, { Schema, Document } from 'mongoose'

export interface ICases extends Document {
  objectId: number,
  date: number,
  infections: number,
  deaths: number,
  womansDeaths: number,
  mansDeaths: number,
  deaths0to10: number,
  deaths11to20: number,
  deaths21to30: number,
  deaths31to40: number,
  deaths41to50: number,
  deaths51to60: number,
  deaths61to70: number,
  deaths71to80: number,
  deaths81Plus: number,
  dailyInfections: number,
  dailyDeaths: number,
  convalescents: number
}

const Cases: Schema = new Schema({
  objectId: { type: Number, required: true },
  date: { type: Number, required: true },
  infections: { type: Number },
  deaths: { type: Number },
  womansDeaths: { type: Number },
  mansDeaths: { type: Number },
  deaths0to10: { type: Number },
  deaths11to20: { type: Number },
  deaths21to30: { type: Number },
  deaths31to40: { type: Number },
  deaths41to50: { type: Number },
  deaths51to60: { type: Number },
  deaths61to70: { type: Number },
  deaths71to80: { type: Number },
  deaths81Plus: { type: Number },
  dailyInfections: { type: Number },
  dailyDeaths: { type: Number },
  convalescents: { type: Number }
})

export default mongoose.model<ICases>('cases', Cases)
