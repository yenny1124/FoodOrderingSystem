const mongoose = require('mongoose') //connect to MongoDB

// create item schema to create item model 
const itemSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a correct item name"]
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,

        },
        image: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    }
)

// create item model
const Item = mongoose.model('Item', itemSchema);

// export the item model out
module.exports = Item;