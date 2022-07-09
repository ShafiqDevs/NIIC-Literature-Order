import React, { useEffect, useState } from "react";
import Product from "./components/Product";
import BrandBar from "./components/BrandBar";
import style from "./App.css";


function App() {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch("/getProducts")
      .then((respose) => respose.json())
      .then((data) => {
        setBackendData(data);
        console.log(data);
      });
  }, []);

  // function toggleProductContainer(event) {
  //   const productContainer = $(".product_Container");
  //   $(productContainer).toggleClass("col-md-8");
  // }

  return (
    <div>
      <BrandBar cartItemCount={0} />
      <div className="container-fluid">
        <div className="row d-flex flex-row product_cart_Container ">
          <div className="col-md-4 order-md-2 cart_Container  "></div>
          <div className="col-md-8 order-md-1  product_Container">
            <div className="row">
              {backendData.map((value, index) => {
                return (
                  <Product
                    key={index}
                    id={index}
                    itemName={value.itemName}
                    text="This item contains a box of 16"
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
