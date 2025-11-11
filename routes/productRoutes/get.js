import express from 'express';
import mongoose, { setDriver } from 'mongoose';
import Product from '../../models/product/index.js';
import productSchema from '../../schema/productSchema.js';


const getProducts = async (req, res) => {
    const { limit, skip } = req.query
    try {
        const products = await Product.find().limit(limit).skip(skip);
        res.status(200).send({
            message: products.length < 1 ? "No products available yet." : "users successfully fetched",
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

export const getOneProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id);

    } catch (err) {
        res.status(404).send({
            message: "product not found",
            products: null,
            status: 404,
        })
    }

}

export const getFilteredProducts = async (req, res) => {
    let queryObj = {};
    const { priceLt, priceGt, limit } = req.query

    if (priceLt && priceGt) {
        queryObj = {
            ...queryObj,
            price: { $lt: priceLt, $gt: priceGt }
        }
    }

    if (priceLt && !priceGt) {
        queryObj = {
            ...queryObj,
            price: { $lte: priceLt }
        }
    }

    if (priceGt && !priceLt) {
        queryObj = {
            ...queryObj,
            price: { $gte: priceLt }
        }
    }

    try {

        const products = await Product.find({
            ...queryObj
        })
        res.status(200).json({
            message: "products fetched products",
            data: products,
            total: products.length,
            status: 200
        })
    } catch (err) {
        res.status(500).json({
            message: err.message,
            data: null,
            total: 0,
            status: 500
        })
    }
}

export const searchProducts = async (req, res) => {
    const { name } = req.query
    try {
        const products = await Product.find({
            name: { $regex: name, $options: 'i' }
        }
        )

        if (products.length < 1) {
            return res.status(404).json({
                message: "products not found",
                data: [],
                total: 0,
                status: 404
            })
        }
        res.status(200).json({
            message: "products successfully fetched",
            data: products,
            total: products.length,
            status: 200
        })

    } catch (err) {
        res.status(500).json({
            message: err.message,
            data: null,
            total: 0,
            status: 500
        })
    }
}


export default getProducts;
