import express from 'express'
import getProducts, { getFilteredProducts, getOneProduct, searchProducts, } from './get.js';
import postProducts from './post.js';
import putProducts from './put.js';
import deleteProducts from './delete.js';

const productsRouter = express.Router();

productsRouter.get('/', getProducts);
productsRouter.get('/product/:id', getOneProduct);
productsRouter.get('/filter', getFilteredProducts);
productsRouter.get('/search', searchProducts);
productsRouter.post('/', postProducts);
productsRouter.put('/:id', putProducts);
productsRouter.delete('/:id', deleteProducts);

export default productsRouter