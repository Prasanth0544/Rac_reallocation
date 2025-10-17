// src/models/trainModel.js
import mongoose from "mongoose";

const trainSchema = new mongoose.Schema({
  trainNumber: { type: Number, required: true, unique: true },
  trainName: { type: String, required: true },
  route: [
    {
      stationName: { type: String, required: true },
      arrivalTime: { type: String, required: true },
      departureTime: { type: String, required: true },
      distanceFromStart: { type: Number, required: true }
    }
  ]
});

const Train = mongoose.model("Train", trainSchema);
export default Train;
