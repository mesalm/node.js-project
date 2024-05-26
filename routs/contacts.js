



const express = require('express');
const router = express.Router();
const {getContants,
    getContant,
    postContant,
    putContant,
    deletContant
} =require('../controllrs/contactControllrs');
const valiadToken = require( '../maidellWare/validatTokenHalender' );


router.use(valiadToken)
router.route("/").get(getContants).post(postContant)
router.route("/:id").get(getContant).put(putContant).delete(deletContant)


module.exports = router;