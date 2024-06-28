const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id:{type:Number , required:true},
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String },
    images: { type: String }
});

module.exports = mongoose.model("product",productSchema); 