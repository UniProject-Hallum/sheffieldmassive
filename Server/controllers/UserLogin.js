import jwt from 'jsonwebtoken';
import userModel from "../models/UserModel.js";
import bcryppt from 'bcryptjs';


const UserLogin  =async (req, res) => {

    const {email,password}= req.body;

    
    const user = await userModel.findOne({"email":email});
    
    if(user == null){
        console.log('this is the request body ' + user);
        return res.status(500).json({message:"Error with password or username please try again"})
    }else{
        
        const userPassword= user.password;
        const username= user.username;
        const userRole= user.role;
        const userId = user._id;
        const userInfo= user.userInfo

        const passwordIsSame= await bcryppt.compare(password,userPassword);

        if(!passwordIsSame){
        
            return res.status(500).json({message:"Error with password or username please try again"});
        }

        if(passwordIsSame){
            try {
                console.log("user item:    "+  user)
                const maxAge = 60*60*3;
                const token = jwt.sign({
                    userId,email,username,userRole,userInfo
                },process.env.JWT_SECRET,
                {
                    expiresIn: maxAge,
                })            
                console.log(token)
                return res.json(token);

            } catch (error) {
                console.log(error);
                return res.status(500).send(error);
            }      
        }
        
    }
}

export default UserLogin;