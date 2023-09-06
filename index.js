const express=require("express")
const bodyParser = require('body-parser')
const cors=require('cors')
const { default: mongoose } = require("mongoose")
const app=express()
app.use(bodyParser.json())
app.use(cors())
require('dotenv').config();
const port=process.env.PORT||5000



mongoose.connect("mongodb+srv://ommdas310:J6w3mHGfVSl8zr1p@cluster0.orf3t12.mongodb.net/Blog?retryWrites=true&w=majority")
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });


 const BLOG=require("./routes/blogs")

 app.use("/api/v1",BLOG)


app.listen(port,()=>{
    console.log(`server started successfully at port ${port}`)
})  

