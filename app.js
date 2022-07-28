const express=require('express')
const mongoose =require("mongoose")
//const Router = require("./routes")

const cors=require("cors")

require("dotenv").config()
const app=express()
app.use(express.json());
app.use(cors())


const MONGOURI="mongodb+srv://abhi:abhi1184@cluster0.klrrz.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(MONGOURI)

mongoose.connection.on('open',()=>{
    console.log("Connected to database")
})

mongoose.connection.on('error',(err)=>{
    console.log("error ",err)
})



app.use(require("./routes/handle"))
app.listen(process.env.PORT || 5000 ,()=>{
    console.log("Server is running on 5000");
})