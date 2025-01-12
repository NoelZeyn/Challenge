import mongoose from 'mongoose';

const connectToDatabase = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("Already connected to MongoDB.");
    return;
  }

  try {
    await mongoose.connect("mongodb+srv://ahmadakrom563:230104Merdeka%40@portfolio.0nsj2.mongodb.net/", {
        
    });
    console.log("Successfully connected to MongoDB.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

export default connectToDatabase;
