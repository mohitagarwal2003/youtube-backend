// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";
const app = express();
//import {app} from './app.js'
dotenv.config({
  path: "../.env",
});
console.log("mohit agarwal");
console.log(process.env.PORT);
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     console.log("database connected");
//   } catch (error) {
//     console.log("ERROR:", error);
//     throw err;
//   }
// })();
