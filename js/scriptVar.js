/* Declaración de variables */

/* ES5 */
/* var */
var variableUno = 100;

function funcionUno(){
    var variableDos = 5;
    var variableUno = 50;
    console.log(variableDos);
    for(var i = 0 ; i < 10 ; i = i + 1){
        var variableUno = 10;
        console.log(`Variable i: ${i}`);
    }
    console.log(`variableUno dentro función ${variableUno}`);
    console.log(`Variable i fuera del for: ${i}`);
}
funcionUno();
console.log(`variableUno fuera función ${variableUno}`);
console.log(variableDos);
console.log(`Variable i fuera de la función: ${i}`);