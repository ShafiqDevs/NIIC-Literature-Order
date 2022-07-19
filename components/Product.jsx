import Button from "@mui/material/Button";
import { useState } from "react";
import Input from "./Input";

export default function Product(props) {
  const [quantity, setQuantity] = useState(0);
  let quantityAlert = false;

  function handleChange(event) {
    const val = event.target.value;
    setQuantity(val);
  }

  return (
    <div className="col-lg-3 m-lg-2">
      <div
        className="card mb-3 text-bg-dark"
        style={{
          width: "400px",
        }}
      >
        <img className="card-img-top rounded-start" style={{width: "400px"}} src={props.mySrc} />
        <div className="card-body">
          <h5 className="card-title">{props.itemName}</h5>
          <p className="card-text">{props.text}</p>
        </div>

        <div className="card-footer englishQuran">
          <Input
            onChange={handleChange}
            myVal={quantity}
            myType="number"
            Max="10"
            Min="0"
          />
          {quantityAlert ? (
            <div className="alert alert-danger" role="alert">
              A simple danger alert—check it out!
            </div>
          ) : null}

          <Button
            onClick={(e) => {
              if (quantity > 10) {
                if (
                  !window.confirm(
                    `You are ordering ${quantity} boxes.\nDo you want to proceed?`
                  )
                )
                  return;
              }

              const productItem = {
                product_id: props._id,
                productName: props.itemName,
                totalPrice: props.totalPrice,
                quantity: parseInt(quantity),
              };
              props.onAdd(e, productItem);
            }}
            variant="contained"
            disabled={true && quantity < 1}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}
