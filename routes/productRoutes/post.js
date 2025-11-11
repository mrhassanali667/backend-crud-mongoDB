import express from 'express';
import Product from '../../models/product/index.js';
import productSchema from '../../schema/productSchema.js'

const postProducts = async (req, res) => {
    try {
        // productSchema.validateSync(req.body, { strict: true })
        const product = await Product.create({ ...req.body })
        res.status(201).send({
            message: "product successfully added",
            product: product,
            total: 1,
            status: 201
        });
    } catch (err) {
        console.log(err)
        res.status(500).send({
            message: err.message,
            product: null,
            total: 0,
            status: 500
        });

    }
}


export default postProducts;
