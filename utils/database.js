import mongoose from "mongoose";

let isConnected = false;
//A lambda function that will die after doing his job, so needs to be called each time we want to connect to the db or interact with it.

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