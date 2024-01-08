const mongoose = require("mongoose")
const pizzaVarientSchema = new mongoose.Schema({
    size:{
        type:Number,
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
    }
})
const PizzaVarientModel = mongoose.model("pizza_varients",pizzaVarientSchema);
module.exports = PizzaVarientModel;