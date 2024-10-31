import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

// for exporting the log in 
export const Login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(401).json({
                message:"Invalid data",
                success:false
            })
        };
        // searching for the user in the database
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                message:"User doesn't exist",
                success:false
            });
        }

        // if user exist then compare the passwords:
        const isMatch = await bcryptjs.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({
                message:"Wrong password",
                success:false
            });
        }

        // if user exist and password is matched:
       const tokenData = {
        id:user._id
       }
       // from this token we get to know whether the user logged in or not:
        const token = await jwt.sign(tokenData, "dfbvdkjzfnvkjzdnfvkzdnjf",{expiresIn:"1d"});

        return res.status(200).cookie("token", token).json({
            message:`Welcome back ${user.fullName}`,
            user,
            success:true
        });

    } catch (error) {
        console.log(error);
    }
}

// for exporting Logging Out:
export const Logout = async (req,res) => {
    return res.status(200).cookie("token", "", {expiresIn:new Date(Date.now()), httpOnly:true}).json({
        message:"Logged out successfully",
        success:true,
    });
}

// for exporting the register
export const Register = async (req,res) =>{
    try {
        const {fullName, email, password} = req.body;
        if(!fullName || !email || !password){
            return res.status(401).json({
                message:"Enter right data",
                success:false
            })
        }
        // check whether user already exist or not
        const user = await User.findOne({email});
        if(user){
            return res.status(401).json({
                message:"User already exists",
                success:false,
            })
        }
        
        // we are going to encrypt the password before storing it to database
        const hashedPassword = await bcryptjs.hash(password,16);

        // if not exist then create user account:
        await User.create({
            fullName,
            email,
            password:hashedPassword
        });

        return res.status(201).json({
            message:"Account created successfully",
            success:true,
        })

    } catch (error) {
        console.log(error);
    }
};
