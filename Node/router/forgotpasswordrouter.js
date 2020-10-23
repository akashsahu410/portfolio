const express=require('express');
const app=express.Router();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const forgotpasswordapi=require('../userapi/forgotpasswordapi');
const nodemailer=require('nodemailer');
const localStorage=require('localStorage');
app.post('/password',async (req,res)=>{
    try{
        console.log("data get ",req.body)
        const resultfromapi=await forgotpasswordapi.finddata(req.body);
        console.log("sfjdsfh",resultfromapi)
        if(resultfromapi.length>0){
            let transporter=nodemailer.createTransport({
                service:'gmail',
                host:'smtp.gmail.com',
                auth:{
                    user:'akashsahu410@gmail.com',
                    pass:'password'
                }
            });
            let mailOptions={
                from:'akashsahu410@gmail.com',
                to:req.body.email,
                subject:'Forgot Password',
                html:"<a href='http://localhost:8081/forgot/verify/" +resultfromapi[0]._id+"'>Click on link</a> to verify"
            };
            transporter.sendMail(mailOptions,function(err,info){
                if(err)
                    console.log(err);
                else
                    console.log("Email Sent");
            });
            res.status(200).send("Email Sent");
        }
        else
        {
            res.status(200).send("Not Found");
        }
        }
        catch(err){
            console.log("error in router",err);
            res.status(404).send(err);
        }
})

app.get('/verify/:id',(req,res)=>{
    try{
        console.log("inside the get router");
        localStorage.setItem('resetId',req.params.id)
        res.redirect(`http://localhost:3000/reset`);
    }
    catch(err){
        console.log(err);
    }
})
app.post('/change',async (req,res)=>{
    let resetId=localStorage.getItem('resetId');
    console.log("inside the reset/change router",resetId,req.body)
    try{
        let changeData=await forgotpasswordapi.changedata({_id:resetId},{password:req.body.password})
        res.status(200).send("Password changed Successfully")
        localStorage.remove('resetId')
    }
    catch(err){
        res.status(404).send(err)
    }
})
module.exports=app;
