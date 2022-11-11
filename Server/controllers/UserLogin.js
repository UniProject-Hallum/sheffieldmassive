import jwt from 'jsonwebtoken';
import userModel from "../models/UserModel.js";
import bcryppt from 'bcrypt';


const userLogin  =async (req, res) => {

    const {email,password}= req.body;

    console.log('this is the request body ' + email + password);

    //find if email exists
    const user = await userModel.findOne({"email":email});

    if(!user){
        //error code
        res.status(409).send("Error with password or username please try again")
    }else{
        console.log("user item:    "+  user)
        const userPassword= user.password;
        const username= user.username;
        const userRole= user.role;

        const passwordIsSame= await bcryppt.compare(password,userPassword);

        if(passwordIsSame){
            jwt.sign({
                    id,email,username,userRole
                },process.env.JWT_SECRET,
                {
                    expiresIn:'3d',
                },
                (err,token) => {
                    if(err){
                        return res.status(500).send(err);
                    }

                    res.json(token)
                    console.log("token: "+token)

                });

        }else{
            res.sendStatus(401);
        }

    }
}

export default userLogin;