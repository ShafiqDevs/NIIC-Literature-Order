//jshint esversion:11


const myRoutes = {
    home: "/",
    checkout: "/checkout",
    getProducts: "/getProducts"
};

let productCollection;
const basket = [];

const request = new XMLHttpRequest();

request.open("GET", myRoutes.getProducts);
request.send();


//triggered when the response is completed
request.onload = function () {
    if (request.status === 200) {

        // Product comes with:  Value Weight Length Width Height delivery-cost
        // request returning JSON {productName: {data above}}

        productCollection = JSON.parse(request.response);

    }
};

request.onerror = function () {
    console.log("Network error occured ");
};


