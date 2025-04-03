const express = require('express');
const router = express.Router();
const respuesta = require('../../red/respuestas')
const controlador = require('../clientes/controlador')


router.get('/', async function(req, res){
    try {
        const item = await controlador.todos()
        respuesta.success(req,res,200,item)
    } catch (error) {
        respuesta.error(req,res,500,error)
    }
})

router.get("/:id", async function(req, res) {
    try {
        const item =await controlador.uno(req.params.id)
        respuesta.success(req, res, 200, item)
    } catch (error) {
        respuesta.error(req, res, 500, error)
        
    } 
})

router.post('/agregar', async function (req, res) {
    try {
      const items = await controlador.agregar(req.body);
      if (req.body.id == 0) {
        mensaje = 'Datos insertados'
      } else {
        mensaje = 'Datos actualizados'
      }
      respuesta.success(req, res, 200, mensaje);
  
    } catch (error) {
      respuesta.error(req, res, 500, 'Error al obtener datos', error);
    }
  })
  
  router.post('/eliminar', async function (req, res) {
    try {
      const items = await controlador.eliminar(req.body);
      respuesta.success(req, res, 200, 'dato eliminado');
    } catch (error) {
      respuesta.error(req, res, 500, 'Error al obtener datos', error);
    }
  })

router.get("/update",function(req, res) {
    //respuesta.success(req,res,200,'Hola todo ok👌')
    respuesta.error(req,res,500)
})

// router.get('/', function(req, res){
//     const consult = controlador.todos()
//     respuesta.success(req, res, 200, consult)
// })

// router.post('/agregar', function(req, res){
//     const agregar = controlador.agregar(req.body)
//     respuesta.success(req, res, 200, agregar)
    
// })

module.exports = router;