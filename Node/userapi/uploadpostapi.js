const userdb=require('../schema/postschema')
module.exports={
    //to save the data of upload post
    uploadpost(data){
        return new Promise((resolve,reject)=>{
            console.log("inside the api of upload post",data)
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
    findpost(data){
        return new Promise((resolve,reject)=>{
            console.log("inside the api of find post",data)
            userdb.find(data,(err,result)=>{
                if(err)
                {
                    reject(err)
                }
                else{
                    resolve(result)
                }
            })
        })
    }
}