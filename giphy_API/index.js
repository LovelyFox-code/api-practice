let request = new XMLHttpRequest();

request.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=i4tk5nrM0ly55vVtQKPT5VdPeYl0rIJb&tag=racoons&raiting=g');

request.onload = function() {
    let response = request.response;
    let parseData = JSON.parse(response);
    console.log(parseData);
    let originalUrl = parseData.data.images.original.url;
    console.log(originalUrl);

    let gif = document.createElement('img');
    gif.setAttribute('src', originalUrl);
    document.body.appendChild(gif);
}

request.oneerror = function() {
    console.log("There seems to be a problem");
}
request.send();