import express from "express";
import {register} from "../controller/auth.js"
import {login} from "../controller/auth.js"
const router=express.Router();

router.get("/",(req,res)=>{
    res.send("Hello this is auth end point")
})
router.post("/register",register)
router.post("/login",login)

export default router