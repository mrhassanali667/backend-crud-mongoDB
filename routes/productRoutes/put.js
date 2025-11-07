import express from 'express';
import Product from '../../models/product/index.js';

const putProducts = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)
        res.status(201).send({
            message: "product successfully updated",
            product: product,
            status: 201
        });
    } catch (err) {
        console.log(err)
        res.status(500).send({
            message: err.message,
            product: null,
            status: 500
        });

    }
}


export default putProducts;
