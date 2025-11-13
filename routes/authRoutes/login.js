import User from '../../models/user/index.js'
import bcrypt from 'bcrypt'
import 'dotenv/config'
import userShema from '../../schema/userSchema.js'
import jwt from 'jsonwebtoken'

const loginUser = async (req, res) => {
    const { email, password } = req.body
    try {
        userShema.validateSync(req.body)
        const user = await User.findOne({
            email: email
        })
        if (user) {
            let checkPass = bcrypt.compareSync(password, user.password)
            if (checkPass) {
                let data = user.toObject()
                delete data.password
                let token = jwt.sign({ email: user.email }, process.env.JWT_KEY)
                return res.status(200).json({
                    message: "successfully login",
                    user: data,
                    status: 200,    
                    token
                })
            }
            res.status(404).json({
                message: "incorrect password",
                user: null,
                status: 403
            })
        } else {
            res.status(404).json({
                message: "user not found",
                user: null,
                status: 404
            })
        }
    } catch (err) {
        res.status(500).json({
            message: err.code == 11000 ? "email is already in use" : err.message,
            user: null,
            status: 500
        })
    }
}

export default loginUser