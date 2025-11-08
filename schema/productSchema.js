import * as yup from 'yup'

const productSchema = yup.object({
    name: yup.string().required("name is required"),
    price: yup.number().required("price is required"),
    inStock: yup.boolean().required("inStock is required"),
    category: yup.string().required("category is required")
});



export default productSchema;