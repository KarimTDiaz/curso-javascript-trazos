/* # Ejercicios

## DOM */
/* - Partiendo de este HTML, crea una función que reciba UN SOLO ELEMENTO (Elige uno de los 3) y muestre toda la información propia y de los otros dos elementos, padres, hermanos o hijos en función del elemento que hayas elegido. La función debe mostrar por consola el id, las clases, el textContent, el ancho y el alto de los tres elementos con un mensaje que no parezca de un robot  */

const titleH1 = document.getElementById('main-title');

const printInfo = (element) =>{

    console.log(`El id del h1 es: ${element.id}, tiene la clase: ${element.className}, su contenido de texto es: ${element.textContent},tiene un ancho de ${element.clientWidth}px, y un alto de ${element.clientHeight}px`);

    console.log(`El id de su padre es: ${element.parentElement.id}, la clase de su padre es: ${element.parentElement.className}, su ancho es: ${element.parentElement.clientWidth}px , y su alto es ${element.parentElement.clientHeight}px`);

    console.log(`El id de su hermano es: ${element.nextElementSibling.id}, la clase de su padre es: ${element.nextElementSibling.className},su texto es ${element.nextElementSibling.textContent}, 
    su ancho es: ${element.nextElementSibling.clientWidth}px , y su alto es ${element.nextElementSibling.clientHeight}px`);
}

printInfo(titleH1);