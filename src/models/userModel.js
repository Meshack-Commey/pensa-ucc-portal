import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email: {
        type: string,
        required: [true, "Must provide a username"],
        unique: [true, "Must be unique"]
    },
    phone: {
        type: string,
        required: [true, "Must provide a email"],
        unique: [true, "Must be unique"]
    },
    password: {
        type: string,
        required: [true, "Must provide a password"]
    }
},
{
    timestamps: true    
})

const User = mongoose.model.users || mongoose.model("users", userSchema);

export  default User