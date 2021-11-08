const express=require('express')
const cors=require('cors')
const auth=require('./routes/routes.js')
const request=require('./routes/request-route.js')
const app=express()
require('./models/db.js');
const nodemailer = require("nodemailer")

const Transport=nodemailer.createTransport("SMTP",{
  service:'Gmail', 
  auth: {
    user: "asanthosh421@gmail.com",
    pass: "6382659635As",
  },
});


app.use(express.json())
app.use(cors())
app.use('/api',auth);
app.use('/request',request);
app.post('/mail',(req,res)=>{
    Transport.sendMail({
        from:'asanthosh421@gmail.com',
        to:'asanthosh421@gmail.com', 
        subject: "Hello ✔",
        text: "Hello world?",
        html: "Hello world?"
    })
    Transport.verify(function (error, success) {
        if (error) {
          console.log(error,'this is error');
        } else {
          console.log("Server is ready to take our messages");
        }
      });
})
app.listen('8000',(err)=>{
    if(err)console.log(err)
    console.log('sucess');
})