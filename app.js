const express = require("express")
const app = express()
const connectDB = require("./ConnectDB")
connectDB()
app.listen(5001,()=>{
    console.log("Server Started on localhost:5001")
})