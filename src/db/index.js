console.log("db/index.js loaded");

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    console.log("Inside connectDB");

    try {
        console.log("Connecting to MongoDB...");

        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );

        console.log(
            `MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
        );
    }catch (error) {
    console.error("MONGODB connection error:", error);
    throw error;
}
};

export default connectDB;