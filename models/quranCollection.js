import {Schema, model, models} from "mongoose";

const quranSchema = new Schema({
  itemName: String,
  value: Number,
  weight: Number,
  length: Number,
  width: Number,
  height: Number,
  deliveryCost: Number,
  strip_pid: String
});
const quranCollection = models.quranCollection || model("quranCollection", quranSchema);

export default quranCollection;
