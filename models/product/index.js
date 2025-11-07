import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    price: {
        type: mongoose.Schema.Types.Number,
        required: true,
    },
    inStock: {
        type: mongoose.Schema.Types.Boolean,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.String,
        required: true,
    }
}, {
    timestamps: true
})

const Product = mongoose.model("products", productSchema)

export default Product