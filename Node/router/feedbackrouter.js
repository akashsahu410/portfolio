const express=require('express');
const app=express.Router();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const feedbackapi=require('../userapi/feedbackapi');
const nodemailer=require('nodemailer');
app.post('/feedback',async (req,res)=>{
    try{
        console.log("data get ",req.body)
        const userfeedback=await feedbackapi.savedata(req.body);
            let transporter=nodemailer.createTransport({
                service:'gmail',
                host:'smtp.gmail.com',
                auth:{
                    user:'akashsahu410@gmail.com',
                    pass:'linkedin12'
                }
            });
            let mailOptions={
                from:'akashsahu410@gmail.com',
                to:req.body.email,
                subject:'Thanks for your feedback',
                html:`<b>Message:</b>${req.body.message}`,
                // html:"<a href='http://localhost:8081/verify/" +resultfromapi.id+"'>Click on link</a> to verify"
            };
            transporter.sendMail(mailOptions,function(err,info){
                if(err)
                    console.log(err);
                else
                    console.log("Email Sent");
            });
            res.status(200).send("Email Sent");
        }
        catch(err){
            console.log("error in router",err);
            res.status(404).send(err);
        }
})
module.exports=app;