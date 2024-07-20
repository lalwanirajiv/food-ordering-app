import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://rajivlalwani:Rajiv12345@cluster0.xtvx0kr.mongodb.net/food-delivery').then(()=>console.log("Database connected"));
}

