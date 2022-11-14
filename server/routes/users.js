const express = require('express');
const router = express.Router();
const users = require('../models/users')
const bcrypt  = require('bcrypt');
const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "SADKJFOAH98HESADNI93243984WURWNDSA()_SDKEDFMdsPKGEP90WEJ0!?EJ90;£$4509lk"

// get back all the users

router.get('/',async (request,response) => {
    try{
        const posts = await users.find();
        response.json(posts)
    }catch(error){
        response.json({ message: error })
    }
});

// Register a user

router.post('/',async (request,response) =>{

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)
    
    const registerUser = new users({
        fullName:request.body.fullName,
        email:request.body.email,
        password:securePassword,
        type:request.body.type,
        //description:request.body.description
    });
    try{
        /*const oldUser = await users.findOne(request.params.email );
        if (oldUser){
            response.send({ error:"User Exists"})
        }*/
        const saveRegistration = await registerUser.save();
        response.json(saveRegistration).navigate("/login");
        
    }catch(error){
        response.json({ message: error })   
    }
});

//login users
router.post("/login",async (request,response) => {
    const{ email,password } = request.body;
    console.log({email})
    const user = await users.findOne({ email });
    if(!user) {
        return response.json({ error: "User Not Found"})
    }
    if (await bcrypt.compare(password,user.password)){
        const token= jwt.sign({},JWT_SECRET);

        if(response.status(201)){
            return response.json({status: "ok",data : token});
        }else{
            return response.json({ error: "error"})
        }
    }
    response.json({ status: "error", error:"Invalid Password"})
})

router.post("/profile", async (request,response) =>{
    const { token } = request.body;
    try{
        const user = jwt.verify(token, JWT_SECRET);
        console.log(user)
        const useremail = user.email;
        user.findOne({ email: useremail })
            .then((data) => {
                response.send({ state: "ok", data: data});
            })
            .catch((error) => {
                response.send({ state: "error", data: error });
            });
    } catch ( error ){}
})

//get back spacific user

router.get('/:userId',async (request,response) => {
    try{
        const user = await users.findById(request.params.userId);
        response.json(user);
    }catch(error){
        response.json({ message: error })
    }
});

// update user records

router.patch('/:userid', async (request,response) => {
    try{
        const updateUser = await users.updateOne({ _id: request.params.userid},
                { $set: { email: request.body.email }}          
            );
        response.json(updateUser)
    }catch(error){
        response.json({ message: error })
    }
});

module.exports = router;