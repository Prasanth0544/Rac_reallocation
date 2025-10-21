// src/models/trainModel.js
import mongoose from "mongoose";

const trainSchema = new mongoose.Schema({
  _id: { type: String },
  SNo: { type: Number },
  Code: { type: String },
  Stn_Name: { type: String },
  Zone: { type: String },
  Div: { type: String },
  Arr: { type: String },
  Dep: { type: String },
  Halt: { type: Number },
  PF: { type: String },
  Dist: { type: Number },
  Day: { type: Number },
  Remark: { type: String }
}, { collection: "17225", _id: false });

export default mongoose.model("Train", trainSchema);