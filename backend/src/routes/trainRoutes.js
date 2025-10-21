// src/routes/trainRoutes.js
import express from "express";
import { getTrainStations } from "../controllers/trainController.js";  // FIXED: getTrainStations

const router = express.Router();

router.get("/:trainNo/stations", getTrainStations);

export default router;