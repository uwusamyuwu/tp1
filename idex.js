//crear una función que pueda sumar 2 números

console = suma = (num1 , num2) => {
    return num1 + num2
}

const resultado = suma(9,3)
console.log("este es el resultado: " + resultado)

//Crear una función que pueda sumar la siguiente lista de números 1,2,3,4,5

function sumarListaNumeros(lista) {
    let suma = 0;
  
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
  
    return suma;
  }
  
  const numeros = [1, 2, 3, 4, 5];
  const resultadoo = sumarListaNumeros(numeros);
  console.log(resultadoo); 

//Crear una función que pueda calcular el área de un cuadrado

function calcularAreaCuadrado(lado) {
    return lado * lado;
  }
  
  const lado = 5;
  const area = calcularAreaCuadrado(lado);
  console.log(area);


//Crear una función que pueda calcular el área de un rectángulo

  function calcularAreaRectangulo(base, altura) {
    return base * altura;
  }
  
  const base = 8;
  const altura = 6;
  const area = calcularAreaRectangulo(base, altura);
  console.log(area);

//Crear una función que pueda  concatenar 2 palabras

function concatenarPalabras(palabra1, palabra2) {
    return palabra1 + palabra2;
  }
  
  const palabra1 = "Hola";
  const palabra2 = "Me aprueba";
  const palabra3 = "porfis";
  const resultado = concatenarPalabras(palabra1, palabra2, palabra3);
  console.log(resultado);

//Crear una función que pueda  dividir una palabra en letras, ejemplo : HOLA  →  [H,O,L,A]

function dividirPalabraEnLetras(palabra) {
    return palabra.split('');
  }
  
  const palabra = "HOLA";
  const letras = dividirPalabraEnLetras(palabra);
  console.log(letras);

  //Crear una función que pueda mostrar un mensaje

  function mostrarMensaje(mensaje) {
    console.log(mensaje);
  }
  
  const mensaje = "Hola, mundo!";
  mostrarMensaje(mensaje);

  //Crear una función que muestre las vocales de una palabra ejemplo: MARIANA → [A, I]

  function mostrarVocales(palabra) {
    const vocales = [];
    const letras = palabra.split('');
  
    for (let i = 0; i < letras.length; i++) {
      const letra = letras[i].toLowerCase();
      if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        vocales.push(letras[i]);
      }
    }
  
    return vocales;
  }
  
  const palabra = "MARIANA";
  const resultado = mostrarVocales(palabra);
  console.log(resultado);