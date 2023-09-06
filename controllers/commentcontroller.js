const Comment=require("../models/commentmodel")
const Post=require("../models/postmodel")



 exports.createcomment=async(req,res)=>{
  try{  
        const{postt,user,content}=req.body
        const response=await Comment.create({postt,user,content})
        
        const gg=await Post.findById(postt,{$push:{co:response._id}},{new:true}).populate('co').exec();
        
        res.status(201).json({
          message:response,
          data:gg
          
        })
      

  }catch(error)
  {
    res.status(400).json("sorry")

  }
  // catch(error){
  //   res.status(400).json({
  //       message:error
  //   })
  // }     
}

