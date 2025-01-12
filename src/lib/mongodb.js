import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file in local development
dotenv.config();

const connectToDatabase = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("Already connected to MongoDB.");
    return;
  }

  // Get MongoDB URI from environment variable
  const mongoUri = process.env.MONGODB_URI;
  try {
    // Connect to MongoDB
    await mongoose.connect(mongoUri);
    console.log("Successfully connected to MongoDB.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
  console.log(mongoUri)
  // Check if the MongoDB URI is defined
  if (!mongoUri) {
    console.error("MongoDB URI is not defined. Make sure you have set the MONGODB_URI environment variable.");
    return;
  }

};

export default connectToDatabase;
