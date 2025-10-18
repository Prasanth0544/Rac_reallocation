import express from "express";
import {
  getAllPassengers,
  getPassengersByTrain,
  getPassengerByPNR
} from "../controllers/passengerController.js"; // ✅ Correct path

const router = express.Router(); // ✅ You missed this line earlier

// Routes
router.get("/", getAllPassengers);
router.get("/train/:train_no", getPassengersByTrain);
router.get("/pnr/:pnr", getPassengerByPNR);

export default router;
