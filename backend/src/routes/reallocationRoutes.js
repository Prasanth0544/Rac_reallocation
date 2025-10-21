// src/routes/reallocationRoutes.js
import express from "express";
import { reallocateSeats } from "../controllers/reallocationController.js";

const router = express.Router();

// Fixed: Two routes - one with train_no, one without
router.post("/reallocate/:train_no", reallocateSeats);
router.post("/reallocate", reallocateSeats);

export default router;