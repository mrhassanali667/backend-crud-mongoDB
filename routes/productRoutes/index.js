import express from 'express'
import getProducts from './get.js';
import postProducts from './post.js';
import putProducts from './put.js';
import deleteProducts from './delete.js';

const productsRouter = express.Router();

productsRouter.get('/', getProducts);
productsRouter.post('/', postProducts);
productsRouter.put('/:id', putProducts);
productsRouter.delete('/:id', deleteProducts);

export default productsRouter