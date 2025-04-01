const express = require('express');
const config = require('./config');
const clientes = require('./modulos/clientes/rutas');
const usuarios = require('./modulos/usuarios/rutasuser')

const app = express();
app.use(express.json());

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

const mySQLdata = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_BD
}

console.log(process.env.PORT)

module.exports=app;