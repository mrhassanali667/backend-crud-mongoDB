import * as yup from 'yup'

const userShema = yup.object({
    email: yup.string().required("email is required"),
    password: yup.string().required("password is required")
})

export default userShema