// import mongoose:
import mongoose from "mongoose";

// regular expression for the password requirements
/*
atleast one uppercase
atleast one lowercase
atleast one number
atleast one special Character
*/
//const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


// create shcema:
const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password: {
        type: String,
        required: true,
        // validate: {
        //     validator: function(v) {
        //         return passwordRegex.test(v);
        //     },
        //     message: props => 
        //         "Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character."
        // }
    }
},{timestamps:true});

// export schema:
export const User = mongoose.model("User", userSchema);