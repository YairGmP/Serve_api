const express = require('express');
const config = require('./config');
const clientes = require('./modulos/clientes/rutas');
const usuarios = require('./modulos/usuarios/rutasuser')

const app = express();

//configuracion 
app.set('port', config.app.port)

//rutas
app.use('/api/clientes', clientes);
app.use('/api/usuarios', usuarios);


const alumno = {nombre: 'yair', cal: '10', nacionalidad:'MX'}

// app.get('/api/alumno',function(req,res){
//     res.json(alumno)
// })

// app.get('/api/alumno/eliminar',function(req,res){
//     res.send('Hola eliminaste un alumno')
// })

console.log(process.env.PORT)

module.exports=app;