import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
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
    <div className="col-lg-4">
      <div
        className="card mb-3 text-bg-dark"
        style={{
          maxWidth: "540px",
        }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img className="img-fluid rounded-start" src={props.mySrc} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title  bg-gradient">{props.itemName}</h5>
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
                    productName: props.itemName,
                    quantity: parseInt(quantity),
                    totalPrice: props.totalPrice,
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
      </div>
    </div>
  );
}
