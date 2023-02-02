
const fetchData = url => fetch(url);

const request = fetchData('https://jsonplaceholder.typicode.com/posts')

request.then(response => response.json()).then(data=>{
    const fragment = document.createDocumentFragment()
    data.forEach(post => {
        const userInfo = document.createElement('div')
        const userTitle = document.createElement('h2')
        const userBody = document.createElement('p')
        userTitle.textContent = post.title;
        userBody.textContent = post.body
        document.body.style.fontSize = '0.5rem'
        userInfo.style.padding = '1rem'

        userInfo.append(userTitle, userBody)
        fragment.append(userInfo) 
    });
    document.body.append(fragment)

})