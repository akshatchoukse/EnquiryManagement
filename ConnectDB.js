const mongoose = require("mongoose")
const connectDB = ()=>{
    mongoose.connect("mongodb+srv://akshatchoukse:Akshat12345!@cluster0.4uuqq.mongodb.net/enquirymanagement")
    .then(()=> console.log("DataBase Connected Successfully"))
    .catch((err)=> console.log(err))
}
module.exports = connectDB