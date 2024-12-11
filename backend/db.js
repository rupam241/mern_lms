import mongoose from "mongoose";
import dotenv from'dotenv'

dotenv.config();

const connectDB=async()=>{
    const mongoDbUrl=process.env.MONGODB_URL
    try {
        await mongoose.connect(mongoDbUrl)
        console.log("connected to mongodb")
        
    } catch (error) {
        console.error("Failed to connect to mongodb",error)
        process.exit(1);
    }
}

export default connectDB;