import mongoose from "mongoose";

export const connectionStatus = async ()=>{
try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    if(connect){
    console.log("Database connected!")
    }
} catch (error) {
    console.log('Error in connecting Database' + error?.message);
}
}