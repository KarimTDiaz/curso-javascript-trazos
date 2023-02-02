/* # Ejercicios

## Bucles Determinados

- Crea una función que reciba un número, la función debe imprimir una cuenta atrás desde ese número hasta 0. */

const countdown = (number) =>{
    for (let i = number ; i >= 0; i--){
        console.log(i)
    }
}
countdown(9);

/* - Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array. */

const array= [1,2,3,4,5,6,7,8,9,10]
const arrayRecieve =(array)=>{
    let result = 0;
    for (const number of array){
        result = result + number;
    }
    console.log(result);
    
}
arrayRecieve(array);

/* - Crea una función que reciba un número e imprima por consola la tabla de multiplicar del número que ha recibido hasta el 10. Para el 4 el resultado debe ser:

4 x 0 = 0
4 x 1 = 4
4 x 2 = 8
4 x 3 = 12
4 x 4 = 16
4 x 5 = 20
4 x 6 = 24
4 x 7 = 28
4 x 8 = 32
4 x 9 = 36
4 x 10 = 40 */

const multiply = (number)=>{
 for (let i = 0; i<=10; i++){
    console.log(`${number} x ${i} = ${number * i}`)
 }
}

multiply(4);

/*- Crea la función inversa para que la tabla de multiplicar salga en orden inverso. Para el 4 el resultado debe ser:

4 x 10 = 40
4 x 9 = 36
4 x 8 = 32
4 x 7 = 28
4 x 6 = 24
4 x 5 = 20
4 x 4 = 16
4 x 3 = 12
4 x 2 = 8
4 x 1 = 4
4 x 0 = 0  */

const multiplyInvert =(number)=>{
    for(let i = 10; i>=0 ; i++){
        console.log(`${number} x ${i} = ${number*i}`)
    }
};

/* - Crea una función que reciba un año y tu edad, la función debe imprimir:

  - "naciste en el año X"
  - "En el año X cumpliste 1 año"
  - "En el año X cumpliste 2 años"
  - "En el año X cumpliste 3 años"
    .... */

    const yearAndAge = (year, age)=>{
        for (let i = 1; i < age ; i++){
            if(i=== 1){
                console.log(`en el año ${i+(year-age)} cumpliste ${i} año`)
            } else{
                console.log(`en el año ${i+(year-age)} cumpliste ${i} años`)
            }
        }
    }
    yearAndAge(2022,28);

    /* - Crea una función que reciba dos números e imprima todos los números pares desde el primero hasta el segundo. Si recibe 2 y 12 imprimirá 2, 4, 6, 8, 10, 12. */

    const numbersPares =(number1,number2)=>{
        for (let i = number1; i<= number2;i++){
            if(i % 2 === 0){
                console.log(i)
            }
        }

    }

    numbersPares(1,10);

    /* - Crea una función que genere 2 arrays y los rellene con 5 números aleatorios cada uno, la función debe decir qué valores se han repetido en los dos arrays. */

    const createArrays =()=>{
        const array1 = [];
        const array2 = [];
        for (let i = 0; i<5 ; i++){
            const randomNumber1 = (Math.floor(Math.random()*10))
        const randomNumber2 = (Math.floor(Math.random()*10))
            array1.push(randomNumber1)
            array2.push(randomNumber2)
            if(randomNumber1 === randomNumber2){
                console.log(`${randomNumber1} y ${randomNumber2} se repiten`)
            }
            
        }
        console.log(array1,array2)

    }
createArrays()

/* - Crea una función que reciba un número y te diga si es primo o no. */

const primeNumber = (number) =>{
    for (let i = 2; i < number; i++){
        if(number % i === 0){
            return (`${number} no es primo`)
        }
    }
    return (`${number} es primo`)
    
}

console.log(primeNumber(112));

/* - Crea una función que reciba un número entero e imprima un lista de números impares como ésta:
  Si recibe un 6 imprimirá esta lista.
  1
  3 1
  5 3 1
  7 5 3 1
  9 7 5 3 1
  11 9 7 5 3 1 */

  const lists =(number)=>{
    let list='';
    for (let i = 1; i < number*2; i+=2){
        list = i + ' ' +list ;
        console.log(list)
        }
    }
  lists(6)

  /* - Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
  "Número: 2 - Cuadrado: 4 - Cubo: 8".
  Nota: Dentro del objeto Math existe el método pow. Math.pow(número, exponente) */

  const arrayCubic = (array)=>{
    for (const number of array){
        console.log(`Número ${number} cuadrado: ${Math.pow(number, 2)} cubo: ${Math.pow(number, 3)}`)
    }
  }

  arrayCubic([1,2,3,4,5,6,7,8,9,10])

  /* - Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula. */
  const vowelsUpperCase = (word) =>{
    const arrayVocals = ['a','e','i','o','u'];
    let newWord = '';
    for (const letter of word){
        if(arrayVocals.includes(letter)){
           newWord = newWord + letter.toUpperCase()
        }  else{
           newWord = newWord + letter
        }
    }
    console.log(newWord)
  }

  vowelsUpperCase('Hola que tal')

  /* - Crea una función que reciba una frase e imprim el número de veces que se repite cada vocal */

  const phraseVocals = (phrase)=>{
    let a = 0
    let e = 0
    let i = 0
    let o = 0
    let u = 0
    for (const letter of phrase){
        if(letter==='a'){
            a++
        } else if(letter=== 'e'){
            e++
        } else if(letter === 'i'){
            i++
        } else if (letter === 'o'){
            o++
        } else if (letter=== 'u'){
            u++
        }
    }
    console.log(`Hay ${a} A`)
    console.log(`Hay ${e} E`)
    console.log(`Hay ${i} I`)
    console.log(`Hay ${o} O`)
    console.log(`Hay ${u} U`)
  }

  phraseVocals('Hola que tal')

  /* - Crea una función que reciba dos palabras e intercale las letras de cada una para formar una nueva palabra. Si la función recibe (hola, adios) el resultado será "haodliao", pero si recibe (adios, hola) el resultado será "ahdoiloa" */
  const words = (word1,word2)=>{
    let newWord = '';
    let shortestWord = 0;
    if(word1.length > word2.length){
        shortestWord = word2.length
    } else {
        shortestWord = word1.length
    }
    for (let i = 0; i < shortestWord ; i++){
        newWord = newWord + word1[i] + word2[i]
    }
    console.log(newWord)
  }

  
  words('hola','adios')

  /* - Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM" */

  const reverseWord = (word) =>{
    let newWord = '';
    for (let i = word.length -1; i >= 0 ; i--){
        newWord = newWord + word[i] 
        
    }
    console.log(newWord)
  }
    
  reverseWord('Mariposas');

  