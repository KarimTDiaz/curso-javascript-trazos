 /* # Ejercicios

## Strings

- Crea dos funciones que reciban una palabra, si la palabra tiene más de 5 caracteres la imprimirá en mayúsculas, si no en minúsculas. Una función lo resolverá con if y la otra con un operador ternario. */

const counter = (word)=>{
    if(word.length <=5 ){
        console.log(word.toLowerCase())
    } else {
        console.log(word.toUpperCase())
    }
}

counter('karim');

const counter2 =(word2)=>{
    word2.length<= 5? console.log(word2.toLowerCase()) : console.log(word2.toUpperCase())
};

counter2('dorian');

/* - Crea una función que reciba 2 verbos. La función debe imprimir a qué conjugación pertenecen. Por ejemplo, si la función recibe "andar" y "correr" debe imprimir "El verbo andar es de la primera conjugación y el verbo correr de la segunda conjugación". */

const verbFunction = (verb1 , verb2)=>{
    const verb1ar= verb1.endsWith('ar');
    const verb1er= verb1.endsWith('er');
    const verb1ir= verb1.endsWith('ir');
    const verb2ar= verb2.endsWith('ar');
    const verb2er= verb2.endsWith('er');
    const verb2ir= verb2.endsWith('ir');

    if (verb1ar && verb2ar){
        console.log(`El verbo ${verb1} es de la primera conjugación y el verbo ${verb2} es de la primera`)
    } else if (verb1ar && verb2er){
        console.log(`El verbo ${verb1} es de la primera conjugación y el verbo ${verb2} es de la segunda`)
    } else if (verb1ar && verb2ir){
        console.log(`El verbo ${verb1} es de la primera conjugación y el verbo ${verb2} es de la tercera`)
    } else if (verb1er && verb2er){
        console.log(`El verbo ${verb1} es de la segunda conjugación y el verbo ${verb2} es de la segunda`)
    }else if (verb1er && verb2ar){
        console.log(`El verbo ${verb1} es de la segunda conjugación y el verbo ${verb2} es de la primera`)
    } else if (verb1er && verb2ir){
        console.log(`El verbo ${verb1} es de la segunda conjugación y el verbo ${verb2} es de la tercera`)
    } else if(verb1ir && verb2ir){
        console.log(`El verbo ${verb1} es de la tercera conjugación y el verbo ${verb2} es de la tercera`)
    } else if (verb1ir && verb2ar){
        console.log(`El verbo ${verb1} es de la tercera conjugación y el verbo ${verb2} es de la primera`)
    }else if (verb1ir && verb2er){
        console.log(`El verbo ${verb1} es de la tercera conjugación y el verbo ${verb2} es de la segunda`)
    }

}

verbFunction('ir','jugar');


/* - Crea una función que reciba un sólo parámetro con nombre y apellido separados por un espacio. La función debe separar el nombre y el apellido e imprimirlos por separado en dos console.log. */

const nameAndSurname = nameComplete =>{
    console.log(nameComplete.substring(0, nameComplete.indexOf(' ')))
    console.log(nameComplete.substring(nameComplete.indexOf(' ')))
}
  nameAndSurname('Karim Tilouni')

/* - Crear una función generateWord que reciba 3 palabras y genere una palabra usando 2 letras de cada palabra. Por ejemplo, "Hola", "Adios" y "Mano" podrían generar "aldona". Resuelve el ejercicio con una sóla línea dentro de la función. */

const generateWord = (word1, word2, word3)=>{
    console.log(word1.charAt(Math.floor(Math.random() * word1.length)) + word1.charAt(Math.floor(Math.random() * word1.length)) + word2.charAt(Math.floor(Math.random() * word2.length)) + word2.charAt(Math.floor(Math.random() * word2.length)) + word3.charAt(Math.floor(Math.random() * word3.length)) + word3.charAt(Math.floor(Math.random() * word3.length)))
}
generateWord('karim', 'adios' , 'mesa');

/* - Crea una función que reciba un email e imprima por separado el nombre y el dominio. "dorian@gmail.com" deberá imprimir "El usuario es dorian" y por otro lado "El dominio es gmail.com". */

const emailCounter = emailComplete =>{
    const name = emailComplete.substring(0, emailComplete.indexOf('@'))
    const domine = emailComplete.substring(emailComplete.indexOf('@') +1)
    console.log(`El usuario es ${name}`)
    console.log(`el dominio es ${domine}`)
}

emailCounter('javier@hotmail.com');