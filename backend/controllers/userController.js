import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bycrpt, { genSalt } from "bcrypt"
import validator from "validator"


//login

const loginUser = async (request,response)=>{
    const {email,password} = request.body;
    try {
        const user = await userModel.findOne({email});
        if (!user) {
            return(
                response.json({
                    success:false,
                    message:"User doesnot Exists"
                })
            )
        }
        const isMatch = await bycrpt.compare(password,user.password);
        if (!isMatch) {
            return(
                response.json({
                    success:false,
                    message:"Invalid Credentials"
                })
            )
        }
        else{
            const token = createToken(user._id);
            response.json({success:true,
                token
            })
        }
    } catch (error) {
        console.log(error);
        response.json({success:false,message:"Error"})
    }
}

const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

//register

const registerUser = async (request,response)=>{
    const {name,password,email}=request.body;
    try {
        const exists = await userModel.findOne({email});
        if (exists) {
            response.json({success:false,message:"User Already Exists"});
        }

        //validation
        if (!validator.isEmail(email)) {
            return response.json({success:false,message:"Please enter valid email"})
        }
        if (password.length<8) {
            return response.json({success:false,message:"Please enter strong password"})
        }

        //hashing password

        const salt = await bycrpt.genSalt(10)
        const hashedPassword = await bycrpt.hash(password,salt)

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        const user = await newUser.save()

        const token = createToken(user._id);
        response.json({success:true,token})




    } catch (error) {
        console.log(error)
        response.json({success:false,message:"Error Occured"})
    }
}

export {loginUser,registerUser}