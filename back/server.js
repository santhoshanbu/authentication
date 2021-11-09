const express = require('express')
const cors = require('cors')
const auth = require('./routes/routes.js')
const request = require('./routes/request-route.js')
const app = express()
require('./models/db.js');
// const nodemailer=require('nodemailer')


app.use(express.json())
app.use(cors())
app.use('/api', auth);
app.use('/request', request);
app.listen('8000', (err) => {
    if (err) console.log(err)
    console.log('sucess');
});
