// const Like=require("../models/commentmodel")
// const Post=require("../models/postmodel")



//  exports.createcomment=async(req,res)=>{
//   try{  
//         const{post,user}=req.body
//         const newcomment=new Like({post,user})

//         const com=await newcomment.save()

//         const updatepost=await Post.findById(post,{$push:{  likess:com._id}},{new:true}).populate(" likess").exec()
//         res.status(201).son({
//             post:updatepost,
//         })
//   }
//   catch(error){
//     res.status(400).json({
//         message:error
//     })
//   }     
//  }  