const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();
const https = require("https");
const path = require("path");
const fs = require("fs");

// Port that the webserver listens to
const port = process.env.PORT || 3000;

//localhost https certification keys
var certOptions = {
  key: fs.readFileSync(path.resolve("../../cert/server.key")),
  cert: fs.readFileSync(path.resolve("../../cert/server.crt")),
};

const start = async () => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET must be defined");
  }
  // NOTE: when exporting app.js as agent for supertest
  // We exlcude connecting to the real database
  if (process.env.NODE_ENV !== "test") {
    await mongoose
      .connect(process.env.MONGO_URI || "mongodb://auth-mongo-srv:27017/auth", {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(() => console.log("DB connected"))
      .catch((err) => console.log("DB CONNECTION ERROR: ", err));
  }

  https.createServer(certOptions, app).listen(port, () => {
    console.log(`Auth API is running on port ${port}`);
  });
};

start();
