const errorHandelr =require('express-async-handler')

module.exports={
    register ,
    login,
    current,
}



// get rejestr
//rout /user/rejest
// acsess puplec
const register = asyncHalende(async (req,res) => {
    res.json({message: 'the registration is already registered'})
})

const login = asyncHalende(async (req,res) => {
    res.json({message: 'login'})
})

const current = asyncHalende(async (req,res) => {
    res.json({message: 'current'})
})