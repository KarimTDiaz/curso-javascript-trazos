const adviceElement = document.getElementById('advice');
const phraseElement = document.getElementById('phrase');
const buttonElement = document.getElementById('button');

const fetchData = url => fetch(url);

const requestExecute = () => {
  const randomNumber = Math.floor(Math.random() * 224);

  const request = fetchData(
    `https://api.adviceslip.com/advice/${randomNumber}`
  );
  request
    .then(response => response.json())
    .then(data => {
      let slip = data.slip.id;
      let advice = data.slip.advice;
      adviceElement.textContent = `ADVICE # ${slip}`;
      phraseElement.textContent = `"${advice}"`;
    });
};

buttonElement.addEventListener('click', () => {
  requestExecute();
});
