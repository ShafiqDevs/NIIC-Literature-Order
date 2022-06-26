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


        var addToBasketButtonsMap = $('.btn_addtoBasket').map(function () {

            const product_name = $(this).attr("name");

            $(this).on("click", function () {

                console.log($(this).attr("name") + " was clicked");
                const product_name = $(this).attr("name");
                console.log(productCollection[product_name]);
                addToBasket(this, product_name);
            });

            setupQuantityInput(product_name);
        });



    }

};


request.onerror = function () {
    console.log("Network error occured ");
};




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

function addToBasket(senderBtn, _productname) {


    const cartItemTag = '<li class="cartItem"><div class="row p-2"><div class="col-2">qnt</div><div class="col-5"><h6>' + _productname + '</h6></div><div class="col-5"><button class="removeCartItem" type="button" data-name="' + _productname + '">remove</button></div></div></li>';

    $($('ul.shoppingCart')).append(cartItemTag);
    setupRemoveProductBtn(_productname);
}

function setupRemoveProductBtn(_productname) {
    $('button.removeProduct[data-name="' + _productname + '"]').on("click", function () {
        $(this).remove();
    });
}