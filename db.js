require("dotenv").config(); // Load environment variables from .env file

const mongoose = require("mongoose");

const url = process.env.MONGODB_URL; // Use the MONGODB_URL environment variable

async function mongoConnect() {
  try {
    await mongoose.connect(url);
    console.log("Connected successfully to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  }
}

module.exports = mongoConnect;
