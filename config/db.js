import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://myeasympasi:1628138736@cluster0.y25rbdd.mongodb.net/mpasiproject').then(()=>console.log("DB connected"));
}
