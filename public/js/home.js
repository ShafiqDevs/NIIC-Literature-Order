//jshint esversion:11


const myRoutes = {
    home: "/",
    checkout: "/checkout",
    getProducts: "/getProducts"
};

let productCollection;
let shoppingBasket = {};

const request = new XMLHttpRequest();

request.open("GET", myRoutes.getProducts);
request.send();


//triggered when the response is completed
request.onload = function () {
    if (request.status === 200) {

        // Product comes with:  itemName, value, deliveryCost
        // request returning JSON {itemName: {data above}}

        productCollection = JSON.parse(request.response);

        var addToBasketButtonsMap = $('.btn_addtoBasket').map(function () {

            const product_name = $(this).attr("name");

            $(this).on("click", function () {

                console.log("reading from DB: " + productCollection[product_name].itemName + " was clicked");
                addToBasket(product_name);
            });

            setupQuantityInput(product_name);
        });



    }

};


request.onerror = function () {
    console.log("Network error occured ");
};



$('button[name="checkout-clear"]').on("click", function () {
    clearBasket();
});


//-------------------------------- Functions -------------------------------------------//


function setupQuantityInput(_productname) {
    $('input.' + _productname + '').change(function (e) {
        e.preventDefault();
        const value = $(this).val();
        if (value > 0) {
            $('button.btn_addtoBasket[name="' + _productname + '"]').prop("disabled", false);
        } else {
            $('button.btn_addtoBasket[name="' + _productname + '"]').prop("disabled", true);
        }
    });
}

function getQuantity(_productname) {
    return $('input.' + _productname + '').val();
}

function addToBasket(_productname) {

    // toggle the empty cart design according to number of items in basket: if more than 0 items: do nothing else toggle .shoppingCart_empty
    if (Object.keys(shoppingBasket).length > 0) {

    } else {
        $('button[name="checkout"]').toggleClass("hidden");
        $('button[name="checkout-clear"]').toggleClass("hidden");
        $('ul.shoppingCart').toggleClass("shoppingCart_empty");
    }

    // if item already in shoppingBasket: update qntity else add item
    if (_productname in shoppingBasket) {
        shoppingBasket[_productname].quantity = (parseInt(shoppingBasket[_productname].quantity) + parseInt(getQuantity(_productname)));
        $('div [data-qnt="' + _productname + '"]').text("x" + shoppingBasket[_productname].quantity);
        $('div [data-cost="' + _productname + '"]').text("£" +
            (parseFloat(shoppingBasket[_productname].value) + parseFloat(shoppingBasket[_productname].deliveryCost)) *
            shoppingBasket[_productname].quantity);
    } else {
        // add item to shoppingBasket obj
        shoppingBasket[_productname] = {
            itemName: productCollection[_productname].itemName,
            value: productCollection[_productname].value,
            deliveryCost: productCollection[_productname].deliveryCost,
            quantity: parseInt(getQuantity(_productname))
        };

        /// add <li> to shopping cart
        const cartItemTag = '<li class="cartItem"><div class="row p-2"><div class="col-2"data-qnt=' + _productname + '>' + shoppingBasket[_productname].quantity + '</div><div class="col-3" data-cost=' + _productname + '>£' + (shoppingBasket[_productname].value + shoppingBasket[_productname].deliveryCost) * shoppingBasket[_productname].quantity + '</div><div class="col-5"><h6>' + _productname + '</h6></div><div class="col-2"><button class="removeCartItem" type="button" data-name="' + _productname + '">-</button></div></div></li>';




        $('ul.shoppingCart div.itemList').append(cartItemTag);


    }







    setupRemoveProductBtn(_productname);
}

function setupRemoveProductBtn(_productname) {
    console.log("entered line 85: " + _productname);



    $('button.removeCartItem[data-name="' + _productname + '"]').on("click", function () {

        // to remove the <li> which is the grand parent of the button.removeCartItem
        $(this).parent().parent().remove();

        console.log("line 89: " + this);
        removeFromBasket(_productname);
    });
}

function removeFromBasket(_productname) {
    delete shoppingBasket[_productname];
    if (Object.keys(shoppingBasket).length < 1) {
        $('button[name="checkout"]').toggleClass("hidden");
        $('button[name="checkout-clear"]').toggleClass("hidden");
        $('ul.shoppingCart').toggleClass("shoppingCart_empty");
    }
}

function clearBasket() {
    shoppingBasket = {};
    $('li.cartItem').remove();

    $('button[name="checkout"]').toggleClass("hidden");
    $('button[name="checkout-clear"]').toggleClass("hidden");
    $('ul.shoppingCart').toggleClass("shoppingCart_empty");
}