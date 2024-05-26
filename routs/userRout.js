const express =require('express');
const router = express.Router();
const {
    register ,
    login,
    current,
} = require('../controllrs/userControler');
const valiadToken = require( '../maidellWare/validatTokenHalender' );


router.post('/register' , register)

router.post('/login' ,login)


router.get('/current' , valiadToken,   current)


module.exports = router;

