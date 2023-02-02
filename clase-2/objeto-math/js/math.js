/* # Ejercicios

## Math

- Crea una función que reciba un número y genere un número aleatorio entre 0 y ese número. */

const generateRandomNumber = (number)=>{
    console.log(Math.random() * number)
}

generateRandomNumber(5)

/* - Crea una función que reciba un minimo y un máximo y genere un número entero aleatorio entre esos dos números. */
const generateRandomNumber2 = (min, max)=>{
    console.log(Math.floor(Math.random() * (max-min+1)+min));
}

generateRandomNumber2(10,20)
