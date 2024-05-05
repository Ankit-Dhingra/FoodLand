import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://ankitdhingra1909:Ankit%402002@cluster0.orutfzk.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}
