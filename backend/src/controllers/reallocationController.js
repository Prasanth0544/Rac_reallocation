// src/controllers/reallocationController.js
import Passenger from "../models/passengerModel.js";
import Train from "../models/trainModel.js";  // Changed from TrainStation

export const reallocateSeats = async (req, res) => {
  try {
    console.log("♻️ Reallocation process started...");
    const { train_no = "17225" } = req.params;

    // Get ALL stations in order
    const stations = await Train.find().sort({ SNo: 1 });
    
    // ... rest of your reallocation logic using 'stations'
    
    res.status(200).json({ 
      message: "Reallocation completed!", 
      total_stations: stations.length 
    });
  } catch (error) {
    console.error("❌ Reallocation error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};