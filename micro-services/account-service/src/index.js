import mongoose from "mongoose";
import app from "./app.js";
import { createServer } from "https";
import { resolve } from "path";
import { readFileSync } from "fs";
import * as dotenv from "dotenv";
dotenv.config();
// Port that the webserver listens to
const port = process.env.PORT || 3000;

//localhost https certification keys
var certOptions = {
  key: readFileSync(resolve("../../cert/server.key")),
  cert: readFileSync(resolve("../../cert/server.crt")),
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

  createServer(certOptions, app).listen(port, () => {
    console.log(`Sutwa Account Service is running on port ${port}`);
  });
};

start();
