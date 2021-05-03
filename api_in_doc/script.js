let request = new XMLHttpRequest();

request.open('GET', "https://hplussport.com/api/products?order=name");

request.onload = function() {
    let response = request.response;
    let parseData = JSON.parse(response);
    console.log(parseData);
 

    for(item in parseData){
        let name =  parseData[item].name;
        let products = document.createElement('li');
        products.innerHTML = name;
        document.body.appendChild(products);

        let imageUrl =  parseData[item].image;
        let images = document.createElement('img');
        images.setAttribute = ('src', imageUrl);
        document.body.appendChild(images);
    }


};

request.send();