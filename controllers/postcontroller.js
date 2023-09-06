//const Comments=require("../models/commentmodel")
const Post=require("../models/postmodel")



 exports.createpost=async(req,res)=>{
  try{  
        const{title,user,body}=req.body
        const newpo=new Post({title,user,body})

        const po=await newpo.save()
        res.status(201).json({
            message:po,
        })
  }
  catch(error){
    res.status(400).json({
        message:error
    })
  }     
 }  


 exports.getpost=async(req,res)=>{
    try{  
          
          const com=await Post.find()
          res.status(201).json({
              data:com
           })
    }
    catch(error){
      res.status(400).json({
          message:error
      })
    }     
   }  