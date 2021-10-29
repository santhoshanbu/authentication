const express=require('express')
const cors=require('cors')
const router=require('./routes/routes.js')
const app=express()
require('./models/db.js');

app.use(express.json())
app.use(cors())
app.use('/api',router);
app.listen('8000',(err)=>{
    if(err)console.log(err)
    console.log('sucess');
})