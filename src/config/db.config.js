const mongoose = require("mongoose");


async function connectMongoDb(url) {
  try {
    await mongoose.connect(url);
    console.log("✅ MongoDB Connected Successfully");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1); // stop server if DB fails
  }
}

module.exports = { connectMongoDb };
