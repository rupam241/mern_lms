import { errorHandler } from "../utils/error.js";
import user from "../models/user.models.js"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

export const signupAuth=async(req,res,next)=>{

    const{username,email,password}=req.body;
    if(!username ||!email ||!password){
       return next(errorHandler(404,"fields are required"))

    }
    try {

        const hashedPassword=await bcrypt.hash(password,10);

        const newUser=new user({
            username,email,password:hashedPassword,
        })

        await newUser.save()
        res.status(200).json({
            message:"user register successfully"
        })

        
    } catch (error) {
        next(error)
        
    }


    
}


export const signinAuth=async(req,res,next)=>{
    const {email,password}=req.body
    if(!email || !password){
       return next(errorHandler(404,"All field are required"))
    }

    try {
        const validUser= await user.findOne({email})
        if(!validUser){
          return  next(errorHandler(401,"user not found"))
        }
        

        const validPassword=bcrypt.compareSync(password,validUser.password)

        if(!validPassword){
            return next(errorHandler(401,"invalid password"))
        }

        const token=jwt.sign({id:validUser._id},
            process.env.JWT_SECRET,
            {expiresIn:'2h'}
        )

        const {password:pass, ...rest}=validUser._doc

      
        res.status(200).cookie('access_token', token, {
            httpOnly: true,
        }).json(rest);

        
    } catch (error) {

        next(error)
        
    }
}

export const googleAuth=async(req,res,next)=>{

    const{displayName,email,photoUrl}=req.body;
    try {

        const existingUser=await user.findOne({email})

        if(existingUser){
          const token=jwt.sign({id:existingUser._id},
            process.env.JWT_SECRET,
            {expiresIn:'2h'}
          )

          const {password:pass, ...rest}=existingUser._doc;
        return res.status(200).cookie('access_token',token,{httpOnly:true}).json(rest)
        }

        else{

            const generatedPassWord=Math.random().toString(36).slice(-8)
            const hashedPassword=await bcrypt.hash(generatedPassWord,10)
            const generatedUsername=displayName.toLowerCase().replace(/\s/g, '') + Math.random().toString().slice(2, 6);

            const newUser=new user({
                email,
                username:generatedUsername,
                password:generatedPassWord,
                profilePicture:photoUrl,
            })

            await newUser.save();

            const token=jwt.sign({id:newUser._id},process.env.JWT_SECRET,{expiresIn:'2h'})

            const{password:pass,...rest}=newUser._doc;
            return res.status(200).cookie('access_token',token,{httpOnly:true}).json(rest)


            
            

        }
        
        
    } catch (error) {
        next(error)
        
    }

}