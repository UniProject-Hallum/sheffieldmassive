import jwt from 'jsonwebtoken';
import userModel from "../models/UserModel.js";
import bcryppt from 'bcrypt';
import crypto from 'crypto';
import mongoose from "mongoose";



const UserRegistration =async (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    
    const {email,username,password,role}= req.body;

    console.log(req.body);
    console.log('this is the request body ' + email + username + password);

    
    const emailCheck = await userModel.findOne({"email":email});
    const usernameCheck = await userDetailsModel.findOne({"username":username});

    console.log("find a user "+user);

    if(emailCheck){
          console.log("This Email is already in Use")
        res.status(409).send("This Email is already in Use");
    }else if(usernameCheck){
        console.log("This username is already in Use")
        res.status(409).send("This username is already in Use");

    } else{
        //encrypt password 
        const hashedPassword = await bcryppt.hash(password,13);
    

        const newUser = new userModel({email:email,username:username,password:hashedPassword,role:role});
        await newUser.save();
        // newItem.save();
        console.log('REGISTERED: '+ newUser) ;
        const idInserted = newUser._id;
        jwt.sign({
                id:idInserted,
                email,
                username,
                role,
            },
            process.env.JWT_SECRET,{
                expiresIn:'3d',
            },
            //sending the new data to the front end to confirm that the right data is passed to backend
            (err,token) => {
                if(err){
                    return res.status(500).send(err);
                }

                //  res.status(200).json({token});
                res.json(token)
                console.log("token: "+token)

            });

    }

};




export default UserRegistration;