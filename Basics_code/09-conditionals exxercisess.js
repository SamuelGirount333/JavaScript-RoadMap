// Ejercicios de condicionales 


// if 

fisrtName = "Name Object"
showName = true

if (showName == showName) {
console.log( `Nombre: ${fisrtName}`)
}



nameUser = 'This is test'
pasWord = '333'

if (nameUser === 'This is test' && pasWord === '333' )  {
console.log(`Nomre del usuario: ${nameUser}  contrasena: ${pasWord}`)
}


let valorTemperatura = 0

if (valorTemperatura < 0 ) {
    console.log(`${valorTemperatura}: Negativo`)
} else if (valorTemperatura == 0) {
    console.log(`${valorTemperatura}: igual a 0 `)
} else {
    console.log(`${valorTemperatura}: Positivo`)
}

let month = 'Diciembre'
const months = [
{ nombre: 'Enero', estacion: 'Verano' },
{ nombre: 'Febrero', estacion: 'Verano' },
{ nombre: 'Marzo', estacion: 'Otoño' },
{ nombre: 'Abril', estacion: 'Otoño' },
{ nombre: 'Mayo', estacion: 'Otoño' },
{ nombre: 'Junio', estacion: 'Invierno' },
{ nombre: 'Julio', estacion: 'Invierno' },
{ nombre: 'Agosto', estacion: 'Invierno' },
{ nombre: 'Septiembre', estacion: 'Primavera' },
{ nombre: 'Octubre', estacion: 'Primavera' },
{ nombre: 'Noviembre', estacion: 'Primavera' },
{ nombre: 'Diciembre', estacion: 'Verano' }
]

switch (month){
    case 'Enero':
    console.log(months[0])
    break
    case 'Febrero':
    console.log(months[1])
    break    
    case 'Marzo':
    console.log(months[2])
    break    
    case 'Abril':
    console.log(months[3])
    break    
    case 'Mayo':
    console.log(months[4])
    break    
    case 'Junio':
    console.log(months[5])
    break    
    case 'Julio':
    console.log(months[6])
    break    
    case 'Agosto':
    console.log(months[7])
    break    
    case 'Septiembre':
    console.log(months[8])
    break    
    case 'Octubre':
    console.log(months[9])
    break    
    case 'Noviembre':
    console.log(months[10])
    break    
    case 'Diciembre':
    console.log(months[11])
    break

}