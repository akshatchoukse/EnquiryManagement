const express = require("express")
const router = express.Router()
const StudentSchema = require("../Models/StudentSchema")

router.post('/student', async(req,res)=>{
    const newStudent = new StudentSchema()
    await newStudent.save()
    res.send("Student Added Successfully")
})
router.get("/student", async(req,res)=>{
    const allStudent = await StudentSchema.find()
    res.send(allStudent)
})
router.delete("/student/:id", async(req,res)=>{
    await StudentSchema.findByIdAndDelete(req.params.id)
    res.send("Student Deleted Successfully")
})
router.put("/student/:id",async(req,res)=>{
    await StudentSchema.findByIdAndUpdate(req.params.id , req.body)
    
})
module.exports = router