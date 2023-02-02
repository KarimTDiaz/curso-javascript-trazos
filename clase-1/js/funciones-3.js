/* ## Funciones de flecha (Todas retornan el resultado y la impresión en consola se hace fuera de la función)

- Crea una función llamada sayHello2 que reciba un nombre por parámetro y diga por consola "hola [nombre]". */

const sayHello2 = name => 'hola ' + name

console.log(sayHello2('karim'));

/* - Crea una función llamada calculateSquareArea que calcule el área de un cuadrado pasándole la medida del lado.
 */

const calculateSquareArea = side => side * side;

console.log(calculateSquareArea(2));

/*- Crea una función llamada calculateTriangleArea que calcule el área de un triángulo pasándole la base y la altura  */

const calculateTriangleArea = (a,b) => (a*b) / 2;

console.log(calculateTriangleArea(2,4));

/* - Crea una función llamada calculateCircleArea que calcule el área de un círculo pasándole el radio. */

const calculateCircleArea = radio => 3.14 * (radio * radio);

console.log(calculateCircleArea(5));

/* - Crea una función llamada celsiusToFahrenheit que reciba un número de grados celsius y los convierta a fahrenheit. La formula es ºF = ºC x 1.8 + 32. */

const celsiusToFahrenheit = degrees => (degrees * 1.8) + 32;

console.log(celsiusToFahrenheit(32));

/* - Crea la función inversa fahrenheitToCelsius. ºC = (ºF - 32) / 1,8. */

const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) / 1.8;

console.log(fahrenheitToCelsius(89.6));

/*  - Crea una función totalPrice que reciba un precio y le sume el IVA.*/

const totalPrice = price => price + (price * 0.21);

console.log(totalPrice(100));

/* - Crea una función llamada writeMessage que reciba "name, material, size y note" y que escriba el siguiente mensaje por consola "[name] ha pedido una caja de [material] de tamaño [size]. [note]. */

const writeMessage = (name, material, size, note) => name + ' ha pedido una caja de ' + material + ' de tamaño ' + size + ', ' + 'con mucho cariño';

console.log(writeMessage('Karim','metal','pequeña','con cariño'));


