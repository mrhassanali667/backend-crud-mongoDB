import express from 'express';
import Product from '../../models/product/index.js';
import productSchema from '../../schema/productSchema.js';

const putProducts = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)
        res.status(201).send({
            message: "product successfully updated",
            product: product,
            total: 1,
            status: 201
        });
    } catch (err) {
        res.status(500).send({
            message: err.message,
            product: null,
            total: 0,
            status: 500
        });

    }
}


export default putProducts;
