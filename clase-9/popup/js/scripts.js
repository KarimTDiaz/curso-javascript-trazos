const buttonPopUp = document.getElementById('button')
const popUpWindow = document.getElementById('popup')


const rootStyle = document.documentElement.style;

const popUpAppears = (message, time) =>{
    popUpWindow.innerHTML = '';
    const newElement = document.createElement('p')
    newElement.textContent = message
    popUpWindow.classList.add('popup--show')
    popUpWindow.append(newElement)
    const timeOutId = setTimeout(() =>{
        popUpWindow.classList.remove('popup--show')
        clearTimeout(timeOutId)
    }, time)

    let counterTime = 100
    const timeIntervalId = setInterval(()=>{
        counterTime--;
        rootStyle.setProperty('--width', counterTime + '%')
        if(counterTime <= 0){
            clearInterval(timeIntervalId)
        }
    }, time / 100)
}

buttonPopUp.addEventListener('click' , () =>{
    if(popUpWindow.classList.contains('popup-show'))return;
    
        popUpAppears('Mensaje de prueba', 4000)
})