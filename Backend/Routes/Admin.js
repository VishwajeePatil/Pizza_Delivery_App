const express = require("express");
const PizzaVarientModel = require("../Model/PizzaVarients.Model");
const StockModel = require("../Model/StockModel");
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

adminRouter.delete("/deletevarient/:id",async(req,res)=>{
    console.log(req.params.id);
    try {
        await PizzaVarientModel.findOneAndDelete({_id:req.params.id});
        res.send("Varient Deleted Successfully");
    } catch (error) {
        console.log(error)
        res.send(error);
    }
})

// Stock Routes
adminRouter.get("/stock",async(req,res)=>{
    const stockId = "65a0ae5d60733a5605b5501a";
    try {
        const stock = await StockModel.findOne({_id:stockId});
        res.status(200).send(stock);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
})

adminRouter.post("/stock",async(req,res)=>{
    try {
        const new_stock = StockModel({
                base: {
                  Neapolitan:0,
                  NewYorkStyle:0,
                  Sicilian:0,
                  ChicagoDeepDish:0,
                  ThinCrust:0
                },
                sauce: {
                  MarinaraSauce: 0,
                  PestoSauce:0,
                  AlfredoSauce:0,
                  BBQSauce:0,
                  WhiteSauce:0
                },
                topping: {
                  Pepperoni:0,
                  Margherita:0,
                  Hawaiian:0,
                  Supreme:0,
                  Veggie:0
                },
                cheese: {
                  Mozzarella: 0,
                  Parmesan:0,
                  Cheddar:0,
                  Provolone:0,
                  Gouda: 0
                },
                veggies: {
                  Mushrooms: 0,
                  BellPeppers:0,
                  Onions:0,
                  Tomatoes:0,
                  Spinach:0
                }
        })
        await new_stock.save();
        res.send("Stock Added Successfully");
    } catch (error) {
        console.log(error)
        res.send(error);
    }
})

adminRouter.put("/stock",async(req,res)=>{
    const stockId = "65a0ae5d60733a5605b5501a";
    const {base,sauce,topping,cheese,veggies} = req.body;
    try {
        await StockModel.findOneAndUpdate({_id:stockId},{$set: {base,sauce,topping,cheese,veggies}})
        res.status(200).send("Stock Updated successfully");
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
})
module.exports = adminRouter;