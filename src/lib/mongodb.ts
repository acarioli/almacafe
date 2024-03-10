import mongoose from 'mongoose';


export async function dbConnect() {

    await mongoose.connect('mongodb+srv://aldana:AldanaPP@cluster0.kokibwt.mongodb.net/');

    
}