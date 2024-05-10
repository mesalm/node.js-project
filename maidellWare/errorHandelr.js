const {constanc}= require('../constans')
const errorHandelr =(err,req ,res ,next) => {
const stutsCOde =res.stutsCOde ? res.stutsCOde :500;
switch (stutsCOde) {
    case constanc.VALDATION_ERROR:
       res.json({ titel : "valedation faild",message :err.message ,stackTrace :err.stack}) 
       break;
    case constanc.UNAUTHORIZED :
        res.json({ titel : "UNAUTHORIZED",message :err.message ,stackTrace :err.stack})
       break;
    case  constanc.FORBIDDEN  :
        res.json({ titel : "FORBIDDEN",message :err.message ,stackTrace :err.stack})
     break;
    case  constanc.NOT_FOUND :
        res.json({ titel : "not found",message :err.message ,stackTrace :err.stack})
   break;
    case  constanc.SERVER_ERROR :
        res.json({ titel : "SERVER ERROR",message :err.message ,stackTrace :err.stack})
   break;
    default:
        console.log("all is ok");
        break;
}






}

module.exports = errorHandelr