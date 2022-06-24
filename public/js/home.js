//jshint esversion:11


const myRoutes = {
    home: "/",
    checkout: "/checkout",
    getProducts: "/getProducts"
};

let productCollection;

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



const Obj_parcelBox = {
    title: "",
    imgSrc: "",
    quantity: 0
};


function addToBasket(name) {
    let quantity;
    try {
        quantity = parseInt($("form input." + name).val());
        if (quantity > 0) {} else throw (quantityError);
    } catch (quantityError) {
        alert("You need at least 1 " + name, "to add it to your basket");
        return;
    }

    // add item to basket using $.append() - NOTE: mthod of adding could change at a later commit
    $("div.dropdown ul.dropdown-menu").append('<li><a class="dropdown-item"><pre><small>x' + quantity + '</small>     ' + name + '</pre></a></li>');
}