import { FindAllUsers,FindUserByID } from "../database/UserDAO.js";
import users from "../models/UserModel.js";


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
        const user = await users.findOne(req.param.id);
        res.json(user)
    }catch (e){
        res.json({ message: e })            
    }
};

const UpdateUser = async (req, res) =>{
    try{
        const updateUser = await users.updateOne({ _id: req.params.userid});
        res.json(updateUser)
    }catch (e){
        res.json({ message: e })            
    }
};

const SearchUser = async (req, res) =>{
    try{
        const searchUser = await users.find({
            "$or":[

                {"userInfo.skills":{$regex:req.params.user}},
                {"userInfo.city":{$regex:req.params.email}}
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