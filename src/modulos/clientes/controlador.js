
const DB = require('../../BD/mysql')
const tabla = 'clientes'


function todos(){
    return DB.todos(tabla)
}

function uno(){

}

function agregar(data){
    return DB.agregar(tabla,data)
}

function eliminar(){

}

module.exports = {
    todos, uno, agregar, eliminar
}