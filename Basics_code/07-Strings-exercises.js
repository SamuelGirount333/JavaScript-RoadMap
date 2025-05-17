// Ejercisios de Strings

let nameUser = 'Carlos'
const welcome = 'Bienvenido a XYZ'
console.log(`Hola ${nameUser}, eres parte de la familia ${welcome}`)

// length

let nameUser2 = 'Santiago'
console.log(nameUser2.length) // Longitud del texto

// Indices de caracteres 

let womenName = 'Ana'
console.log(womenName[0])
console.log(womenName[2])

// Mayusculas

let isReally = 'programar'
console.log(isReally.toLocaleUpperCase)

// Texto en varias lineas - Interpolar

let messageConfirmation = `Hola ${nameUser},
Tu pedido ah sido recibido.
Gracias por comprar con nosotros.
`
console.log(messageConfirmation)

// Remplazar 

let tittle = 'Lograre Aprender JavaScript Para el lunes'
console.log(tittle.replace(' ', '-'))

// search

let message = 'Hoy va a llover'
console.log(message.includes('llover'))

let password = 'contraseña123'
console.log('La contraseña es correcta:', password == 'pepito1234')

// longitud

let documentID = '12345678'
let passwordClient = 'abcdefgh'
console.log(`la longitud de ${documentID} es igual a la de ${password}`)
