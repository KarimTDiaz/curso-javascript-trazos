/* /* - Usando la función que genera un número aleatorio anterior, crea una función que reciba un array de 5 números. Imprime por consola una posición aleatoria del array. */

/* const array = [1, 2, 3, 4, 5]
array.forEach(number => {
    console.log(Math.floor(Math.random() * number))
}); */

/* - Crea una función que reciba un array con 3 números. La función deberá imprimir por consola.

  - "La suma de todos los números es:[suma]"
  - "La media de todos los números es:[media]"
  - "El mayor es [mayor] y el menor es [menor]" */

 /*  const array2 =[20,38,50]
  let suma = 0;
  let media = 0;

  for (let i = 0; i < array2.length; i++) {
    suma += array2[i];
}
console.log(suma); */
 /* */ 

/* - Usando la función que genera un número aleatorio anterior, crea una función que reciba un array de 5 números. Imprime por consola una posición aleatoria del array. */

const generateRandomNumber = (number)=>{
    console.log(Math.random() * number)
}

const randomPositionArray = (array)=>{

}

/* - Crea una función que reciba un array con 3 números. La función deberá imprimir por consola.

  - "La suma de todos los números es:[suma]"
  - "La media de todos los números es:[media]"
  - "El mayor es [mayor] y el menor es [menor]" */

  const numberArrayPrint = (array3)=>{
    console.log(array3[0] + array3[1] + array3[2])
    console.log((array3[0] + array3[1] + array3[2])/3)
    console.log(Math.max(array3[0], array3[1], array3[2]))
    console.log(Math.min(array3[0], array3[1], array3[2]))

  }

  numberArrayPrint([1,2,3]);

  /* - Crea una función que reciba un array con 5 números y un número aleatorio entre 0 y 5. La función deberá decir si el array contiene ese número y en qué posición o si no lo contiene. */
  const generateRandomNumber2 = (number)=>{
    return Math.floor(Math.random() * number)
}

  const arrayIncludesRandom = (array4,randomNumber)=>{
    console.log(randomNumber)
    if(array4.includes(randomNumber)){
        console.log('Contiene el numero en la posicion' + array4.indexOf(randomNumber))
    } else{
        console.log('no lo contiene')
    }
  }

  arrayIncludesRandom([1,2,3,4,5], generateRandomNumber2(5));

  /* - Crea una función que reciba un array vacío y lo devuelva con 3 números aleatorios entre 0 y 100. */

  const fillArray =(arrayRandom)=>{
    arrayRandom.push(generateRandomNumber2(100))
    arrayRandom.push(generateRandomNumber2(100))
    arrayRandom.push(generateRandomNumber2(100))
    console.log(arrayRandom)
    return arrayRandom
  };

  /* console.log(fillArray([])) */

  /* - Usando la función anterior, crea otra función que imprima el valor en la posición 0 del array después de haber eliminado la primera y la última posición. */

  const removeFirstAndLast = (arrayRandom)=>{
    arrayRandom.pop()
    arrayRandom.shift()
    console.log(arrayRandom[0])
  }

  removeFirstAndLast(fillArray([]));
  
