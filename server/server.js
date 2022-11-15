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

app.post("/contact", function(request,response){
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        post:465,
        secure:true,
        auth: {
            user:"handyman.shu@gmail.com",
            pass:"Handyman.123"
        }
    });
    var textBody = `FROM: ${request.body.name}; EMAIL: ${request.body.email}; MESSAGE: ${request.body.message}`;
    var htmlBody = `<h2>MAil From CContact Form</h2><p>from: ${request.body.name} <a herf='mailto:${request.body.email}'>${request.body.email}</a></p>`
    var mail = {
        from: "handyman.shu@gmail.com",
        to: "elzenaria.ahmed@gmail.com",
        subject: "Contact Form Submission",
        text: textBody,
        html: htmlBody,
    };
    transporter.sendMail(mail, function(err,info){
        if(err){
            response.json({message:"an error occured: check the server"})
        }
        else{
            response.json({message:`message sent with ID: ${info.messageId}`})
        }
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Start on port ${PORT}`));