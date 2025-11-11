import express from 'express'
import productsRouter from './productRoutes/index.js';
import authRouter from './authRoutes/index.js';

const router = express.Router();

router.use('/products', productsRouter)
router.use('/auth', authRouter)


export default router;


