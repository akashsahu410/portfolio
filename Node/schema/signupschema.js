const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    firstname:{type:String},
    lastname:{type:String},
    age:{type:Number},
    bio:{type:String},
    email:{type:String},
    password:{type:String},
    images:{type:String},
    preview:{type:String},
    phone:{type:String}
});

module.exports=mongoose.model("usercollections",userSchema);