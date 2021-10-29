const express = require('express');
const Task = require('../models/models.js')
const router = express.Router();
const mongoose = require('mongoose');


const getData=async(req, res) => {
    try{
        const getCrud=await Task.find()
        res.status(200).json(getCrud)
    }
    catch(err){
        res.status(400).json(err)
    }
 }
 

const postData=async(req, res) => {
    const newCrud=await Task(req.body)
   try{
      newCrud.save()
    res.status(201).json(newCrud)

   }
   catch(err){
       res.status(400).json(err)
   }
}

const updateData=async(req,res) => {
    
    const {id:_id} = req.params
    const data=req.body
  
        if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('No Data with that ID') 
        const updatedData=await Task.findByIdAndUpdate(_id,data,{new:true})
        res.status(200).json(updatedData)
}

const deleteData=async(req,res) => {
    
    const {id:_id} = req.params
    const data=req.body
  
        if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('No Data with that ID') 
        const deletedData=await Task.findByIdAndDelete(_id,)
        res.status(200).send('Successfully deleted')
}
router.get('/', getData)

router.post('/',postData )

router.put('/:id',updateData )

router.delete('/:id',deleteData )

module.exports = router;