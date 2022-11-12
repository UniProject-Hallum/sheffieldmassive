import jwt from 'jsonwebtoken';
import userModel from "../models/UserModel.js";
import bcryppt from 'bcrypt';
import crypto from 'crypto';
import mongoose from "mongoose";



const userRegistration =async (req, res) => {

    try {
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        
        const {email,username,password,role}= req.body;

        console.log(req.body);
        console.log('this is the request body ' + email+" " + username +" "+ password);

        
        const emailCheck = await userModel.findOne({"email":email});
        const usernameCheck = await userModel.findOne({"username":username});


        if(emailCheck){
            console.log("This Email is already in Use")
            res.status(409).send("This Email is already in Use");
        }else if(usernameCheck){
            console.log("This username is already in Use")
            res.status(409).send("This username is already in Use");

        } else{
            //encrypt password 
            const hashedPassword = await bcryppt.hash(password,10);
            const newUser = new userModel({email:email,username:username,password:hashedPassword,role:role});
            await newUser.save();
            // newItem.save();
            console.log('REGISTERED: '+ newUser) ;
            const idInserted = newUser._id;
            const maxAge = 60*60*3;
            const token = jwt.sign({
                    id:idInserted,
                    email,
                    username,
                    role,
                },
                process.env.JWT_SECRET,{
                    expiresIn:maxAge,
            });
            
            res.cookie("jwt", token, {
                httpOnly: true,
                maxAge: maxAge * 1000, // 3hrs in ms
            }); 

           newUser.token = token;            
           return res.status(201).json({
            message: "User successfully created",
            user: newUser._id,
          });             
        }
        
    }catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }

};




export default userRegistration;