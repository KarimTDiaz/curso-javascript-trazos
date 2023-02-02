/* ## Funciones con return (Todas retornan el resultado y la impresión en consola se hace fuera de la función)

- Crea una función llamada sayHello2 que reciba un nombre por parámetro y diga por consola "hola [nombre]". */

function sayHello2(name){
    return 'Hola ' + name;
}

console.log(sayHello2('Karim'));

/* - Crea una función llamada calculateSquareArea que calcule el área de un cuadrado pasándole la medida del lado. */

function calculateSquareArea(side){
    return side * side;
}

console.log(calculateSquareArea(4));

/* - Crea una función llamada calculateTriangleArea que calcule el área de un triángulo pasándole la base y la altura. */

function calculateTriangleArea(b ,a){
return (b * a) /2
}

console.log(calculateTriangleArea(2,4))

/* Crea una función llamada calculateCircleArea que calcule el área de un círculo pasándole el radio. */

function calculateCircleArea(radio){
    return 3.14 * (radio * radio)
}

console.log(calculateCircleArea(5));

/*- Crea una función llamada celsiusToFahrenheit que reciba un número de grados celsius y los convierta a fahrenheit. La formula es ºF = ºC x 1.8 + 32.  */

function celsiusToFahrenheit(degrees){
    return (degrees * 1.8) + 32
}

console.log(celsiusToFahrenheit(32));

/* Crea la función inversa fahrenheitToCelsius. ºC = (ºF - 32) / 1,8. */

function fahrenheitToCelsius(fahrenheit){
    return (fahrenheit - 32) / 1.8;
}

console.log(fahrenheitToCelsius(89.6));

/* Crea una función totalPrice que reciba un precio y le sume el IVA. */

function totalPrice(price){
    return price + (price * 0.21)
}

console.log(totalPrice(200));

/*  Crea una función llamada writeMessage que reciba "name, material, size y note" y que escriba el siguiente mensaje por consola "[name] ha pedido una caja de [material] de tamaño [size]. [note]. */

function writeMessage(name,material,size,note){
    return name + ' ha pedido una caja de ' + material + ' de tamaño ' + size + ', ' + 'con mucho cariño'
}

console.log(writeMessage('karim','madera','grande','con cariño'));



