import React, { useEffect, useState, findDOMNode } from "react";
import Product from "./components/Product";
import BrandBar from "./components/BrandBar";
import ShoppingCart from "./components/ShoppingCart";
import style from "./App.css";
import $ from "jquery";
import { useScrollTrigger } from "@mui/material";

function App() {
  const [backendData, setBackendData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("/getProducts")
      .then((respose) => respose.json())
      .then((data) => {
        setBackendData(data);
        console.log(data);
      });
  }, []);

  function toggleProductContainer() {
    console.log("clicked cart");
    const productContainer = $(".product_Container");
    const cartContainer = $(".cart_Container");
    $(productContainer).toggleClass("col-md-8");
    $(cartContainer).toggleClass("hidden");
  }
  function addProductToCart(e, product) {
    setCartItems((prev) => {return [...prev, product]});
    console.log("product: ",product,cartItems);
  }

  return (
    <div>
      <BrandBar cartIconClick={toggleProductContainer} cartItemCount={cartItems.length} />
      <div className="container-fluid">
        <div className="row d-flex flex-row product_cart_Container mt-5">
          <div className="col-md-4 order-md-2 cart_Container hidden">
            <ShoppingCart cartItems ={cartItems} />
          </div>
          <div className=" order-md-1  product_Container">
            <div className="row">
              {backendData.map((product, index) => {
                return (
                  <Product
                    key={index}
                    id={index}
                    onAdd={addProductToCart}
                    itemName={product.itemName}
                    totalPrice={product.deliveryCost + product.value}
                    text={
                      "This item contains a box of 16 Price: £" +
                      (product.deliveryCost + product.value)
                    }
                    mySrc="https://i.ebayimg.com/images/g/MrAAAOSwjNFfR4al/s-l500.png"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
