import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";
dotenv.config({
    path: "../.env",
  });
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
    console.log("MONGODB connection FAILED ", error);
    process.exit(1);
  }
};

export default connectDB;

// try {
//     const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
// }
//chatgpt
// try {
//     const MONGO_URI =
//       "mongodb+srv://mohit200agarwal:mohit.in@cluster0.a9drclg.mongodb.net";
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log("MongoDB connected");
//   }