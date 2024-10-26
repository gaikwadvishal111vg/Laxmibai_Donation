import express from'express';
import configDotenv   from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import messageRouter from "./routes/messageRouter.js"
const app=express();
configDotenv.config({path: "./config.env"})

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods:["POST"],
    credentials:true,
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect(process.env.MONGO_URI,{
    DBName: "MERN_Donation"
}).then(() => {
    console.log("Connected to Database");
    
}).catch((error) =>{
    console.log("Some Error Ocuured while Connecting to Database",error);
})


app.use("/api/v1/message", messageRouter);
export default app;
