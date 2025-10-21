// src/app.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import trainRoutes from "./routes/trainRoutes.js";
import passengerRoutes from "./routes/passengerRoutes.js";
import reallocationRoutes from "./routes/reallocationRoutes.js";



dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/trains", trainRoutes);
app.use("/api/passengers", passengerRoutes);
app.use("/api", reallocationRoutes);


// Connect DB and start server
connectDB();
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
