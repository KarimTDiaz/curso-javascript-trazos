const fetchData = url => fetch(url);

const request = fetchData('https://jsonplaceholder.typicode.com/users');

request
  .then(response => response.json())
  .then(data => {
    const fragment = document.createDocumentFragment();
    data.forEach(user => {
      const userElement = document.createElement('div');
      const userEmailElement = document.createElement('p');
      const userNameElement = document.createElement('p');

      userEmailElement.textContent = user.email;
      userNameElement.textContent = user.name;
      userElement.style.padding = '1rem';

      userElement.append(userNameElement, userEmailElement);
      fragment.append(userElement);
    });

    document.body.append(fragment);
  });
