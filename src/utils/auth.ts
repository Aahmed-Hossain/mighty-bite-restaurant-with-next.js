import { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
// import { MongoDBAdapter } from "@auth/mongodb-adapter"
// import clientPromise from "@/lib/mongodbAuth";

export const authOptions:NextAuthOptions = {
    // adapter: MongoDBAdapter(clientPromise),
    providers: [
       GoogleProvider({
        clientId: process.env.GOOGLE_ID as string,
        clientSecret: process.env.GOOGLE_SECRET as string
       })
    ]
}