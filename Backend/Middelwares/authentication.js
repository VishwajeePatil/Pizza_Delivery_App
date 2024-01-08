const express = require("express");
const jwt = require("jsonwebtoken")
const authentication = (req,res,next)=>{
    const token = req.headers.authorization.split(" ")[1];
    console.log(token)
    if(token){
        jwt.verify(token,process.env.secretKey,(err,decoded)=>{
            if(err){
                res.status(401).send("token invalid");
            }
            else{
                next();
            }
        });
    }
    else{
        res.status(401).send("token not Found");
    }
}
module.exports = authentication;