import express from "express";
import dbConnect from "./helpers/dbConnect.js";
import { authRoutes, songRoutes, userRoutes } from "./routes/index.js";

const app = express();
app.use(express.json())
dbConnect;
app.use("/api/auth",authRoutes)
app.use("/api/user",userRoutes)
app.use("/api/song",songRoutes)
const port = process.env.PORT;
app.listen(port,()=>{
    console.log("listening to port 4000")
})