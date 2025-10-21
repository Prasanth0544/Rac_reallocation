// src/config/db.js
import mongoose from "mongoose";

const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    console.error("❌ MONGO_URI not defined in .env");
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGO_URI); // Removed deprecated options
    const dbName = process.env.MONGO_URI.split('/').pop();
    console.log(`✅ MongoDB connected successfully to '${dbName}' DB`);
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;