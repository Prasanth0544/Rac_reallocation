// backend/src/models/passengerModel.js
import mongoose from "mongoose";

const passengerSchema = new mongoose.Schema({
  pnr: { type: String, required: true, unique: true },
  train_no: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: Number },
  gender: { type: String, enum: ["M", "F", "O"] },
  coach: { type: String },
  seat_no: { type: String },
  quota: { type: String },
  boarding_station: { type: String },
  destination_station: { type: String },
  booking_status: { type: String },   // e.g., "CNF", "RAC", "WL"
  current_status: { type: String },   // e.g., "CNF", "RAC", "WL"
  journey_date: { type: String },     // keep string to match your data, can be Date later
  no_show: { type: Boolean, default: false }
}, { collection: "train_17225_passengers" }); // explicitly bind to existing collection

const Passenger = mongoose.model("Passenger_17225", passengerSchema);
export default Passenger;
