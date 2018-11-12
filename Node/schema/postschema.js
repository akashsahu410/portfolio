const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    email:{type:String},
    images:{type:String},
    date:{type:String},
    time:{type:String},
    timeago:{type:String},
    like:{type:Array}
});

module.exports=mongoose.model("postcollections",userSchema);