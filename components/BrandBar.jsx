import { useState } from "react";
import ShoppingCart from "./ShoppingCartIcon";
import Link from "next/link";

export default function BrandBar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand bg-dark" style={{margin: "0"}}>
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">
              <img src="../images/niic.png" width={150} height={150} />
            </a>
          </Link>
          <ShoppingCart
            onClick={props.cartIconClick}
            cartItemCount={props.cartItemCount}
          />
        </div>
      </nav>
    </div>
  );
}
