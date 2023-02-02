const fetchData = url => {
  const request = fetch(url);
  request.then(response => response.json()).then(data => console.log(data));
};

const fetchData2 = async url => {
  const response = await fetch(url);
  const data = await response.json();
};
