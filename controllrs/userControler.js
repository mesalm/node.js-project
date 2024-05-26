const asyncHalendr =require('express-async-handler')
const User = require('../models/userMOudel')
const  bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

// get rejestr
//rout /user/rejest
// acsess puplec
const register = asyncHalendr(async (req,res) => {
    const {username,email, password}= req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error ("Please enter a username and email and password")
    } 
     // check if user is already in use
    const usarAvaliabl = await User.findOne({ email: email})
        if(usarAvaliabl){
            res.status(400);
            throw new Error('user alredy existe')
        }
        //hash the password
        const hashPassword = await bcrypt.hash(password, 10)
        console.log(hashPassword)
        const user =await User.create({
            username,
            email,
            password:hashPassword,
        })
        console.log(user)
         if(user){
            res.status(201).json({_id: user.id , email: user.email})
         }else{
            res.status(404)
            throw new Error('Not Found')
         }  
})

//log in route
const login = asyncHalendr(async (req,res) => {
    const {email, password} = req.body;
    if(!email || !password){
        throw new Error
    }
    const user = await User.findOne({email})
        if(user &&(await bcrypt.compare(password,user.password))){
            const accessToken = jwt.sign({
                user:{
                    username: user.username,
                    email: user.email,
                    id: user.id
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn :'15m'}
        )
            res.status(200).json({accessToken})
        }else{
            res.status(401)
            throw new Error;
        }
})


//current route
const current = asyncHalendr(async (req,res,next) => {
    res.json(req.user)
    next()
})


//export routes
module.exports={
    register ,
    login,
    current,
}