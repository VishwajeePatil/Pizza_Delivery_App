const mongoose = require("mongoose");
const stockSchema = new mongoose.Schema({
        base: {
            Neapolitan: {
                type: Number,
                default: 0
            },
            NewYorkStyle: {
                type: Number,
                default: 0
            },
            Sicilian: {
                type: Number,
                default: 0
            },
            ChicagoDeepDish: {
                type: Number,
                default: 0
            },
            ThinCrust: {
                type: Number,
                default: 0
            }
        },
        sauce: {
            MarinaraSauce: {
                type: Number,
                default: 0
            },
            PestoSauce: {
                type: Number,
                default: 0
            },
            AlfredoSauce: {
                type: Number,
                default: 0
            },
            BBQSauce: {
                type: Number,
                default: 0
            },
            WhiteSauce: {
                type: Number,
                default: 0
            }
        },
        topping: {
            Pepperoni: {
                type: Number,
                default: 0
            },
            Margherita: {
                type: Number,
                default: 0
            },
            Hawaiian: {
                type: Number,
                default: 0
            },
            Supreme: {
                type: Number,
                default: 0
            },
            Veggie: {
                type: Number,
                default: 0
            }
        },
        cheese: {
            Mozzarella: {
                type: Number,
                default: 0
            },
            Parmesan: {
                type: Number,
                default: 0
            },
            Cheddar: {
                type: Number,
                default: 0
            },
            Provolone: {
                type: Number,
                default: 0
            },
            Gouda: {
                type: Number,
                default: 0
            }
        },
        veggies: {
            Mushrooms: {
                type: Number,
                default: 0
            },
            BellPeppers: {
                type: Number,
                default: 0
            },
            Onions: {
                type: Number,
                default: 0
            },
            Tomatoes: {
                type: Number,
                default: 0
            },
            Spinach: {
                type: Number,
                default: 0
            }
        }
})
const StockModel = mongoose.model("stock",stockSchema);
module.exports = StockModel;