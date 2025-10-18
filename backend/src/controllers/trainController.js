// backend/src/controllers/trainController.js
import mongoose from "mongoose";

export const getTrainStations = async (req, res) => {
  try {
    const { trainNo } = req.params;
    const db = mongoose.connection;

    // 👇 Directly access the collection that matches the train number
    const TrainCollection = db.collection(trainNo);

    // 👇 Fetch all station records
    const stations = await TrainCollection.find({}).toArray();

    if (!stations.length) {
      return res.status(404).json({ message: `No stations found for train ${trainNo}` });
    }

    res.status(200).json(stations);
  } catch (error) {
    console.error("❌ Error fetching train stations:", error);
    res.status(500).json({ message: "Server error" });
  }
};
