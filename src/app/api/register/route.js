import { connectDB } from "@/dbConfig/dbconfig"
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'

export async function POST(req){
    try {
        //get the database connection string
        await connectDB();
        //get email, phone, password from the request body
        const {email, phone, password} = await req.json();
        //check whether the user already exist in the database
        const exist = await User.findOne({$or: [{email}, {phone}]});
        if(exist) {
            return NextResponse.json({message: "Username or Email already exists."}, {status: 500})
        }
        //encrypt the password
        const hashedPassword = await bcrypt.hash(password, 10);
        //add user to database
        await User.create({email, phone, password: hashedPassword});
        return NextResponse.json({message: "User registered."}, {status: 201})
    } catch(error) {
        console.log("Error while registering User", error);
        return NextResponse.json({message: "Error occurred while registering the user"}, {status: 500});
    }
}   