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
            
            $(this).on("click", function () {

                console.log($(this).attr("name")+" was clicked");
                const product_name = $(this).attr("name");
                console.log(productCollection[product_name]);
                addToBasket(this,product_name);
            });
        });

    }

};


request.onerror = function () {
    console.log("Network error occured ");
};


//-------------------------------- Functions -------------------------------------------//

function addToBasket(senderBtn, _productname){
    $($('div.card div.'+_productname)).append('<button type="button" class="removeProduct" data-name="'+_productname+'">remove '+_productname+'</button>');
    setupRemoveProductBtn(_productname);
}

function setupRemoveProductBtn(_productname){
    $('button.removeProduct[data-name="'+_productname+'"]').on("click", function () {
        $(this).remove();
    });
}