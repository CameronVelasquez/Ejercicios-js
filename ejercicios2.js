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
    let numeroIngresado = prompt ("Introducir un numero");
let num=1;

while (num<=numeroIngresado) {
    num++;
    if(numeroIngresado%num==0){
        console.log(num);
    }

}
}

susDivisores() */

//Ejercicio 6 

/* let array = [10, 5, 45, 50, 2, 15, 55, 60,
1, 88]

function unArray(array){
    let nuevoArray = ""
    for (indices of array){
     nuevoArray += indices + ", ";
     }console.log(nuevoArray)
}
unArray(array);  */


//Ejercicio 7 

/* let array = [10, 5, 45, 50, 2, 15, 55, 60,
    1, 88]

function duplicarEnArray(array){
let arrayDeDuplicados = ""
    for (numeros of array){
        arrayDeDuplicados += numeros*2 + ", ";
    }console.log(arrayDeDuplicados)
}
duplicarEnArray(array);  */

//Ejercicio 8 

/* const arrayFamilia = [
    {
      nombre: "Cameron",
      parentesco: "el hijo mayor",
      nombreMascota: "Loki",
      opinionMascota: "es mi mejor amigo"
    },
    {
      nombre: "Maruzella",
      parentesco: "la hija del medio",
      nombreMascota: "Loki",
      opinionMascota: "lo adoptó Cameron"
    },
    {
      nombre: "Maximiliano",
      parentesco: "el hijo menor",
      nombreMascota: "Loki",
      opinionMascota: "es simpatico"
    },
    {
      nombre: "Pamela",
      parentesco: "la madre",
      nombreMascota: "Loki",
      opinionMascota: "me encanta regalonearlo"
    },
    {
      nombre: "Neldar",
      parentesco: "el padre",
      nombreMascota: "Loki",
      opinionMascota: "lo extraño mucho cada día"
    }
  ];
  
  presentacionMiembrosFamilia(arrayFamilia);
  
  function presentacionMiembrosFamilia(familia) {
    familia.forEach(function(familiar) {
      console.log(`Hola, me llamo ${familiar.nombre}, de mi familia soy ${familiar.parentesco}, mi mascota se llama ${familiar.nombreMascota} y ${familiar.opinionMascota}.`);
    });
  } */

//Ejercicio 9

/* const soloImpares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
    if (soloImpares[i] % 2 !== 0) {
    console.log(soloImpares[i]);
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
/* 
let numDesorden = [10, 5, 45, 50, 2, 15, 55, 60,
    1, 88]

function ordenarNumeros(array){
    for(let j = 0; j < array.length; j++){
        for( let i = 0; i < array.length; i++){
            let orden = 0
            if (array[i]< array[i+1]){
                orden = array[i+1]
                array[i+1] = array [i]
                array[i] = orden 
            }
        }
    }
    console.log(array)
}

ordenarNumeros(numDesorden)
 */