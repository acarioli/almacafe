import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    fullName: String,
    email: String,
    phone: Number,
    zone: String,
    message: String,
    contactType: {
        type: String, 
        enum: ["contact", "franchise"]
    }
}, {timestamps:true })

export default mongoose.models.User || mongoose.model('User', schema)