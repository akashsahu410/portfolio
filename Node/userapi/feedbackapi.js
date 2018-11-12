const userdb=require('../schema/feedbackschema')
module.exports={
    savedata(data){
        return new Promise((resolve,reject)=>{
            console.log("inside the api",data)
            userdb.create(data,(err,result)=>{
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