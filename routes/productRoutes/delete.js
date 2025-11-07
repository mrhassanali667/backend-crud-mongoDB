import express from 'express';
import Product from '../../models/product/index.js';

const deleteProducts = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id)
        res.status(204).send({
            message: "product successfully deleted",
            product: product,
            status: 204
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


export default deleteProducts;
