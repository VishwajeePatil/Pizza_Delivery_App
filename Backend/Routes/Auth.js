const express = require("express");
const { UserModel } = require("../Model/UserModel");
const authRouter = express.Router();

authRouter.post("/signup", async(req,res)=>{
    const {name,email,mobileNo,dob,password,getOffer} = req.body;
    try {
        const new_user = new UserModel({
            name:name,
            email:email,
            mobileNo:mobileNo,
            dob:dob,
            password:password,
            getOffer:getOffer
        })
        await new_user.save();
        res.status(201).json({ message: "Signup Successful" });
    } catch (error) {
        if(error.code===11000){
            if(error.keyPattern.mobileNo){
                res.send({msg:"Mobile No Already Exist"});
            }
            else{
                res.send({msg:"Email Already Exist"});
            }
        }
        else{
            console.log(error)
            res.send("Internal Server Error")
        }
    }
})

module.exports = authRouter