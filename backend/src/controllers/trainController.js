// src/controllers/trainController.js
import Train from "../models/trainModel.js";

// Get all trains
export const getTrains = async (req, res) => {
  try {
    const trains = await Train.find();
    res.json(trains);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add or update train (admin)
export const upsertTrain = async (req, res) => {
  try {
    const { trainNumber, trainName, route } = req.body;
    const train = await Train.findOneAndUpdate(
      { trainNumber },
      { trainName, route },
      { upsert: true, new: true }
    );
    res.json(train);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
