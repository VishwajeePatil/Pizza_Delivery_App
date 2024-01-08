const express = require("express");
const adminRouter = express.Router();

const PizzaVarientModel = require("../Model/PizzaVarients.Model");

adminRouter.get("/varient", (req,res)=>{
    res.send("This Is Vaients");
})
adminRouter.get("/",(req,res)=>{
    res.send("This Is Dashboard");
})
module.exports = adminRouter;