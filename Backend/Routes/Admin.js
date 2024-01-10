const express = require("express");
const PizzaVarientModel = require("../Model/PizzaVarients.Model")
const adminRouter = express.Router();

adminRouter.get("/varient", async (req,res)=>{
    try {
        const varients = await PizzaVarientModel.find();
        res.send(varients);
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error");
    }
})
adminRouter.post("/addvarient", async (req,res)=>{
    const {name,size,img_url,base,sauce,topping,cheese,veggies,price} = req.body;
    try {
        const new_varient = new PizzaVarientModel({
            name,
            size,
            img_url,
            base,
            sauce,
            topping,
            cheese,
            veggies,
            price
        })
        await new_varient.save();
        res.status(200).send("Varient Added Successfully");

    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
})
adminRouter.get("/",(req,res)=>{
    res.send(req.user);
})
module.exports = adminRouter;