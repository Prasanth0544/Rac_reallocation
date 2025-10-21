// src/controllers/passengerController.js
import Passenger from "../models/passengerModel.js";

// Get all passengers (with optional limit)
export const getAllPassengers = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 50; // Default limit to prevent overload
    const passengers = await Passenger.find().limit(limit);
    res.status(200).json({ count: passengers.length, data: passengers });
  } catch (error) {
    console.error("❌ Error fetching passengers:", error); // Log server-side
    res.status(500).json({ message: "Error fetching passengers" });
  }
};

// Get passengers by train number
export const getPassengerByTrain = async (req, res) => {
  try {
    const { train_no } = req.params;
    if (!train_no || typeof train_no !== 'string') {
      return res.status(400).json({ message: "Invalid train_no parameter" });
    }
    const passengers = await Passenger.find({ train_no });
    if (!passengers.length) {
      return res.status(404).json({ message: `No passengers found for train ${train_no}` });
    }
    res.status(200).json({ count: passengers.length, data: passengers });
  } catch (error) {
    console.error("❌ Error fetching passengers by train:", error);
    res.status(500).json({ message: "Error fetching passengers by train" });
  }
};