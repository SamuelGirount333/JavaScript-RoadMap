// Tipos de datos Primitivos

// Cadenas de textos (string)
let firstName = 'Samuel Gomez'
let email = "samuel@dev.com"
let alias = 'Sam-Sam'

// Numeros (numbers)
const age = 18 // Enteros
const height = 1.70 // Decimales

// Booleanos 
let isStudentDeveloper = true
let isDriver = false

// undefined
let undefinedValue
console.log(undefinedValue + "NO")

// Null 

let nullValue = null
console.log(nullValue + "NO")

// Symbol 

let mySymbol = Symbol("mysymbol")

// BigInt 
/*
Sirve para cuando tenemos un numoro que rompe la capacidad de el tipo
de dato number y sobrepasa el espacio de memoria establecido por el lenguaje 
de progrmacion que equivale a 64 bytes, pero en realidad se puede usar todo el
espacio de memoria ram del pc JavaScript ejecutara el numero sin importar su 
longitud siempre y cuando usemos el bignint
*/

let myBigint = BigInt(749083749012048120974901237408172094738201748023190) // Palabra Reservada
let myBigint2 = 749083749012048120974901237408172094738201748023190n // Identificador 

// Mostrar los tipos de Datos

console.log(typeof firstName)
console.log(typeof email)
console.log(typeof alias)
console.log(typeof age)
console.log(typeof isStudentDeveloper)
console.log(typeof isDriver)
console.log(typeof undefinedValue)
console.log(typeof nullValue)
console.log(typeof mySymbol)
console.log(typeof myBigint)
console.log(typeof myBigint2)
