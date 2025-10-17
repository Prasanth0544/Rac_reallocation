// src/models/passengerModel.js
import mongoose from "mongoose";

const passengerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  gender: { type: String },
  trainNumber: { type: Number, required: true },
  fromStation: { type: String, required: true },
  toStation: { type: String, required: true },
  seatNumber: { type: Number },
  status: { type: String, default: "RAC" } // booked, RAC, waitlisted
});

const Passenger = mongoose.model("Passenger", passengerSchema);
export default Passenger;
