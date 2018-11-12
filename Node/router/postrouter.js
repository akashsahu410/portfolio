const express=require('express');
const app=express.Router();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const uploadpostapi=require('../userapi/uploadpostapi')
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
app.post('/upload',upload.single('images'),async (req,res)=>{
    try{
        console.log("inside uploadpost router",req.body);
        req.body.images=req.file.originalname;
        const userdata=await uploadpostapi.uploadpost(req.body)
        res.status(200).send({hello:userdata});
    }
    catch(err){
        console.log("error in uploadpost router",err)
        res.status(404).send(err);
    }
})
app.post('/find',async (req,res)=>{
    try{
        console.log("inside uploadpost router",req.body);
        const userdata=await uploadpostapi.findpost(req.body)
        res.status(200).send({userdata});
    }
    catch(err){
        console.log("error in uploadpost cdm router",err)
        res.status(404).send(err);
    }
})

app.post('/fetch_like',async (req,res)=>{
    try{
        console.log("inside uploadpost router",req.body);
        const userdata=await uploadpostapi.findpost(req.body)
        res.status(200).send({userdata});
    }
    catch(err){
        console.log("error in uploadpost cdm router",err)
        res.status(404).send(err);
    }
})
module.exports=app;