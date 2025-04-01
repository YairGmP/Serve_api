const express = require('express');
const router = express.Router();
const respuesta = require('../../red/respuestas')
const controlador = require('../clientes/controlador')

// router.get('/', function(req, res){
//     res.send('Cliente api ok')
// })

router.get("/update",function(req, res) {
    //respuesta.success(req,res,200,'Hola todo ok👌')
    respuesta.error(req,res,500)
})

router.get('/', function(req, res){
    const consult = controlador.todos()
    respuesta.success(req, res, 200, consult)
})

router.post('/agregar', function(req, res){
    const agregar = controlador.agregar(req.body)
    respuesta.success(req, res, 200, agregar)
    
})

module.exports = router;