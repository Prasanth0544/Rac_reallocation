import Passenger from "../models/passengerModel.js";

// Get all passengers
export const getAllPassengers = async (req, res) => {
  try {
    const passengers = await Passenger.find();
    res.status(200).json(passengers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get passengers by train number
export const getPassengersByTrain = async (req, res) => {
  try {
    const train_no = req.params.train_no;
    const passengers = await Passenger.find({ train_no });
    res.status(200).json(passengers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single passenger by PNR
export const getPassengerByPNR = async (req, res) => {
  try {
    const pnr = req.params.pnr;
    const passenger = await Passenger.findOne({ pnr });
    if (!passenger) return res.status(404).json({ message: "Passenger not found" });
    res.status(200).json(passenger);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
