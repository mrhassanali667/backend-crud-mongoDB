import express from 'express'
import router from './routes/index.js';
import morgan from 'morgan';
import mongoose from './db/index.js';
import cors from 'cors'


const app = express();
const port = 3000;

app.use(cors())
app.use(morgan("short"))
app.use(express.json())
app.use('/', router)

mongoose.connection.on("open", () => {
    console.log("Database is Connected")
})

mongoose.connection.on("error", (err) => {
    console.log("Database Error", err)
})



app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})


