/* ## Funciones 1

- Crea una función llamada sayHello que diga por consola "hola tuNombre" y ejecútala.
 */


function sayHello(){
    console.log('Hola Karim');
}

sayHello();

/* ## Funciones con parámetros (Todas muestran el resultado por consola)

- Crea una función llamada sayHello2 que reciba un nombre por parámetro y diga por consola "hola [nombre]". */

function sayHello2(nombre){
console.log('hola ' + nombre)
}
sayHello2('karim');

/* - Crea una función llamada calculateSquareArea que calcule el área de un cuadrado pasándole la medida del lado. */

function calculateSquareArea(side){
    console.log(side * side);
}

calculateSquareArea(23);

/* - Crea una función llamada calculateTriangleArea que calcule el área de un triángulo pasándole la base y la altura. */

function calculateTriangleArea(b,a){
    console.log((b * a) /2);
}

calculateTriangleArea(2,4);

/* Crea una función llamada calculateCircleArea que calcule el área de un círculo pasándole el radio. */

function calculateCircleArea(radio){
    console.log(3.14 * (radio*radio))
}

calculateCircleArea(5);

/* Crea una función llamada celsiusToFahrenheit que reciba un número de grados celsius y los convierta a fahrenheit. La formula es ºF = ºC x 1.8 + 32. */

function celsiusToFahrenheit(degrees){
    console.log((degrees * 1.8) + 32)
}
celsiusToFahrenheit(32);

/* Crea la función inversa fahrenheitToCelsius. ºC = (ºF - 32) / 1,8. */

function fahrenheitToCelsius(fahrenheit){
console.log((fahrenheit - 32) / 1.8)
}

fahrenheitToCelsius(89.6);

/* Crea una función totalPrice que reciba un precio y le sume el IVA. */

function totalPrice(price){
    console.log(price + (price * 0.21))
}

totalPrice(200);

/* Crea una función llamada writeMessage que reciba "name, material, size y note" y que escriba el siguiente mensaje por consola "[name] ha pedido una caja de [material] de tamaño [size]. [note]. */

function writeMessage(name,material,size,note){
console.log(name + ' ha pedido una caja de ' + material + ' de tamaño ' + size + ', ' +note)
}
writeMessage('Karim', 'madera', 'grande','con cariño');


