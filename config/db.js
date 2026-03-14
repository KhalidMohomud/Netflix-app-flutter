import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

const MONGO_READY_STATE_CONNECTED = 1;

export const isDatabaseConnected = () =>
	mongoose.connection.readyState === MONGO_READY_STATE_CONNECTED;

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(ENV_VARS.MONGO_URI, {
			serverSelectionTimeoutMS: 5000,
		});
		console.log("MongoDB connected: " + conn.connection.host);
	} catch (error) {
		console.error("Error connecting to MONGODB: " + error.message);
	}
};
