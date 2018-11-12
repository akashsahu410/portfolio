const userdb=require('../schema/signupschema')
module.exports={
    //to check email exists or not
    finddata(data){
        return new Promise((resolve,reject)=>{
            console.log("inside the api",data)
            userdb.find(data,(err,result)=>{
                if(err)
                {
                    reject(err)
                }
                else{   
                    resolve(result)
                }
            })
        });
    },
    changedata(id,data){
        return new Promise((resolve,reject)=>{
            console.log("inside the api",data)
            userdb.update(id,{$set:data},(err,result)=>{
                if(err)
                {
                    reject(err)
                }
                else{
                    resolve(result)
                }
            })
        });
    },
}