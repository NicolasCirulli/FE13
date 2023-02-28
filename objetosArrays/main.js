// Objetos

const mentor = {
    nombre : "",
    apellido : 'Cirulli',
    edad : 28,
    coordinador : true,
    mascota : {
        nombre : 'Kugi',
        color: 'Gris',
        especie: 'Gato',
        edad : 3
    },
    propiedadABorrar : null,
}

// modificando una propiedad en el objeto
mentor.nombre = 'Nicolás Catriel'

// crear una propiedad en el objeto
mentor.deporteFavorito = 'Futbol'

// borrar una propiedad de un objeto
delete mentor.propiedadABorrar

// Array

const numeros = [ 23,13,77,12,54,123,64,12,13 ]

const nombresAlumnos = ['Virginia', 'Agustin', 'Camila', 'Cecilia', 'Constanza']

const mentores = [
    mentor,
    {
        nombre : 'Facu',
        apellido : 'Araujo',
        edad : 23,
        coordinador : false,
    },
    {
        nombre: 'Lucho',
        apellido : 'Repetti',
        edad : 22,
        coordinador : false,
    },
]

const arrayPrueba = [ [1,2,3], [4,5,6], [7,[8,9]] ]

// Agregar elemento/s al final del array 
numeros.push( 50,15,16 )

// Agregar elemento/s al principio
numeros.unshift( 0,1,2,3 )

// Eliminar el ultimo elemento
console.log( numeros.pop() )

// Eliminar el primer elemento
console.log( numeros.shift() )

// Encontrar el indice de un elemento
console.log( numeros.indexOf( 13 ) )

// Verificar si el array incluye un elemento
console.log( numeros.includes( 50 )  )

// Aplanar el array
console.log( arrayPrueba.flat( 2 ) )

console.log( numeros )
