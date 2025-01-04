import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";

export async function POST(req) {
    try {
        await connectMongoDB();
        const { email } = await req.json(); //get email from request body

        const user = await User.findOne({ email }).select("_id"); // Query the Database for the Email - ยิง request ไปหา email ใน DB
        console.log("User: ", user)

        return NextResponse.json({ user })  //Respond User to the Client

    } catch(error) {
        console.log(error);
    }
}