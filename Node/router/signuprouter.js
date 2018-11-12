const express=require('express');
const app=express.Router();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const userapi=require('../userapi/signupapi');

const multer=require('multer');


// upload images using multer
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./upload');
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
    });
    const upload=multer({storage:storage});

app.post("/signup",upload.single('images'),async (req,res)=>{
    try{
        console.log("inside signup router",req.body);
        req.body.images=req.file.originalname;
        let data=await userapi.finddata({email:req.body.email})
        console.log("data ndskfdsf",data)
        if(data.length > 0){
            res.status(200).send("Email id already exists")
        }
        else{
            const userdata=await userapi.savedata(req.body)
            res.status(200).send("Registered Successfully");
        }
    }
    catch(err){
        console.log("error in signup router",err)
        res.status(404).send(err);

    }
})
app.post("/login",async (req,res)=>{
    console.log("inside");
    try{
        console.log("dta",req.body)
        let logindata=await userapi.finddata({"email":req.body.email,"password":req.body.password})
        res.status(200).send(logindata)
    }
    catch(err){
        console.log("error",err);
        res.status(404).send(err)
    }
})
app.post("/profile",async (req,res)=>{
    console.log("inside");
    try{
        console.log("dta",req.body)
        let logindata=await userapi.finddata(req.body)
        res.status(200).send(logindata)
    }
    catch(err){
        console.log("error",err);
        res.status(404).send(err)
    }
})


module.exports=app;