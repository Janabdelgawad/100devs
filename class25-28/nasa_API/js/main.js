fetch("https://api.nasa.gov/planetary/apod?api_key=ARNnE5ggwdEGwGqL7eCJce0FrKH4YH7ODVp4X7TY&date=2021-09-14")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('img').src = data.url
        document.querySelector('span').innerText = data.title
        document.querySelector('p').innerText = data.explanation
    })