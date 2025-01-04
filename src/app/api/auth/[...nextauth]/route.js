import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from "../../../../../lib/mongodb";
import User from "../../../../../models/user";
import bcrypt from 'bcryptjs'

const authOptions = {
    providers: [ //Copy the provider from next-auth documatation
        CredentialsProvider({
            name: 'credentials',
            credentials: {},
            async authorize(credentials, req) {
                // custom credentials login
                const { email, password } = credentials;

                try {

                    await connectMongoDB();
                    const user = await User.findOne({ email }); //find user in DB

                    if (!user) {
                        return null;  // no user found, return null
                    }

                    const passwordMatch = await bcrypt.compare(password, user.password); 

                    if (!passwordMatch) {
                        return null;  // password does not match, return null
                    }

                    return user; // If password matches, return user

                } catch(error) {
                    console.log("Error: ", error);
                }
                
            }
        })
        ],
        session: {
            strategy: "jwt"
        },
        secret: process.env.NEXTAUTH_SECRET,
        pages: {
            signIn: "/signIn"
        },
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }