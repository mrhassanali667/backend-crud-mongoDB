import express from 'express'
import productsRouter from './productRoutes/index.js';
import authRouter from './authRoutes/index.js';
import tokenVerification from '../middlewares/tokenVerification.js'


const router = express.Router();

router.use('/products', tokenVerification, productsRouter)
router.use('/auth', authRouter)


export default router;


