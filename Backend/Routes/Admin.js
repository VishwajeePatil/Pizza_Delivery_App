const express = require("express");
const adminRouter = express.Router();

const PizzaVarientModel = require("../Model/PizzaVarients.Model");

adminRouter.get("/varient", (req,res)=>{
    res.send("This Is Vaients");
})

module.exports = adminRouter;