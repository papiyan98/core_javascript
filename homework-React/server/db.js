const mongoose = require("mongoose");

// const DB_URL = "mongodb://localhost:27017/FreeCluster";

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;

db.on('error', console.error.bind(console, "MongoDB connection error:"));
db.once('open', () => {
  console.log("Connected to MongoDB successfully!");
});

module.exports = db;