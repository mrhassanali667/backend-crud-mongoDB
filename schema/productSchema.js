import * as yup from 'yup'

const productSchema = yup.object({
    name: yup.string().required("name is required"),
    description: yup.string().required(),
    price: yup.number().required("price is required"),
    inStock: yup.boolean().required("inStock is required"),
    category: yup.array(yup.string()).required("category is required")
});



export default productSchema;