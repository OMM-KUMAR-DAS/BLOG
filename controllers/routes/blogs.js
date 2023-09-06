const express=require("express")
const router=express.Router()

const{createcomment}=require("../controllers/commentcontroller")

const{createpost,getpost}=require("../controllers/postcontroller")

router.post("/createcomm",createcomment)
router.post("/createpos",createpost)
router.get("/getpos",getpost)




module.exports=router