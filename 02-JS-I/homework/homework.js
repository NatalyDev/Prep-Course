// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Nataly"; //Nat Las variables String deben de llevar comillas ""  ``

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 19;

// Crea una variable booleana:
const nuevoBool = true; //true---verdadero  false---falso

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) { //----> devolverString("Hola")
  // "Return" la string provista: str
  // Tu código:
  return str
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  
  var suma = x + y
  return suma 

}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  
  var resta = x - y
  return resta 
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  
  var multiplica = x * y
  return multiplica 
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:

  var divide = x/y
  return divide

}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  
  // Igual ===  Doble Igual==  Distinto !==  Mayor >  Menor <   Menor o Igual <=   Mayor o Igual>=

  if (x===y){
    return true;
}
else{
  return false
  }
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  
  if (str1.length===str2.length){
    return true;
}
else{
  return false
  }

}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:

  if (num<90){
    return true;
}
else{
  return false
  }
  
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  
  if (num>50){
    return true;
}
else{
  return false
  }

}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  
  obtenerResto = x % y
  return obtenerResto
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  
  if (num % 2 === 0){
    return true
}
else{
  return false
  }

}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  
  if (num % 2 !== 0){
    return true
}
else{
  return false
  }
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  
  var num = Math.pow(num,2)
  return num 

}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  
  var num = Math.pow(num,3)
  return num
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  
var num = Math.pow(num, exponent);
return num;

}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  
  var num = Math.round (num);
  return num;
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  
var num = Math.ceil (num);
return num;

}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
   
  var num = Math.random (num);
  return num;
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false

  if (numero > 0){   //Si el numeo es mayor a 0, entonces es positivo
    return "Es positivo"
}
else if (numero < 0 ){ //De lo contrario, es negativo
  return "Es negativo"
  }
return false
  }

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:

return str + "!"

}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:

  //AlejandroDiaz
 // Pasa a ser Alejadro Diaz
  return nombre + " "+ apellido;
  
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  
return "Hola" + " "+ nombre + "!"

}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  
  //Para obtener el Area de un Rectangulo debemos multiplicar su altura por su anchura: Nat ;)
  var resultado = alto * ancho;
  return resultado;

}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí:

  //Multiplicamos el lado del cuadrado * 4 para obtener su perímetro
  var resultadoPerimetro = lado * 4;
  return resultadoPerimetro;
  
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí:

  var resultadoArea = (base * altura) / 2;
  return resultadoArea;

}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí:

  /*
  Si 1 Euro equivale a $1.20. Multiplicamos la cantidad de euros por el valor del $ para saber
   cuanto $ son al cambio: Nat ;)
   */

  var resultado = euro * 1.20;
  return resultado;
  
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí:

// Nat :) Verifica si el usuario ingresó un string de más de un carácter usando el .length
  if (letra.length > 1){
return  "Dato incorrecto";
}
else if (letra === 'a'|| letra === 'e'|| letra === 'i' || letra === 'o' || letra === 'u'){
  return "Es vocal";
}
else{
  return "Dato incorrecto"
}
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
