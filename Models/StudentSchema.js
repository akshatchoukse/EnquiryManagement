const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    college_name : String,
    student_name : String,
    student_contactno : Number , 
    student_year : Number,
    followup : String
})
module.exports = mongoose.model("StudentSchema" , schema)