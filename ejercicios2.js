/* Ejercicios Bucles */

//Ejercicio 1 
//  function tablaDeMultiplicar (numero) {
//     for ( let i = 1; i <=10; i++){
//      console.log(i * numero)
//     }
    
//  }
// tablaDeMultiplicar(7)

//Ejercicio 2 


// function acumulados (numero){
//     let acum = 0
//     while (numero !==0){
//         numero =Number(prompt("ingrese numero"))
//     acum += numero 
// } 


// console.log(acum)

// }

// acumulados()


//Ejercicio 3 

//  function adivinarNumero(numeros){
//     let numeroIncognita = 88;
//     let intentos = 0

//     while(numeros !== numeroIncognita){
//         intentos ++
//         numeros = Number(prompt("Ingrese un numero de 1 a 100"));
//         if (numeros > numeroIncognita){
//             alert("El número ingresado es mayor al número incognito, sigue intentando") 
//             intentos += numeros;
//         } else if(numeros < numeroIncognita){
//             alert("El número ingresado es menor al número incógnito, sigue intentando");
//         } else if (numeros === numeroIncognita) {
//             alert("Felicitaciones, Usted ha acertado, el número incognito es 88");
//         }
//     }
//   alert("Has acertado en "+ intentos + " intentos")
// }

// adivinarNumero();


//Ejercicio 4 

/* let numero = prompt("Ingrese un número:")
function esPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
        return alert("No es un número primo");
    } else{
        return alert("Es un número primo!")}
    }
    return numero !== 1;
}
esPrimo();
console.log(esPrimo(numero)); */

//Ejercicio 5 

/* function susDivisores (){
    let fivenum = prompt ("Introducir un numero");
let num=1;

while (num<=fivenum) {
    num++;
    if(fivenum%num==0){
        console.log(num);
    }

}
}

susDivisores() */

//Ejercicio 6 

/* let array = [10, 5, 45, 50, 2, 15, 55, 60,
1, 88]

function unArray(array){
    let acum = ""
    for (indices of array){
     acum += indices + ", ";
     }console.log(acum)
}
unArray(array);  */


//Ejercicio 7 

/* let array = [10, 5, 45, 50, 2, 15, 55, 60,
    1, 88]

function doubleMyArray(array){
let index = ""
    for (indices of array){
        index += indices*2 + ", ";
    }console.log(index)
}
doubleMyArray(array);  */

//Ejercicio 8 

/* const miFamilia = [
    {
      nombre: "Juan",
      edad: 30,
      genero: "Hombre",
      parentesco: "Padre"
    },
    {
      nombre: "Ana",
      edad: 25,
      genero: "Mujer",
      parentesco: "Madre"
    },
    {
      nombre: "Alfredo",
      edad: 5,
      genero: "Hombre",
      parentesco: "Hijo"
    },
    {
      nombre: "Sofía",
      edad: 3,
      genero: "Mujer",
      parentesco: "Hija"
    },
    {
      nombre: "Mario",
      edad: 60,
      genero: "Hombre",
      parentesco: "Abuelo"
    }
  ];
  
  presentarFamilia(miFamilia);
  
  function presentarFamilia(familia) {
    familia.forEach(function(persona) {
      console.log(`Hola, mi nombre es ${persona.nombre}, tengo ${persona.edad} años, soy ${persona.genero} y mi parentesco es ${persona.parentesco}.`);
    });
  } */

//Ejercicio 9

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
    if (numbers[i] % 2 !== 0) {
    console.log(numbers[i]);
    }
} */



//Ejercicio 10


/* 
function sumaParImpar (numero){

    let sumaPares = 0
    let sumaImpares = 0

    while (numero !==0){
        let numero = Number(prompt("escribe un numero"))
        if (numero % 2 == 0){
            sumaPares += numero
        }
        else if (numero % 2 !== 0){
            sumaImpares += numero
        }
        if (numero === 0)break;
    }
    console.log("la suma de los numeros pares ingresados es: " + sumaPares + " y la suma de los numeros impares ingresados es: " + sumaImpares);
    
}

sumaParImpar() */

//Ejercicio 11

/* let arrayPrueba = [ 10, 5, 45, 50, 2, 15 ];

function numeroMax (arrayX){
    let masGrandeQue = arrayX[0]

    for (let i = 1; i < arrayX.length; i++){
        if (masGrandeQue < arrayX[i]) {
            masGrandeQue = arrayX[i]
        }
    }
    console.log(masGrandeQue)
}
numeroMax(arrayPrueba) */

//Ejercicio 12


/* 
let arrayPrueba = [ 10, 5, 45, 50, 2, 15 ];

function numeroMin (arrayX){
    let n = arrayX.length //6
    let seraMin = arrayX[0]

    for (let i = 1; i < n ; i++){
        if (i < seraMin ){
            seraMin = arrayX[i]
        }
    }
    return seraMin
}
console.log(numeroMin(arrayPrueba)) */




//Ejercicio 13

/* function piedraPapelTijera (){

    let name1 = prompt("jugador 1 ingresa tu nombre")
    let name2 = prompt("jugador 2 ingresa tu nombre")
     let jugador1 = prompt("Jugador 1, ingrese piedra, papel o tijeras")
     let jugador2 = prompt("Jugador 2, ingrese piedra, papel o tijeras") 
    
    while (jugador1 === jugador2 || jugador1 !== jugador2 ){ 

            
            if (jugador1 === "piedra" && jugador2 === "tijeras" || jugador1 === "tijeras" && jugador2 === "papel" || jugador1 === "papel" && jugador2 === "piedra"){
                alert(name1 + " ganó");break
            }
            if (jugador2 === "piedra" && jugador1 === "tijeras" || jugador2 === "tijeras" && jugador1 === "papel" || jugador2 === "papel" && jugador1 === "piedra"){
                alert( name2 + " ganó");break
            }
            if (jugador1 === jugador2){
                alert("es un empate, vuelvan a jugar")
                jugador1 = prompt("Jugador 1, ingrese piedra, papel o tijeras")
                jugador2 = prompt("Jugador 2, ingrese piedra, papel o tijeras")

            }
            
}
}

piedraPapelTijera()
 */
//Ejercicio 14




/* function triangulo(caracter) {
    for (let i = 0; i < 5; i++){
        let arbolito = ""
        for (let j = 0; j <= i; j++){
            arbolito += caracter
        }
        console.log(arbolito)
    }
}

triangulo("*") */



//Ejercicio 15
/* 
function triangulo(caracter) {
    for (let i = 5; i > 0; i--){
        let arbolito = ""
        for (let j = 0; j < i ; j++){
            arbolito += caracter
        }
        console.log(arbolito)
    }
}

triangulo("*") */

//Ejercicio 16 

//pendiente