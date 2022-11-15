import jwt from 'jsonwebtoken';
import userModel from "../models/UserModel.js";
import bcryppt from 'bcrypt';
import crypto from 'crypto';
import mongoose from "mongoose";



const UserRegistration =async (req, res) => {

    try {
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        
        const {email,username,password,role,userInfo}= req.body;

        console.log('this is the request body ' + email+" " + username +" "+ password);

        const emailCheck = await userModel.findOne({"email":email});

        


        if(emailCheck){
            console.log("This Email is already in Use")
            return res.status(500).json({message:"This Email is already in Use"});
        }
        else{
            //encrypt password 
            const hashedPassword = await bcryppt.hash(password,10);
            const newUser = new userModel({email:email,username:username,password:hashedPassword,role:role,userInfo});
            await newUser.save();
            // newItem.save();
            ;
            const idInserted = newUser._id;
            const maxAge = 60*60*3;
            const token = jwt.sign({
                    id:idInserted,
                    email,
                    username,
                    role,
                    userInfo,
                },
                process.env.JWT_SECRET,{
                    expiresIn:maxAge,
            });
            

            
        //    newUser.token = token; 
           
           console.log('REGISTERED: '+ newUser) 
           
           console.log("token: "+token) 
          

           return res.status(201).json(token);             
        }      
    }catch (err) {
        console.log("there was an error");
        return res.status(400).send(err);
    }

};




export default UserRegistration;