const express = require("express");
const jwt = require("jsonwebtoken");
const authorization = (req,res,next)=>{
    const token = req.headers.authorization.split(" ")[1];
    if(token){
        jwt.verify(token,process.env.secretKey,(err,decoded)=>{
            if(err){
                res.status(401).send("Login Firsts");
            }
            else{
                if(decoded.user.role === "admin"){
                    req.user=decoded;
                    next();
                }
                else{
                    res.status(401).send("Only Admin Can Authorised");
                }
            }
        });
    }
    else{
        res.status(401).send("Login First");
    }
}
module.exports = authorization;