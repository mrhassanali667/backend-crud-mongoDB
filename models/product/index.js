import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Boolean,
        required: true,
    },
    category: [{
        type: String,
        required: true,
    }]
}, {
    timestamps: true
})

const Product = mongoose.model("products", productSchema)

export default Product