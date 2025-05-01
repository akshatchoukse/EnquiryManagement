const express = require("express")
const app = express()
const connectDB = require("./ConnectDB")
const router = require("./Route/router")
const cors = require("cors")


app.use(express.json())
app.use(cors())
app.use("/detail", router)
connectDB()
app.listen(5001,()=>{
    console.log("Server Started on localhost:5001")
})