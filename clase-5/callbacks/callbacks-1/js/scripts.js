/* # Ejercicios

## Callbacks

- Crea una función que sea capaz de multiplicar cada número de un array por 2 e imprimir por consola el resultado de cada multiplicación. Crea otra función que reciba como parámetro un array de 10 números y la función anterior. Entre las 2 deben imprimir por consola el array con cada número multiplicado por dos. */

const multiplyArray = (array) =>{
    for (const number of array){
        console.log(number * 2)
    }
}



const callbackArray = (unArray, unaFuncion) =>{
    unaFuncion(unArray)
}

callbackArray([1,2,3,4,5,6,7,8,9,10] , multiplyArray);

/* - Crea una función que sea capaz de multiplicar cada número de un array por 3 y devolver un array nuevo relleno con el resultado de cada multiplicación. Crea otra función que reciba como parámetro un array de 10 números y la función anterior. Entre las 2 deben imprimir por consola el array con cada número multiplicado por tres. */

const multiplyArrayBy3 = (array) => {
    let newArray = [];
    for (const number of array) {
        newArray.push(number * 3)
    }
    return newArray
};

const callbackArrayBy3 = (array10Num , multiplyArray) =>{
   const newArrayBy3 = (multiplyArray(array10Num))
   console.log(newArrayBy3)
}

callbackArrayBy3([1,2,3,4,5,6,7,8,9,10], multiplyArrayBy3);

/*- Crea una función que sea capaz de filtrar los números pares e impares y devolver un array nuevo relleno sólo con los pares. Crea otra función que reciba como parámetro un array de 10 números y la función anterior. Entre las 2 deben imprimir por consola el array con los números pares.  */

const evenNumbers = (array) => {
    let newArrayEvens = []
    for (const number of array){
        if(number % 2 === 0){
            newArrayEvens.push(number)

        }
    }
    return newArrayEvens

}

const evenNumbersCb = (array10Num, evensFunction) =>{
    const newArrayEvensCb = (evensFunction(array10Num))
    console.log(newArrayEvensCb)
}

evenNumbersCb([1,2,3,4,5,6,7,8,9,10], evenNumbers);


