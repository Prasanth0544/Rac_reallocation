// src/models/passengerModel.js
import mongoose from "mongoose";

const passengerSchema = new mongoose.Schema({
  pnr: { type: String, required: true, unique: true },
  train_no: { type: String, required: true, index: true },
  name: { type: String, required: true },
  age: { type: Number, min: 0 },
  gender: { type: String, enum: ["M", "F", "O"] },
  coach: { type: String },
  seat_no: { type: String },
  quota: { type: String },
  boarding_station: { type: String, required: true },
  destination_station: { type: String, required: true },
  booking_status: { type: String },
  current_status: { type: String, required: true, index: true },
  journey_date: { type: Date },
  no_show: { type: Boolean, default: false }
}, { collection: "train_17225_passengers" }); // Explicitly bind to train_17225_passengers

passengerSchema.index({ train_no: 1, current_status: 1 });

export default mongoose.model("Passenger", passengerSchema);