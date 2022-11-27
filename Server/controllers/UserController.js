import { FindAllUsers,FindUserByID } from "../database/UserDAO.js";
import users from "../models/UserModel.js";
import jwt from 'jsonwebtoken';
import { get } from "mongoose";


const GetAllUsers =async (req, res) => {
    try{
        const posts = await users.find();
        res.json(posts)
    }catch (e){
        res.json({ message: e })            
    }
};

const GetUserById =async (req, res) => {
    try{
        const getuser = await users.findById(req.params.id);
        res.json(getuser)
    }catch (e){
        res.json({ message: e })            
    }
};

const UpdateUser = async (req, res) =>{
    try{
        const {email,userInfo,id}= req.body;
        console.log( id)
        const updateUser = await users.findByIdAndUpdate(id,{email,userInfo});
        const getuser = await users.findById(id);
        const maxAge = 60*60*3;

        console.log("updated user"+updateUser);
        console.log("get user"+getuser);

        const token = jwt.sign({
            id:getuser._id,
            email: getuser.email,
            username: getuser.username, 
            role: getuser.role,
            userInfo: userInfo,
        },
            process.env.JWT_SECRET,{
            expiresIn:maxAge,
         });

        console.log("this is the token" + token)

         res.json(token);   
        
    }catch (e){
        console.log(e)
        res.json(e)            
    }
};

const SearchUser = async (req, res) =>{
    try{
        const searchUser = await users.find({
            "$and":[

                {"userInfo.skills":{$regex:req.params.skill}},
                {"userInfo.city.label":{$regex:req.params.city}},
                {"userInfo.cost":{ $lte :req.params.cost}},
            ]
        });
        res.json(searchUser)
    }catch (e){
        res.json({ message: e })            
    }
};

const Search= async (req, res) =>{
    try{
        const searchUser = await users.find({
            "$or":[
                
                {username:{$regex:req.params.user}},
                {email:{$regex:req.params.email}}
            ]
        });
        res.json(searchUser)
    }catch (e){
        res.json({ message: e })            
    }
};

const deleteUser =async (req, res) => {
    try{
        const deleteuser = await users.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(400).send()
        }
        res.send(deleteuser);
    }catch (e){
        res.json({ message: e })            
    }
};

export {
    GetAllUsers,
    GetUserById,
    UpdateUser,
    SearchUser,
    deleteUser
}