import mongoose from "mongoose";

let isConnected = false;


export const connectToDB  = async ()=>{
    mongoose.set('strictQuery',true);

    if (isConnected) {
        console.log("We are connected");
        return;
    } 

    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:'sharePrompts',
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        isConnected=true;

        console.log("We are connected for the first time");
    } catch (error) {
        console.log(error);
    }

}