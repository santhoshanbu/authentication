const mongoose=require('mongoose');

const requestSchema=new mongoose.Schema({
    Name:String,
    Mail:String,
    Address:String,
    Pan:String,
    Aadhar:String,
    Meterial:String,
    Rs:String
})

const Request=mongoose.model('request',requestSchema)
module.exports=Request