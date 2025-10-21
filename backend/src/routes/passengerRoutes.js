// src/routes/passengerRoutes.js
import express from "express";
import { getAllPassengers, getPassengerByTrain } from "../controllers/passengerController.js";

const router = express.Router();

router.get("/", getAllPassengers);
router.get("/train/:train_no", getPassengerByTrain);

export default router;