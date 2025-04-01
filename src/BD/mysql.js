const mysql = require('mysql2')
const config = require('../config')

const dbconfig = {
    host:config.mysql.host,
    user:config.mysql.user,
    password:config.mysql.password,
    database:config.mysql.database

}

function conMysql(){
    const conexion = mysql.createConnection(dbconfig);
    conexion.connect((err)=>{
        if(err){
            console.log('[BD err]', err)
            setTimeout(conMysql, 200);
        }else{
            console.log('BD conectada')
        }
    })
    conexion.on('error', err =>{
        console.log('[BD error]', err);
        if(err.code === 'PROTOCOL_CONNECTRION_LOST'){
            conMysql()
        }else{
            throw err;
        }
    })
}

conMysql()

function todos(tabla){
    const mensaje = 'Soy consulta todos y esta es la tabla a consultar: ' + tabla
    return mensaje

}

function uno(tabla, id){

}

function agregar(tabla, data){
    const datos = {
        tabla: tabla,
        data: data
    }
    return(datos)
}

function eliminar(tabla, id){

}

module.exports = {
    todos, uno, agregar, eliminar
}

