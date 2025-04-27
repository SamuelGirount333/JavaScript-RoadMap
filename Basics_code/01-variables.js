// Palabras reservadas para las variables 

// var
/*
La  manera original de definir una variable 
en JavaScript, este tipo de variable puede
ser modificada solo accediendo a la variable 
y asignandole un nuevo valor
*/

console.log(phoneBrand) // Si se imprime antes de definir la variable la salida sera >>> undefined

var phoneBrand = "Iphone"
console.log(phoneBrand)

phoneBrand = "Samsung"

console.log(phoneBrand)

// let
/* 
Este tipo de variables comparten la propiedad de var
pudiendo acceder a la variable y hacer la modificacion 
de dicho contenido pero cuando una variable es definida 
como let entonces esta solo funcionara y estara  disponible 
dentro del bloque codigo donde se encuentre dicha variable
*/   

// console.log(typeUser) # Hoisting 
/* En este caso si no esta definida aun la variable va petar 
la ejecucion y la salida va a ser 
>>> Cannot access 'typeUser' before initialization
*/

console.log("Variables de ")

let typeUser = "Usario de tipo Agente"

console.log(typeUser)

typeUser = "Usuario de tipo Administrador" 

console.log(typeUser)


// const
/* las variables de tipo const son variables
las cuales si almacenan un valor este no puede
ser modificado, si son accesibles pero este valor 
no puede cambiar una vez que este definido, no quiere
decir que sean inmutables pero para acceder a esta 
propiedad se deben de cumplir unas convenciones 
*/ 

// console.log(agePerson) # Hoisting

const agePerson = 18 

console.log(agePerson)