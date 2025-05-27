// condicionales if, else if, else


// if (si)
let age1 = 37
let age2 = 27
let age3 = 17

if  (age1 == 37) {
    console.log('if:','La edad es 37')
}

// else (si no)

if (age2 == 37) {
    console.log('la edad es 37')
} else {
    console.log('else:','la edad es diferente de 37')
}

// else if (si no, si)

if (age3 == 37) {
    console.log('La edad es 37')
} else if (age3 < 18) {
    console.log('else if','Es menor de edad')
} else {
    console.log('La edad no es 37 ni es menor de edad')
}

// Operador ternario 

const message = age1 ? 'la edad es 37' : 'La edad no es 37'
console.log('Operador ternario:', message)


// Switch 

let day = 3
let dayname

switch (day) {
    case 0:
    dayname = 'lunes'
        break
        
            case 1:
    dayname = 'Martes'
        break

            case 2:
    dayname = 'Miercoles'
        break

            case 3:
    dayname = 'Jueves'
        break

            case 4:
    dayname = 'Viernes'
        break

            case 5:
    dayname = 'Sabado'
        break

            case 6:
    dayname = 'Domingo'
        break
    default:
        dayname = 'Numero de dia incorrecto' // Else de opciones ..!
}
console.log(dayname)


