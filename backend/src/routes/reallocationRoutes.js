// src/routes/reallocationRoutes.js
import express from "express";
import { reallocateSeats } from "../controllers/reallocationController.js";

const router = express.Router();
router.get("/reallocate", reallocateSeats);

export default router;
