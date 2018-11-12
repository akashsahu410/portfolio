const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    name:{type:String},
    email:{type:String},
    message:{type:String}
});

module.exports=mongoose.model("feedbackcollections",userSchema);