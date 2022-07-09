import { useState } from "react";
import ShoppingCart from "./ShoppingCartIcon";

export default function BrandBar(props) {
  return (
    <div>
      <nav className="navbar bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="../images/niic.png" width={150} height={150} />
          </a>
          <ShoppingCart onClick={props.cartIconClick} cartItemCount={props.cartItemCount} />
        </div>
      </nav>
    </div>
  );
}
