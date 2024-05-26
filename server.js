const express = require('express');
const errorHandelr = require( './maidellWare/errorHandelr' );
const connectDb = require( './config/dbConiction' );
const dotenv = require('dotenv').config();
connectDb()
const app = express();





const port =  5000;
app.use(express.json());
app.use("/allcontact", require('./routs/contacts')); 
app.use("/users", require('./routs/userRout')); 
app.use(errorHandelr)
app.listen(port,()=>{
    console.log(`listening on port ${port}.....👍`)
});