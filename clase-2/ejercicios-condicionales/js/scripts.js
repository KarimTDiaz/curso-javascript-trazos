/* # Ejercicios

## Condicionales

- Crea una función que reciba un nombre y una edad e imprima por consola "Hola [nombre], eres mayor/menor de edad" en función de la edad que le pasemos. */

const ageResult = (naming , age)=>{
    if(age >= 18){
        console.log('hola ' + naming + ',' + ' eres mayor de edad')
    } else{
        console.log('hola ' + naming + ',' + ' eres menor de edad')
     } 
     if(age <0){
        console.log('hola ' + naming + ',' + ' no has nacido')
     }
};

ageResult('Karim', 21);

/* - Crea una función que reciba 2 números distintos e imprima por consola cual es el mayor. */

const numbers = (number1, number2)=>{
    if(number1 >number2){
        console.log(number1 + ' es el mayor')
    } else{
        console.log(number2 + ' es el mayor')
    }
};

numbers(12,8);

/* - Crea una función que reciba un número e imprima por consola si es un número negativo, si es positivo o si es cero. */

const numbers2 = (number)=>{
    if(number > 0){
        console.log(number + ' es positivo')
    }else if(number ===0){
        console.log(number + ' es cero')
    }else if (number <0){
        console.log(number + ' es negativo')
    }
}

numbers2(-2)

/* - Crea una función que reciba el color de un semáforo, si es verde mostrará por consola "Puedes pasar", si es naranja mostrará "Acelera" y si es rojo mostrará "Frena" */

const colors = (color)=>{
if(color === 'red'){
    console.log('detente')
} else if(color === 'yellow'){
    console.log('acelera')
} else if (color === 'green'){
    console.log('puedes pasar')
}


};
colors('red')

/* - Crea una función que reciba 3 notas, si la media está entre 0 y 5 mostrará el mensaje "Suspenso", si la media está entre 5 y 8 mostrará "Aprobado" y si la media es 8 o más dirá "Matrícula de honor" */


const notes = (a,b,c)=>{
    const media = (a+b+c)/3;
    if (media < 5){
        console.log('suspenso')
    } else if (media >= 5 && media < 8){
        console.log('aprobado')
    } else if (media >= 8 ){
        console.log('sobresaliente')
    }
};

notes(5 , 5 , 4);

/* - Crea una función que reciba 3 números y los devuelva ordenados de mayor a menor */

const order2 = (a,b,c)=>{
    if(a>b){
        if(b>c && a>c){
            console.log(a,b,c)
        }else{
            console.log(a,c,b)
        }
    }else if(b>a){
        if(a>c && b > c ){
            console.log(b,a,c)
        }else{
            console.log(b,c,a)
        }
    }else{
        if(c>a){
            console.log(c,a,b)
        }else{
            console.log(c,b,a)
        }
    }
}

order2(5,3,9)