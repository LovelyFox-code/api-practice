let request = new XMLHttpRequest();

const giphy = {
    baseURL: "https://api.giphy.com/v1/gifs/",
    apiKey: "0UTRbFtkMxAplrohufYco5IY74U8hOes",
    tag: "animals",
    type: "random",
    rating: "pg-13"
};


let giphyURL = encodeURI(
    giphy.baseURL +
        giphy.type +
        "?api_key=" +
        giphy.apiKey +
        "&tag=" +
        giphy.tag +
        "&rating=" +
        giphy.rating
);

request.open('GET', giphyURL);

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


