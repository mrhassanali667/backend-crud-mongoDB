import express from 'express';
import Product from '../../models//product/index.js';

const postProducts = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(201).send({
            message: "product successfully added",
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


export default postProducts;
