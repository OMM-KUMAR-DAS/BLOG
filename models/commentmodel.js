const mongoose=require("mongoose")

const commentschema=new mongoose.Schema({
    postt:{
        type:mongoose.Schema.Types.ObjectId,
        refPath:"Post"
    },
    user:{
        type:String,
        required:true
    },   
    content:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Comment",commentschema)