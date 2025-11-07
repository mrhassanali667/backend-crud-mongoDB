import mongoose from "mongoose";
import 'dotenv/config'

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}.7w9v4hs.mongodb.net/${process.env.DB_NAME}?appName=HassanCluster`;

mongoose.connect(url);

export default mongoose;