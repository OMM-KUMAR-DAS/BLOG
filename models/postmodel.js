const mongoose=require("mongoose")

const postschema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    user:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    likess:[{
        type:mongoose.Schema.ObjectId,
        refPath:"Like"
    }],
    co:[{
        type:mongoose.Schema.ObjectId,
        refPath:"Comment"
    }]
})

module.exports=mongoose.model("Post",postschema)