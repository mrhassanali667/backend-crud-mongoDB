import express from 'express'
import registerUser from './register.js'
import loginUser from './login.js'

const authRouter = express.Router()

authRouter.post('/register', registerUser)
authRouter.post('/login', loginUser)

export default authRouter