import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
    providers: [ //Copy the provider from next-auth documatation
        CredentialsProvider({
            name: 'credentials',
            credentials: {},
            async authorize(credentials, req) {
                // custom credentials login
                const user = { id:'1' }
                return user;

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