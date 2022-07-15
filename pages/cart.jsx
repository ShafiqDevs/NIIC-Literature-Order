import React from "react";
import { Router, useRouter } from "next/dist/client/router";
import ShoppingCart from "../components/ShoppingCart";

export default function cart() {
  const router = useRouter();
  const cartItems = JSON.parse(router.query.cartItems);
  //const cartItems =

  console.log(cartItems);
  return (
    <div>
      <ShoppingCart cartItems={cartItems} />
    </div>
  );
}
