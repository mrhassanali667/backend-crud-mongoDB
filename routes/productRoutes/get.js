import express from 'express';
import mongoose from 'mongoose';
import Product from '../../models/product/index.js';


const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
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

export const getOneUser = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id);
        res.status(200).send({
            message: "product successfully fetched",
            products: product,
            status: 200,
        })
    } catch (err) {
        res.status(500).send({
            message:"product not found",
            products: null,
            status: 500,
        })
    }

}


export default getProducts;
