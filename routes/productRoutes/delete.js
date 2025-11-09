import express from 'express';
import Product from '../../models/product/index.js';

const deleteProducts = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id)
        console.log(product)
        res.status(200).send({
            message: "product successfully deleted",
            product: null,
            status: 200
        });
    } catch (err) {
        console.log(err)
        res.status(500).send({
            message: "product not found",
            product: null,
            status: 500
        });

    }
}


export default deleteProducts;
