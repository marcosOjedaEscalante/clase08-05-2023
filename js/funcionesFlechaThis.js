/* Funciones tradicionales y objeto this */
function tradicionalThis(){
    console.log(this);
}

tradicionalThis();

let persona = {
    rut: '111111111-1',
    nombre: 'Marcos',
    apellido: 'Ojeda',
    tradcionalThisDentroObjeto: function(){
        console.log(this);
    }
}

persona.tradcionalThisDentroObjeto();

/* Funciones flecha y objeto this */
const funcionFlechaThis = () => {
    console.log(this);
}

funcionFlechaThis();

let personaFlecha = {
    rut: '111111111-1',
    nombre: 'Marcos',
    apellido: 'Ojeda',
    flechaThisDentroObjeto: () => {
        console.log(this);
    }
}

personaFlecha.flechaThisDentroObjeto();
