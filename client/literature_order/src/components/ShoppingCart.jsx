import CartItem from "./CartItem";

export default function ShoppingCart(props) {
  let cartItems = props.cartItems;

  return (
    <div>
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Your cart</span>
        <span className="badge badge-secondary badge-pill">3</span>
      </h4>
      <ul className="list-group mb-3">
        {cartItems.map((value, index) => {
          return (
            <CartItem
              key={index}
              productName={value.productName}
              quantity={value.quantity}
              totalPrice={value.totalPrice}
            />
          );
        })}
      </ul>
      <div className=""></div>
    </div>
  );
}
