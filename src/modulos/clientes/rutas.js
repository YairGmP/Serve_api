const express = require('express');
const router = express.Router();
const respuesta = require('../../red/respuestas')

router.get('/', function(req, res){
    res.send('Cliente api ok')
})

router.get("/update",function(req, res) {
    //respuesta.success(req,res,200,'Hola todo ok👌')
    respuesta.error(req,res,500)
})


module.exports = router;