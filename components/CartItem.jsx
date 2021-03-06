import RemoveCircleSharpIcon from "@mui/icons-material/RemoveCircleSharp";

export default function CartItem(props) {
  return (
    <li
      key={props.id}
      className="list-group-item d-flex justify-content-between lh-condensed"
    >
      <div>
        <h6 className="my-0">{props.productName}</h6>
        <small className="text-muted">Quantity: {props.quantity}</small>
      </div>
      <div>
        <span className="text-muted">
          £
          {Math.round(
            (props.totalPrice * props.quantity + Number.EPSILON) * 100
          ) / 100}
        </span>
        <RemoveCircleSharpIcon
          onClick={(e) => {props.onRemove(e,props.id)}}
          sx={{
            padding: "4px",
            fontSize: "2rem",
            color: "red",
          }}
        />
      </div>
    </li>
  );
}
