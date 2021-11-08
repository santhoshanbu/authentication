const mongoose=require('mongoose');
const dburl='mongodb://localhost:27017/db';

module.exports=mongoose.connect(dburl,(err)=>{
    if(err)console.log(`error in db ${err}`);
    console.log('sucessfully connect')
})

