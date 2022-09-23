// No cambies los nombres de las funciones.

function crearGato (nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:

  var gato = {
    nombre : nombre,
    edad : edad,
    meow: function() {
      return 'Meow!';
    }
  };
  return gato;
}

function agregarPropiedad (objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:

objeto [property] = null; //Agregamos una propiedad al objeto, esto lo podemos hacer con punto(.) o con corchetes []
return objeto; //Devolvemos el objeto
}

function invocarMetodo (objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:

  objeto[metodo](); //Invocamos con los paréntesis

}

function multiplicarNumeroDesconocidoPorCinco (objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:

/* NAT :) Tomememos esyo como ejemplo
var objetoMisterioso = {
  numeroMisterioso:4;
}
*/

//Creamos la variable resultado en donde vamos a guardar la multiplicación
var resultado = objetoMisterioso.numeroMisterioso * 5; //Nat :) Tambien se puede colocar así: objetoMisterioso["numeroMisterioso"]*5;

return resultado;

}

function eliminarPropiedad (objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:

  delete objeto[unaPropiedad]; //Para eliminar una propiedad, utilizamos **DELETE**, el parametro debe ir dentro de []
  return objeto;
}

function nuevoUsuario (nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
var usuario = {
  nombre: nombre,
  email: email,
  password: password
};
return usuario;
}

function tieneEmail (usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:

/* NOTA:
Syntaxis del **IF** con **OBJETOS**

if (nombre del parametro['Se coloca entre comillas la propiedad']){

}
*/

//En este caso, el **IF** lo que nos dice es que 
//**SI** el **USUARIO** tiene **EMAIL** RETORNAR TRUE
// De lo contrario si el usuario NO tiene **EMAIL** retornar FALSE

if(usuario['email']){
  return true;
}
else {
  return false;
}

}

function tienePropiedad (objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:

  //if el objeto tiene propiedad, retornar true, de lo contario retornar false

  if(objeto[propiedad]){
    return true;
  }
  else{
    return false;
  }

}

function verificarPassword (usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // Tu código:

/* **FORMAS DE LLAMAR A UNA PROPIEDAD DE UN OBJETO**
Se puede hacer de esta forma: usuario.password
Y tambien de esta forma: usuario['password']
*/

  if(password===usuario.password){ 
    return true;
  }
  else{
    return false;
  }
}

function actualizarPassword (usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
  // Devuelve el objeto
  // Tu código:

  /* **IMAGINEMOS QUE TENEMOS ESTE OBJETO**
var usuario ={
  passwor:"Nataly"
  */

usuario.password = nuevaPassword; //Primero va el objeto . Propiedad de dicho objeto
return usuario;

}

function agregarAmigo (usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // Tu código:

  usuario.amigos.push(nuevoAmigo);  /*Nat la syntaxis es: *OBJETO*.*PROPIEDAD*.*PUSH*(ARRAY A AÑADIR AL FINAL DEL ARRAY) */
  return usuario;   //retornamos el usuario

}

function pasarUsuarioAPremium (usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:

//Nat el array se llama: usuario --> [{esPemium}, {esPemium}, {esPemium}] *ESTO ES UN ARRAY*
//                                    usuarios[i]

for(var i=0; i < usuarios.length; i++){
usuarios[i].esPremium = true; //usuarios en la posición de [i] *USUARIOS* por que nuestro *ARRAY* se llama así
//usuarios[en la posicion de i].propiedad = Definimos que es true;
}
return usuarios;
}

function sumarLikesDeUsuario (usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:

  /* NAT :) *USUARIO* es un *OBJETO* y tiene un propiedad llamada posts.
  *POSTS* es un *ARRAY* de objetos *POST*

  usuario.posts ---> [{likes:entero}, {likes:entero}, {likes:entero}] 

  ESTO ES UN ARRAY LLAMADO *POSTS* que contiene dentro muchos *likes*

  Entonces hay que recorer cada elemento del *ARRAY POSTS* y sumar todos los likes de los *POST*, es decir de los elemntos
  
 
               objeto.propiedad
          */
  var posts = usuario.posts; //Almacenamos todo nuesto array
  var suma = 0; //Almacenamos la suma que vamos a ir haciendo de todo nuestro array

for(var i = 0; i < posts.length; i++){
  suma = suma + posts[i].likes;
  //Suma va a ser igual a= Lo que tenga suma actualmete + lo que tenga posts en la posisicon de [i].likes
 //De esta manera accedemos a cada valor dentro de array
};
return suma;
}

function agregarMetodoCalculoDescuento (producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:

  producto.calcularPrecioDescuento = function(){ //Nat Así creamos un método, es decir, una Función :)
    var descuento = producto.precio * producto.porcentajeDeDescuento
    var precioConDescuento = producto.precio - descuento
    return precioConDescuento;
  }
return producto;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
}
