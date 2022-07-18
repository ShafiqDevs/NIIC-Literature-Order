import Head from "next/head";
import Image from "next/image";
import mongoose from "mongoose";
import db from "../utils/db";
import Order from "../models/Order";
import quranCollection from "../models/quranCollection";
import styles from "../styles/Home.module.css";
import BrandBar from "../components/BrandBar";
import Product from "../components/Product";
import ShoppingCart from "../components/ShoppingCart";
import $ from "jquery";
import React, { useEffect, useState } from "react";
import Router from "next/router";
import Link from "next/link";
import { Checkout } from "../checkout";
import BillingForm from "../components/BillingForm";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

export default function Home({ backendData }) {
  const [cartItems, setCartItems] = useState([]);

  function toggleProductContainer() {
    const productContainer = $(".product_Container");
    const cartContainer = $(".cart_Container");
    $(productContainer).toggleClass("col-md-8");
    $(cartContainer).toggleClass("hidden");
  }
  function addProductToCart(e, product) {
    setCartItems((prev) => {
      return [...prev, product];
    });
  }
  function removeItem(e, id) {
    setCartItems((prev) => {
      return cartItems.filter((item, index) => {
        return id !== index;
      });
    });
  }
  function clearCart() {
    setCartItems([]);
  }
  async function checkout(billingForm) {
    //console.log("line 44:", JSON.stringify(billingForm));

    const response = await axios.post(`/api/create_checkout_session`, {
      cartItems: cartItems,
      billingForm: billingForm,
    });

    Router.replace(response.data.checkout_session.url);
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BrandBar
        cartIconClick={toggleProductContainer}
        cartItemCount={cartItems.length}
      />
      <div className="container-fluid">
        <div className="row d-flex flex-row product_cart_Container mt-5">
          <div className="col-md-4 order-md-2 cart_Container border border-primary hidden">
            <ShoppingCart
              classes="name"
              cartItems={cartItems}
              onRemoveItem={removeItem}
              clearCart={clearCart}
              checkout={checkout}
            />
          </div>
          <div className=" order-md-1  product_Container">
            <div className="row">
              {backendData.map((product, index) => {
                return (
                  <Product
                    key={index}
                    id={index}
                    onAdd={addProductToCart}
                    _id={product._id}
                    itemName={product.item_Name}
                    totalPrice={product.deliveryCost + product.value}
                    text={
                      "This item contains a box of 16 Price: £" +
                      (product.deliveryCost + product.value) +
                      " includes £" +
                      product.deliveryCost +
                      " delivery fee"
                    }
                    mySrc="https://i.ebayimg.com/images/g/MrAAAOSwjNFfR4al/s-l500.png"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <section id="customer_billing"></section>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  console.log("getServerSideProps() is running");

  // if we have a session_id then process it
  if (context.query.session_id) {
    const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
    const session = await stripe.checkout.sessions.retrieve(
      context.query.session_id
    );
    if (session.payment_status === "unpaid") {
      console.log("UNPAID!!!!!!!");
    } else {
      addOrderToDB(session); //--------------------
      //axios.post(`https://niic-online-shope.vercel.app/api/add_order.js`, session);
      return {
        redirect: {
          permanent: false,
          destination: "/",
        },
        props: {},
      };
    }
  }

  try {
    //console.log("CONNECTING TO MONGO");
    await db.connect();
    //console.log("CONNECTED TO MONGO"); console.log("FETCHING DOCUMENTS");
    const docs = await quranCollection.find({}, "item_Name value deliveryCost");
    console.log("FETCHED DOCUMENTS"); // fetching _id itemName value deliveryCost field from db

    return {
      props: {
        backendData: JSON.parse(JSON.stringify(docs)),
      },
    };
  } catch (error) {
    console.log(error);
    return { notFound: true };
  }
};

async function addOrderToDB(_session) {
  await db.connect();

  const billingForm = JSON.parse(_session.metadata.billingForm);
  const cartItems = JSON.parse(_session.metadata.cartItems);
  console.log("line 153:", _session.metadata.cartItems);

  const cartItemsFormatted = await Promise.all(
    cartItems.map(async (item) => {
      return {
        ...(await getProductData(item.product_id)),
        Quantity: item.quantity,
      };
    })
  );

  let orders = cartItemsFormatted.map((item) => {
    return {
      ...item,
      ...billingForm,
    };
  });
  console.log("line 29:", orders);
  await Order.insertMany(orders);
  await db.disconnect();
}

async function getProductData(_product_id) {
  const { _doc } = await quranCollection.findById(
    _product_id,
    "item_Name value weight length width height -_id"
  );
  //console.log("line 34:", _doc);
  return _doc;
}
