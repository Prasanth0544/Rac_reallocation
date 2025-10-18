import mongoose from "mongoose";

const passengerSchema = new mongoose.Schema({
  pnr: { type: String, required: true, unique: true },
  train_no: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ["M", "F", "O"], required: true },
  coach: { type: String },
  seat_no: { type: String },
  quota: { type: String },
  boarding_station: { type: String },
  destination_station: { type: String },
  booking_status: { type: String },
  current_status: { type: String },
  journey_date: { type: Date },
  no_show: { type: Boolean, default: false }
});

const Passenger = mongoose.model("train_17225_passengers", passengerSchema);
export default Passenger;
