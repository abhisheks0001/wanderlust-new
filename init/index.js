const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL =
  process.env.ATLASDB_URL || "mongodb://127.0.0.1:27017/wanderlust";

const initDB = async () => {
  await Listing.deleteMany({});
  const listings = initData.data.map((obj) => ({ 
    ...obj,
     owner: "6790ed6eb5dec84dd33aa92a"
    }));
  await Listing.insertMany(listings);
  console.log("data was initialized");
};

async function main() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("connected to DB");
    await initDB();
  } finally {
    await mongoose.disconnect();
  }
}

main().catch((err) => {
  console.error("Database initialization failed:", err.message);
  process.exitCode = 1;
});
