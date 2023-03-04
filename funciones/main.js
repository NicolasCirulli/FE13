// hoisting
let primeraVariable = 'Funciona así '

// declaracion de funcion
/* saludar() */
function saludar(){
    // cuerpo de la funcion
    console.log( 'Hola alumnos' )
}

// expresion de funcion
const saludarExpresion = function(){
    console.log( 'hola desde funcion anonima en expresion' )
}
/* saludarExpresion()  */


// parametros y parametros por default

function sumar( parametro1=0, parametro2=0, parametro3=0, parametro4=0 ){
/*     console.log( "parametro 1: ", parametro1 )
    console.log( "parametro 2: ", parametro2 )
    console.log( "parametro 3: ", parametro3 )
    console.log(  "parametro 4: ", parametro4 ) */
    
    let resultado = parametro1 + parametro2 + parametro3 + parametro4
    return resultado
}

console.log( sumar(10, 10)  )
console.log( sumar( 10, 5, 3) )
console.log( sumar( 10, 5, 5, 100, 5) )



console.log( sumar(5, 5) + sumar( 10, 5, 5) )

let resultadoPrueba = sumar(10, 3)

// scope global, local, bloque

// let y const -> bloque
// var dentro de una funcion -> local
// var fuera de una funcion -> global 

{
    {
        let nombre = 'nicolas'
        console.log( nombre )
    }
   /*  console.log( nombre ) // no esta definada porque esta en otro bloque */
}
// return

function restar( numero1, numero2 ){
    let resta = numero1 - numero2
    return resta
}
const resultadoResta = restar( 10, 5 )
const resultadoResta2 = restar( 100, 3 )

/* 
    console.log( resultadoResta )
    console.log( resultadoResta2 ) 
*/

console.log( usuarios )

function transformarArray( array, propiedad ){
    let nuevoArray = [ ]
    for (let i = 0; i < array.length; i++) {
        nuevoArray.push( array[ i ][propiedad] )
    }
    return nuevoArray
}
const nombresDeUsuarios = transformarArray( usuarios, 'name' )
const emailsDeUsuarios = transformarArray( usuarios, 'email' )
console.log( nombresDeUsuarios )
console.log( emailsDeUsuarios )