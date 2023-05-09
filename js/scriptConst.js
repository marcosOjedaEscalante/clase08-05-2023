const variableUno = 0;
const arregloUno = [];
let arregloDos = [];
const objetoUno = {
    rut: '111111111-1',
    nombre: 'Marcos'
}

objetoUno.nombre = 'Antonio';
console.log(objetoUno);

objetoUno = {};

arregloUno.push('Hola');
arregloUno.push('Adios');
arregloUno.push('Hola, que tal');
console.log(arregloUno);
arregloUno[0] = 'Cambiando';
console.log(arregloUno);

const funcionDos = function(){
    
}

const funcionTres = () => true ? 'Hola':'Adios';

function funcionUno(){
    arregloUno = [];
}

funcionUno();