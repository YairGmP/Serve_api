const DB = require('../../BD/mysql')
const tabla = 'clientes'


function todos(){
    return DB.todos(tabla)
}

function uno(id){
    return DB.uno(tabla, id)
}

function agregar (body){
    return DB.agregar(tabla, body)
}

function eliminar (body){
    return DB.eliminar(tabla,body)
}

// function agregar(data){
//     return DB.agregar(tabla,data)
// }

// function eliminar(){

// }

module.exports = {
    todos, uno, agregar, eliminar
}