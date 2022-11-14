import express from 'express';
import userLogin from '../controllers/userLogin.js';
import userRegistration from '../controllers/userRegistration.js';
import cookieParser from "cookie-parser"
import {handyAuth, customerAuth} from "../middleware/auth.js"

import cors from 'cors';



const app= express();
//this allows request body to be take json to be made into an object
app.use(express.json());
//all cross object referencing from front end
app.use(cors());
app.use(cookieParser());

app.post('/api/login',userLogin);
app.post('/api/register',userRegistration);

app.get("/handy", handyAuth, (req, res) => res.send("Admin Route"));
app.get("/customer", customerAuth, (req, res) => res.send("User Route"));

app.get('/', (req, res) => {
    res.json({message:'Hello World!'})
})

export default app;