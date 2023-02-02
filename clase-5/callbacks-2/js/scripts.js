/*- Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array  */

const array = [1,2,3,4,5];
let newArray= []

const methodForEach = (array) =>{
    array.forEach((item , index) => newArray.push(item * index));

}
methodForEach(array)
console.log(newArray);

/*- Crea una función que reciba un array de números y devuelva cada número dividido por su índice en el array más 2  */

const array2 = [1,2,3,4,5]

const methodMap =(array) =>{
    const newArray2 = array.map((item,index) => item / (index + 2))
    return newArray2
}
console.log(methodMap(array2));

/* - Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas. */

const arrayWords = ['Karim','Carlos','Elvira','Mercedes','Daniel','Dorian']

const methodMapWords = (words) => {
    const arrayCapital = words.map((item) => item.toUpperCase() )
    return arrayCapital
}

console.log(methodMapWords(arrayWords));

/* - Crea una función que reciba un array de palabras y una letra. La función devolerá un array con las palabras que comiencen por esa letra, si no hay mostrará un mensaje por consola diciendo que ninguna palabra coincide. */

const methodFilter = (words, letter) =>{
    const newArrayFiltered = words.filter((item) => item.startsWith(letter))
    return newArrayFiltered

}
console.log(methodFilter(['Karim','Carlos','Elvira','Mercedes','Daniel','Dorian'], 'd'));

/* - Añade a la función anterior que el filtro funcione independientemente de mayusculas o minúsculas. */

const methodFilter2 = (words, letter) =>{
    const newArrayFiltered = words.filter((item) => item.toLowerCase().startsWith(letter.toLowerCase()))
    return newArrayFiltered

}
console.log(methodFilter(['Karim','Carlos','Elvira','Mercedes','Daniel','Dorian'], 'D'));

/* - Crea una función que reciba un array de números desordenados y los muestre por consola ordenados de mayor a menor y de menor a mayor. */

const methodSort = (array) =>{
    array.sort((a , b) => a - b)
    console.log(array)
    array.sort((a , b) => b - a)
    console.log(array)

}

methodSort([2,5,1,3,15,9]);

/* - Crea una función que reciba un array de 5 palabras y las ordene alfabéticamente e inversamente. */

const alphabeticOrder = (array) =>{
    array.sort((a, b) =>{
        if ( a < b){
            return -1;
        }
        if ( a > b){
            return 1;
        }
        return 0
    })
    console.log(array)
    
}

alphabeticOrder(['Karim','Carlos','Elvira','Mercedes','Daniel','Dorian','Amapolda'])