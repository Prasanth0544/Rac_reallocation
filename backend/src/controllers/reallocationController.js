// src/controllers/reallocationController.js
import Passenger from "../models/passengerModel.js";

export const reallocateSeats = async (req, res) => {
  try {
    // Fetch all passengers
    const passengers = await Passenger.find();

    // Separate CNF and RAC passengers
    let confirmed = passengers.filter(p => p.current_status === "CNF");
    let rac = passengers.filter(p => p.current_status === "RAC");

    // Simulate major rush stations
    const majorStations = ["BZA", "GNT", "UBL", "HPT"]; // station codes for 8,9,17,23

    for (const station of majorStations) {
      // 1️⃣ Passengers who get down at this station
      const leaving = confirmed.filter(p => p.destination_station === station);

      // 2️⃣ Vacant seats freed up
      const freedSeats = leaving.map(p => ({
        coach: p.coach,
        seat_no: p.seat_no
      }));

      // 3️⃣ Assign freed seats to RAC passengers
      for (let i = 0; i < freedSeats.length && rac.length > 0; i++) {
        const seat = freedSeats[i];
        const racPassenger = rac.shift(); // take from queue

        await Passenger.updateOne(
          { pnr: racPassenger.pnr },
          {
            $set: {
              coach: seat.coach,
              seat_no: seat.seat_no,
              current_status: "CNF"
            }
          }
        );
      }
    }

    res.json({ message: "RAC Reallocation completed successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error during reallocation", error: err });
  }
};
