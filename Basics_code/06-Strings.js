// Concatenacion

let myName = 'Samuel'
let greating = 'Hola, ' + myName + '!'
console.log(greating)

// longitud
console.log(greating.length)

// Acceso a el indice
console.log(greating[0])
console.log(greating[11])

// Metodos comunes 
console.log(greating.toLocaleUpperCase())
console.log(greating.toLocaleLowerCase())
console.log(greating.indexOf('Samuel')) // Busqueda por indice
console.log(greating.indexOf('!'))
console.log(greating.includes('Samuel')) // Busqueda por valor
console.log(greating.includes('Hola'))
console.log(greating.includes('!'))
console.log(greating.slice(0, 5)) // Rango de caracteres
console.log(greating.replace('!', ', Soy un fantastico dev')) // Buscar y remplazar

// Templates literales

// String en varias lineas
let message = ` Esto es un texto
en 
varias 
lineas 
`  // Solo funcionan las templates con el acento ``

console.log(message)


// Interpolacion de valores

let email = 'samuelgozgiraldo1357@gmail.com'

console.log(`Hola ${myName}, Tu email es ${email}`)