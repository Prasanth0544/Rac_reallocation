// src/controllers/passengerController.js
import Passenger from "../models/passengerModel.js";

// Get all passengers
export const getPassengers = async (req, res) => {
  try {
    const passengers = await Passenger.find();
    res.json(passengers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add or update passenger
export const updatePassenger = async (req, res) => {
  try {
    const { name, age, gender, trainNumber, fromStation, toStation, seatNumber, status } = req.body;
    const passenger = await Passenger.findOneAndUpdate(
      { trainNumber, seatNumber },
      { name, age, gender, fromStation, toStation, status },
      { upsert: true, new: true }
    );
    res.json(passenger);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
