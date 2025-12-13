import mongoose from "mongoose";

// Function to Connect to the MongoDB database
export const connectDB = async () => {
  try {

    mongoose.connection.on('connected', ()=> console.log('Database Connected'));
    await mongoose.connect(`${process.env.MONGODB_URI}/Blink-chat-app`);
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error.message);
  }
};