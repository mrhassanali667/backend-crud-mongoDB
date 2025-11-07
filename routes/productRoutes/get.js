import express from 'express';
import mongoose from 'mongoose';
import Product from '../../models/product/index.js';


const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        console.log(products)
        res.status(200).send({
            message: "users successfully fetched",
            products: products,
            total: products.length,
            status: 200,
        })
    } catch (err) {
        res.status(500).send({
            message: err.message,
            products: [],
            total: 0,
            status: 500,
        })
    }
}


export default getProducts;
