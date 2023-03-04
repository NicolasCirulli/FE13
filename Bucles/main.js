const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nombres = ["Juan", "Pedro", "Maria", "Jose", "Luis"];


// for 
for(let i = 0; i < numeros.length ; i++){
    console.log( `El elemento del array numeros en la posicion ${i} es: ${numeros[i]}` )
} 
console.log( nombres )
for( let i = nombres.length - 1 ; i >= 0 ; i-- ){
      console.log( `El elemento del array nombres en la posicion ${i} es: ${nombres[i]}` )
} 


// for of

for( const elemento of [] ){
    console.log( elemento.company.name )
}

// for in
const mentor = {
  nombre : 'Nicolas',
  edad: 28,
}

// while
let i = 1
while ( i < 5) {
    console.log( i )
    i++
}
console.log( `El valor de i después del while es: ${i}` )
// do while
let j = 1
do{
  console.log( j )
  j++
}while( j < 5 )
console.log( `El valor de J después del while es: ${i}` )

// valores falsy son: NaN, "" (string vacio), 0, null, undefined, false

let nombresDeData = [ ]
for (let i = 0; i < data.length; i++) {
    nombresDeData.push( data[ i ]['name'] )
}

let template = ""
for( const nombre of nombresDeData){
  template += `
      <div class="card border-primary">
        <img class="card-img-top" src="holder.js/100px180/" alt="Title">
        <div class="card-body">
          <h4 class="card-title">${nombre}</h4>
          <p class="card-text">Text</p>
        </div>
      </div>
    `
}
console.log( template )



