const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
const signupRouter=require("./router/signuprouter");
const feedbackRouter=require("./router/feedbackrouter");
const uploadPostRouter=require("./router/postrouter");
const forgotPasswordRouter=require("./router/forgotpasswordrouter");

app.use(cors());
mongoose.connect("mongodb://localhost:27017/database");
app.use('/',signupRouter)
app.use('/user',feedbackRouter)
app.use('/post',uploadPostRouter)
app.use('/forgot',forgotPasswordRouter); //to send email when forgot password
app.use('/password',forgotPasswordRouter); //to change the password
app.use(express.static('upload'));

app.listen(8081,()=>{
    console.log("starting server at port 8081");
});