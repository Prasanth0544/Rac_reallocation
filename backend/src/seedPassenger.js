// src/seedPassenger.js
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Passenger from "./models/passengerModel.js";

dotenv.config();

const run = async () => {
  try {
    await connectDB();

    const passengers = [
      {
        pnr: "8548966600",
        train_no: "17225",
        name: "Vidya Iyer",
        age: 26,
        gender: "F",
        coach: "S6",
        seat_no: "4",
        quota: "GN",
        boarding_station: "MRK",
        destination_station: "PDL",
        booking_status: "CNF",
        current_status: "CNF",
        journey_date: new Date("2025-10-29"), // Converted to Date
        no_show: false
      },
      {
        pnr: "8548966601",
        train_no: "17225",
        name: "Kiran Rao",
        age: 29,
        gender: "M",
        coach: "S7",
        seat_no: "12",
        quota: "GN",
        boarding_station: "GNT",
        destination_station: "BZA",
        booking_status: "RAC",
        current_status: "RAC",
        journey_date: new Date("2025-10-29"),
        no_show: false
      },
      {
        pnr: "8548966602",
        train_no: "17225",
        name: "Lakshmi Devi",
        age: 54,
        gender: "F",
        coach: "S8",
        seat_no: "5",
        quota: "GN",
        boarding_station: "BZA",
        destination_station: "TPTY",
        booking_status: "CNF",
        current_status: "CNF",
        journey_date: new Date("2025-10-29"),
        no_show: false
      },
      {
        pnr: "8548966603",
        train_no: "17225",
        name: "Ravi Kumar",
        age: 33,
        gender: "M",
        coach: "S9",
        seat_no: "8",
        quota: "GN",
        boarding_station: "GNT",
        destination_station: "KCG",
        booking_status: "RAC",
        current_status: "RAC",
        journey_date: new Date("2025-10-29"),
        no_show: false
      }
      // Add more for 1500 random passengers if needed; this is test data
    ];

    // Clear old test data
    await Passenger.deleteMany({ pnr: { $regex: "^85489666" } });

    const result = await Passenger.insertMany(passengers);
    console.log(`✅ Inserted ${result.length} passengers`);

    await mongoose.connection.close(); // Close connection cleanly
    process.exit(0);
  } catch (err) {
    console.error("❌ Seed error:", err.message); // Improved logging
    process.exit(1);
  }
};

run();