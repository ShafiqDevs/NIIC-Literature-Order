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



const Obj_parcelBox = {
    title: "",
    imgSrc: "",
    quantity: 0
};


function addToBasket(_name) {

    // clear basket to allow for refreshing
    clearBasket();


    // retrieve quantity and check if it is a valid input
    let quantity;
    try {
        quantity = parseInt($("form input." + _name).val());
        print(_name);
        if (quantity > 0) {} else throw (quantityError);
    } catch (quantityError) {
        alert("You need at least 1 " + _name, "to add it to your basket");
        return;
    }

    // basketProduct will be sent to server for further processing at a later commit
    basketProduct = {
        productName: _name,
        productData: productCollection[_name],
        productQuantity: quantity
    };

    if (basket.length < 1) {
        basket.push(basketProduct);
    } else {
        for (let i = 0; i < basket.length; i++) {
            if (basketProduct.productName !== basket[i].productName) {
                if (i === basket.length - 1) {
                    basket.push(basketProduct);
                    break;
                }
            } else {
                basket[i].productQuantity += quantity;
                break;
            }
        }
    }

    basket.forEach(element => {
        $("div.dropdown ul.dropdown-menu").append('<li class="dropdown-item"><pre><small>x' + element.productQuantity + '</small>    ' + element.productName + ' <button type="button"><i class="fa-solid fa-square-minus"></i></button></pre></li>');
    });
}

function print(_log) {
    console.log(_log);
}

function clearBasket() {
    $("div.dropdown ul.dropdown-menu").html("");
}