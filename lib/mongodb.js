import mongoose, {mongo} from "mongoose";

// connect to MongoDB
export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI,
        console.log("Connected to MongoDB Successfully!"));

        
    } catch (error) {
        console.log("Error connecting to MongoDB: ", error);
    }
}