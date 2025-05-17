// Operadores Arimeticos
const priceBread = 2000
let saleBread = priceBread * 4
console.log('Multiplicacion')
console.log(saleBread)

let ofertClient = 500 
let discountProduct = saleBread - ofertClient
console.log('Resta')
console.log(discountProduct)

const taxProducts = 10
let priceTotal = discountProduct * (taxProducts / 100)
console.log('suma')
console.log(priceTotal)

let payProduct = priceTotal / 2
console.log('Division')
console.log(payProduct)

let productsAmount = 10
let countProducts = productsAmount & 3
console.log('Modulo')
console.log(countProducts)

// Operadores de asignacion

console.log('Operadores de asignacion')

let availableBalance = 20000
console.log('Saldo total:', availableBalance)
let discount1 = 5000
availableBalance -= discount1
console.log('Gasto1:', discount1)

console.log('Saldo total:', availableBalance)
let consigment = 10000
availableBalance += consigment
console.log('Consignacion:', consigment)
console.log('Saldo total:', availableBalance)

console.log('Dia de trabajo')
let workAvalaibleBalance = 55000
console.log('Dia de Trabajo Normal:', workAvalaibleBalance)
workAvalaibleBalance *= 2
console.log('Dia de Trabjo con Extra:', workAvalaibleBalance)

let accountsPayable = 2
workAvalaibleBalance /= accountsPayable
console.log('Cuentas por pagar:', accountsPayable)
console.log('Descuento de cuentas:', workAvalaibleBalance)

let accountsPayable2 = 3
console.log('Saldo dia Trabajo:', workAvalaibleBalance)
let remaining = workAvalaibleBalance %= accountsPayable2
console.log('Restante pago de deudas:', remaining)

// Operadores de Comparacion 

console.log('Operadores de Compararacion')

// True

let hamburger = 12000
let hamburger2 = 10000
console.log('Hamburguesa 1:', hamburger)
console.log('Hamburguesa 2:', hamburger2)
console.log('La Hamburguesa de 12k es mas cara que una de 10k:', hamburger > hamburger2)

let firstName = 'Juan'
console.log('Juan es igual a Juan:', firstName === 'Juan')

const number1 = 10
const number2 = 5
console.log('5 es mayor que 10:',!(number1 == number2))

let number = 5
let numberTwo = 15
console.log('5 es menor o igual que 5:', number < 5 || number == 5)
console.log('5 es menor y 15 es mayor que 5:', number < 5 && numberTwo > 5)


let number3 = 20
console.log('20 es mayor que 15:', number3 > 15)

// False 

let numberMayor = 10
let numberMinor = 5
console.log('10 es menor que 5:', minor > mayor)

let foodOne = 'Pizza'
let foodTwo = 'Hamburguesa'
console.log('Pizza es igual a Hamburguesa:', food1 == food2)

