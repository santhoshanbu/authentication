const mongoose=require('mongoose');

const taskSchema=new mongoose.Schema({
    Department:String,
    Employee:String,
})

const Task=mongoose.model('form',taskSchema)
module.exports=Task 

