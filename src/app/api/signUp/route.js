import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";
import bcrypt from "bcryptjs";

export async function POST(req){
    try {

        const { name, email, password} = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10); //รอบ hash = 10

        await connectMongoDB();
        await User.create({name, email, password: hashedPassword}); //Create a new user to DB

        return NextResponse.json({message:"User Signed"}, {status:201})
        
    } catch (error) {
        return NextResponse.json({message:"An error occured during user sign up process."}, {status:500});
    }
}