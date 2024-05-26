const asyncHalende =require("express-async-handler");
const jwt = require('jsonwebtoken');
   


const valiadToken = asyncHalende(async(req,res ,next)=>{
    let token;
    let authHeader = req.headers.Authorization|| req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')){
        token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err , decode)=>{

            if(err){
                res.status(401);
                throw new Error('user not authenticated')
            }
            req.user =decode.user;
            next();
           
        })
        if(!token){
            res.status(401);
            throw new Error('user not authenticated')
        }
    }


})



module.exports =valiadToken;