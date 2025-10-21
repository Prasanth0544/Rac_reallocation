// src/controllers/trainController.js
import Train from "../models/trainModel.js";

export const getTrainStations = async (req, res) => {
  try {
    const stations = await Train.find().sort({ SNo: 1 });
    res.status(200).json({ count: stations.length, data: stations });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};