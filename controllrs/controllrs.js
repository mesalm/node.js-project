
const asyncHalende =require("express-async-handler");
const Contact = require('../models/contactModels');
// get contants
//rout get 
// acsess puplec
const getContants = asyncHalende(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
})
// post contant
//rout post 
// acsess puplec
const postContant = asyncHalende(async (req, res) => {
    console.log(req.body);
    const {name, email, phone}=req.body;
    if(!name || !email || !phone){
        res.status(404);
        throw new Error("all fieldes is nessesry")

    }
    const contat = await Contact.create({
        name,
        email,
        phone,
    })
    res.status(200).json(contat)
})
//rout get contact 
// acsess puplec
const getContant = asyncHalende(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error('contact not found');
    }
    res.status(200).json(contact)
})
// put contant
//rout put l
// acsess puplec
const putContant =asyncHalende( async(req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error('contact not found');
    }
    const updateContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new :true}
    
    
    )

    res.status(200).json({message: `update contact ${req.params.id}`})
})
// delet contant
//rout delet 
// acsess puplec
const deletContant =asyncHalende(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error('contact not found');
    }
    await Contact.findOneAndDelete(req.params.id)

    res.status(200).json(contact)
})

module.exports ={
    getContants,
    getContant,
    postContant,
    putContant,
    deletContant
}