import CartItem from "./CartItem";
import Button from "./Button";
import { useState } from "react";

export default function ShoppingCart(props) {
  var bill = 0;

  function removeItem(e, id) {
    props.onRemoveItem(e, id);
  }

  function clearCart(e) {
    props.clearCart();
  }

  function updateBill(price) {
    bill += price;
  }
  function showCartButtons() {
    if (props.cartItems.length > 0) {
      return (
        <div className="input-group d-flex justify-content-end">
          <span className="input-group-text">£</span>
          <span className="input-group-text">{bill}</span>
          <Button
            classes="me-1 btn btn-outline-danger"
            text="Clear Cart"
            whenClicked={props.clearCart}
          />
          <Button classes="btn btn-outline-primary" text="Checkout" />
        </div>
      );
    }
  }

  return (
    <div>
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted m-auto p-3">
          {props.cartItems.length > 0
            ? "Shopping Cart"
            : "Shopping Cart is Empty"}
        </span>
      </h4>
      <ul className="list-group mb-3">
        {props.cartItems.map((value, index) => {
          updateBill(value.totalPrice);
          return (
            <CartItem
              key={index}
              id={index}
              onRemove={removeItem}
              productName={value.productName}
              quantity={value.quantity}
              totalPrice={value.totalPrice}
            />
          );
        })}
      </ul>
      {showCartButtons()}
    </div>
  );
}
