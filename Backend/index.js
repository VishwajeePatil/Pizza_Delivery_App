const express = require("express");

const {connection} = require("./db")
const {UserModel} = require("./Model/UserModel")

const app = express();

app.use(express.json());
app.use(express.text());

app.get("/",(req,res)=>{
    res.send("This Is Home Route");
})
app.post("/signup", async(req,res)=>{
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
app.listen(8000,async()=>{
    try {
        console.log("Server Is Live At 8000")
        await connection
        console.log("DataBase Connected Successfully")
    } catch (error) {
        console.log("Error While Connecting Database")
    }
})