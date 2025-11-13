import User from '../../models/user/index.js'
import bcrypt from 'bcrypt'
import 'dotenv/config'
import userShema from '../../schema/userSchema.js'
import jwt from 'jsonwebtoken'

const registerUser = async (req, res) => {
    let body = req.body
    try {
        userShema.validateSync(body)
        const password = bcrypt.hashSync(body.password, 10)
        const newUser = await User.create({
            ...body,
            password,
        })
        let user = newUser.toObject()
        delete user.password
        let token = jwt.sign({ email: user.email }, process.env.JWT_KEY)
        res.status(201).json({
            message: "successfully register",
            user: user,
            status: 201,
            token
        })
    } catch (err) {
        res.status(500).json({
            message: err.code == 11000 ? "email is already in use" : err.message,
            user: null,
            status: 500
        })
    }
}


export default registerUser