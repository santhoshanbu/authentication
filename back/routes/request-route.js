const express = require('express');
const Request = require('../models/models2.js')
const router = express.Router();
const mongoose = require('mongoose');
const nodemailer=require('nodemailer')

const getData=async(req, res) => {
    try{
        const getCrud=await Request.find()
        res.status(200).json(getCrud)
    }
    catch(err){
        res.status(400).json(err)
    }
 }
 

const postData=async(req, res) => {
    const newCrud = await Request(req.body)
    
   try{
    let transporter = nodemailer.createTransport({
                    service: 'gmail', //what type of servise is using
                    auth: {
                        user: 'asanthosh421@gmail.com', // that is organiser mail id
                        pass: '6382659635As', //that is organaiser mail password
                    },
                });
                
                const compose = {
                    from: 'asanthosh421@gmail.com',
                    to: newCrud.Mail,
                    subject: "Conformation ✔",
                    html: `<div>hello sir.<b>I am ${newCrud.Name}</b> Today I will condect ${newCrud.Meterial}
                           sale Event in this address ${newCrud.Address}.
                           so please allow for my events <button onclick="()=>{}">click</button></div>`,
                }
                transporter.sendMail(compose, (err) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log('message wass send succesfully')
                    }
                })

    newCrud.save((err, data) => {
        if(err){
            res.send({message: err})
        }
        res.send({message: 'Saved successfuly'})
    })

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
        const updatedData=await Request.findByIdAndUpdate(_id,data,{new:true})
        res.status(200).json(updatedData)
}

const deleteData=async(req,res) => {
    
    const {id:_id} = req.params
    const data=req.body
  
        if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('No Data with that ID') 
        const deletedData=await Request.findByIdAndDelete(_id,)
        res.status(200).send('Successfully deleted')
}
router.get('/', getData)

router.post('/',postData )

router.put('/:id',updateData )

router.delete('/:id',deleteData )

module.exports = router;