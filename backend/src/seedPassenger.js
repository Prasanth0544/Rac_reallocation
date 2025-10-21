// backend/src/seedPassenger.js
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Passenger from "./models/passengerModel.js";

dotenv.config();

const run = async () => {
  try {
    await connectDB();

    const sample = {
      pnr: "TESTPNR0001",
      train_no: "17225",
      name: "Test User",
      age: 30,
      gender: "M",
      coach: "S6",
      seat_no: "T1",
      quota: "GN",
      boarding_station: "MRK",
      destination_station: "PDL",
      booking_status: "RAC",
      current_status: "RAC",
      journey_date: "2025-10-29",
      no_show: false
    };

    // Upsert by PNR (safe to re-run)
    const result = await Passenger.findOneAndUpdate(
      { pnr: sample.pnr },
      { $set: sample },
      { upsert: true, new: true }
    );

    console.log("✅ Seeded passenger:", result);
    process.exit(0);
  } catch (err) {
    console.error("Seed error:", err);
    process.exit(1);
  }
};

run();
