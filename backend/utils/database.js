// create connection with the database

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    path:"../.env"
})

const databaseConnection = function() {
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("mongodb connected successfully");
    }).catch((error)=>{
        console.log(error);
    })
};
// export the function
export default databaseConnection;