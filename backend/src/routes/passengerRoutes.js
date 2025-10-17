// src/routes/passengerRoutes.js
import express from "express";
import { getPassengers, updatePassenger } from "../controllers/passengerController.js";

const router = express.Router();

router.get("/", getPassengers);
router.post("/", updatePassenger);

export default router;
