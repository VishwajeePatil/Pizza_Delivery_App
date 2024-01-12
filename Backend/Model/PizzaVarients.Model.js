const mongoose = require("mongoose")
const pizzaVarientSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    size:{
        type:Number,
    },
    img_url:{
        type:String,
    },
    base:{
        type:String,
    },
    sauce:{
        type:String,
    },
    topping:{
        type:String,
    },
    cheese:{
        type:String,
    },
    veggies:{
        type:String,
    },
    price:{
        type:Number,
    },
})
const PizzaVarientModel = mongoose.model("pizza_varients",pizzaVarientSchema);
module.exports = PizzaVarientModel;