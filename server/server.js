const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./routes/users')
const contact = require('./routes/contact')
const cors = require('cors');
const nodemailer = require("nodemailer");
//const authRoutes = require('./routes/auth')

dotenv.config()



//middlewares

app.use(cors()); 

app.use(express.json()); 
//

//routes

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database Connected"));


app.use('/api', routesUrls);

const contactEmail = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: "handyman.shu@gmail.com",
      pass: "Handyman.123",
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Start on port ${PORT}`));