/* ES5 */
/* Función tradicional */
/* Funciones con o sin parámetros */
/* Funciones con o sin retorno */
/* Funciones Anónimas */

/* function nombreDeFuncion(Parámetro/s o no){
    puede o no retornar: return;
} */
function nombreDeFuncion(paraUno, paraDos, etc /*Parámetro/s o no*/){
    return; //puede o no retornar; 
}

var nombreDeFuncion = function(paraUno, paraDos, etc /*Parámetro/s o no*/){
    return; //puede o no retornar; 
}

/* ES6 */
/* Función Flecha */
const nombreFuncionFlecha = (paraUno, paraDos, etc /*Parámetro/s o no*/) => {
    return; //puede o no retornar; 
}

const funcionFlecha = () => {
    for(let i = 0 ; i < 10 ; i++){
        console.log(i);
    }
}

//Sumar dos números y mostrarlos por pantalla (consola)
const funcionFlechaUnaLineaDeCodigo = (a, b) => console.log(a + b);
const funcionFlechaUnaLineaDeCodigoAlert = (a, b) => alert(a + b);

funcionFlechaUnaLineaDeCodigo(1, 3);

//Sumar dos números y retornarlos
const funcionFlechaUnaLineaDeCodigoRetorno = (a, b) => a + b;
console.log(funcionFlechaUnaLineaDeCodigoRetorno(2, 5));


//identificar si un número es par o impar, retornar un mensaje que diga
//si el número es par o impar
const funcionParImpar = (numero) => {
    //Operador Modulo %
    if(numero % 2 == 0){
        return 'El número es par';
    }else{
        return 'El número es impar';
    }
}

console.log(funcionParImpar(5));
console.log(funcionParImpar(6));

/* Transformando la función previa a una sola línea */
const funcionParImparDos = numero => numero % 2 == 0 ? 'El número es par' : 'El número es impar';

console.log(funcionParImparDos(5));
console.log(funcionParImparDos(6));
