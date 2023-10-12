import NextAuth from "next-auth/next";
import Google from 'next-auth/providers/google';
import { connectToDB } from "@utils/database";

import User from "@models/user";
//TODO: Create a new google console project and continue with the video

const config = {
    providers:[
        Google({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks:{
        async session({session}){
            const sessionUser = await User.findOne({email:session.user.email});
    
            session.user.id = await sessionUser._id.toString();
    
            return session;
        },
        async signIn({profile}){
            try {
                 await connectToDB();
                 //checking if a user already exist and if not create a new user
                 console.log("user exist1");
                const userExist = await User.findOne({email:profile.email});
                console.log("user exist2");
                if(!userExist){
                    console.log("user exist3");
                    await User.create({
                        email:profile.email,
                        username:profile.name.replace(" ","").toLowerCase(),
                        image:profile.picture
                    })
                }
                console.log("user exist4");
                } catch (error) {
                console.log(error);
            }
        }
    }
   
};

//INFO: 1:20:40 s
const handler = NextAuth(config);

export { handler as GET, handler as POST};

