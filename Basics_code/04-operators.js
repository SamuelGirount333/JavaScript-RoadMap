// Operadores Arimeticos
console.log('Operadores Arimeticos')

let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicacion
console.log(a / b) // Division
console.log(a % b) // Modulo
console.log(a ** b) // Exponente 

a++ // Incremento
console.log(a) 

b-- // Decremento 
console.log(b)

// Operadores de asignacion
console.log('Operadores de asignacion') 

let myvariable = 2
console.log(myvariable)
myvariable += 2
console.log(myvariable)

myvariable -= 2
myvariable *= 2
myvariable /= 2
myvariable %= 2
myvariable **= 2

// Operadores de comparacion 
console.log('Operadores de comparacion')

console.log(a > b)
console.log(a < b)
console.log(a >= b) 
console.log(a == b) 
console.log(a == 6) // Igualdad por valor
console.log(a == '6') // Igualdad por valor
console.log(a == a)
console.log(a === a) // Igualdad por identidad  (por tipo y valor)
console.log(a === 6)
console.log(a === '6')
console.log(a != 6) // Negacion
console.log(a !== '6')

console.log('Comparaciones Absolutas')

console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == '')
console.log(0 == ' ')
console.log(0 == 'Hola')
console.log(0 === '')
console.log(undefined == null)
console.log(undefined === null)



// Truthy valores (valores verdaderos)

// Todos los numeros positivos y negativos menos el cero
// Todas las cadenas de texto menos las vacias
// Todos los boolean 


// Falsy values (valores falsos)

// 0 
// 0n
// NaN (not a number)
// boolean (false)
// Cadenas de texto vacias

// Operadores Logicos 
console.log('Operadores Logicos')

// and (&&)
console.log(5 > 15 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 > 10 && 15 > 20 && 30 > 40)

// or (||)
console.log(5 > 15 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 && 15 > 20 || 30 < 40)


// not (!)
console.log('Operador not (!)')
console.log(!(5 > 18 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

// Operadores ternarios 
console.log('Operadores tenarios')

const isRaining = false
isRaining ? console.log('Esta lloviendo') : console.log('No esta lloviendo')