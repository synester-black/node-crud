const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name:{
            type: String,
            required: [true,"Product Name Required"]
    },
    quantity: {
        type: Number,
        required: true,
        default:0,
    },
    price: {
        type: Number,
        required: true,
        default:0,
    },
    image: {
        type: String,
        required: false
    },
    

},
    {
        timestamp: true,
    }

);

const Product =mongoose.model("Product",ProductSchema);
