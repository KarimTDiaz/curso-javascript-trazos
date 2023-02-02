/* # Ejercicios

## Objeto Window

- Crea una web que tenga un alto mínimo de 1000vh y muestra en un h1 "Te has desplazado X píxeles" cada vez que hagas scroll. Hazlo con un función llamada handleScroll.

- En esa misma web, crea un elemento que se coloque SIEMPRE en la parte superior y que va a representar la cantidad de scroll que hemos hecho, cuando estemos arriba del todo tendrá un "ancho" de 0 y cuando estemos abajo del todo tendrá un "ancho" que ocupe toda la pantalla. */

const title = document.getElementById('title')
const bar = document.getElementById('bar')
const rootStyles = document.documentElement.style



const handleScroll = (ev)=>{
    let scrollLevel = Math.floor(ev.target.scrollingElement.scrollTop);
    let barLevel = (scrollLevel * 100) / (ev.target.scrollingElement.scrollHeight - window.innerHeight);

    title.textContent = ''
    title.textContent = 'Te has desplazado ' + title.textContent +  scrollLevel + 'px';
    
    rootStyles.setProperty('--bar-width', barLevel + '%')
}



window.addEventListener('scroll', handleScroll)

