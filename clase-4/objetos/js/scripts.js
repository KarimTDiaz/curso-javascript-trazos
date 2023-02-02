/* # Ejercicios

## Objetos

Copia el objeto teacher de los apuntes e imprime en distintos console.log cada uno de los datos. */

const teacher ={
    info: {
        name: 'Dorian',
        age:25,
        courses:[
            {
                title: 'HTML',
                duration: 20.8
            },
            {
                title: 'CSS',
                duration:20.8
            }
        ]
    },
    portfolio:{
        experience: 7,
        technologies: ['HTML', 'CSS', 'JS']
    }
}
console.log(teacher.info.name);
console.log(teacher.info.age);
console.log(teacher.info.courses[0].title);/* duda sobre porque hay que especificar .title si ya doy la posicion del array */
console.log(teacher.info.courses[0].duration);
console.log(teacher.info.courses[1].title);
console.log(teacher.info.courses[1].duration);
console.log(teacher.portfolio.experience);
console.log(teacher.portfolio.technologies[0]);
console.log(teacher.portfolio.technologies[1]);
console.log(teacher.portfolio.technologies[2]);

/* Dado este objeto, rellena los 5 arrays con el array de numbers. número + 2, número x 2, número / 2, números pares y números impares. */
const data = {
    numbers: [10, 32, 31, 67, 9, 2, 51, 4],
    data2: {
      data3: {
        numbersPlus2: []
      },
      data4: {
        numbersDouble: []
      }
    },
    data5: {
      numbersDividedBy2: []
    },
    data6: {
      onlyEven: [],
      onlyOdd: []
    }
  };

  const arrayFill =() =>{
    for (const number of data.numbers){
        data.data2.data3.numbersPlus2.push(number + 2)
        data.data2.data4.numbersDouble.push(number * 2)
        data.data5.numbersDividedBy2.push(number / 2)
        if(number % 2 === 0){
            data.data6.onlyEven.push(number)
        } else {
            data.data6.onlyOdd.push(number)
        }
        
    }
    
  }
  arrayFill()

  console.log(data)
  
