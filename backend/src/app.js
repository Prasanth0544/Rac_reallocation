import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import passengerRoutes from "./routes/passengerRoutes.js";
import trainRoutes from "./routes/trainRoutes.js";  // ADD THIS

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/passengers", passengerRoutes);
app.use("/api/trains", trainRoutes);  // ADD THIS

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});