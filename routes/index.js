import express from 'express'
import productsRouter from './productRoutes/index.js';

const router = express.Router();

router.use('/products', productsRouter)


export default router;


