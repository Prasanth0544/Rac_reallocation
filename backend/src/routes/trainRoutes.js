// backend/src/routes/trainRoutes.js
import express from "express";
import { getTrainStations } from "../controllers/trainController.js";

const router = express.Router();

router.get("/:trainNo/stations", getTrainStations);

export default router;
