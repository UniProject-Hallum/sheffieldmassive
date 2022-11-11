import express from 'express';
// import loginUser from '../controller/LoginController.js'
// import createUser from '../controller/RegisterController'

import cors from 'cors';

const app= express();
//this allows request body to be take json to be made into an object
app.use(express.json());
//all cross object referencing from front end
app.use(cors());

//LOGIN
// app.post('/api/login',loginUser);
// app.post('/api/register',createUser);

app.get('/', (req, res) => {
    res.json({message:'Hello World!'})
})

export default app;